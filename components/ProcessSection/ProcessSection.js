import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';

/* image */
import Pross1 from '/public/images/work/1.jpg'
import Pross2 from '/public/images/work/2.jpg'
import Pross3 from '/public/images/work/3.jpg'
import Pross4 from '/public/images/work/4.jpg'
import Shape from '/public/images/work/shape.svg'
import Image from 'next/image';

const ProcessSection = (props) => {
    return (
        <section className={"" + props.hclass}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-9 col-12">
                        <SectionTitle title={'Our Working Process'} subtitle={'How We Work'}/>
                    </div>
                </div>
                <div className="work_wrapper">
                    <div className="row">
                        <div className="col-xl-3 col-lg-6 col-md-6 col-12">
                            <div className="work_card">
                                <div className="image">
                                    <Image src={Pross1} alt="" />
                                        <span className="number">01</span>
                                </div>
                                <div className="text">
                                    <h3>Make Appointment</h3>
                                    <p>Book your visit online or by phone in minutes. Choose your preferred specialist, department, and a time that fits your schedule — no long waits.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 col-12">
                            <div className="work_card">
                                <div className="image">
                                    <Image src={Pross2} alt="" />
                                        <span className="number">02</span>
                                </div>
                                <div className="text">
                                    <h3>Get Consultant</h3>
                                    <p>Meet with an experienced physician who listens carefully, reviews your history, and provides an accurate diagnosis with a clear, personalized treatment plan.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 col-12">
                            <div className="work_card">
                                <div className="image">
                                    <Image src={Pross3} alt="" />
                                        <span className="number">03</span>
                                </div>
                                <div className="text">
                                    <h3>Take Treatment</h3>
                                    <p>Receive world-class treatment delivered by specialists using cutting-edge technology, evidence-based protocols, and a compassionate, patient-first approach.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 col-12">
                            <div className="work_card">
                                <div className="image">
                                    <Image src={Pross4} alt="" />
                                        <span className="number">04</span>
                                </div>
                                <div className="text">
                                    <h3>Get Relief</h3>
                                    <p>Experience lasting recovery supported by follow-up care, rehabilitation guidance, and ongoing health monitoring to ensure you stay healthy and thriving.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="shape">
                        <Image src={Shape} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProcessSection;