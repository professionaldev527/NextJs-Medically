import dbConnect from '../../../lib/mongodb';
import OTP from '../../../models/OTP';
import { sendOTPEmail } from '../../../lib/mailer';

function generateOTP() {
    return Math.floor(100000 + Math.random() * 900000).toString();
}

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const { name, email, department, doctor, date, time } = req.body;
    console.log('[send-otp] Received request:', { name, email, department, doctor, date, time });

    if (!name || !email || !department || !doctor || !date || !time) {
        console.warn('[send-otp] Missing fields:', { name, email, department, doctor, date, time });
        return res.status(400).json({ message: 'All fields are required.' });
    }

    try {
        console.log('[send-otp] Connecting to MongoDB...');
        await dbConnect();
        console.log('[send-otp] MongoDB connected.');

        // Remove any existing OTP for this email
        const deleted = await OTP.deleteMany({ email: email.toLowerCase() });
        console.log(`[send-otp] Cleared ${deleted.deletedCount} old OTP(s) for ${email}`);

        const otp = generateOTP();
        const expiresAt = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

        const saved = await OTP.create({
            email: email.toLowerCase(),
            otp,
            appointmentData: { name, email, department, doctor, date, time },
            expiresAt,
        });
        console.log(`[send-otp] OTP saved to DB. ID: ${saved._id}, OTP: ${otp}, Expires: ${expiresAt}`);

        const appointmentInfo = { department, doctor, date, time };
        await sendOTPEmail(email, name, otp, appointmentInfo);

        console.log(`[send-otp] ✅ Success — OTP dispatched for ${email}`);
        return res.status(200).json({ message: 'OTP sent to your email. Please check your inbox.' });

    } catch (err) {
        console.error('[send-otp] ❌ Error:', err.message);
        console.error('[send-otp] Stack:', err.stack);
        return res.status(500).json({ message: `Failed to send OTP: ${err.message}` });
    }
}
