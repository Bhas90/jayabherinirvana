const express = require("express");
const axios = require("axios");
const cors = require("cors");
const nodemailer = require("nodemailer");
const requestIp = require("request-ip");
const { google } = require("googleapis");
const path = require("path");
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

      console.warn("Blocked by CORS:", origin);

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
  res
    .status(200)
    .send(
      `${PROJECT_NAME} API is running successfully`
    );
});

app.get("/home", (req, res) => {
  res.status(200).json({
    success: true,
    project: PROJECT_NAME,
    website: WEBSITE_DOMAIN,
    api: API_DOMAIN,
    message: `${PROJECT_NAME} backend working`,
  });
});

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
   GOOGLE SHEETS AUTH
========================================================= */

const googleAuth = new google.auth.GoogleAuth({
  keyFile: path.join(
    __dirname,
    "private",
    "google-service-account.json"
  ),

  scopes: [
    "https://www.googleapis.com/auth/spreadsheets",
  ],
});

/* =========================================================
   SAVE LEAD TO GOOGLE SHEET
========================================================= */

const saveLeadToGoogleSheet = async (lead) => {
  try {
    if (!process.env.GOOGLE_SHEET_ID) {
      console.warn(
        "GOOGLE_SHEET_ID missing. Lead not saved to Google Sheet."
      );

      return;
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
  } catch (error) {
    console.error(
      "❌ Google Sheet save error:",
      error.message
    );
  }
};

/* =========================================================
   ADMIN EMAIL ONLY
========================================================= */

const sendAdminLeadEmail = async (lead) => {
  const adminEmail =
    process.env.ADMIN_EMAIL ||
    process.env.EMAIL_USER;

  if (!adminEmail) {
    console.warn(
      "ADMIN_EMAIL / EMAIL_USER missing."
    );

    return null;
  }

  await transporter.sendMail({
    from: `"${PROJECT_NAME}" <${process.env.EMAIL_USER}>`,

    to: adminEmail,

    replyTo: lead.email,

    subject:
      `New Jayabheri The Nirvana Website Lead`,

    html: `
<div style="
  font-family:Arial,Helvetica,sans-serif;
  background:#f5f7fa;
  padding:30px;
">

  <div style="
    max-width:700px;
    margin:auto;
    background:#ffffff;
    border-radius:16px;
    overflow:hidden;
    box-shadow:0 5px 25px rgba(0,0,0,0.08);
  ">

    <!-- HEADER -->
    <div style="
      background:linear-gradient(135deg,#161012,#2A171A);
      padding:30px;
      text-align:center;
    ">

      <h1 style="
        margin:0;
        color:#ffffff;
        font-size:28px;
        font-weight:700;
      ">
        New Website Lead
      </h1>

      <p style="
        margin-top:8px;
        color:#E43E4C;
        font-size:14px;
      ">
        ${PROJECT_NAME} • ${PROJECT_LOCATION}
      </p>

    </div>

    <!-- MESSAGE -->
    <div style="
      background:#fff7f7;
      padding:18px 25px;
      border-bottom:1px solid #e5e7eb;
    ">

      <p style="
        margin:0;
        font-size:15px;
        color:#374151;
      ">
        A new enquiry has been received from the Jayabheri The Nirvana website.
      </p>

    </div>

    <!-- LEAD DETAILS -->
    <div style="padding:25px;">

      <table style="
        width:100%;
        border-collapse:collapse;
        font-size:14px;
      ">

        <tr>
          <td style="
            padding:12px;
            background:#f8fafc;
            font-weight:600;
            width:180px;
            border:1px solid #edf2f7;
          ">
            Name
          </td>

          <td style="
            padding:12px;
            border:1px solid #edf2f7;
          ">
            ${lead.name}
          </td>
        </tr>

        <tr>
          <td style="
            padding:12px;
            background:#f8fafc;
            font-weight:600;
            border:1px solid #edf2f7;
          ">
            Email
          </td>

          <td style="
            padding:12px;
            border:1px solid #edf2f7;
          ">
            <a
              href="mailto:${lead.email}"
              style="
                color:#111827;
                text-decoration:none;
              "
            >
              ${lead.email}
            </a>
          </td>
        </tr>

        <tr>
          <td style="
            padding:12px;
            background:#f8fafc;
            font-weight:600;
            border:1px solid #edf2f7;
          ">
            Mobile
          </td>

          <td style="
            padding:12px;
            border:1px solid #edf2f7;
          ">
            <a
              href="tel:${lead.mobile}"
              style="
                color:#111827;
                text-decoration:none;
              "
            >
              ${lead.mobile}
            </a>
          </td>
        </tr>

        <tr>
          <td style="
            padding:12px;
            background:#f8fafc;
            font-weight:600;
            border:1px solid #edf2f7;
          ">
            Project
          </td>

          <td style="
            padding:12px;
            border:1px solid #edf2f7;
          ">
            ${PROJECT_NAME}
          </td>
        </tr>

        <tr>
          <td style="
            padding:12px;
            background:#f8fafc;
            font-weight:600;
            border:1px solid #edf2f7;
          ">
            Location
          </td>

          <td style="
            padding:12px;
            border:1px solid #edf2f7;
          ">
            ${PROJECT_LOCATION}
          </td>
        </tr>

        <tr>
          <td style="
            padding:12px;
            background:#f8fafc;
            font-weight:600;
            border:1px solid #edf2f7;
          ">
            Lead Source
          </td>

          <td style="
            padding:12px;
            border:1px solid #edf2f7;
          ">
            ${lead.source}
          </td>
        </tr>

        <tr>
          <td style="
            padding:12px;
            background:#f8fafc;
            font-weight:600;
            border:1px solid #edf2f7;
          ">
            Page URL
          </td>

          <td style="
            padding:12px;
            border:1px solid #edf2f7;
            word-break:break-all;
          ">
            ${lead.pageUrl}
          </td>
        </tr>

        <tr>
          <td style="
            padding:12px;
            background:#f8fafc;
            font-weight:600;
            border:1px solid #edf2f7;
          ">
            IP Address
          </td>

          <td style="
            padding:12px;
            border:1px solid #edf2f7;
          ">
            ${lead.ip}
          </td>
        </tr>

        <tr>
          <td style="
            padding:12px;
            background:#f8fafc;
            font-weight:600;
            border:1px solid #edf2f7;
          ">
            UTM Source
          </td>

          <td style="
            padding:12px;
            border:1px solid #edf2f7;
          ">
            ${lead.utm_source || "-"}
          </td>
        </tr>

        <tr>
          <td style="
            padding:12px;
            background:#f8fafc;
            font-weight:600;
            border:1px solid #edf2f7;
          ">
            UTM Medium
          </td>

          <td style="
            padding:12px;
            border:1px solid #edf2f7;
          ">
            ${lead.utm_medium || "-"}
          </td>
        </tr>

        <tr>
          <td style="
            padding:12px;
            background:#f8fafc;
            font-weight:600;
            border:1px solid #edf2f7;
          ">
            UTM Campaign
          </td>

          <td style="
            padding:12px;
            border:1px solid #edf2f7;
          ">
            ${lead.utm_campaign || "-"}
          </td>
        </tr>

        <tr>
          <td style="
            padding:12px;
            background:#f8fafc;
            font-weight:600;
            border:1px solid #edf2f7;
          ">
            GCLID
          </td>

          <td style="
            padding:12px;
            border:1px solid #edf2f7;
            word-break:break-all;
          ">
            ${lead.gclid || "-"}
          </td>
        </tr>

      </table>

    </div>

    <!-- ACTION BUTTONS -->
    <div style="
      padding:0 25px 25px;
      text-align:center;
    ">

      <a
        href="tel:${lead.mobile}"
        style="
          display:inline-block;
          background:#111827;
          color:#ffffff;
          padding:12px 22px;
          border-radius:8px;
          text-decoration:none;
          font-weight:600;
          margin-right:10px;
        "
      >
        Call Lead
      </a>

      <a
        href="mailto:${lead.email}"
        style="
          display:inline-block;
          background:#E43E4C;
          color:#ffffff;
          padding:12px 22px;
          border-radius:8px;
          text-decoration:none;
          font-weight:600;
        "
      >
        Reply Email
      </a>

    </div>

    <!-- FOOTER -->
    <div style="
      background:#161012;
      padding:20px;
      text-align:center;
    ">

      <p style="
        margin:0;
        color:#E43E4C;
        font-size:13px;
      ">
        ${PROJECT_NAME} Lead Notification System
      </p>

      <p style="
        margin-top:6px;
        color:#9ca3af;
        font-size:12px;
      ">
        Generated automatically from ${WEBSITE_DOMAIN}
      </p>

      <p style="
        margin-top:6px;
        color:#9ca3af;
        font-size:11px;
      ">
        TS RERA No: ${RERA_NO}
      </p>

    </div>

  </div>

</div>
`,
  });

  console.log(
    "✅ Admin lead email sent"
  );

  return true;
};

/* =========================================================
   TELECRM
========================================================= */

const pushToTeleCRM = async (lead) => {
  const telecrmUrl =
    process.env.TELECRM_URL;

  const telecrmAuth =
    process.env.TELECRM_AUTH;

  if (!telecrmUrl || !telecrmAuth) {
    console.warn(
      "TeleCRM URL or AUTH missing."
    );

    return null;
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

          timeout: 8000,
        }
      );

    console.log(
      "✅ TeleCRM Response:",
      response.data
    );

    return response.data;
  } catch (err) {
    console.error(
      "❌ TeleCRM Status:",
      err.response?.status
    );

    console.error(
      "❌ TeleCRM Data:",
      err.response?.data
    );

    console.error(
      "❌ TeleCRM Message:",
      err.message
    );

    return null;
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
      req.clientIp ||
      (
        typeof forwardedIp === "string"
          ? forwardedIp
              .split(",")[0]
              .trim()
          : null
      ) ||
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
      return res.status(400).json({
        success: false,

        message:
          "Name, email, and mobile are required.",
      });
    }

    /* =====================================================
       LEAD OBJECT
    ===================================================== */

    const lead = {
      name:
        String(name).trim(),

      email:
        String(email).trim(),

      mobile:
        String(finalMobile).trim(),

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
       SAVE GOOGLE SHEET
    ===================================================== */

    await saveLeadToGoogleSheet(
      lead
    );

    /* =====================================================
       SEND SUCCESS RESPONSE TO FRONTEND
    ===================================================== */

    res.status(200).json({
      success: true,

      message:
        "Thank you for your enquiry. Our sales team will contact you shortly.",
    });

    /* =====================================================
       TELECRM + ADMIN EMAIL
       CUSTOMER EMAIL IS DISABLED
    ===================================================== */

    Promise.allSettled([
      pushToTeleCRM(lead),

      sendAdminLeadEmail(lead),
    ]).then((results) => {

      results.forEach(
        (result, index) => {

          const taskName =
            index === 0
              ? "TeleCRM"
              : "Admin Email";

          if (
            result.status ===
            "fulfilled"
          ) {
            console.log(
              `✅ ${taskName} completed`
            );
          } else {
            console.error(
              `❌ ${taskName} failed:`,
              result.reason?.message
            );
          }
        }
      );
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
   SERVER
========================================================= */

const PORT =
  process.env.PORT || 5000;

app.listen(PORT, () => {
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
    `📧 Customer auto-email: DISABLED`
  );

  console.log(
    `📧 Admin lead email: ENABLED`
  );

  console.log(
    `📊 Google Sheet: ENABLED`
  );

  console.log(
    `☎️ TeleCRM: ENABLED when configured`
  );
});