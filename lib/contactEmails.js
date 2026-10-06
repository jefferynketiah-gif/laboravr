import { LOGO_PNG_BASE64 } from './emailLogo';

// Escape anything typed by the person who submitted the form before it goes into an HTML email.
export function escapeHtml(value = '') {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export const logoAttachment = {
  filename: 'laboravr-logo.png',
  content: Buffer.from(LOGO_PNG_BASE64, 'base64'),
  contentType: 'image/png',
  cid: 'laboravr-logo',
};

// The automatic reply to the person who submitted the form.
export function confirmationEmail({ name, university, department, from }) {
  const first = escapeHtml(String(name).trim().split(/\s+/)[0] || 'there');
  const inst = escapeHtml(university);
  const dept = escapeHtml(department);
  const text =
`Hi ${String(name).trim().split(/\s+/)[0] || 'there'},

Thank you for getting in touch about LaboraVR. We have received your enquiry for ${department} at ${university}.

We read every enquiry personally and will reply to you directly from this address.

LaboraVR
Virtual chemistry practicals for schools without physical lab access.`;

  const html = `
  <div style="margin:0;padding:32px 16px;background:#0A0B10;font-family:Arial,Helvetica,sans-serif;color:#E8E9F0">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:560px;margin:0 auto">
      <tr><td style="padding-bottom:24px">
        <img src="cid:laboravr-logo" width="48" height="48" alt="LaboraVR" style="display:block;border:0;border-radius:12px">
      </td></tr>
      <tr><td style="background:#12141C;border:1px solid #1F2230;border-radius:16px;padding:32px">
        <p style="margin:0 0 20px;font-family:monospace;font-size:11px;letter-spacing:0.2em;color:#7C5CFF">THANK YOU FOR YOUR ENQUIRY</p>
        <p style="margin:0 0 16px;font-size:16px;line-height:1.6">Hi ${first},</p>
        <p style="margin:0 0 16px;font-size:16px;line-height:1.6;color:#B0B4C8">
          Thank you for getting in touch about LaboraVR. We have received your enquiry for <span style="color:#E8E9F0">${dept}</span> at <span style="color:#E8E9F0">${inst}</span>.
        </p>
        <p style="margin:0;font-size:16px;line-height:1.6;color:#B0B4C8">
          We read every enquiry personally and will reply to you directly from this address.
        </p>
      </td></tr>
      <tr><td style="padding-top:20px;font-size:12px;line-height:1.6;color:#6B6F80">
        LaboraVR · Virtual chemistry practicals for schools without physical lab access.
      </td></tr>
    </table>
  </div>`;

  return {
    from: `"LaboraVR" <${from}>`,
    subject: 'Thanks for your LaboraVR enquiry',
    text,
    html,
    attachments: [logoAttachment],
  };
}
