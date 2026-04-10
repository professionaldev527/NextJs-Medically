import dbConnect from '../../../lib/mongodb';
import OTP from '../../../models/OTP';
import Patient from '../../../models/Patient';
import Appointment from '../../../models/Appointment';
import { sendConfirmationEmail } from '../../../lib/mailer';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const { email, otp } = req.body;
    console.log('[verify-otp] Received request:', { email, otp });

    if (!email || !otp) {
        return res.status(400).json({ message: 'Email and OTP are required.' });
    }

    try {
        console.log('[verify-otp] Connecting to MongoDB...');
        await dbConnect();
        console.log('[verify-otp] MongoDB connected.');

        const otpRecord = await OTP.findOne({ email: email.toLowerCase() });
        console.log('[verify-otp] OTP record found:', otpRecord ? `ID ${otpRecord._id}, OTP ${otpRecord.otp}, Expires ${otpRecord.expiresAt}` : 'NONE');

        if (!otpRecord) {
            return res.status(400).json({ message: 'OTP expired or not found. Please request a new one.' });
        }

        if (otpRecord.otp !== otp.trim()) {
            console.warn(`[verify-otp] OTP mismatch. Expected: ${otpRecord.otp}, Got: ${otp.trim()}`);
            return res.status(400).json({ message: 'Invalid OTP. Please try again.' });
        }

        if (new Date() > otpRecord.expiresAt) {
            console.warn('[verify-otp] OTP expired.');
            await OTP.deleteOne({ _id: otpRecord._id });
            return res.status(400).json({ message: 'OTP has expired. Please request a new one.' });
        }

        const { name, department, doctor, date, time } = otpRecord.appointmentData;
        console.log('[verify-otp] Appointment data:', { name, department, doctor, date, time });

        // Upsert patient
        let patient = await Patient.findOne({ email: email.toLowerCase() });
        const isNewPatient = !patient;
        if (isNewPatient) {
            patient = await Patient.create({ name, email: email.toLowerCase(), credits: 100 });
            console.log(`[verify-otp] New patient created: ${patient._id}`);
        } else {
            console.log(`[verify-otp] Existing patient: ${patient._id}`);
        }

        // Save appointment
        const appointment = await Appointment.create({
            patientEmail: email.toLowerCase(),
            patientName: name,
            department,
            doctor,
            date,
            time,
        });
        console.log(`[verify-otp] Appointment saved: ${appointment._id}`);

        // Clean up OTP
        await OTP.deleteOne({ _id: otpRecord._id });
        console.log('[verify-otp] OTP record deleted.');

        // Send confirmation email
        await sendConfirmationEmail(email, name, { department, doctor, date, time });

        console.log(`[verify-otp] ✅ Done — appointment confirmed for ${email}`);
        return res.status(200).json({
            message: 'Appointment confirmed successfully!',
            isNewPatient,
            credits: patient.credits,
            appointment: { id: appointment._id, department, doctor, date, time },
        });

    } catch (err) {
        console.error('[verify-otp] ❌ Error:', err.message);
        console.error('[verify-otp] Stack:', err.stack);
        return res.status(500).json({ message: `Server error: ${err.message}` });
    }
}
