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
                Our health and hospital policy encompasses the strategies,
                guidelines, and practices that technology companies use to
                achieve their goals and objectives. The policies may vary
                depending on the company's size, market position, and
                competitive landscape. Commodo erat amet vitae consectetur
                consectetur feugiat.
              </p>
              <p>
                Tellus viverra eu risus ut ipsum magna sed odio elit. Sed sem
                purus tincidunt condimentum amet condimentum massa. Nunc vel
                nascetur id cras.
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
