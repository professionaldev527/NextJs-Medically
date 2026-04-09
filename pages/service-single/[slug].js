import React, { Fragment } from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link'
import Services from '../../api/Services';
import ServiceSidebar from './sidebar'
import Navbar from '../../components/Navbar/Navbar'
import PageTitle from '../../components/pagetitle/PageTitle'
import Footer from '../../components/footer/Footer';
import ContactForm from './ServiceFrom';
import Scrollbar from '../../components/scrollbar/scrollbar'
import simg1 from '/public/images/service-single/img-1.jpg'
import simg2 from '/public/images/service-single/img-2.jpg'
import logo from '/public/images/logo-2.svg'
import Image from 'next/image';

const ServiceSinglePage = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const router = useRouter()

    const serviceDetails = Services.find(item => item.slug === router.query.slug)

    return (
        <Fragment>
            <Navbar Logo={logo} hclass={'wpo-site-header wpo-site-header-s2'} />
            <PageTitle pageTitle={serviceDetails?.title} pagesub={'Service Single'} />
            <section className="service_single section-padding">
                <div className="container">
                    <div className="row g-0">
                        <div className="col-lg-8 col-12 service_content">
                            <div>
                                <Image src={serviceDetails?.simage} alt="" />
                                <h2>{serviceDetails?.title}</h2>
                                <p>{serviceDetails?.intro}</p>
                                <p>{serviceDetails?.body}</p>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 col-12">
                                    <Image src={simg1} alt="" />
                                </div>
                                <div className="col-lg-6 col-12">
                                    <Image src={simg2} alt="" />
                                </div>
                            </div>
                            <div>
                                <h3>Our Capabilities</h3>
                                <p>{serviceDetails?.capabilitiesIntro}</p>
                                <ul>
                                    {serviceDetails?.capabilities?.map((cap, i) => (
                                        <li key={i}>{cap}</li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h3>Our Approach</h3>
                                <p>{serviceDetails?.approach}</p>
                            </div>
                            <div className="other-service">
                                <h3>Related Service</h3>
                                <div className="row">
                                    {Services.slice(0, 3).map((serves, sitem) => (
                                        <div className="col-lg-4 col-md-6 col-12" key={sitem}>
                                            <div className="service_card">
                                                <div className="icon">
                                                    <i className={serves.icon}></i>
                                                </div>
                                                <div className="content">
                                                    <h2>{serves.title}</h2>
                                                    <p>{serves.description}</p>
                                                    <Link onClick={ClickHandler} href={'/service-single/[slug]'} as={`/service-single/${serves.slug}`}><i className="flaticon-right-arrow"></i></Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="cta_form_s2">
                                <div className={"title"}>
                                    <h3>Make An Appointment</h3>
                                    <p>Get in touch with us to see how we can help you with your Problems.</p>
                                </div>
                                <ContactForm />

                            </div>
                        </div>
                        <div className="col-lg-4 col-12">
                            <ServiceSidebar/>
                        </div>
                    </div>
                </div>
            </section>
            <Footer hclass={'wpo-site-footer_s2'} />
            <Scrollbar />
        </Fragment>
    )
};
export default ServiceSinglePage;