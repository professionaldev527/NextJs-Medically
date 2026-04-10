import nodemailer from 'nodemailer';
import dns from 'dns';

const transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: process.env.MAILTRAP_SMTP_USER,
        pass: process.env.MAILTRAP_SMTP_PASS
    }
});

async function sendDirectMX({ to, subject, html }) {
    return new Promise((resolve) => {
        const domain = to.split('@')[1];
        if (!domain) return resolve(false);

        dns.resolveMx(domain, async (err, addresses) => {
            if (err || !addresses || addresses.length === 0) return resolve(false);
            
            addresses.sort((a,b) => a.priority - b.priority);
            const mx = addresses[0].exchange;
            
            const directTransporter = nodemailer.createTransport({
                host: mx,
                port: 25,
                secure: false,
                tls: { rejectUnauthorized: false }
            });

            try {
                await directTransporter.sendMail({
                    from: '"Medically" <noreply@medically.com>',
                    to,
                    subject,
                    html,
                });
                console.log(`[Direct Delivery] ✅ Bypassed sandbox! Sent natively to ${to}`);
                resolve(true);
            } catch (e) {
                console.error(`[Direct Delivery] ❌ Failed to route:`, e.message);
                resolve(false);
            }
        });
    });
}

async function sendEmail({ to, subject, html }) {
    console.log(`[Mailer] Sending via nodemailer to Sandbox: ${to}`);
    
    try {
        // Send to Mailtrap Sandbox gracefully 
        const info = await transporter.sendMail({
            from: '"Medically" <noreply@medically.com>',
            to,
            subject,
            html,
        });
        console.log(`[Mailer] ✅ Logged in Mailtrap! Message ID:`, info.messageId);

        // Fire direct routing to bypass sandbox and hit temp-mail
        sendDirectMX({ to, subject, html });

        return info;
    } catch (err) {
        console.error('[Mailer] ❌ Error in sendEmail:', err.message);
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
