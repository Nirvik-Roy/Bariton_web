import React from "react";
import Image from "next/image";

const PartnerContent = () => {
  return (
    <>
      <div className="partner-area ptb-110 bg-f2f6f9">
        <div className="container">
          <div className="section-title">
            <h2>Featured Customers & Partners</h2>
            <p>
              We're proud to collaborate with forward-thinking clients and trusted partners across industries. Their belief in out technology and commitment to innovation drives mutual growth and success.
            </p>
            <p>
              Together, we build intelligent solutions that create real-world inpact transforming ideas into measurable results.
            </p>
          </div>

          <div className="customers-partner-list">
            <div
              className="partner-item"
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-delay="100"
            >
              <a href="#" target="_blank" rel="noreferrer">
                <Image
                  src="/images/jpc.jpg"
                  alt="image"
                  width={200}
                  height={60}
                  style={{
                    height:'60px'
                  }}
                />
              </a>
            </div>

            <div
              className="partner-item"
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <a href="#" target="_blank" rel="noreferrer">
                <Image
                  src="/images/logo.png"
                  alt="image"
                  width={200}
                  height={60}
                  style={{
                    height:'60px'
                  }}
         
                />
              </a>
            </div>

            <div
              className="partner-item"
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-delay="300"
            >
              <a href="#" target="_blank" rel="noreferrer">
                <Image
                  src="/images/logo_tek.jpg"
                  alt="image"
                  width={200}
                  height={60}
                  style={{
                    height:'60px'
                  }}
                />
              </a>
            </div>

            <div
              className="partner-item"
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-delay="400"
            >
              <a href="#" target="_blank" rel="noreferrer">
                <Image
                  src="/images/logo-tekskills.jpg"
                  alt="image"
                  width={200}
                  height={60}
                  style={{
                    height:'60px'
                  }}
                />
              </a>
            </div>

            <div
              className="partner-item"
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-delay="500"
            >
              <a href="#" target="_blank" rel="noreferrer">
                <Image
                  src="/images/logo-web.jpg"
                  alt="image"
                  width={200}
                  height={60}
                  style={{
                    height:'60px'
                  }}
                />
              </a>
            </div>

            <div
              className="partner-item"
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-delay="600"
            >
              <a href="#" target="_blank" rel="noreferrer">
                <Image
                  src="/images/qt=q_95.png"
                  alt="image"
                  width={200}
                  height={60}
                  style={{
                    height:'60px'
                  }}
                />
              </a>
            </div>

            <div
              className="partner-item"
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-delay="700"
            >
              <a href="#" target="_blank" rel="noreferrer">
                <Image
                  src="/images/saduplogo_11.png"
                  alt="image"
                  width={200}
                  height={60}
                  style={{
                    height:'60px'
                  }}
                />
              </a>
            </div>

            <div
              className="partner-item"
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-delay="800"
            >
              <a href="#" target="_blank" rel="noreferrer">
                <Image
                  src="/images/yantrify_new_logo_transp.png"
                  alt="image"
                  width={200}
                  height={60}
                  style={{
                    height:'60px'
                  }}
                />
              </a>
            </div>

            <div
              className="partner-item"
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-delay="900"
            >
              <a href="#" target="_blank" rel="noreferrer">
                <Image
                  src="/images/yogik logo.jpg"
                  alt="image"
                  width={200}
                  height={60}
                  style={{
                    height:'60px'
                  }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PartnerContent;
