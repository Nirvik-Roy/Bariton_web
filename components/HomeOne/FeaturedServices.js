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
                  <Link href="/services/details/1">
                    IT Consulting
                  </Link>
                </h3>
                <p>
                  Our IT Consulting Services empower businesses to leverage technology effectively, streamline operations, and accelerate growth. We combine industry expertise with innovative strategies to help you solve complex IT challenges and unlock new business opportunities.
                </p>
              </div>
            </div>

            <div 
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-delay="400"
            >
              <div className="single-featured-services-box ">
                <div className="icon">
                  <i className="flaticon-artificial-intelligence"></i>
                </div>

                <h3>
                  <Link href="/services/details/2">SAP ERP OR SAP Solution</Link>
                </h3>
                <p>
                  We provide end-to-end SAP ERP and SAP Solution services designed to drive operational excellence, improve data visibility, and streamline business processes. Our SAP services are tailored to help you achieve digital transformation.
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
                  <Link href="/services/details/3">Custom Application Development Services Overview</Link>
                </h3>
                <p>
                  We specialize in Custom Application Development, delivering tailored digital solutions that align precisely with your unique business objectives. Our focus is on creating scalable, secure, and innovative applications designed to optimize your processes and drive growth.
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
