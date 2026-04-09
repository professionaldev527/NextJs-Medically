import React from 'react'
import Link from 'next/link'
import erimg from '/public/images/error-404.png'
import Image from 'next/image'


const Error = (props) => {
    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }

    return(
        <section className="error-404-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="content clearfix">
                            <div className="error">
                                <Image src={erimg} alt=""/>
                            </div>
                            <div className="error-message">
                                <h3>Oops! Page Not Found!</h3>
                                <p>We're sorry, but the page you are looking for does not exist. It might have been moved or deleted. Please return to our homepage to explore our medical services and get the care you need.</p>
                                <Link onClick={ClickHandler} href="/home" className="theme-btn"> Back To Home</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Error;