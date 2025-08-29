import React from "react";
import Link from "next/link";
import FeaturedServices from "./FeaturedServices";

const MainBanner = () => {
  return (
    <>
      <div 
        className="main-banner"
        style={{ 
          backgroundImage: `url(/images/main-banner.jpg)`
        }}
      >
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container-fluid">
              <div className="main-banner-content">
                <h1
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="100"
                >
        Accelerating Innovation for the Connected World
                </h1>

                <p
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                >
                Greu and Bleen Technologies Pvt. Ltd. is a trusted partner in ERP, IoT, Cyber Security, Renewable Energy, and Custom Development-delivering secure, scalable, and sustainable solutions for businesses and governments.
                </p>

                {/* <div
                  className="btn-box"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="300"
                >
                  <Link href="/contact" className="btn btn-primary">
                    Schedule A Demo
                  </Link>

                  <Link href="/contact" className="optional-btn">
                    Get Started Free
                  </Link>
                </div> */}
              </div>
            </div>
          </div>
        </div>

        {/* Featured Services */}
        <FeaturedServices />
      </div>
    </>
  );
};

export default MainBanner;
