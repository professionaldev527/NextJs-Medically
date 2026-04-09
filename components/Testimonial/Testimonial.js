import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Img1 from '/public/images/testimonial/1.jpg'
import Img2 from '/public/images/testimonial/2.jpg'
import Img3 from '/public/images/testimonial/3.jpg'
import SectionTitle from '../SectionTitle/SectionTitle';
import Image from 'next/image';


const testimonials = [
    {
        id: '01',
        img: Img1,
        Des: "After years of chronic back pain, Dr. Jerome Bell's orthopedic team gave me my life back. The care was thorough, the surgery minimally invasive, and recovery was faster than I ever imagined. I can't recommend Medically enough.",
        title: 'Kristin Watson',
        sub: "Orthopedic Patient",
    },
    {
        id: '02',
        img: Img2,
        Des: "Dr. Leslie Alexander's compassionate approach to gynecological care made all the difference during a challenging time. She explained everything clearly, involved me in every decision, and the outcome exceeded my expectations.",
        title: 'Armani Fisher',
        sub: "Gynecology Patient",
    },
    {
        id: '03',
        img: Img3,
        Des: "The rehabilitation program Dr. Alexander Leslie designed for my stroke recovery was exceptional. The team's dedication, the state-of-the-art equipment, and their encouragement helped me regain independence far sooner than expected.",
        title: 'Rebeca Connelly',
        sub: "Rehabilitation Patient",
    },


]




const Testimonial = (props) => {

    const settings = {
        dots: false,
        autoplay: true,
        infinite: true,
        arrows: false,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                }
            },

        ]
    };


    return (

        <section className={"" + props.tClass}>
            <div className="container">
                <div className="row justify-content-left">
                    <div className="col-12">
                        <SectionTitle title='Testimonial' subtitle="Our Patients Say About Us" />
                    </div>
                </div>
                <div className="row testimonial_slider">
                    <Slider {...settings}>
                        {testimonials.map((testitem, titem) => (
                            <div className="testimonial_card" key={titem}>
                                <div className="icon">
                                    <i className="flaticon-quote"></i>
                                </div>
                                <ul>
                                    <li><i className="flaticon-star"></i></li>
                                    <li><i className="flaticon-star"></i></li>
                                    <li><i className="flaticon-star"></i></li>
                                    <li><i className="flaticon-star"></i></li>
                                    <li><i className="flaticon-star"></i></li>
                                </ul>
                                <p>{testitem.Des}</p>
                                <div className="ath">
                                    <div className="image">
                                        <Image src={testitem.img} alt="" />
                                    </div>
                                    <div className="text">
                                        <h3>{testitem.title}</h3>
                                        <span>{testitem.sub}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
}

export default Testimonial;







