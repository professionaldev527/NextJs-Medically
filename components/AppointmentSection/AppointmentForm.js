
import React, { useState } from 'react';

// Department → Doctor mapping aligned with Services.js and team.js
const departmentDoctors = {
    'dental-care': [{ value: 'marlene-henry', label: 'Dr. Marlene Henry' }],
    'pharmacology': [{ value: 'dianne-russell', label: 'Dr. Dianne Russell' }],
    'orthopedic': [{ value: 'jerome-bell', label: 'Dr. Jerome Bell' }],
    'gyneological': [{ value: 'leslie-alexander', label: 'Dr. Leslie Alexander' }],
    'rehabilitation': [{ value: 'alexander-leslie', label: 'Dr. Alexander Leslie' }],
    'heart-surgery': [{ value: 'cody-fisher', label: 'Dr. Cody Fisher' }],
};

const departments = [
    { value: 'dental-care', label: 'Dental Care' },
    { value: 'pharmacology', label: 'Pharmacology' },
    { value: 'orthopedic', label: 'Orthopedic' },
    { value: 'gyneological', label: 'Gyneological' },
    { value: 'rehabilitation', label: 'Rehabilitation' },
    { value: 'heart-surgery', label: 'Heart Surgery' },
];

const AppointmentForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        department: '',
        doctor: '',
    });

    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submissionError, setSubmissionError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        // Reset doctor when department changes
        if (name === 'department') {
            setFormData((prev) => ({ ...prev, department: value, doctor: '' }));
            validate({ department: value });
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
            validate({ [name]: value });
        }
    };

    const validate = (fieldValues = formData) => {
        let tempErrors = { ...errors };

        if ('name' in fieldValues)
            tempErrors.name = fieldValues.name ? '' : 'Name is required';
        if ('email' in fieldValues) {
            tempErrors.email = fieldValues.email ? '' : 'Email is required';
            if (fieldValues.email)
                tempErrors.email = /\S+@\S+\.\S+/.test(fieldValues.email)
                    ? ''
                    : 'Email address is invalid';
        }
        if ('department' in fieldValues)
            tempErrors.department = fieldValues.department
                ? ''
                : 'Department is required';
        if ('doctor' in fieldValues)
            tempErrors.doctor = fieldValues.doctor ? '' : 'Doctor is required';

        setErrors(tempErrors);

        if (fieldValues === formData)
            return Object.values(tempErrors).every((x) => x === '');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(false);
        setSubmissionError(null);
        if (validate()) {
            setIsSubmitting(true);
            setTimeout(() => {
                setSubmitted(true);
                setIsSubmitting(false);
                handleReset();
            }, 1500);
        }
    };

    const handleReset = () => {
        setFormData({ name: '', email: '', department: '', doctor: '' });
        setErrors({});
        setSubmitted(false);
        setSubmissionError(null);
    };

    const availableDoctors = formData.department
        ? departmentDoctors[formData.department] || []
        : [];

    return (
        <form onSubmit={handleSubmit}>
            <div className="wrapper">
                <div className="form_item">
                    <label>Your Name</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        className="form_control"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={() => validate({ name: formData.name })}
                    />
                    {errors.name && <p className="error">{errors.name}</p>}
                </div>
                <div className="form_item">
                    <label>Your Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="form_control"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={() => validate({ email: formData.email })}
                    />
                    {errors.email && <p className="error">{errors.email}</p>}
                </div>
                <div className="form_item">
                    <label>Select Department</label>
                    <select
                        name="department"
                        className="form_control"
                        value={formData.department}
                        onChange={handleChange}
                        onBlur={() => validate({ department: formData.department })}
                    >
                        <option value="">Department</option>
                        {departments.map((dept) => (
                            <option key={dept.value} value={dept.value}>
                                {dept.label}
                            </option>
                        ))}
                    </select>
                    {errors.department && <p className="error">{errors.department}</p>}
                </div>
                <div className="form_item">
                    <label>Choose Doctor</label>
                    <select
                        name="doctor"
                        className="form_control"
                        value={formData.doctor}
                        onChange={handleChange}
                        onBlur={() => validate({ doctor: formData.doctor })}
                        disabled={!formData.department}
                    >
                        <option value="">
                            {formData.department ? 'Select Doctor' : 'Select a department first'}
                        </option>
                        {availableDoctors.map((doc) => (
                            <option key={doc.value} value={doc.value}>
                                {doc.label}
                            </option>
                        ))}
                    </select>
                    {errors.doctor && <p className="error">{errors.doctor}</p>}
                </div>
                <div className="form_item">
                    <input className="form_btn" type="submit" value={isSubmitting ? 'Sending...' : 'Send'} disabled={isSubmitting} />
                </div>
                {submitted && <div className="success_message">Appointment request sent successfully!</div>}
                {submissionError && <div className="error_message">{submissionError}</div>}
            </div>
        </form>
    );
};

export default AppointmentForm;