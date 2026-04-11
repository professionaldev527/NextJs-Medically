import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const FROM_EMAIL = process.env.NEXT_PUBLIC_FROM_EMAIL || 'support.medically@theprofdev.com';

async function sendEmail({ to, subject, html }) {
    console.log(`[Resend] Sending email to: ${to}`);
    
    try {
        const { data, error } = await resend.emails.send({
            from: `Medically <${FROM_EMAIL}>`,
            to: [to],
            subject: subject,
            html: html,
        });

        if (error) {
            console.error('[Resend] ❌ Error in sendEmail:', error);
            throw error;
        }

        console.log(`[Resend] ✅ Email sent! ID:`, data.id);
        return data;
    } catch (err) {
        console.error('[Resend] ❌ Exception in sendEmail:', err.message);
        throw err;
    }
}

export async function sendOTPEmail(to, name, otp, appointmentInfo) {
    const { department, doctor, date, time } = appointmentInfo || {};
    
    return sendEmail({
        to,
        subject: 'Your Medically Appointment OTP',
        html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background:#f7f9fc; padding: 32px; border-radius: 10px;">
          <div style="text-align:center; margin-bottom: 24px;">
            <h1 style="color:#122f69; margin:0;">Medically</h1>
            <p style="color:#6b7280; margin:4px 0 0;">Your Health, Our Priority</p>
          </div>
          <div style="background:#fff; border-radius:8px; padding:28px; border: 1px solid #e5e7eb;">
            <h2 style="color:#122f69; margin-top:0;">Hello, ${name} 👋</h2>
            <p style="color:#374151;">To confirm your appointment booking, please use the OTP below. This code is valid for <strong>10 minutes</strong>.</p>
            
            <div style="text-align:center; margin: 28px 0;">
              <span style="font-size:42px; font-weight:bold; letter-spacing:12px; color:#122f69; background:#eef2ff; padding:16px 32px; border-radius:8px; display:inline-block;">${otp}</span>
            </div>
            
            <div style="margin: 24px 0; padding: 20px; background:#f8fafc; border-radius: 8px; border: 1px solid #e2e8f0;">
              <h3 style="margin-top:0; color:#1e293b; font-size: 16px;">Appointment Details:</h3>
              <table style="width:100%; border-collapse:collapse; font-size:14px;">
                <tr>
                  <td style="padding:6px 0; color:#64748b; font-weight:600;">Patient Name</td>
                  <td style="padding:6px 0; color:#334155;">${name}</td>
                </tr>
                <tr>
                  <td style="padding:6px 0; color:#64748b; font-weight:600;">Email Address</td>
                  <td style="padding:6px 0; color:#334155;">${to}</td>
                </tr>
                <tr>
                  <td style="padding:6px 0; color:#64748b; font-weight:600;">Department</td>
                  <td style="padding:6px 0; color:#334155;">${department || 'N/A'}</td>
                </tr>
                <tr>
                  <td style="padding:6px 0; color:#64748b; font-weight:600;">Doctor</td>
                  <td style="padding:6px 0; color:#334155;">${doctor || 'N/A'}</td>
                </tr>
                <tr>
                  <td style="padding:6px 0; color:#64748b; font-weight:600;">Date</td>
                  <td style="padding:6px 0; color:#334155;">${date || 'N/A'}</td>
                </tr>
                <tr>
                  <td style="padding:6px 0; color:#64748b; font-weight:600;">Time</td>
                  <td style="padding:6px 0; color:#334155;">${time || 'N/A'}</td>
                </tr>
              </table>
            </div>
            
            <p style="color:#6b7280; font-size:13px;">If you did not request an appointment at Medically, please ignore this email.</p>
          </div>
          <p style="text-align:center; color:#9ca3af; font-size:12px; margin-top:20px;">© 2025 Medically. All Rights Reserved.</p>
        </div>
        `,
    });
}

export async function sendConfirmationEmail(to, name, appointment) {
    const { department, doctor, date, time } = appointment;
    return sendEmail({
        to,
        subject: '✅ Appointment Confirmed — Medically',
        html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background:#f7f9fc; padding: 32px; border-radius: 10px;">
          <div style="text-align:center; margin-bottom: 24px;">
            <h1 style="color:#122f69; margin:0;">Medically</h1>
            <p style="color:#6b7280; margin:4px 0 0;">Your Health, Our Priority</p>
          </div>
          <div style="background:#fff; border-radius:8px; padding:28px; border: 1px solid #e5e7eb;">
            <h2 style="color:#16a34a; margin-top:0;">🎉 Appointment Confirmed!</h2>
            <p style="color:#374151;">Dear <strong>${name}</strong>,</p>
            <p style="color:#374151;">Your appointment at <strong>Medically</strong> has been successfully confirmed.</p>
            <table style="width:100%; border-collapse:collapse; margin:20px 0;">
              <tr style="border-bottom:1px solid #e5e7eb;">
                <td style="padding:10px 0; color:#6b7280; font-weight:600;">Department</td>
                <td style="padding:10px 0; color:#111827;">${department}</td>
              </tr>
              <tr style="border-bottom:1px solid #e5e7eb;">
                <td style="padding:10px 0; color:#6b7280; font-weight:600;">Doctor</td>
                <td style="padding:10px 0; color:#111827;">${doctor}</td>
              </tr>
              <tr style="border-bottom:1px solid #e5e7eb;">
                <td style="padding:10px 0; color:#6b7280; font-weight:600;">Date</td>
                <td style="padding:10px 0; color:#111827;">${date}</td>
              </tr>
              <tr>
                <td style="padding:10px 0; color:#6b7280; font-weight:600;">Time</td>
                <td style="padding:10px 0; color:#111827;">${time}</td>
              </tr>
            </table>
            <div style="background:#eef2ff; border-radius:8px; padding:16px; margin:20px 0;">
              <p style="margin:0; color:#122f69; font-weight:600;">🎁 Welcome Gift: $100 Store Credit!</p>
              <p style="margin:8px 0 0; color:#374151; font-size:14px;">As a new Medically patient, we've added <strong>$100 in store credits</strong> to your account.</p>
            </div>
            <p style="color:#374151;">Please arrive <strong>15 minutes early</strong> for your appointment.</p>
            <p style="color:#374151; margin-bottom:0;">Warm regards,<br/><strong>The Medically Team</strong></p>
          </div>
          <p style="text-align:center; color:#9ca3af; font-size:12px; margin-top:20px;">© 2025 Medically. All Rights Reserved.</p>
        </div>
        `,
    });
}

export async function sendConsultationEmail(to, name, company) {
    return sendEmail({
        to,
        subject: '🎁 Your Free Medical Consultation — Medically',
        html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background:#f0f4f8; padding: 32px; border-radius: 12px;">
          <div style="text-align:center; margin-bottom: 24px;">
            <h1 style="color:#122f69; margin:0; font-size: 28px;">Medically</h1>
            <p style="color:#64748b; margin:4px 0 0; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">Center for Medical Excellence</p>
          </div>
          
          <div style="background:#ffffff; border-radius:10px; padding:32px; border: 1px solid #e2e8f0; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
            <h2 style="color:#122f69; margin-top:0; font-size: 22px;">Hello ${name},</h2>
            <p style="color:#334155; line-height: 1.6;">Thank you for reaching out to us from <strong>${company}</strong>. We are pleased to offer you a <strong>Complimentary First Consultation</strong> at Medically.</p>
            
            <div style="background:#eef2ff; border-left: 4px solid #122f69; padding: 20px; margin: 24px 0;">
              <p style="margin:0; color:#1e1b4b; font-weight: 600;">How to claim your free consultation:</p>
              <ul style="margin:12px 0 0; padding-left: 20px; color:#312e81; font-size: 15px;">
                <li style="margin-bottom:8px;">Simply visit our main hospital reception at any time.</li>
                <li style="margin-bottom:8px;">Present this email (digital or printed) to our staff.</li>
                <li style="margin-bottom:8px;">A dedicated patient coordinator will assist you immediately.</li>
              </ul>
            </div>
            
            <p style="color:#334155; line-height: 1.6;">At Medically, we specialize in advanced diagnostics and personalized care. Whether you have a specific health concern or simply want a professional check-up, our team of experts is ready to solve your issues and provide the peace of mind you deserve.</p>
            
            <div style="margin-top: 32px; padding-top: 24px; border-top: 1px solid #f1f5f9;">
                <p style="color:#475569; font-size: 14px; margin-bottom: 4px;"><strong>Hospital Location:</strong></p>
                <p style="color:#1e293b; font-size: 15px; margin: 0;">123 Medical Avenue, New York, NY</p>
                <p style="color:#1e293b; font-size: 15px; margin: 4px 0 0;">(704) 555-0127</p>
            </div>
            
            <p style="color:#64748b; font-size: 14px; margin-top: 32px; font-style: italic;">We look forward to seeing you soon and helping you on your journey to better health.</p>
            
            <p style="color:#334155; margin-top: 24px; margin-bottom: 0;">Warm regards,<br/><strong>The Medically Care Team</strong></p>
          </div>
          
          <div style="text-align:center; margin-top: 24px;">
            <p style="color:#94a3b8; font-size:12px;">© 2025 Medically. All Rights Reserved. This is a complimentary offer and has no cash value.</p>
          </div>
        </div>
        `,
    });
}
