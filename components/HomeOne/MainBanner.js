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
        Accelerating Business Growth with Smart Machine Learning Solutions.
                </h1>

                <p
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                >
                Unlock smarter operations, sharper insights, and stronger customer connections with our advanced ML solutions. From AI-powered chatbots to intelligent process automation, we empower your business to engage, adapt, and thrive in a digital-first world. Let us help you craft seamless experiences that drive growth, boost efficiency, and transform how you connect with your customers.
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
