import React from "react";
import Link from "next/link";
import VideoModal from "../ModalVideo/VideoModal";
import Image from "next/image";

// image
import Himg1 from "../../public/images/slider/1.webp";
import Hshape from "../../public/images/slider/shape.svg";

const ClickHandler = () => {
  window.scrollTo(10, 0);
};

const hero = () => {
  return (
    <section className="hero_section">
      <div className="bg_shape">
        <svg viewBox="0 0 1920 1075" fill="none">
          <path
            d="M0 0H1920V1000C1920 1000 1632 619 962 917C292 1215 0 1000 0 1000V0Z"
            fill="#EBF7FF"
          />
        </svg>
      </div>
      <div className="content">
        <h2>We are Here for You</h2>
        <h3>Helping People Lead Healthy & Happy Lives</h3>
        <p>
          We provide high-quality medical services using state-of-the-art technology. 
          Our expert team of doctors is dedicated to offering personalized care to ensure 
          your well-being. Schedule an appointment today and take the first step towards a healthier life.
        </p>
        <Link onClick={ClickHandler} className="theme-btn" href="/home#appointment-form">
          Make Appointment
          <i className="flaticon-right-arrow" style={{ marginLeft: '8px' }}></i>
        </Link>
      </div>
      <div className="image_content">
        <div className="video">
          <VideoModal />
        </div>
        <div className="image">
          <Image
            src={Himg1}
            alt="Hero Image"
            priority
            style={{ maxWidth: "100%", height: "auto" }}
          />
          <div className="bg_shape_2">
            <Image
              src={Hshape}
              alt="Background Shape"
              priority
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default hero;
