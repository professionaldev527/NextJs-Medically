import mongoose from 'mongoose';

const AppointmentSchema = new mongoose.Schema({
    patientEmail: { type: String, required: true, lowercase: true },
    patientName: { type: String, required: true },
    department: { type: String, required: true },
    doctor: { type: String, required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
    status: { type: String, enum: ['confirmed', 'cancelled'], default: 'confirmed' },
    createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Appointment || mongoose.model('Appointment', AppointmentSchema);
