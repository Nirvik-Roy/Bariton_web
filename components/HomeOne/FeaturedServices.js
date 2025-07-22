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
                  On-Time, On-Budget Delivery
                  </Link>
                </h3>
                <p>
                We pride ourselves on delivering projects within the agreed timeline and budget, without compromising on quality.
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
                  <Link href="/services/details/2">End-to-End Solutions</Link>
                </h3>
                <p>
                We provide comprehensive IT services — from strategy and consulting to development, deployment, and support — under one roof.
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
                  <Link href="/services/details/3">Post-Launch Support & Maintenance</Link>
                </h3>
                <p>
                We don’t just deliver and leave — our robust support services ensure your IT systems keep performing at their best.
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
