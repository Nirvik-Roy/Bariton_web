import React from "react";
import Link from "next/link";
import Image from "next/image";

const ServicesContent = () => {
  return (
    <>
      <section className="services-area bg-f2f6f9 ptb-110">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <div className="icon">
                  <i className="flaticon-income"></i>
                </div>

                <h3>
                  <Link href="/services/details">Software Development & Consulting</Link>
                </h3>
                <p>
                  End to end solutions from ideation to deployment, tailored to help you unlock digital potential.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <div className="icon">
                  <i className="flaticon-automatic"></i>
                </div>

                <h3>
                  <Link href="/services/details">Robotic Process Automation (RPA) & Cognitive Automation</Link>
                </h3>
                <p>
                  Automate routine tasks with precision and intelligence, boosting performance and reliability .
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <div className="icon">
                  <i className="flaticon-locked"></i>
                </div>

                <h3>
                  <Link href="/services/details">Cognitive Engagement</Link>
                </h3>
                <p>
                  Enhance customer and employee interactions using AI-driven tools and platforms .
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <div className="icon">
                  <i className="flaticon-molecular"></i>
                </div>

                <h3>
                  <Link href="/services/details">
                    ERP & IoT Integration
                  </Link>
                </h3>
                <p>
                  Seamlessly connect your enterprise systems and devices using modern ERP and IoT frameworks .
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <div className="icon">
                  <i className="flaticon-gear"></i>
                </div>

                <h3>
                  <Link href="/services/details">Workforce Solutions</Link>
                </h3>
                <p>
                  From recruitment support to management tools, streamline your human capital operations .
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <div className="icon">
                  <i className="flaticon-ceo"></i>
                </div>

                <h3>
                  <Link href="/services/details">E Learning Platform Development
</Link>
                </h3>
                <p>
                 Engage learners with interactive digital education platforms aimed at long term skill development.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <div className="icon">
                  <i className="fas fa-database"></i>
                </div>

                <h3>
                  <Link href="/services/details">AI-Powered Chatbots </Link>
                </h3>
                <p>
                 Enhance customer support with 24/7 intelligent conversational agents.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <div className="icon">
                  <i className="fas fa-chart-line"></i>
                </div>

                <h3>
                  <Link href="/services/details">Custom ML Model Development </Link>
                </h3>
                <p>
                Build tailored models to solve your specific business challenges.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <div className="icon">
                  <i className="fas fa-project-diagram"></i>
                </div>

                <h3>
                  <Link href="/services/details">Fraud Detection & Risk Management </Link>
                </h3>
                <p>
                  Secure your operations with intelligent threat analysis.
                </p>
              </div>
            </div>

            {/* Pagination */}
            {/* <div className="col-lg-12 col-sm-12">
              <div className="pagination-area">
                <a href="#" className="prev page-numbers">
                  <i className="fas fa-angle-double-left"></i>
                </a>

                <a href="#" className="page-numbers">
                  1
                </a>

                <a href="#" className="page-numbers current">
                  2
                </a>

                <a href="#" className="page-numbers">
                  3
                </a>

                <a href="#" className="page-numbers">
                  4
                </a>

                <a href="#" className="next page-numbers">
                  <i className="fas fa-angle-double-right"></i>
                </a>
              </div>
            </div> */}
          </div>
        </div>

        {/* Shape Images */}
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
        <div className="shape-img3">
          <Image
            src="/images/shape/shape3.png"
            alt="image"
            width={202}
            height={202}
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
            src="/images/shape/dot3.png"
            alt="image"
            width={18}
            height={18}
          />
        </div>
        <div className="dot-shape2">
          <Image
            src="/images/shape/dot4.png"
            alt="image"
            width={12}
            height={11}
          />
        </div>
        <div className="dot-shape2">
          <Image
            src="/images/shape/dot5.png"
            alt="image"
            width={9}
            height={9}
          />
        </div>
        <div className="dot-shape2">
          <Image
            src="/images/shape/dot6.png"
            alt="image"
            width={11}
            height={11}
          />
        </div>
      </section>
    </>
  );
};

export default ServicesContent;
