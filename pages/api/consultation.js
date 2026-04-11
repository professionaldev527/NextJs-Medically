import { sendConsultationEmail } from '../../lib/mailer';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const { name, email, company } = req.body;
    console.log('[consultation] Received request:', { name, email, company });

    if (!name || !email || !company) {
        return res.status(400).json({ message: 'All fields (Name, Email, Company) are required.' });
    }

    try {
        await sendConsultationEmail(email, name, company);
        
        console.log(`[consultation] ✅ Success — Consultation email sent to ${email}`);
        return res.status(200).json({ message: 'Success! Your free consultation voucher has been sent to your email.' });

    } catch (err) {
        console.error('[consultation] ❌ Error:', err.message);
        return res.status(500).json({ message: `Failed to process request: ${err.message}` });
    }
}
