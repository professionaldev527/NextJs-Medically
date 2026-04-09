import React, { useState } from 'react';

const accordionData = [
    {
        title: 'What are your clinic\'s operating hours?',
        content: 'Our medical facility is open Monday through Saturday, from 8:00 AM to 8:00 PM, and Sundays from 9:00 AM to 5:00 PM for urgent care.'
    },
    {
        title: 'Do I need an appointment, or do you accept walk-ins?',
        content: 'We strongly recommend scheduling an appointment to minimize your wait time, but we also welcome walk-in patients for non-life-threatening urgent matters.'
    },
    {
        title: 'Which insurance plans do you accept?',
        content: 'We partner with most major insurance providers including Medicare, Medicaid, Blue Cross Blue Shield, and Aetna. Please check with our front desk for specific coverage details.'
    },
    {
        title: 'How can I request a prescription refill?',
        content: 'You can request prescription refills through our secure patient portal online, or by calling our pharmacy department directly during regular office hours.'
    },
    {
        title: 'What should I bring to my first appointment?',
        content: 'Please bring a valid photo ID, your current insurance card, a list of any medications you are currently taking, and any relevant previous medical records.'
    },
    {
        title: 'Are telehealth or virtual video consultations available?',
        content: 'Yes, we offer secure telehealth appointments for follow-up visits, minor consultations, and mental health services. Contact our scheduling team to learn more.'
    },
    {
        title: 'How do I access my laboratory and test results?',
        content: 'All lab results are uploaded directly to your online patient portal. Your doctor will also call you to discuss any abnormal test results or urgent findings.'
    },
    {
        title: 'Do you provide pediatric care for infants and children?',
        content: 'Yes, we have a dedicated pediatric department staffed by experienced specialists providing complete healthcare services for newborns, children, and teenagers.'
    },
    {
        title: 'What should I do in case of a medical emergency after hours?',
        content: 'If you are experiencing a life-threatening emergency, please dial 911 or head to the nearest hospital emergency room immediately. For minor concerns, our on-call nurse is available 24/7.'
    },
    {
        title: 'Is parking available at your facility?',
        content: 'Yes, we offer free parking for all patients directly adjacent to the main clinic entrance, including designated accessible parking spots.'
    }
];

const FaqSection = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    }

    return (
        <section className="wpo-faq-section section-padding">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="section_title">
                            <h3>Frequently Asked Questions</h3>
                        </div>
                    </div>
                    <div className="col-lg-8 offset-lg-2">
                        <div className="wpo-faq-wrap">
                            <div className="row">
                                <div className="col-lg-12 col-12">
                                    <div className="wpo-benefits-item">
                                        {accordionData.map((accordion, index) => (
                                            <div
                                                className={`accordion-item ${activeIndex === index ? 'active' : ''}`}
                                                key={index}
                                            >
                                                <h3 className="accordion-header">
                                                    <button onClick={() => handleToggle(index)}>
                                                        {accordion.title}
                                                    </button>
                                                </h3>
                                                {activeIndex === index && (
                                                    <div className="accordion-body">
                                                        <p>{accordion.content}</p>
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FaqSection;
