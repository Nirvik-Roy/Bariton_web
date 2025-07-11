import React from "react";
import Link from "next/link";

const FeaturedServices = () => {
  return (
    <>
      <div className="featured-services-area">
        <div className="container">
          <div className="row justify-content-center">
            <div 
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <div className="single-featured-services-box">
                <div className="icon">
                  <i className="flaticon-robot"></i>
                </div>

                <h3>
                  <Link href="/services/details">
                    Software Development & Consulting
                  </Link>
                </h3>
                <p>
                  End-to-end solutions from ideation to deployment, tailored to help you unlock digital potential.
                </p>
              </div>
            </div>

            <div 
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-delay="400"
            >
              <div className="single-featured-services-box active">
                <div className="icon">
                  <i className="flaticon-artificial-intelligence"></i>
                </div>

                <h3>
                  <Link href="/services/details">Robotic Process Automation(RPA)</Link>
                </h3>
                <p>
                  Automate routine tasks with precision and intelligence, boosting performance and reliability
                </p>
              </div>
            </div>

            <div 
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-delay="600"
            >
              <div className="single-featured-services-box">
                <div className="icon">
                  <i className="flaticon-machine-learning"></i>
                </div>

                <h3>
                  <Link href="/services/details">ERP & IOT Integration</Link>
                </h3>
                <p>
                  Seamlessly connect your enterprise systems and devices using modern ERP and IoT frameworks
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedServices;
