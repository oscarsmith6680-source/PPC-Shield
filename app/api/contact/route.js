import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

/**
 * Escape text for safe inclusion in HTML email bodies (prevents HTML injection).
 */
function escapeHtml(text) {
  const map = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  };
  return String(text).replace(/[&<>"']/g, (ch) => map[ch]);
}

/**
 * Check that a value is a non-empty string after trimming.
 */
function isNonEmptyString(value) {
  return typeof value === "string" && value.trim().length > 0;
}

/**
 * POST /api/contact
 * Accepts JSON: { fullName, email, phone, message }
 * Sends an HTML email to RECEIVER_EMAIL via SMTP (e.g. A2 Hosting).
 */
export async function POST(request) {
  try {
    // Read and parse JSON body
    let body;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { success: false, error: "Invalid JSON body." },
        { status: 400 }
      );
    }

    const { fullName, email, phone, message } = body;

    // Validate all required fields are present and non-empty
    if (
      !isNonEmptyString(fullName) ||
      !isNonEmptyString(email) ||
      !isNonEmptyString(phone) ||
      !isNonEmptyString(message)
    ) {
      return NextResponse.json(
        {
          success: false,
          error:
            "All fields are required: fullName, email, phone, and message.",
        },
        { status: 400 }
      );
    }

    // Load SMTP settings (trim to avoid copy/paste whitespace breaking auth)
    const SMTP_HOST = process.env.SMTP_HOST?.trim();
    const SMTP_PORT = process.env.SMTP_PORT?.trim();
    const SMTP_USER = process.env.SMTP_USER?.trim();
    const SMTP_PASS = process.env.SMTP_PASS?.trim();
    const RECEIVER_EMAIL = process.env.RECEIVER_EMAIL?.trim();

    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !RECEIVER_EMAIL) {
      console.error("Contact API: missing SMTP environment variables.");
      return NextResponse.json(
        {
          success: false,
          error: "Email service is not configured.",
        },
        { status: 500 }
      );
    }

    const port = Number(SMTP_PORT);
    if (!Number.isFinite(port) || port < 1 || port > 65535) {
      return NextResponse.json(
        { success: false, error: "Invalid SMTP_PORT configuration." },
        { status: 500 }
      );
    }

    // 465 = SSL/TLS from the start; 587 = plain then STARTTLS (common on A2 and others)
    const secure = port === 465;

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port,
      secure,
      // STARTTLS on 587 — often required for hosted SMTP
      requireTLS: port === 587,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    const replyEmail = email.trim();

    const safe = {
      fullName: escapeHtml(fullName.trim()),
      email: escapeHtml(replyEmail),
      phone: escapeHtml(phone.trim()),
      message: escapeHtml(message.trim()).replace(/\n/g, "<br />"),
    };

    const mailtoHref = `mailto:${encodeURIComponent(replyEmail)}`;

    const html = `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8" /></head>
<body style="font-family: system-ui, sans-serif; line-height: 1.5; color: #222;">
  <h2 style="margin: 0 0 1rem;">New contact form message</h2>
  <table style="border-collapse: collapse; max-width: 560px;">
    <tr><td style="padding: 0.35rem 1rem 0.35rem 0; font-weight: 600;">Name</td><td style="padding: 0.35rem 0;">${safe.fullName}</td></tr>
    <tr><td style="padding: 0.35rem 1rem 0.35rem 0; font-weight: 600;">Email</td><td style="padding: 0.35rem 0;"><a href="${mailtoHref}">${safe.email}</a></td></tr>
    <tr><td style="padding: 0.35rem 1rem 0.35rem 0; font-weight: 600;">Phone</td><td style="padding: 0.35rem 0;">${safe.phone}</td></tr>
    <tr><td style="padding: 0.75rem 1rem 0.5rem 0; font-weight: 600; vertical-align: top;">Message</td><td style="padding: 0.75rem 0 0.5rem 0;">${safe.message}</td></tr>
  </table>
</body>
</html>`;

    const text = [
      "New contact form message",
      "",
      `Name: ${fullName.trim()}`,
      `Email: ${email.trim()}`,
      `Phone: ${phone.trim()}`,
      "",
      "Message:",
      message.trim(),
    ].join("\n");

    await transporter.sendMail({
      from: `"${fullName.trim()}" <${SMTP_USER}>`,
      to: RECEIVER_EMAIL,
      replyTo: replyEmail,
      subject: `Contact form: ${fullName.trim()}`,
      text,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    const message =
      err instanceof Error ? err.message : "Failed to send message.";
    const extra =
      err && typeof err === "object" && "response" in err && err.response
        ? String(err.response)
        : "";
    return NextResponse.json(
      {
        success: false,
        error: extra ? `${message} ${extra}`.trim() : message,
      },
      { status: 500 }
    );
  }
}
