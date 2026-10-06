import { supabase } from '../../lib/supabase';
import { confirmationEmail, escapeHtml } from '../../lib/contactEmails';
import { sendViaResend } from '../../lib/resend';
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, university, department, message } = req.body;

  // Basic validation
  if (!name || !email || !university || !department) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // 1. Save to Supabase
  const { error: dbError } = await supabase
    .from('contact_submissions')
    .insert([{ name, email, university, department, message }]);

  if (dbError) {
    console.error('Supabase insert error:', dbError);
    return res.status(500).json({ error: 'Failed to save submission' });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.NOTIFY_EMAIL_USER,
      pass: process.env.NOTIFY_EMAIL_PASS, // Gmail App Password
    },
  });

  // 2. Notify yourself. Every value the visitor typed is escaped before it goes into the HTML.
  try {
    await transporter.sendMail({
      from: `"LaboraVR Contact" <${process.env.NOTIFY_EMAIL_USER}>`,
      to: process.env.NOTIFY_EMAIL_USER,
      replyTo: email,
      subject: `New pilot enquiry from ${name} — ${university}`,
      html: `
        <div style="font-family:monospace;background:#0A0B10;color:#E8E9F0;padding:32px;border-radius:12px;max-width:520px">
          <p style="color:#7C5CFF;font-size:11px;letter-spacing:0.2em;margin:0 0 24px">LABORAVR — NEW CONTACT SUBMISSION</p>
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="color:#6B6F80;padding:10px 0;border-bottom:1px solid #1F2230;width:120px">NAME</td><td style="padding:10px 0;border-bottom:1px solid #1F2230">${escapeHtml(name)}</td></tr>
            <tr><td style="color:#6B6F80;padding:10px 0;border-bottom:1px solid #1F2230">EMAIL</td><td style="padding:10px 0;border-bottom:1px solid #1F2230"><a href="mailto:${escapeHtml(email)}" style="color:#7C5CFF">${escapeHtml(email)}</a></td></tr>
            <tr><td style="color:#6B6F80;padding:10px 0;border-bottom:1px solid #1F2230">INSTITUTION</td><td style="padding:10px 0;border-bottom:1px solid #1F2230">${escapeHtml(university)}</td></tr>
            <tr><td style="color:#6B6F80;padding:10px 0;border-bottom:1px solid #1F2230">DEPARTMENT</td><td style="padding:10px 0;border-bottom:1px solid #1F2230">${escapeHtml(department)}</td></tr>
            <tr><td style="color:#6B6F80;padding:10px 0" valign="top">MESSAGE</td><td style="padding:10px 0">${message ? escapeHtml(message) : '<em style="color:#6B6F80">No message</em>'}</td></tr>
          </table>
          <p style="margin-top:32px"><a href="https://supabase.com/dashboard" style="color:#7C5CFF;font-size:11px;letter-spacing:0.15em">VIEW IN SUPABASE DASHBOARD</a></p>
        </div>
      `,
    });
  } catch (emailError) {
    // Don't fail the whole request if email fails — data is already saved
    console.error('Notification email error:', emailError.message);
  }

  // 3. Automatic reply to the person who submitted, sent from hello@laboravr.com through Resend.
  // Replies go to your Gmail, so you still see anything they write back.
  try {
    await sendViaResend({
      from: 'LaboraVR <hello@laboravr.com>',
      to: email,
      replyTo: process.env.NOTIFY_EMAIL_USER,
      ...confirmationEmail({ name, university, department }),
    });
  } catch (replyError) {
    console.error('Confirmation email error:', replyError.message);
  }

  return res.status(200).json({ success: true });
}
