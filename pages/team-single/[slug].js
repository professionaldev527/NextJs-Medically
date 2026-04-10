import React, { Fragment } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router'
import Teams from '../../api/team';
import Navbar from '../../components/Navbar/Navbar'
import PageTitle from '../../components/pagetitle/PageTitle'
import Footer from '../../components/footer/Footer';
import ContactForm from '../service-single/ServiceFrom';
import Scrollbar from '../../components/scrollbar/scrollbar';
import logo from '../../public/images/logo-2.svg'
import Arrow from '/public/images/team-single/arrow.svg'
import Image from 'next/image';



const TeamSinglePage = (props) => {

    const router = useRouter()

    const TeamSingles = Teams.find(item => item.slug === router.query.slug)

    return (
        <Fragment>
            <Navbar Logo={logo} hclass={'wpo-site-header wpo-site-header-s2'} />
            <PageTitle pageTitle={TeamSingles?.title} pagesub={'Doctor Single'} />
            <section className="team_single_page section-padding">
                <div className="container">
                    <div className="row align-items-end">
                        <div className="col-lg-6 col-12">
                            <div className="doctor_profile">
                                <Image src={TeamSingles?.Sime} alt="" />
                                <div className="content">
                                    <h3>{TeamSingles?.title}</h3>
                                    <span>{TeamSingles?.tagline}</span>
                                    <ul>
                                        <li><Link href="#"><i className="flaticon-facebook-app-symbol"></i></Link></li>
                                        <li><Link href="#"><i className="flaticon-twitter"></i></Link></li>
                                        <li><Link href="#"><i className="flaticon-linkedin"></i></Link></li>
                                        <li><Link href="#"><i className="flaticon-instagram"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6  col-12">
                            <div className="doctor_info">
                                <h2>Personal Info</h2>
                                <table>
                                    <tbody>
                                        <tr>
                                            <th>Position:</th>
                                            <td>{TeamSingles?.position}</td>
                                        </tr>
                                        <tr>
                                            <th>Practice Area:</th>
                                            <td>{TeamSingles?.practiceArea}</td>
                                        </tr>
                                        <tr>
                                            <th>Experience:</th>
                                            <td>{TeamSingles?.experience}</td>
                                        </tr>
                                        <tr>
                                            <th>Address:</th>
                                            <td>{TeamSingles?.address}</td>
                                        </tr>
                                        <tr>
                                            <th>Phone:</th>
                                            <td>{TeamSingles?.phone}</td>
                                        </tr>
                                        <tr>
                                            <th>Email:</th>
                                            <td>{TeamSingles?.email}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="doctor_info s2">
                                <h2>Education</h2>
                                <ul>
                                    {TeamSingles?.education?.map((item, i) => (
                                        <li key={i}><Image src={Arrow} alt="" />{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="experience_wrap">
                        <div className="top_content">
                            <h2>Personal Experience</h2>
                            <p>{TeamSingles?.experienceParagraph1}</p>
                            <p>{TeamSingles?.experienceParagraph2}</p>
                        </div>
                        <div className="skill_wrap">
                            <div className="skill">
                                <h2>Professional Skills</h2>
                                {TeamSingles?.skills?.map((item, index) => (
                                    <div className="progress_item" key={index}>
                                        <span>{item.label}</span>
                                        <div className="progres">
                                            <div className="progress-value" style={{ width: `${item.value}%` }}>
                                                <span>{item.value}%</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="achievements">
                                <h2>Achievements</h2>
                                <ul>
                                    {TeamSingles?.achievements?.map((ach, i) => (
                                        <li key={i}><span>{ach.years} : </span>{ach.award}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="AppointmentFrom">
                    <div className="container">
                        <div className="cta_form_s2">
                            <div className="title s2">
                                <h3>Make An Appointment</h3>
                                <p>Get in touch with us to see how we can help you with your Problems.</p>
                            </div>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>
            <Footer hclass={'wpo-site-footer_s2'} />
            <Scrollbar />
        </Fragment>
    )
};
export default TeamSinglePage;