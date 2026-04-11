import React, { useState } from 'react';

const CtaForm = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: ''
    });
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        company: ''
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
  
    const validate = () => {
        let formIsValid = true;
        let errors = {};
        if (!formData.name) {
            formIsValid = false;
            errors.name = 'Name is requierd';
        }

        if (!formData.email) {
            formIsValid = false;
            errors.email = 'Email is requierd';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            formIsValid = false;
            errors.email = "Email is invalid";
        }
   
        if (!formData.company) {
            formIsValid = false;
            errors.company = 'Company is required';
        }

        setErrors(errors);
        return formIsValid;

    };
    const [status, setStatus] = useState({ loading: false, message: '', type: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validate()) {
            setStatus({ loading: true, message: '', type: '' });
            try {
                const response = await fetch('/api/consultation', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData),
                });
                const result = await response.json();

                if (response.ok) {
                    setStatus({ loading: false, message: `Success! Your free consultation voucher for ${formData.company} has been sent to your email.`, type: 'success' });
                    setFormData({ name: '', email: '', company: '' }); // Clear form
                } else {
                    setStatus({ loading: false, message: result.message, type: 'error' });
                }
            } catch (error) {
                setStatus({ loading: false, message: 'Something went wrong. Please try again.', type: 'error' });
            }
        }
    };

    return (
        <form className="cta_form" onSubmit={handleSubmit}>
            <div className="cta-inputs-container">
                <div className="input_filled">
                    <input type="text" name='name' value={formData.name} onChange={handleChange} placeholder="Your Name*" />
                    {errors.name && <span className='error'>{errors.name}</span>}
                </div>
                <div className="input_filled">
                    <input type="text" name="email" placeholder="Your Email*" value={formData.email} onChange={handleChange} />
                    {errors.email && <span className="error">{errors.email}</span>}
                </div>
                <div className="input_filled">
                    <input type="text" name="company" placeholder="Your Company*" value={formData.company} onChange={handleChange} />
                    {errors.company && <span className="error">{errors.company}</span>}
                </div>
                <div className="input_filled">
                    <button type="submit" disabled={status.loading}>
                        {status.loading ? 'Sending...' : 'Free Consultancy'}
                    </button>
                </div>
            </div>
            
            {status.message && (
                <div className={`status-message ${status.type}`}>
                    {status.type === 'success' ? '✔ ' : '✖ '} {status.message}
                </div>
            )}
        </form>
    );
};

export default CtaForm;