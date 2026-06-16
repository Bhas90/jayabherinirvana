const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const requestIp = require("request-ip");
const { google } = require("googleapis");
const path = require("path");
require("dotenv").config();

const app = express();

const allowedOrigins = [
  "https://jayabheripinnacle.com",
  "https://www.jayabheripinnacle.com",
  "http://localhost:5173",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      return callback(new Error("Not allowed by CORS"));
    },
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
  })
);

app.options("*", cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(requestIp.mw());

app.get("/", (req, res) => {
  res.status(200).send("Jayabheri The Pinnacle API is running successfully");
});

app.get("/home", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Jayabheri The Pinnacle backend working",
  });
});

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const googleAuth = new google.auth.GoogleAuth({
  keyFile: path.join(__dirname, "private", "google-service-account.json"),
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const saveLeadToGoogleSheet = async (lead) => {
  try {
    if (!process.env.GOOGLE_SHEET_ID) {
      console.warn("GOOGLE_SHEET_ID missing. Lead not saved to Google Sheet.");
      return;
    }

    const sheets = google.sheets({
      version: "v4",
      auth: googleAuth,
    });

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "Sheet1!A:L",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            new Date().toLocaleString("en-IN", {
              timeZone: "Asia/Kolkata",
            }),
            lead.name,
            lead.email,
            lead.mobile,
            "Jayabheri The Pinnacle",
            "Kokapet, Hyderabad",
            lead.source,
            lead.pageUrl,
            lead.ip,
            lead.utm_source || "",
            lead.utm_medium || "",
            lead.utm_campaign || "",
          ],
        ],
      },
    });

    console.log("Lead saved to Google Sheet successfully");
  } catch (error) {
    console.error("Google Sheet save error:", error.message);
  }
};

const sendLeadEmails = async (lead) => {
  const adminEmail = process.env.ADMIN_EMAIL || process.env.EMAIL_USER;

  await transporter.sendMail({
    from: `"Jayabheri The Pinnacle" <${process.env.EMAIL_USER}>`,
    to: adminEmail,
    replyTo: lead.email,
    subject: "New Website Lead - Jayabheri The Pinnacle",
    html: `
<div style="font-family:Arial,Helvetica,sans-serif;background:#f5f7fa;padding:30px;">
  <div style="max-width:700px;margin:auto;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 5px 25px rgba(0,0,0,0.08);">
<!-- Header -->
<div style="background:linear-gradient(135deg,#061f24,#0B5C63);padding:30px;text-align:center;">
  <h1 style="margin:0;color:#ffffff;font-size:28px;font-weight:700;">
    New Website Lead
  </h1>

  <p style="margin-top:8px;color:#d9eef0;font-size:14px;">
    Jayabheri The Pinnacle • Kokapet, Hyderabad
  </p>
</div>

<!-- Lead Alert -->
<div style="background:#f8fbfc;padding:18px 25px;border-bottom:1px solid #e5e7eb;">
  <p style="margin:0;font-size:15px;color:#374151;">
    A new enquiry has been received from the website.
  </p>
</div>

<!-- Lead Details -->
<div style="padding:25px;">
  <table style="width:100%;border-collapse:collapse;font-size:14px;">

    <tr>
      <td style="padding:12px;background:#f8fafc;font-weight:600;width:180px;border:1px solid #edf2f7;">Name</td>
      <td style="padding:12px;border:1px solid #edf2f7;">${lead.name}</td>
    </tr>

    <tr>
      <td style="padding:12px;background:#f8fafc;font-weight:600;border:1px solid #edf2f7;">Email</td>
      <td style="padding:12px;border:1px solid #edf2f7;">
        <a href="mailto:${lead.email}" style="color:#0B5C63;text-decoration:none;">
          ${lead.email}
        </a>
      </td>
    </tr>

    <tr>
      <td style="padding:12px;background:#f8fafc;font-weight:600;border:1px solid #edf2f7;">Mobile</td>
      <td style="padding:12px;border:1px solid #edf2f7;">
        <a href="tel:${lead.mobile}" style="color:#0B5C63;text-decoration:none;">
          ${lead.mobile}
        </a>
      </td>
    </tr>

    <tr>
      <td style="padding:12px;background:#f8fafc;font-weight:600;border:1px solid #edf2f7;">Project</td>
      <td style="padding:12px;border:1px solid #edf2f7;">Jayabheri The Pinnacle</td>
    </tr>

    <tr>
      <td style="padding:12px;background:#f8fafc;font-weight:600;border:1px solid #edf2f7;">Location</td>
      <td style="padding:12px;border:1px solid #edf2f7;">Kokapet, Hyderabad</td>
    </tr>

    <tr>
      <td style="padding:12px;background:#f8fafc;font-weight:600;border:1px solid #edf2f7;">Lead Source</td>
      <td style="padding:12px;border:1px solid #edf2f7;">${lead.source}</td>
    </tr>

    <tr>
      <td style="padding:12px;background:#f8fafc;font-weight:600;border:1px solid #edf2f7;">Page URL</td>
      <td style="padding:12px;border:1px solid #edf2f7;word-break:break-all;">
        ${lead.pageUrl}
      </td>
    </tr>

    <tr>
      <td style="padding:12px;background:#f8fafc;font-weight:600;border:1px solid #edf2f7;">IP Address</td>
      <td style="padding:12px;border:1px solid #edf2f7;">
        ${lead.ip}
      </td>
    </tr>

    <tr>
      <td style="padding:12px;background:#f8fafc;font-weight:600;border:1px solid #edf2f7;">UTM Source</td>
      <td style="padding:12px;border:1px solid #edf2f7;">
        ${lead.utm_source || "-"}
      </td>
    </tr>

    <tr>
      <td style="padding:12px;background:#f8fafc;font-weight:600;border:1px solid #edf2f7;">UTM Medium</td>
      <td style="padding:12px;border:1px solid #edf2f7;">
        ${lead.utm_medium || "-"}
      </td>
    </tr>

    <tr>
      <td style="padding:12px;background:#f8fafc;font-weight:600;border:1px solid #edf2f7;">UTM Campaign</td>
      <td style="padding:12px;border:1px solid #edf2f7;">
        ${lead.utm_campaign || "-"}
      </td>
    </tr>

  </table>
</div>

<!-- Quick Action Buttons -->
<div style="padding:0 25px 25px;text-align:center;">
  <a href="tel:${lead.mobile}"
     style="display:inline-block;background:#0B5C63;color:#fff;padding:12px 22px;border-radius:8px;text-decoration:none;font-weight:600;margin-right:10px;">
    Call Lead
  </a>

  <a href="mailto:${lead.email}"
     style="display:inline-block;background:#C8B27C;color:#061f24;padding:12px 22px;border-radius:8px;text-decoration:none;font-weight:600;">
    Reply Email
  </a>
</div>

<!-- Footer -->
<div style="background:#061f24;padding:20px;text-align:center;">
  <p style="margin:0;color:#d9eef0;font-size:13px;">
    Jayabheri The Pinnacle Lead Notification System
  </p>

  <p style="margin-top:6px;color:#9ca3af;font-size:12px;">
    Generated automatically from jayabheripinnacle.com
  </p>
</div>
  </div>
</div>
`
 });

  await transporter.sendMail({
    from: `"Jayabheri The Pinnacle" <${process.env.EMAIL_USER}>`,
    to: lead.email,
    subject: "Thank You for Your Interest in Jayabheri The Pinnacle",
    html: `
      <div style="font-family:Arial,sans-serif;max-width:620px;margin:auto;border:1px solid #ddd;border-radius:12px;overflow:hidden;">
        <div style="background:#061f24;color:#fff;padding:22px;text-align:center;">
          <h2 style="margin:0;">Thank You for Contacting Us</h2>
          <p style="margin:8px 0 0;">Jayabheri The Pinnacle, Kokapet</p>
        </div>

        <div style="padding:24px;color:#333;">
          <p>Hi ${lead.name},</p>

          <p>
            Thank you for your interest in
            <strong>Jayabheri The Pinnacle</strong>.
          </p>

          <p>
            Our relationship manager will contact you shortly with:
          </p>

          <ul style="line-height:1.8;padding-left:20px;">
            <li>Latest Pricing</li>
            <li>Floor Plans</li>
            <li>Tower Details</li>
            <li>Unit Availability</li>
            <li>Brochure</li>
            <li>Site Visit Assistance</li>
            <li>Exclusive Offers</li>
          </ul>

          <p>
            For quick assistance, call:
            <br />
            <a href="tel:+919652143222" style="color:#0B5C63;font-weight:bold;text-decoration:none;">
              +91 96521 43222
            </a>
          </p>
        </div>

        <div style="background:#f5f5f5;padding:14px;text-align:center;color:#666;font-size:13px;">
          Team Jayabheri The Pinnacle
        </div>
      </div>
    `,
  });
};

const handleLeadSubmit = async (req, res) => {
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
    } = req.body;

    const finalMobile = mobile || phone;
    const clientIp =
      req.clientIp || req.headers["x-forwarded-for"] || "Unknown";

    if (!name || !email || !finalMobile) {
      return res.status(400).json({
        success: false,
        message: "Name, email, and mobile are required.",
      });
    }

    const lead = {
      name: name.trim(),
      email: email.trim(),
      mobile: finalMobile,
      ip: clientIp,
      source: source || "Jayabheri The Pinnacle Website",
      pageUrl: pageUrl || "https://jayabheripinnacle.com",
      utm_source: utm_source || "",
      utm_medium: utm_medium || "",
      utm_campaign: utm_campaign || "",
    };

    console.log("New Jayabheri Pinnacle lead:", lead);

    await saveLeadToGoogleSheet(lead);
    await sendLeadEmails(lead);

    return res.status(200).json({
      success: true,
      message:
        "Thank you for your enquiry. Our sales team will contact you shortly.",
    });
  } catch (error) {
    console.error("Lead submission error:", error);

    return res.status(500).json({
      success: false,
      message: "Submission failed. Please try again.",
      error: error.message,
    });
  }
};

app.post("/home/send-email", handleLeadSubmit);
app.post("/api/contact", handleLeadSubmit);
app.post("/send-email", handleLeadSubmit);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Jayabheri The Pinnacle backend running on port ${PORT}`);
});