import mongoose from 'mongoose';

const PatientSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    credits: { type: Number, default: 100 },
    createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Patient || mongoose.model('Patient', PatientSchema);
