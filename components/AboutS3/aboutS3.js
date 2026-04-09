import React from 'react';

import Ab2 from '/public/images/about2.jpg'
import Ab1 from '/public/images/signeture.png'
import Image from 'next/image';

const aboutS3 = () => {
    return (
        <section className="about_section_s3 pt-0">
            <div className="container">
                <div className="wrapper">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-12 order-2 order-lg-1">
                            <div className="content">
                                <h2>About Medically</h2>
                                <h3>Your Smile & Happiness Is Our Mission</h3>
                                <p>Medically was established with a clear mission: to make world-class medical care accessible, compassionate, and effective for every patient. Our multidisciplinary approach connects specialists across dental care, orthopedics, cardiology, gynecology, pharmacology, and rehabilitation under one trusted roof.</p>
                                <p>Every decision we make is driven by the best available clinical evidence and a deep respect for the individuals and families who place their health in our hands.</p>
                                <div className="ceo">
                                    <div>
                                        <h4>Savannah Nguyen</h4>
                                        <span>CEO & Founder of Madically</span>
                                    </div>
                                    <div>
                                        <Image src={Ab1} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12 order-1 order-lg-2">
                            <div className="about_left">
                                <Image src={Ab2} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default aboutS3;