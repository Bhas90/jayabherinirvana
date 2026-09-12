const express = require("express");
const axios = require("axios");
const cors = require("cors");
const nodemailer = require("nodemailer");
const requestIp = require("request-ip");
const { google } = require("googleapis");
require("dotenv").config();

const app = express();

/* =========================================================
   PROJECT CONFIG
========================================================= */

const PROJECT_NAME = "Jayabheri The Nirvana";
const PROJECT_LOCATION = "Financial District, Hyderabad";

const WEBSITE_DOMAIN = "jayabherinirvana.in";
const WEBSITE_URL = "https://jayabherinirvana.in";

const API_DOMAIN = "api.jayabherinirvana.in";

const CONTACT_NUMBER = "+91 96521 43222";
const CONTACT_PHONE = "+919652143222";

const RERA_NO = "P02400003566";

/* =========================================================
   CORS
========================================================= */

const allowedOrigins = [
  "https://jayabherinirvana.in",
  "https://www.jayabherinirvana.in",
  "http://localhost:5173",
  "http://localhost:5174",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      console.warn("❌ Blocked by CORS:", origin);

      return callback(
        new Error("Not allowed by CORS")
      );
    },

    methods: [
      "GET",
      "POST",
      "OPTIONS",
    ],

    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "X-Requested-With",
    ],
  })
);

app.options("*", cors());

/* =========================================================
   MIDDLEWARE
========================================================= */

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(requestIp.mw());

/* =========================================================
   HEALTH ROUTES
========================================================= */

app.get("/", (req, res) => {
  return res
    .status(200)
    .send(
      `${PROJECT_NAME} API is running successfully`
    );
});

app.get("/home", (req, res) => {
  return res.status(200).json({
    success: true,
    project: PROJECT_NAME,
    website: WEBSITE_DOMAIN,
    api: API_DOMAIN,
    message: `${PROJECT_NAME} backend working`,
  });
});

/* =========================================================
   ENVIRONMENT CHECK
========================================================= */

console.log("==========================================");
console.log("Jayabheri The Nirvana ENV Check");
console.log(
  "EMAIL_USER:",
  process.env.EMAIL_USER ? "✅ SET" : "❌ MISSING"
);
console.log(
  "EMAIL_PASS:",
  process.env.EMAIL_PASS ? "✅ SET" : "❌ MISSING"
);
console.log(
  "ADMIN_EMAIL:",
  process.env.ADMIN_EMAIL ? "✅ SET" : "❌ MISSING"
);
console.log(
  "TELECRM_URL:",
  process.env.TELECRM_URL ? "✅ SET" : "❌ MISSING"
);
console.log(
  "TELECRM_AUTH:",
  process.env.TELECRM_AUTH ? "✅ SET" : "❌ MISSING"
);
console.log(
  "GOOGLE_SHEET_ID:",
  process.env.GOOGLE_SHEET_ID ? "✅ SET" : "❌ MISSING"
);
console.log(
  "GOOGLE_SERVICE_ACCOUNT_EMAIL:",
  process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL
    ? "✅ SET"
    : "❌ MISSING"
);
console.log(
  "GOOGLE_PRIVATE_KEY:",
  process.env.GOOGLE_PRIVATE_KEY
    ? "✅ SET"
    : "❌ MISSING"
);
console.log("==========================================");

/* =========================================================
   EMAIL TRANSPORT
========================================================= */

const transporter = nodemailer.createTransport({
  service: "gmail",

  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

/* =========================================================
   VERIFY EMAIL CONFIG
========================================================= */

const verifyEmailTransport = async () => {
  try {
    if (
      !process.env.EMAIL_USER ||
      !process.env.EMAIL_PASS
    ) {
      console.warn(
        "⚠️ EMAIL_USER or EMAIL_PASS missing"
      );

      return;
    }

    await transporter.verify();

    console.log(
      "✅ Gmail SMTP connection verified"
    );
  } catch (error) {
    console.error(
      "❌ Gmail SMTP verification failed:",
      error.message
    );
  }
};

verifyEmailTransport();

/* =========================================================
   GOOGLE SHEETS AUTH
   VERCEL SAFE
========================================================= */

const getGoogleAuth = () => {
  const clientEmail =
    process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;

  const privateKey =
    process.env.GOOGLE_PRIVATE_KEY
      ?.replace(/\\n/g, "\n");

  if (!clientEmail || !privateKey) {
    return null;
  }

  return new google.auth.GoogleAuth({
    credentials: {
      client_email: clientEmail,
      private_key: privateKey,
    },

    scopes: [
      "https://www.googleapis.com/auth/spreadsheets",
    ],
  });
};

/* =========================================================
   SAVE LEAD TO GOOGLE SHEET
========================================================= */

const saveLeadToGoogleSheet = async (lead) => {
  try {
    if (!process.env.GOOGLE_SHEET_ID) {
      console.warn(
        "⚠️ GOOGLE_SHEET_ID missing. Lead not saved to Google Sheet."
      );

      return {
        success: false,
        reason: "GOOGLE_SHEET_ID missing",
      };
    }

    const googleAuth = getGoogleAuth();

    if (!googleAuth) {
      console.warn(
        "⚠️ Google Service Account credentials missing."
      );

      return {
        success: false,
        reason:
          "Google Service Account credentials missing",
      };
    }

    const sheets = google.sheets({
      version: "v4",
      auth: googleAuth,
    });

    await sheets.spreadsheets.values.append({
      spreadsheetId:
        process.env.GOOGLE_SHEET_ID,

      range: "Sheet1!A:M",

      valueInputOption: "USER_ENTERED",

      requestBody: {
        values: [
          [
            new Date().toLocaleString(
              "en-IN",
              {
                timeZone: "Asia/Kolkata",
              }
            ),

            lead.name,
            lead.email,
            lead.mobile,

            PROJECT_NAME,
            PROJECT_LOCATION,

            lead.source,
            lead.pageUrl,
            lead.ip,

            lead.utm_source || "",
            lead.utm_medium || "",
            lead.utm_campaign || "",
            lead.gclid || "",
          ],
        ],
      },
    });

    console.log(
      "✅ Lead saved to Google Sheet"
    );

    return {
      success: true,
    };
  } catch (error) {
    console.error(
      "❌ Google Sheet save error:",
      error.response?.data ||
        error.message
    );

    throw error;
  }
};

/* =========================================================
   ADMIN EMAIL
========================================================= */

const sendAdminLeadEmail = async (lead) => {
  try {
    const adminEmail =
      process.env.ADMIN_EMAIL ||
      process.env.EMAIL_USER;

    if (
      !process.env.EMAIL_USER ||
      !process.env.EMAIL_PASS
    ) {
      console.warn(
        "⚠️ EMAIL_USER / EMAIL_PASS missing."
      );

      return {
        success: false,
        reason:
          "EMAIL_USER / EMAIL_PASS missing",
      };
    }

    if (!adminEmail) {
      console.warn(
        "⚠️ ADMIN_EMAIL missing."
      );

      return {
        success: false,
        reason: "ADMIN_EMAIL missing",
      };
    }

    const info =
      await transporter.sendMail({
        from:
          `"${PROJECT_NAME}" <${process.env.EMAIL_USER}>`,

        to: adminEmail,

        replyTo: lead.email,

        subject:
          "New Jayabheri The Nirvana Website Lead",

        html: `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
</head>

<body
  style="
    margin:0;
    padding:0;
    background:#f5f7fa;
    font-family:Arial,Helvetica,sans-serif;
  "
>

<div
  style="
    width:100%;
    background:#f5f7fa;
    padding:30px 15px;
    box-sizing:border-box;
  "
>

  <div
    style="
      max-width:700px;
      margin:auto;
      background:#ffffff;
      border-radius:16px;
      overflow:hidden;
      box-shadow:0 5px 25px rgba(0,0,0,.08);
    "
  >

    <div
      style="
        background:#161012;
        padding:30px 20px;
        text-align:center;
      "
    >

      <h1
        style="
          margin:0;
          color:#ffffff;
          font-size:27px;
        "
      >
        New Website Lead
      </h1>

      <p
        style="
          color:#E43E4C;
          margin:10px 0 0;
        "
      >
        ${PROJECT_NAME}
      </p>

      <p
        style="
          color:#ffffff;
          opacity:.75;
          margin:5px 0 0;
          font-size:13px;
        "
      >
        ${PROJECT_LOCATION}
      </p>

    </div>


    <div
      style="
        padding:25px;
      "
    >

      <p
        style="
          margin-top:0;
          color:#374151;
          line-height:1.6;
        "
      >
        A new enquiry has been received from
        ${WEBSITE_DOMAIN}.
      </p>


      <table
        style="
          width:100%;
          border-collapse:collapse;
          font-size:14px;
        "
      >

        <tr>
          <td
            style="
              padding:12px;
              background:#f8fafc;
              border:1px solid #e5e7eb;
              font-weight:bold;
              width:160px;
            "
          >
            Name
          </td>

          <td
            style="
              padding:12px;
              border:1px solid #e5e7eb;
            "
          >
            ${lead.name}
          </td>
        </tr>


        <tr>
          <td
            style="
              padding:12px;
              background:#f8fafc;
              border:1px solid #e5e7eb;
              font-weight:bold;
            "
          >
            Email
          </td>

          <td
            style="
              padding:12px;
              border:1px solid #e5e7eb;
            "
          >
            <a
              href="mailto:${lead.email}"
            >
              ${lead.email}
            </a>
          </td>
        </tr>


        <tr>
          <td
            style="
              padding:12px;
              background:#f8fafc;
              border:1px solid #e5e7eb;
              font-weight:bold;
            "
          >
            Mobile
          </td>

          <td
            style="
              padding:12px;
              border:1px solid #e5e7eb;
            "
          >
            <a
              href="tel:${lead.mobile}"
            >
              ${lead.mobile}
            </a>
          </td>
        </tr>


        <tr>
          <td
            style="
              padding:12px;
              background:#f8fafc;
              border:1px solid #e5e7eb;
              font-weight:bold;
            "
          >
            Project
          </td>

          <td
            style="
              padding:12px;
              border:1px solid #e5e7eb;
            "
          >
            ${PROJECT_NAME}
          </td>
        </tr>


        <tr>
          <td
            style="
              padding:12px;
              background:#f8fafc;
              border:1px solid #e5e7eb;
              font-weight:bold;
            "
          >
            Location
          </td>

          <td
            style="
              padding:12px;
              border:1px solid #e5e7eb;
            "
          >
            ${PROJECT_LOCATION}
          </td>
        </tr>


        <tr>
          <td
            style="
              padding:12px;
              background:#f8fafc;
              border:1px solid #e5e7eb;
              font-weight:bold;
            "
          >
            Lead Source
          </td>

          <td
            style="
              padding:12px;
              border:1px solid #e5e7eb;
            "
          >
            ${lead.source}
          </td>
        </tr>


        <tr>
          <td
            style="
              padding:12px;
              background:#f8fafc;
              border:1px solid #e5e7eb;
              font-weight:bold;
            "
          >
            Page URL
          </td>

          <td
            style="
              padding:12px;
              border:1px solid #e5e7eb;
              word-break:break-all;
            "
          >
            ${lead.pageUrl}
          </td>
        </tr>


        <tr>
          <td
            style="
              padding:12px;
              background:#f8fafc;
              border:1px solid #e5e7eb;
              font-weight:bold;
            "
          >
            IP Address
          </td>

          <td
            style="
              padding:12px;
              border:1px solid #e5e7eb;
            "
          >
            ${lead.ip}
          </td>
        </tr>


        <tr>
          <td
            style="
              padding:12px;
              background:#f8fafc;
              border:1px solid #e5e7eb;
              font-weight:bold;
            "
          >
            UTM Source
          </td>

          <td
            style="
              padding:12px;
              border:1px solid #e5e7eb;
            "
          >
            ${lead.utm_source || "-"}
          </td>
        </tr>


        <tr>
          <td
            style="
              padding:12px;
              background:#f8fafc;
              border:1px solid #e5e7eb;
              font-weight:bold;
            "
          >
            UTM Medium
          </td>

          <td
            style="
              padding:12px;
              border:1px solid #e5e7eb;
            "
          >
            ${lead.utm_medium || "-"}
          </td>
        </tr>


        <tr>
          <td
            style="
              padding:12px;
              background:#f8fafc;
              border:1px solid #e5e7eb;
              font-weight:bold;
            "
          >
            UTM Campaign
          </td>

          <td
            style="
              padding:12px;
              border:1px solid #e5e7eb;
            "
          >
            ${lead.utm_campaign || "-"}
          </td>
        </tr>


        <tr>
          <td
            style="
              padding:12px;
              background:#f8fafc;
              border:1px solid #e5e7eb;
              font-weight:bold;
            "
          >
            GCLID
          </td>

          <td
            style="
              padding:12px;
              border:1px solid #e5e7eb;
              word-break:break-all;
            "
          >
            ${lead.gclid || "-"}
          </td>
        </tr>

      </table>


      <div
        style="
          margin-top:25px;
          text-align:center;
        "
      >

        <a
          href="tel:${lead.mobile}"
          style="
            display:inline-block;
            padding:12px 20px;
            background:#111827;
            color:#ffffff;
            text-decoration:none;
            border-radius:8px;
            margin:5px;
          "
        >
          Call Lead
        </a>


        <a
          href="mailto:${lead.email}"
          style="
            display:inline-block;
            padding:12px 20px;
            background:#E43E4C;
            color:#ffffff;
            text-decoration:none;
            border-radius:8px;
            margin:5px;
          "
        >
          Reply Email
        </a>

      </div>

    </div>


    <div
      style="
        background:#161012;
        padding:20px;
        text-align:center;
      "
    >

      <p
        style="
          margin:0;
          color:#E43E4C;
          font-size:13px;
        "
      >
        ${PROJECT_NAME} Lead Notification System
      </p>

      <p
        style="
          margin:7px 0 0;
          color:#9ca3af;
          font-size:11px;
        "
      >
        TS RERA No: ${RERA_NO}
      </p>

    </div>

  </div>

</div>

</body>
</html>
        `,
      });

    console.log(
      "✅ Admin lead email sent:",
      info.messageId
    );

    return {
      success: true,
      messageId: info.messageId,
    };

  } catch (error) {
    console.error(
      "❌ Admin Email Error:",
      error.response || error.message
    );

    throw error;
  }
};

/* =========================================================
   TELECRM
========================================================= */

const pushToTeleCRM = async (lead) => {
  const telecrmUrl =
    process.env.TELECRM_URL;

  const telecrmAuth =
    process.env.TELECRM_AUTH;

  if (!telecrmUrl) {
    console.warn(
      "⚠️ TELECRM_URL missing"
    );

    return {
      success: false,
      reason: "TELECRM_URL missing",
    };
  }

  if (!telecrmAuth) {
    console.warn(
      "⚠️ TELECRM_AUTH missing"
    );

    return {
      success: false,
      reason: "TELECRM_AUTH missing",
    };
  }

  const payload = {
    fields: {
      name: lead.name,

      phone: lead.mobile,

      email: lead.email,

      ip_address: lead.ip,

      project: PROJECT_NAME,

      location: PROJECT_LOCATION,

      source: lead.source,

      page_url: lead.pageUrl,
    },

    actions: [
      {
        type: "SYSTEM_NOTE",

        text:
          `Lead Source: ${lead.source}` +
          ` | Project: ${PROJECT_NAME}` +
          ` | Location: ${PROJECT_LOCATION}` +
          ` | Page: ${lead.pageUrl}` +
          ` | UTM Source: ${lead.utm_source || "-"}` +
          ` | UTM Medium: ${lead.utm_medium || "-"}` +
          ` | UTM Campaign: ${lead.utm_campaign || "-"}` +
          ` | GCLID: ${lead.gclid || "-"}`,
      },
    ],
  };

  try {
    console.log(
      "📤 Sending lead to TeleCRM..."
    );

    console.log(
      "TeleCRM URL:",
      telecrmUrl
    );

    const response =
      await axios.post(
        telecrmUrl,
        payload,
        {
          headers: {
            "Content-Type":
              "application/json",

            Authorization:
              telecrmAuth,
          },

          timeout: 15000,
        }
      );

    console.log(
      "✅ TeleCRM Status:",
      response.status
    );

    console.log(
      "✅ TeleCRM Response:",
      response.data
    );

    return {
      success: true,
      data: response.data,
    };

  } catch (error) {
    console.error(
      "❌ TeleCRM Status:",
      error.response?.status
    );

    console.error(
      "❌ TeleCRM Response:",
      error.response?.data
    );

    console.error(
      "❌ TeleCRM Error:",
      error.message
    );

    throw error;
  }
};

/* =========================================================
   LEAD SUBMISSION
========================================================= */

const handleLeadSubmit = async (
  req,
  res
) => {
  try {

    console.log(
      "=========================================="
    );

    console.log(
      "📥 New lead request received"
    );

    console.log(
      "Request Body:",
      req.body
    );

    const {
      name,
      email,
      mobile,
      phone,

      source,
      pageUrl,

      utm_source,
      utm_medium,
      utm_campaign,

      gclid,
    } = req.body;

    /* =====================================================
       MOBILE
    ===================================================== */

    const finalMobile =
      mobile || phone;

    /* =====================================================
       IP ADDRESS
    ===================================================== */

    const forwardedIp =
      req.headers["x-forwarded-for"];

    const clientIp =
      (
        typeof forwardedIp === "string"
          ? forwardedIp
              .split(",")[0]
              .trim()
          : null
      ) ||
      req.clientIp ||
      req.socket?.remoteAddress ||
      "Unknown";

    /* =====================================================
       VALIDATION
    ===================================================== */

    if (
      !name ||
      !email ||
      !finalMobile
    ) {
      console.warn(
        "❌ Lead validation failed"
      );

      return res.status(400).json({
        success: false,

        message:
          "Name, email, and mobile are required.",
      });
    }

    /* =====================================================
       CLEAN MOBILE
    ===================================================== */

    const cleanMobile =
      String(finalMobile)
        .replace(/\D/g, "")
        .trim();

    /* =====================================================
       LEAD OBJECT
    ===================================================== */

    const lead = {
      name:
        String(name).trim(),

      email:
        String(email)
          .trim()
          .toLowerCase(),

      mobile:
        cleanMobile,

      ip:
        clientIp,

      source:
        source ||
        `${PROJECT_NAME} Website`,

      pageUrl:
        pageUrl ||
        WEBSITE_URL,

      utm_source:
        utm_source || "",

      utm_medium:
        utm_medium || "",

      utm_campaign:
        utm_campaign || "",

      gclid:
        gclid || "",
    };

    console.log(
      `📥 New ${PROJECT_NAME} lead:`,
      lead
    );

    /* =====================================================
       IMPORTANT FOR VERCEL

       WAIT FOR ALL SERVICES BEFORE RESPONSE
    ===================================================== */

    console.log(
      "🔄 Processing Google Sheet, TeleCRM and Email..."
    );

    const results =
      await Promise.allSettled([
        saveLeadToGoogleSheet(lead),
        pushToTeleCRM(lead),
        sendAdminLeadEmail(lead),
      ]);

    const [
      googleSheetResult,
      telecrmResult,
      emailResult,
    ] = results;

    /* =====================================================
       GOOGLE SHEET RESULT
    ===================================================== */

    if (
      googleSheetResult.status ===
      "fulfilled"
    ) {
      console.log(
        "✅ Google Sheet completed"
      );

      console.log(
        googleSheetResult.value
      );
    } else {
      console.error(
        "❌ Google Sheet failed:",
        googleSheetResult.reason?.message ||
          googleSheetResult.reason
      );
    }

    /* =====================================================
       TELECRM RESULT
    ===================================================== */

    if (
      telecrmResult.status ===
      "fulfilled"
    ) {
      console.log(
        "✅ TeleCRM completed"
      );

      console.log(
        telecrmResult.value
      );
    } else {
      console.error(
        "❌ TeleCRM failed:",
        telecrmResult.reason?.response?.data ||
          telecrmResult.reason?.message ||
          telecrmResult.reason
      );
    }

    /* =====================================================
       EMAIL RESULT
    ===================================================== */

    if (
      emailResult.status ===
      "fulfilled"
    ) {
      console.log(
        "✅ Admin Email completed"
      );

      console.log(
        emailResult.value
      );
    } else {
      console.error(
        "❌ Admin Email failed:",
        emailResult.reason?.message ||
          emailResult.reason
      );
    }

    /* =====================================================
       RESPONSE
    ===================================================== */

    console.log(
      "✅ Lead processing finished"
    );

    console.log(
      "=========================================="
    );

    return res.status(200).json({
      success: true,

      message:
        "Thank you for your enquiry. Our sales team will contact you shortly.",

      integrations: {
        googleSheet:
          googleSheetResult.status ===
          "fulfilled",

        telecrm:
          telecrmResult.status ===
          "fulfilled",

        email:
          emailResult.status ===
          "fulfilled",
      },
    });

  } catch (error) {

    console.error(
      "❌ Lead submission error:",
      error
    );

    return res.status(500).json({
      success: false,

      message:
        "Submission failed. Please try again.",

      error:
        error.message,
    });
  }
};

/* =========================================================
   LEAD ENDPOINTS
========================================================= */

app.post(
  "/home/send-email",
  handleLeadSubmit
);

app.post(
  "/api/contact",
  handleLeadSubmit
);

app.post(
  "/send-email",
  handleLeadSubmit
);

/* =========================================================
   TEST EMAIL ROUTE
========================================================= */

app.get(
  "/test-email",
  async (req, res) => {
    try {
      const adminEmail =
        process.env.ADMIN_EMAIL ||
        process.env.EMAIL_USER;

      if (
        !process.env.EMAIL_USER ||
        !process.env.EMAIL_PASS ||
        !adminEmail
      ) {
        return res.status(500).json({
          success: false,
          message:
            "EMAIL_USER, EMAIL_PASS or ADMIN_EMAIL missing",
        });
      }

      const info =
        await transporter.sendMail({
          from:
            `"Jayabheri Test" <${process.env.EMAIL_USER}>`,

          to:
            adminEmail,

          subject:
            "Jayabheri The Nirvana Email Test",

          html: `
            <h2>Email working successfully</h2>

            <p>
              This test email was sent from
              api.jayabherinirvana.in
            </p>
          `,
        });

      return res.status(200).json({
        success: true,

        message:
          "Test email sent successfully",

        messageId:
          info.messageId,
      });

    } catch (error) {

      console.error(
        "Test email error:",
        error
      );

      return res.status(500).json({
        success: false,

        message:
          error.message,
      });
    }
  }
);

/* =========================================================
   TEST TELECRM ROUTE
========================================================= */

app.get(
  "/test-telecrm",
  async (req, res) => {
    try {

      const testLead = {
        name:
          "TeleCRM Test Lead",

        email:
          process.env.ADMIN_EMAIL ||
          process.env.EMAIL_USER ||
          "test@example.com",

        mobile:
          "919999999999",

        ip:
          "test",

        source:
          "TeleCRM API Test",

        pageUrl:
          WEBSITE_URL,

        utm_source:
          "test",

        utm_medium:
          "test",

        utm_campaign:
          "test",

        gclid:
          "",
      };

      const result =
        await pushToTeleCRM(
          testLead
        );

      return res.status(200).json({
        success: true,
        result,
      });

    } catch (error) {

      return res.status(500).json({
        success: false,

        status:
          error.response?.status,

        data:
          error.response?.data,

        message:
          error.message,
      });
    }
  }
);

/* =========================================================
   SERVER
========================================================= */

const PORT =
  process.env.PORT || 5000;

app.listen(
  PORT,
  () => {

    console.log(
      `✅ ${PROJECT_NAME} backend running on port ${PORT}`
    );

    console.log(
      `🌐 Website: ${WEBSITE_URL}`
    );

    console.log(
      `🚀 API: https://${API_DOMAIN}`
    );

    console.log(
      "📧 Admin lead email: ENABLED when configured"
    );

    console.log(
      "📊 Google Sheet: ENABLED when configured"
    );

    console.log(
      "☎️ TeleCRM: ENABLED when configured"
    );
  }
);

module.exports = app;
