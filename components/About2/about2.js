import React from 'react';
import CountUp from 'react-countup';
import About1 from '/public/images/about2.jpg';
import About3 from '/public/images/signeture.png';
import Image from 'next/image';


const About2 = (props) => {


    return (
        <section className="about_section_s2">
            <div className="container">
                <div className="wrapper">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-12">
                            <div className="about_left">
                                <Image src={About1} alt="" />
                                    <div className="award">
                                        <div className="icon">
                                            <i className="flaticon-cup"></i>
                                        </div>
                                        <div className="text">
                                            <h2><CountUp end={25} enableScrollSpy />+</h2>
                                            <p>Years Of Experience</p>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12">
                            <div className="content">
                                <h2>About Medically</h2>
                                <h3>Your Smile & Happiness Is Our Mission</h3>
                                <p>Founded on decades of medical excellence, Medically brings together leading specialists across six core departments to deliver comprehensive, evidence-based care. From preventive check-ups to complex surgical procedures, our integrated team ensures seamless, high-quality treatment at every stage of your health journey.</p>
                                <p>Our patient-first philosophy means we listen carefully, diagnose precisely, and treat effectively — working alongside you to achieve lasting wellness and an outstanding quality of life.</p>
                                <div className="ceo">
                                    <div>
                                        <h4>Savannah Nguyen</h4>
                                        <span>CEO & Founder of Madically</span>
                                    </div>
                                    <div>
                                        <Image src={About3} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About2;