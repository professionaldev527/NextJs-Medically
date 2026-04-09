import React from "react";
import CountUp from "react-countup";
import Image from "next/image";

// image
import Ab1 from "../../public/images/about.jpg";
import Abd1 from "../../public/images/doctors/1.jpg";
import Abd2 from "../../public/images/doctors/2.jpg";
import Abd3 from "../../public/images/doctors/3.jpg";
import Abd4 from "../../public/images/doctors/4.jpg";
import sine from "../../public/images/signeture.png";

const about = (props) => {
  return (
    <section className={"" + props.hclass}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-12">
            <div className="about_left">
              <div className="image">
                <Image
                  src={Ab1}
                  alt=""
                  style={{ maxWidth: "100%", height: "auto" }}
                />
                <span className="round-on"></span>
                <span className="round-two"></span>
                <div className="award">
                  <div className="icon">
                    <i className="flaticon-cup"></i>
                  </div>
                  <div className="text">
                    <h2>
                      <CountUp end={25} enableScrollSpy />+
                    </h2>
                    <p>Years Of Experience</p>
                  </div>
                </div>
                <div className="doctors">
                  <ul>
                    <li>
                      <Image
                        src={Abd1}
                        alt=""
                        style={{ maxWidth: "100%", height: "auto" }}
                      />
                    </li>
                    <li>
                      <Image
                        src={Abd2}
                        alt=""
                        style={{ maxWidth: "100%", height: "auto" }}
                      />
                    </li>
                    <li>
                      <Image
                        src={Abd3}
                        alt=""
                        style={{ maxWidth: "100%", height: "auto" }}
                      />
                    </li>
                    <li>
                      <Image
                        src={Abd4}
                        alt=""
                        style={{ maxWidth: "100%", height: "auto" }}
                      />
                    </li>
                    <li>
                      <span>95+</span>
                    </li>
                  </ul>
                  <h4>Available Doctors</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="content">
              <h2>About Medically</h2>
              <h3>Your Smile & Happiness Is Our Mission</h3>
              <p>
                At Medically, we are committed to delivering exceptional, patient-centered healthcare across a wide range of specialties. Our team of board-certified physicians, surgeons, and specialists combines decades of clinical expertise with the most advanced diagnostic and therapeutic technologies available today.
              </p>
              <p>
                We believe that every patient deserves individualized attention, transparent communication, and a care plan built around their unique health needs — from the first consultation through to a full recovery.
              </p>
              <div className="ceo">
                <div>
                  <h4>Savannah Nguyen</h4>
                  <span>CEO & Founder of Madically</span>
                </div>
                <div>
                  <Image
                    src={sine}
                    alt=""
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default about;
