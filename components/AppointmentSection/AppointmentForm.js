import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

// Department → Doctor mapping aligned with Services.js and team.js
const departmentDoctors = {
    'Dental Care': [{ value: 'Dr. Marlene Henry', label: 'Dr. Marlene Henry' }],
    'Pharmacology': [{ value: 'Dr. Dianne Russell', label: 'Dr. Dianne Russell' }],
    'Orthopedic': [{ value: 'Dr. Jerome Bell', label: 'Dr. Jerome Bell' }],
    'Gyneological': [{ value: 'Dr. Leslie Alexander', label: 'Dr. Leslie Alexander' }],
    'Rehabilitation': [{ value: 'Dr. Alexander Leslie', label: 'Dr. Alexander Leslie' }],
    'Heart Surgery': [{ value: 'Dr. Cody Fisher', label: 'Dr. Cody Fisher' }],
};

const departments = Object.keys(departmentDoctors);

const timeSlots = [
    '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM',
    '11:00 AM', '11:30 AM', '12:00 PM', '02:00 PM',
    '02:30 PM', '03:00 PM', '03:30 PM', '04:00 PM',
    '04:30 PM', '05:00 PM',
];

const STEP_FORM = 'form';
const STEP_OTP = 'otp';
const STEP_SUCCESS = 'success';

const AppointmentForm = () => {
    const [step, setStep] = useState(STEP_FORM);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        department: '',
        doctor: '',
        date: null,
        time: '',
    });

    const [errors, setErrors] = useState({});
    const [otp, setOtp] = useState('');
    const [otpError, setOtpError] = useState('');
    const [loading, setLoading] = useState(false);
    const [successData, setSuccessData] = useState(null);

    const availableDoctors = formData.department
        ? departmentDoctors[formData.department] || []
        : [];

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'department') {
            setFormData((prev) => ({ ...prev, department: value, doctor: '' }));
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }
        setErrors((prev) => ({ ...prev, [name]: '' }));
    };

    const handleDateChange = (date) => {
        setFormData((prev) => ({ ...prev, date }));
        setErrors((prev) => ({ ...prev, date: '' }));
    };

    const validate = () => {
        const e = {};
        if (!formData.name.trim()) e.name = 'Name is required';
        if (!formData.email.trim()) e.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) e.email = 'Email is invalid';
        if (!formData.department) e.department = 'Department is required';
        if (!formData.doctor) e.doctor = 'Doctor is required';
        if (!formData.date) e.date = 'Date is required';
        if (!formData.time) e.time = 'Time is required';
        return e;
    };

    const handleSendOTP = async (e) => {
        e.preventDefault();
        const errs = validate();
        if (Object.keys(errs).length > 0) {
            setErrors(errs);
            return;
        }

        setLoading(true);
        try {
            const dateStr = formData.date.toLocaleDateString('en-US', {
                weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
            });

            const res = await fetch('/api/appointment/send-otp', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    department: formData.department,
                    doctor: formData.doctor,
                    date: dateStr,
                    time: formData.time,
                }),
            });

            const data = await res.json();
            if (!res.ok) throw new Error(data.message);
            setStep(STEP_OTP);
        } catch (err) {
            setErrors({ submit: err.message });
        } finally {
            setLoading(false);
        }
    };

    const handleVerifyOTP = async (e) => {
        e.preventDefault();
        if (!otp.trim() || otp.length < 6) {
            setOtpError('Please enter the 6-digit OTP sent to your email.');
            return;
        }

        setLoading(true);
        setOtpError('');
        try {
            const res = await fetch('/api/appointment/verify-otp', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: formData.email, otp }),
            });

            const data = await res.json();
            if (!res.ok) throw new Error(data.message);
            setSuccessData(data);
            setStep(STEP_SUCCESS);
        } catch (err) {
            setOtpError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleResendOTP = async () => {
        setLoading(true);
        setOtpError('');
        try {
            const dateStr = formData.date.toLocaleDateString('en-US', {
                weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
            });
            const res = await fetch('/api/appointment/send-otp', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    department: formData.department,
                    doctor: formData.doctor,
                    date: dateStr,
                    time: formData.time,
                }),
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.message);
            setOtpError('New OTP sent! Check your email.');
        } catch (err) {
            setOtpError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleReset = () => {
        setStep(STEP_FORM);
        setFormData({ name: '', email: '', department: '', doctor: '', date: null, time: '' });
        setErrors({});
        setOtp('');
        setOtpError('');
        setSuccessData(null);
    };

    // ── STEP: SUCCESS ──────────────────────────────────────────────
    if (step === STEP_SUCCESS) {
        return (
            <div className="success-wrapper">
                <div style={{ textAlign: 'center' }}>
                    <i className="bx bx-check-circle" style={{ fontSize: '72px', color: '#16a34a', marginBottom: '16px' }}></i>
                </div>
                <h3 style={{ color: '#16a34a', marginBottom: '12px', textAlign: 'center', fontSize: '32px', fontWeight: 'bold' }}>Appointment Confirmed!</h3>
                <p style={{ color: '#374151', marginBottom: '8px', textAlign: 'center', fontSize: '18px', lineHeight: '1.5' }}>
                    A confirmation has been sent to<br/><strong style={{color:'#122f69', fontSize:'20px'}}>{formData.email}</strong>
                </p>
                
                <div style={{
                    background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '12px',
                    padding: '24px', margin: '28px 0', textAlign: 'left', fontSize: '18px'
                }}>
                    <p style={{ margin: '12px 0', display: 'flex', justifyContent: 'space-between' }}><strong style={{color:'#122f69'}}>Department:</strong> <span style={{color:'#4A5568', textAlign:'right'}}>{formData.department}</span></p>
                    <p style={{ margin: '12px 0', display: 'flex', justifyContent: 'space-between' }}><strong style={{color:'#122f69'}}>Doctor:</strong> <span style={{color:'#4A5568', textAlign:'right'}}>{formData.doctor}</span></p>
                    <p style={{ margin: '12px 0', display: 'flex', justifyContent: 'space-between' }}><strong style={{color:'#122f69'}}>Date:</strong> <span style={{color:'#4A5568', textAlign:'right'}}>{formData.date?.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span></p>
                    <p style={{ margin: '12px 0', display: 'flex', justifyContent: 'space-between' }}><strong style={{color:'#122f69'}}>Time:</strong> <span style={{color:'#4A5568', textAlign:'right'}}>{formData.time}</span></p>
                </div>

                {successData?.isNewPatient && (
                    <div style={{
                        background: '#eef2ff', border: '1px solid #c7d2fe', borderRadius: '10px',
                        padding: '18px 20px', marginBottom: '28px', textAlign: 'center', fontSize: '16px', lineHeight: '1.4',
                        display: 'flex', alignItems: 'center', justifyContent: 'center'
                    }}>
                        <i className="bx bx-gift" style={{fontSize: '24px', marginRight: '8px', color: '#6366f1'}}></i> 
                        <span style={{color: '#1e293b'}}><strong>$100 store credit</strong> has been added to your account. Visit our Shop!</span>
                    </div>
                )}
                
                <div style={{ textAlign: 'center', marginTop: '12px' }}>
                    <button
                        className="form_btn"
                        onClick={handleReset}
                        style={{
                            width: '100%',
                            height: '60px',
                            background: 'linear-gradient(90deg, #3282fc, #2860d8)',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '8px',
                            fontSize: '20px',
                            fontWeight: '600',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '8px',
                            transition: 'all 0.3s ease'
                        }}
                    >
                        Book Another Appointment <i className="bx bx-right-arrow-alt" style={{fontSize: '24px'}}></i>
                    </button>
                </div>
            </div>
        );
    }

    // ── STEP: OTP ──────────────────────────────────────────────────
    if (step === STEP_OTP) {
        return (
            <form onSubmit={handleVerifyOTP}>
                <div className="otp-wrapper" style={{ padding: '24px', background: '#fff', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
                    <div style={{ textAlign: 'center', marginBottom: '28px' }}>
                        <i className="bx bx-envelope-open" style={{ fontSize: '56px', color: '#122f69', marginBottom: '12px' }}></i>
                        <h3 style={{ color: '#122f69', marginBottom: '8px', fontSize: '28px', fontWeight: 'bold' }}>Check Your Email</h3>
                        <p style={{ color: '#6b7280', fontSize: '16px', margin: 0, lineHeight: '1.5' }}>
                            We sent a 6-digit OTP to <strong style={{color:'#1e293b'}}>{formData.email}</strong>.<br />
                            It expires in 10 minutes.
                        </p>
                    </div>

                    <div style={{ marginBottom: '24px' }}>
                        <label style={{ display: 'block', marginBottom: '12px', fontWeight: '600', color: '#1e293b', fontSize: '16px', textAlign: 'center' }}>Enter Verification Code</label>
                        <input
                            type="text"
                            inputMode="numeric"
                            maxLength={6}
                            className="form_control otp-input"
                            value={otp}
                            onChange={(e) => { setOtp(e.target.value); setOtpError(''); }}
                            style={{ width: '100%', maxWidth: '320px', margin: '0 auto', display: 'block', textAlign: 'center', fontSize: '32px', letterSpacing: '14px', fontWeight: 'bold', borderRadius: '12px', border: '2px solid #e2e8f0', padding: '16px', background: '#f8fafc', color: '#122f69' }}
                        />
                        {otpError && (
                            <p style={{ color: otpError.includes('sent') ? '#16a34a' : '#dc2626', marginTop: '8px', fontSize: '13px', textAlign: 'center' }}>
                                {otpError}
                            </p>
                        )}
                    </div>

                    <div style={{ textAlign: 'center' }}>
                        <button
                            type="submit"
                            disabled={loading}
                            style={{
                                display: 'block', width: '100%', maxWidth: '320px', margin: '0 auto', padding: '18px',
                                background: 'linear-gradient(90deg, #3282fc, #2860d8)',
                                color: '#fff', border: 'none', borderRadius: '12px',
                                fontSize: '18px', fontWeight: 'bold', cursor: loading ? 'not-allowed' : 'pointer',
                                letterSpacing: '0.5px', opacity: loading ? 0.7 : 1,
                                marginBottom: '20px', transition: 'all 0.3s ease',
                                boxShadow: '0 4px 12px rgba(50, 130, 252, 0.25)'
                            }}
                        >
                            {loading ? 'Verifying...' : 'Confirm Appointment'}
                        </button>
                    </div>

                    <p style={{ textAlign: 'center', fontSize: '13px', color: '#6b7280', margin: 0 }}>
                        Didn't receive it?{' '}
                        <button
                            type="button"
                            onClick={handleResendOTP}
                            disabled={loading}
                            style={{ background: 'none', border: 'none', color: '#0080D2', cursor: 'pointer', fontWeight: '600', padding: 0 }}
                        >
                            Resend OTP
                        </button>
                        {' · '}
                        <button
                            type="button"
                            onClick={() => setStep(STEP_FORM)}
                            style={{ background: 'none', border: 'none', color: '#9ca3af', cursor: 'pointer', padding: 0 }}
                        >
                            Edit details
                        </button>
                    </p>
                </div>
            </form>
        );
    }

    // ── STEP: FORM ─────────────────────────────────────────────────
    return (
        <form onSubmit={handleSendOTP}>
            <div className="wrapper">
                {/* Name */}
                <div className="form_item">
                    <label>Your Name</label>
                    <input
                        type="text" name="name" placeholder="Full Name"
                        className="form_control" value={formData.name} onChange={handleChange}
                    />
                    {errors.name && <p className="error">{errors.name}</p>}
                </div>

                {/* Email */}
                <div className="form_item">
                    <label>Your Email</label>
                    <input
                        type="email" name="email" placeholder="Email Address"
                        className="form_control" value={formData.email} onChange={handleChange}
                    />
                    {errors.email && <p className="error">{errors.email}</p>}
                </div>

                {/* Department */}
                <div className="form_item">
                    <label>Select Department</label>
                    <select name="department" className="form_control" value={formData.department} onChange={handleChange}>
                        <option value="">Select Department</option>
                        {departments.map((d) => (
                            <option key={d} value={d}>{d}</option>
                        ))}
                    </select>
                    {errors.department && <p className="error">{errors.department}</p>}
                </div>

                {/* Doctor */}
                <div className="form_item">
                    <label>Choose Doctor</label>
                    <select
                        name="doctor" className="form_control"
                        value={formData.doctor} onChange={handleChange}
                        disabled={!formData.department}
                    >
                        <option value="">
                            {formData.department ? 'Select Doctor' : 'Select a department first'}
                        </option>
                        {availableDoctors.map((doc) => (
                            <option key={doc.value} value={doc.value}>{doc.label}</option>
                        ))}
                    </select>
                    {errors.doctor && <p className="error">{errors.doctor}</p>}
                </div>

                {/* Date */}
                <div className="form_item">
                    <label>Appointment Date</label>
                    <DatePicker
                        selected={formData.date}
                        onChange={handleDateChange}
                        minDate={new Date()}
                        filterDate={(d) => d.getDay() !== 0 && d.getDay() !== 6} // Exclude weekends
                        placeholderText="Select a date"
                        className="form_control"
                        dateFormat="MMMM d, yyyy"
                        autoComplete="off"
                    />
                    {errors.date && <p className="error">{errors.date}</p>}
                </div>

                {/* Time */}
                <div className="form_item">
                    <label>Preferred Time</label>
                    <select name="time" className="form_control" value={formData.time} onChange={handleChange}>
                        <option value="">Select Time Slot</option>
                        {timeSlots.map((t) => (
                            <option key={t} value={t}>{t}</option>
                        ))}
                    </select>
                    {errors.time && <p className="error">{errors.time}</p>}
                </div>

                {/* Submit */}
                <div className="form_item" style={{ gridColumn: '1 / -1', marginTop: '12px' }}>
                    <button
                        className="form_btn" 
                        type="submit"
                        disabled={loading}
                        style={{
                            width: '100%',
                            height: '56px',
                            background: 'linear-gradient(90deg, #3282fc, #2860d8)',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '6px',
                            fontSize: '18px',
                            fontWeight: '600',
                            cursor: loading ? 'not-allowed' : 'pointer',
                            transition: 'all 0.3s ease'
                        }}
                    >
                        {loading ? 'Sending Verification...' : 'Send Verification OTP'}
                    </button>
                </div>

                {errors.submit && (
                    <p className="error" style={{ textAlign: 'center', marginTop: '8px' }}>{errors.submit}</p>
                )}
            </div>
        </form>
    );
};

export default AppointmentForm;