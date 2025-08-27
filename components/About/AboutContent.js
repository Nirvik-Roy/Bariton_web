import React from "react";
import Image from "next/image";

const AboutContact = () => {
  return (
    <>
      <section className="about-area ptb-110">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-image">
                <Image
                  src="/images/about/about1.jpg"
                  alt="image"
                  width={360}
                  height={300}
                />
                <Image
                  src="/images/about/about2.jpg"
                  alt="image"
                  width={360}
                  height={300}
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="about-content">
                <h2>🌐 Who We Are</h2>
                <p>
                  Grue and Bleen Technologies Pvt. Ltd. is a future-focused IT and engineering services company headquartered in India. With a commitment to driving innovation, efficiency, and sustainability, we offer transformative solutions across ERP, IoT, software development, staff augmentation, and renewable energy consulting.
                </p>
                <p>We believe in making technology accessible, scalable, and meaningful for both enterprises and government institutions.</p>
                
              </div>
            </div>
          </div>

          <div className="about-inner-area">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="about-text">
                  <h3>Our Journey</h3>
                  <p>
                    Founded in 2023, out IT company began with a simple goal: to bridge the gap between innovative technology and real-world business challenges. Starting as a small team of passionate developers and problem-solvers, we've grown into a trusted partner for organizations seeking smart, scalable digital solutions-from software development to AI, cloud, and automation.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="about-text">
                  <h3>🎯 Our Mission</h3>
                  <p>
                    To empower organizations with reliable, cost-effective, and intelligent solutions that simplify operations, automate processes, and drive sustainable growth.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="about-text">
                  <h3>👁️ Our Vision</h3>
                  <p>
                    To become a trusted global partner in enabling digital transformation and intelligent infrastructure for communities, industries, and governments.
                  </p>
                </div>
              </div>
              <p>At the heart of our work is a commitment to integrity, innovation, and long-term success-for our clients, our people, and the communities we serve.</p>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="shape-img1">
          <Image
            src="/images/shape/shape1.png"
            alt="image"
            width={523}
            height={586}
          />
        </div>
        <div className="shape-img2">
          <Image
            src="/images/shape/shape2.svg"
            alt="image"
            width={21}
            height={20}
          />
        </div>
        <div className="shape-img3">
          <Image
            src="/images/shape/shape3.png"
            alt="image"
            width={202}
            height={202}
          />
        </div>
        <div className="shape-img4">
          <Image
            src="/images/shape/shape4.svg"
            alt="image"
            width={21}
            height={20}
          />
        </div>
        <div className="shape-img5">
          <Image
            src="/images/shape/shape5.svg"
            alt="image"
            width={22}
            height={22}
          />
        </div>
        <div className="shape-img6">
          <Image
            src="/images/shape/shape6.png"
            alt="image"
            width={182}
            height={146}
          />
        </div>
        <div className="dot-shape1">
          <Image
            src="/images/shape/dot1.png"
            alt="image"
            width={15}
            height={15}
          />
        </div>
        <div className="dot-shape2">
          <Image
            src="/images/shape/dot2.png"
            alt="image"
            width={12}
            height={11}
          />
        </div>
      </section>
    </>
  );
};

export default AboutContact;
