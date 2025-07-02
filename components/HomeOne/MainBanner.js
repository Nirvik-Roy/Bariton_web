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
                  Empowring Business with Intelligent Machine Learning Solutions
                </h1>

                <p
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                >
                  Our cutting-edge ML technologies deliver smarter support, deeper insights, and meaningful customer engagement. From advanced chatbots to intelligent automation, we help you create experience that connect, convert, and grow.
                </p>

                <div
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
                </div>
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
