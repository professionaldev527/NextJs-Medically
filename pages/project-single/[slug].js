import React, { Fragment } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router'
import Navbar from '../../components/Navbar/Navbar'
import PageTitle from '../../components/pagetitle/PageTitle'
import Projects from '../../api/projects';
import ServiceFrom from '../service-single/ServiceFrom';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar'
import logo from '/public/images/logo-2.svg'
import Psing1 from '/public/images/project-single/img-1.jpg'
import Psing2 from '/public/images/project-single/img-2.jpg'
import Image from 'next/image';



const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const ProjectSingle = (props) => {
    const router = useRouter()

    const ProjectSingle = Projects.find(item => item.slug === router.query.slug)

    return (
        <Fragment>
            <Navbar Logo={logo} hclass={'wpo-site-header wpo-site-header-s2'} />
            <PageTitle pageTitle={ProjectSingle?.title} pagesub={'Portfolio'} />
            <section className="project_single section-padding">
                <div className="container">
                    <Image src={ProjectSingle?.pSimg} alt="" />
                    <div className="row">
                        <div className="col-lg-7 col-12">
                            <h2>{ProjectSingle?.title}</h2>
                            <p>{ProjectSingle?.intro}</p>
                            <p>{ProjectSingle?.body}</p>
                        </div>
                        <div className="col-lg-5 col-12">
                            <table>
                                <tbody>
                                    <tr>
                                        <th>Location :</th>
                                        <td>{ProjectSingle?.location}</td>
                                    </tr>
                                    <tr>
                                        <th>Client :</th>
                                        <td>{ProjectSingle?.client}</td>
                                    </tr>
                                    <tr>
                                        <th>Surgeon:</th>
                                        <td>{ProjectSingle?.surgeon}</td>
                                    </tr>
                                    <tr>
                                        <th>Category :</th>
                                        <td>{ProjectSingle?.category}</td>
                                    </tr>
                                    <tr>
                                        <th>Tags :</th>
                                        <td>{ProjectSingle?.tags}</td>
                                    </tr>
                                    <tr>
                                        <th>Date :</th>
                                        <td>{ProjectSingle?.date}</td>
                                    </tr>
                                    <tr>
                                        <th>Share :</th>
                                        <td>
                                            <ul>
                                                <li><Link href="#"><i className="flaticon-facebook-app-symbol"></i></Link></li>
                                                <li><Link href="#"><i className="flaticon-twitter"></i></Link></li>
                                                <li><Link href="#"><i className="flaticon-linkedin"></i></Link></li>
                                                <li><Link href="#"><i className="flaticon-instagram"></i></Link></li>
                                            </ul>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                    </div>
                    <div className="quote">
                        <h4>{ProjectSingle?.quote}</h4>
                        <p>{ProjectSingle?.quoteAuthor} - <span>{ProjectSingle?.quoteRole}</span></p>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-12 strategies s2">
                            <h2>Our Strategies</h2>
                            <p>{ProjectSingle?.strategiesIntro}</p>
                            <ul>
                                {ProjectSingle?.strategies?.map((s, i) => <li key={i}>{s}</li>)}
                            </ul>
                        </div>
                        <div className="col-lg-6 col-12 strategies">
                            <h2>Our Approach</h2>
                            <p>{ProjectSingle?.approach}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-12">
                            <Image src={Psing1} alt="" />
                        </div>
                        <div className="col-lg-6 col-12">
                            <Image src={Psing2} alt="" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-12 strategies s3">
                            <h2>Goals Achieved</h2>
                            <p>{ProjectSingle?.goalsIntro}</p>
                            <ul>
                                {ProjectSingle?.goals?.map((g, i) => <li key={i}>{g}</li>)}
                            </ul>
                        </div>
                        <div className="col-lg-6 col-12 strategies s3">
                            <h2>Results</h2>
                            <p>{ProjectSingle?.resultsIntro}</p>
                            <ul>
                                {ProjectSingle?.results?.map((r, i) => <li key={i}>{r}</li>)}
                            </ul>
                        </div>
                    </div>
                    <div className="related_project">
                        <h5>Related Portfolio</h5>
                        <div className="row">
                            {Projects.slice(0, 3).map((project, pitem) => (
                                <div className="col-lg-4 col-md-6 col-12" key={pitem}>
                                    <div className="project_card">
                                        <Image src={project.pimg1} alt="" />
                                        <div className="text">
                                            <h2><Link onClick={ClickHandler} href={'/project-single/[slug]'} as={`/project-single/${project.slug}`}>{project.title}</Link></h2>
                                            <span>{project.subtitle}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
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
                            <ServiceFrom />
                        </div>
                    </div>
                </div>
            </section>
            <Footer hclass={'wpo-site-footer_s2'} />
            <Scrollbar />
        </Fragment>
    )
};
export default ProjectSingle;