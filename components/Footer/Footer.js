import React from 'react'
import Link from 'next/link'
import logo from '/public/images/logo.svg'
import Image from 'next/image';



const ClickHandler = () => {
    window.scrollTo(10, 0);
}


const Footer = (props) => {
   
    return (
        <footer className={"" +props.hclass}>
            <div className="wpo-upper-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget about-widget">
                                <div className="logo widget-title">
                                    <Image src={logo} alt="blog" />
                                </div>
                                <p>We are committed to providing the best medical care with compassion and expertise. Your health is our priority.</p>
                                <div className="social-widget">
                                    <ul>
                                        <li><Link onClick={ClickHandler} href="#"><i className="flaticon-facebook-app-symbol"></i></Link></li>
                                        <li><Link onClick={ClickHandler} href="#"><i className="flaticon-twitter"></i></Link></li>
                                        <li><Link onClick={ClickHandler} href="#"><i className="flaticon-linkedin"></i></Link></li>
                                        <li><Link onClick={ClickHandler} href="#"><i className="flaticon-instagram"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget link-widget">
                                <div className="widget-title">
                                    <h3>Quick Links</h3>
                                </div>
                                <ul>
                                    <li><Link onClick={ClickHandler} href="/home">Home</Link></li>
                                    <li><Link onClick={ClickHandler} href="/about">About Us</Link></li>
                                    <li><Link onClick={ClickHandler} href="/services">Services</Link></li>
                                    <li><Link onClick={ClickHandler} href="/blog">Latest News</Link></li>
                                    <li><Link onClick={ClickHandler} href="/doctor">Team</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget link-widget s2">
                                <div className="widget-title">
                                    <h3>Useful Links</h3>
                                </div>
                                <ul>
                                    <li><Link onClick={ClickHandler} href="/project">Projects</Link></li>
                                    <li><Link onClick={ClickHandler} href="/shop">Shop</Link></li>
                                    <li><Link onClick={ClickHandler} href="/cart">Cart</Link></li>
                                    <li><Link onClick={ClickHandler} href="/contact">Contact us</Link></li>
                                    <li><Link onClick={ClickHandler} href="/faq">Faq</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget contact-widget">
                                <div className="widget-title">
                                    <h3>Contact Us</h3>
                                </div>
                                <ul>
                                    <li><i className="flaticon-email"></i><span>medically@gmail.com</span>
                                    </li>
                                    <li> <i className="flaticon-telephone"></i><span>(704) 555-0127</span></li>
                                    <li><i className="flaticon-location-1"></i><span>123 Medical Avenue <br/>
                                        New York, NY, USA</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wpo-lower-footer">
                <div className="container">
                    <div className="row g-0">
                        <div className="col col-lg-6 col-12">
                            <p className="copyright">Copyright &copy; 2025 Medically. All Rights Reserved.</p>
                        </div>
                        <div className="col col-lg-6 col-12">
                            <ul>
                                <li><Link onClick={ClickHandler} href="/privacy-policy">Privacy &amp; Policy</Link></li>
                                <li><Link onClick={ClickHandler} href="/terms-and-conditions">Terms &amp; Conditions</Link></li>
                                <li><Link onClick={ClickHandler} href="/about">About us</Link></li>
                                <li><Link onClick={ClickHandler} href="/faq">FAQ</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;







