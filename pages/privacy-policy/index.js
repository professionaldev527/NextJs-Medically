import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import logo from '../../../public/images/logo-2.svg';

const PrivacyPolicyPage = () => {
    return (
        <Fragment>
            <Navbar Logo={logo} hclass={'wpo-site-header wpo-site-header-s2'} />
            <PageTitle pageTitle={'Privacy & Policy'} pagesub={'Privacy & Policy'} />
            <section className="section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <div style={{ lineHeight: '1.8', color: '#444' }}>

                                <p style={{ color: '#888', marginBottom: '32px' }}>Last Updated: April 9, 2025</p>

                                <h2 style={{ color: '#122f69', marginBottom: '12px' }}>1. Introduction</h2>
                                <p>Welcome to Medically ("we", "our", or "us"). We are committed to protecting the privacy and confidentiality of your personal and medical information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our healthcare services.</p>
                                <p>By accessing our website or scheduling an appointment, you agree to the terms of this Privacy Policy. If you do not agree with the terms, please do not use our services.</p>

                                <h2 style={{ color: '#122f69', marginBottom: '12px', marginTop: '32px' }}>2. Information We Collect</h2>
                                <p>We may collect the following types of information:</p>
                                <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
                                    <li><strong>Personal Identification Information:</strong> Full name, date of birth, gender, contact details (phone number, email address, and mailing address).</li>
                                    <li><strong>Protected Health Information (PHI):</strong> Medical history, diagnoses, treatment records, prescriptions, insurance details, and clinical notes — collected and maintained in compliance with applicable healthcare privacy laws.</li>
                                    <li><strong>Technical Data:</strong> IP address, browser type, pages visited, and time spent on our website, collected via cookies and analytics tools to improve our service.</li>
                                    <li><strong>Appointment Data:</strong> Department selections, preferred doctor, appointment dates and times.</li>
                                </ul>

                                <h2 style={{ color: '#122f69', marginBottom: '12px', marginTop: '32px' }}>3. How We Use Your Information</h2>
                                <p>We use collected information for the following purposes:</p>
                                <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
                                    <li>To provide, schedule, and manage your medical appointments and treatments.</li>
                                    <li>To communicate important health-related information, appointment reminders, and follow-up care instructions.</li>
                                    <li>To process insurance claims and billing transactions.</li>
                                    <li>To improve and personalize our website experience and medical services.</li>
                                    <li>To comply with applicable legal obligations and healthcare regulations.</li>
                                    <li>To conduct internal audits, quality assurance, and medical research (only in anonymized or aggregated form).</li>
                                </ul>

                                <h2 style={{ color: '#122f69', marginBottom: '12px', marginTop: '32px' }}>4. How We Protect Your Information</h2>
                                <p>Medically implements industry-standard administrative, physical, and technical safeguards to protect your personal and medical data, including:</p>
                                <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
                                    <li>End-to-end encryption of all electronic health records (EHR).</li>
                                    <li>Strict role-based access controls, ensuring only authorized clinical staff can access patient records.</li>
                                    <li>Regular server security audits and vulnerability assessments.</li>
                                    <li>Compliance with HIPAA (Health Insurance Portability and Accountability Act) and applicable local healthcare data legislation.</li>
                                </ul>

                                <h2 style={{ color: '#122f69', marginBottom: '12px', marginTop: '32px' }}>5. Sharing of Information</h2>
                                <p>We do not sell, trade, or rent your personal or medical information to third parties. We may share information in limited circumstances:</p>
                                <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
                                    <li><strong>With Healthcare Providers:</strong> Specialist referrals, laboratory providers, pharmacies, and imaging centers involved in your direct care.</li>
                                    <li><strong>With Insurance Companies:</strong> For the purpose of processing claims and verifying coverage.</li>
                                    <li><strong>With Legal Authorities:</strong> When required by law, court order, or to protect public health and safety.</li>
                                    <li><strong>With Service Providers:</strong> Trusted IT and software vendors who assist us in website operation and data storage, bound by strict confidentiality agreements.</li>
                                </ul>

                                <h2 style={{ color: '#122f69', marginBottom: '12px', marginTop: '32px' }}>6. Cookies & Tracking Technologies</h2>
                                <p>Our website uses cookies to enhance your browsing experience. Cookies help us remember your preferences, analyze website traffic, and improve our services. You may adjust your browser settings to refuse cookies; however, some features of the website may not function correctly if you do so.</p>

                                <h2 style={{ color: '#122f69', marginBottom: '12px', marginTop: '32px' }}>7. Your Rights</h2>
                                <p>As a patient or website user, you have the following rights regarding your personal information:</p>
                                <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
                                    <li>The right to access your personal and medical records held by us.</li>
                                    <li>The right to request corrections to inaccurate or incomplete data.</li>
                                    <li>The right to request deletion of personal data where legally permissible.</li>
                                    <li>The right to withdraw consent for non-essential data processing at any time.</li>
                                    <li>The right to lodge a complaint with a data protection authority if you believe your rights have been violated.</li>
                                </ul>

                                <h2 style={{ color: '#122f69', marginBottom: '12px', marginTop: '32px' }}>8. Changes to This Policy</h2>
                                <p>We reserve the right to update this Privacy Policy periodically. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy regularly to stay informed about how we protect your information.</p>

                                <h2 style={{ color: '#122f69', marginBottom: '12px', marginTop: '32px' }}>9. Contact Us</h2>
                                <p>If you have any questions or concerns regarding this Privacy Policy or the handling of your personal data, please contact our Data Privacy Officer:</p>
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

export default PrivacyPolicyPage;
