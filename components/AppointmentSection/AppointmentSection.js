import React from 'react';
import AppointmentForm from './AppointmentForm';

const AppointmentSection = (props) => {
    return (
        <section className={'' + props.hclass} id="appointment-form">
            <h1 className="d-none">Book Appointment</h1>
            <div className="container">
                <div className="appt-layout">
                    {/* Left: Heading block */}
                    <div className="appt-heading">
                        <span className="appt-tag">Book a Visit</span>
                        <h2 className="appt-title">Make an <br />Appointment</h2>
                        <p className="appt-sub">
                            Schedule your consultation with one of our specialist doctors.
                            Fill in your details, pick a time, and we'll confirm via email.
                        </p>
                        <ul className="appt-features">
                            <li>✔ OTP-verified booking</li>
                            <li>✔ Instant email confirmation</li>
                            <li>✔ $100 credit for new patients</li>
                        </ul>
                    </div>

                    {/* Right: Form card */}
                    <div className="appt-form-card">
                        <AppointmentForm />
                    </div>
                </div>
            </div>

            <style jsx>{`
                .appt-layout {
                    display: flex;
                    align-items: flex-start;
                    gap: 48px;
                    background: #fff;
                    border-radius: 28px;
                    box-shadow: 0 8px 40px rgba(0, 11, 71, 0.10);
                    padding: 52px 60px;
                    margin: 0 auto;
                }

                .appt-heading {
                    flex: 0 0 280px;
                    min-width: 260px;
                    padding-right: 8px;
                    border-right: 1px solid #e8eef6;
                }

                .appt-tag {
                    display: inline-block;
                    background: linear-gradient(90deg, rgba(30,99,255,0.10), rgba(0,219,255,0.10));
                    color: #0080D2;
                    font-size: 14px;
                    font-weight: 600;
                    border-radius: 20px;
                    padding: 5px 16px;
                    margin-bottom: 14px;
                    letter-spacing: 0.5px;
                    font-family: 'Poppins', sans-serif;
                }

                .appt-title {
                    font-size: 42px;
                    font-weight: 400;
                    line-height: 1.15;
                    color: #000B47;
                    margin-bottom: 16px;
                    font-family: 'Katibeh', sans-serif;
                }

                .appt-sub {
                    color: #6b7280;
                    font-size: 15px;
                    line-height: 1.7;
                    margin-bottom: 22px;
                }

                .appt-features {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }

                .appt-features li {
                    color: #122f69;
                    font-size: 14px;
                    font-weight: 500;
                    padding: 6px 0;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }

                .appt-form-card {
                    flex: 1;
                    min-width: 0;
                }

                /* Override inner wrapper from AppointmentForm to remove its own box */
                .appt-form-card :global(.wrapper) {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 16px 20px;
                    background: none;
                    box-shadow: none;
                    padding: 0;
                    border-radius: 0;
                    align-items: start;
                }

                /* All form items fill their column */
                .appt-form-card :global(.form_item) {
                    max-width: 100% !important;
                    width: 100% !important;
                    padding-bottom: 0 !important;
                }

                .appt-form-card :global(.form_item label) {
                    font-size: 16px;
                    font-weight: 600;
                    color: #1e293b;
                    margin-bottom: 10px;
                    display: block;
                }

                /* Submit button row spans all 3 columns */
                .appt-form-card :global(.form_item:has(.form_btn)) {
                    grid-column: 1 / -1;
                }

                .appt-form-card :global(.form_item .form_control),
                .appt-form-card :global(.form_item select),
                .appt-form-card :global(.form_item input[type="text"]),
                .appt-form-card :global(.form_item input[type="email"]) {
                    width: 100% !important;
                    border-radius: 12px;
                    border: 1.5px solid #e2e8f0;
                    font-size: 16px;
                    padding: 14px 16px;
                    transition: border-color 0.2s;
                    background: #f8fafc;
                    color: #1e293b;
                }

                .appt-form-card :global(.form_item .form_control:focus),
                .appt-form-card :global(.form_item input:focus),
                .appt-form-card :global(.form_item select:focus) {
                    outline: none;
                    border-color: #0080D2;
                    background: #fff;
                }

                .appt-form-card :global(.react-datepicker-wrapper) {
                    width: 100%;
                }

                /* Submit + Confirm button — always full width, centered */
                .appt-form-card :global(.form_item:last-of-type) {
                    grid-column: 1 / -1;
                    text-align: center;
                }

                .appt-form-card :global(.form_btn),
                .appt-form-card :global(input[type="submit"]) {
                    display: block;
                    width: 100%;
                    max-width: 400px;
                    margin: 8px auto 0;
                    height: 56px;
                    border-radius: 14px;
                    font-size: 17px;
                    font-weight: 600;
                    letter-spacing: 0.5px;
                    cursor: pointer;
                    background: linear-gradient(90deg, #0080D2, #00C6FF);
                    color: #fff;
                    border: none;
                    transition: opacity 0.2s, transform 0.15s;
                    line-height: 56px;
                    padding: 0 32px;
                    text-align: center;
                }

                .appt-form-card :global(.form_btn:hover) {
                    opacity: 0.9;
                }

                .appt-form-card :global(.error) {
                    font-size: 12px;
                    color: #dc2626;
                    margin: 4px 0 0;
                }

                /* OTP step */
                .appt-form-card :global(.otp-wrapper) {
                    max-width: 460px;
                    margin: 0 auto;
                    padding: 8px 0;
                }

                /* Success step */
                .appt-form-card :global(.success-wrapper) {
                    max-width: 500px;
                    margin: 0 auto;
                    padding: 8px 0;
                }

                @media (max-width: 991px) {
                    .appt-layout {
                        flex-direction: column;
                        padding: 36px 28px;
                        gap: 32px;
                    }
                    .appt-heading {
                        flex: none;
                        border-right: none;
                        border-bottom: 1px solid #e8eef6;
                        padding-right: 0;
                        padding-bottom: 24px;
                    }
                    .appt-form-card :global(.wrapper) {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }

                @media (max-width: 575px) {
                    .appt-layout {
                        padding: 28px 18px;
                    }
                    .appt-form-card :global(.wrapper) {
                        grid-template-columns: 1fr;
                    }
                    .appt-title {
                        font-size: 32px;
                    }
                }
            `}</style>
        </section>
    );
};

export default AppointmentSection;