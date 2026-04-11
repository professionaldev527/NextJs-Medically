import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/Pagetitle/PageTitle';
import Footer from '../../components/Footer/Footer';
import Scrollbar from '../../components/Scrollbar/scrollbar';
import logo from '../../public/images/logo-2.svg';

const TermsAndConditionsPage = () => {
    return (
        <Fragment>
            <Navbar Logo={logo} hclass={'wpo-site-header wpo-site-header-s2'} />
            <PageTitle pageTitle={'Terms & Conditions'} pagesub={'Terms & Conditions'} />
            <section className="section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <div style={{ lineHeight: '1.8', color: '#444' }}>

                                <p style={{ color: '#888', marginBottom: '32px' }}>Last Updated: April 9, 2025</p>

                                <h2 style={{ color: '#122f69', marginBottom: '12px' }}>1. Acceptance of Terms</h2>
                                <p>By accessing or using the Medically website, scheduling appointments, or receiving medical services provided by Medically, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree to these terms, you must not use our website or services.</p>

                                <h2 style={{ color: '#122f69', marginBottom: '12px', marginTop: '32px' }}>2. Medical Disclaimer</h2>
                                <p>The information provided on this website is for general informational and educational purposes only. It is not intended as, and shall not be understood or construed as, professional medical advice, diagnosis, or treatment.</p>
                                <p>Always seek the advice of a qualified and licensed healthcare professional with any questions you may have regarding a medical condition. Never disregard professional medical advice or delay seeking it because of something you have read on this website. In case of a medical emergency, contact your local emergency services immediately.</p>

                                <h2 style={{ color: '#122f69', marginBottom: '12px', marginTop: '32px' }}>3. Eligibility for Services</h2>
                                <p>Our medical services are available to individuals who:</p>
                                <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
                                    <li>Are 18 years of age or older, or are accompanied and consented for by a parent or legal guardian.</li>
                                    <li>Provide accurate, complete, and up-to-date personal and medical information during registration and consultation.</li>
                                    <li>Agree to comply with the instructions and treatment recommendations of Medically's licensed healthcare providers.</li>
                                </ul>

                                <h2 style={{ color: '#122f69', marginBottom: '12px', marginTop: '32px' }}>4. Appointments & Cancellation Policy</h2>
                                <p>When booking an appointment through our website or by phone, you agree to the following:</p>
                                <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
                                    <li><strong>Timely Attendance:</strong> Please arrive at least 15 minutes before your scheduled appointment time to complete any required registration or paperwork.</li>
                                    <li><strong>Cancellation Notice:</strong> If you need to cancel or reschedule your appointment, please notify us at least 24 hours in advance to avoid a cancellation fee.</li>
                                    <li><strong>No-Show Policy:</strong> Repeated no-shows without advance notice may result in restriction from future appointment bookings.</li>
                                    <li><strong>Emergency Rescheduling:</strong> We understand emergencies arise. Please contact us as soon as possible to reschedule without penalty in genuine urgent circumstances.</li>
                                </ul>

                                <h2 style={{ color: '#122f69', marginBottom: '12px', marginTop: '32px' }}>5. Payment & Billing</h2>
                                <p>Medically accepts most major health insurance providers, as well as direct payment options. By using our services, you agree to:</p>
                                <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
                                    <li>Provide accurate and valid insurance information where applicable.</li>
                                    <li>Be responsible for co-payments, deductibles, and any charges not covered by your insurance plan.</li>
                                    <li>Pay outstanding balances within 30 days of receiving a billing statement.</li>
                                    <li>Contact our billing department promptly to resolve any discrepancies or disputes in your account.</li>
                                </ul>

                                <h2 style={{ color: '#122f69', marginBottom: '12px', marginTop: '32px' }}>6. Patient Responsibilities</h2>
                                <p>As a patient of Medically, you agree to:</p>
                                <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
                                    <li>Provide complete and truthful information about your health history, current symptoms, medications, and allergies.</li>
                                    <li>Follow the treatment plans and medical advice provided by our healthcare professionals.</li>
                                    <li>Treat all Medically staff with respect and professionalism. Abusive, threatening, or discriminatory behavior will not be tolerated and may result in termination of the clinical relationship.</li>
                                    <li>Notify us of any changes in your health status, contact information, or insurance details.</li>
                                </ul>

                                <h2 style={{ color: '#122f69', marginBottom: '12px', marginTop: '32px' }}>7. Intellectual Property</h2>
                                <p>All content published on the Medically website — including text, images, graphics, logos, and medical illustrations — is the exclusive property of Medically or its licensed content providers. You may not reproduce, distribute, modify, or republish any content without express written permission from Medically.</p>

                                <h2 style={{ color: '#122f69', marginBottom: '12px', marginTop: '32px' }}>8. Limitation of Liability</h2>
                                <p>To the fullest extent permitted by law, Medically shall not be liable for any indirect, incidental, consequential, or punitive damages arising from your use of this website or our services, including but not limited to reliance on any information provided on the website, delays in scheduling, or outcomes of medical treatments outside of our direct clinical negligence.</p>

                                <h2 style={{ color: '#122f69', marginBottom: '12px', marginTop: '32px' }}>9. Third-Party Links</h2>
                                <p>Our website may contain links to third-party websites for your convenience or reference. Medically does not endorse or assume responsibility for the content, privacy practices, or policies of any third-party sites. We encourage you to review the terms and privacy policies of any external websites you visit.</p>

                                <h2 style={{ color: '#122f69', marginBottom: '12px', marginTop: '32px' }}>10. Governing Law</h2>
                                <p>These Terms and Conditions are governed by and construed in accordance with the laws of the State of New York, United States, without regard to its conflict-of-law provisions. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts located in New York County, New York.</p>

                                <h2 style={{ color: '#122f69', marginBottom: '12px', marginTop: '32px' }}>11. Changes to These Terms</h2>
                                <p>Medically reserves the right to amend these Terms and Conditions at any time. Changes will be effective immediately upon posting to this page. Your continued use of our website or services following the posting of changes constitutes your acceptance of such changes. We recommend checking this page periodically for updates.</p>

                                <h2 style={{ color: '#122f69', marginBottom: '12px', marginTop: '32px' }}>12. Contact Us</h2>
                                <p>If you have any questions, concerns, or feedback about these Terms and Conditions, please contact us:</p>
                                <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
                                    <li><strong>Email:</strong> medically@gmail.com</li>
                                    <li><strong>Phone:</strong> (704) 555-0127</li>
                                    <li><strong>Address:</strong> 123 Medical Avenue, New York, NY, USA</li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer hclass={'wpo-site-footer_s2'} />
            <Scrollbar />
        </Fragment>
    );
};

export default TermsAndConditionsPage;
