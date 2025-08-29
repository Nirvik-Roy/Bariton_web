import React from "react";
import Link from "next/link";
import Image from "next/image";

const Services = () => {
  return (
    <>
      <section className="services-area bg-f2f6f9 ptb-110">
        <div className="container">
          <div className="section-title">
            <h2>We Offer Professional Solutions</h2>

          </div>

          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-sm-6"
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-delay="100"
            >
              <div className="single-services-box">
                <div className="icon">
                  <i className="flaticon-gear"></i>
                </div>

                <h3>
                  <Link href="/services/details/1">IT Consulting & Staff Augmentation</Link>
                </h3>
                <p>
                  Build your technology team with flexible staffing solutions: - Remote SAP Consultants (ABAP, BASIS, HANA) - Contract Developers (Java, QA, IoT, DevOps) - C2H & Long-Term Engagements with managed services - Project-based Consulting for e-governance and private enterprise
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-sm-6"
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <div className="single-services-box">
                <div className="icon">
                  <i className="flaticon-gear"></i>
                </div>

                <h3>
                  <Link href="/services/details/2">ERP Solutions</Link>
                </h3>
                <p>
                  We offer full-cycle ERP services including consulting, deployment, enhancement, and support. Our team specializes in:- <b>SAP Modules</b>: ABAP, BW/4HANA, Ariba, EWM, GTS, MDG, and Workflow. -<b>Oracle ERP:</b> Implementation, data migration, and performance tuning. - <b>ERP Customization</b>: Tailorod interfaces, smart forms, IDoc and OData integrations. <b>Third Party Integration</b>: Seamless connection with legacy systems and modern APIs.
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-sm-6"
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-delay="300"
            >
              <div className="single-services-box">
                <div className="icon">
                  <i className="flaticon-gear"></i>
                </div>

                <h3>
                  <Link href="/services/details/3">Custom Application Development Services Overview</Link>
                </h3>
                <p>
                  From simple business tools to enterprise-grade platforms, we design and build:- <b>Full-Stack Applications</b> using React.js, Node.js, MongoDB/PostgreSQL - <b>Android Mobile Applications</b> with advanced features like geolocation, sensor input, offline sync - <b>Web Portals</b> with multi-role access, rel-time dashboards, and workflows -<b>Secure APIs</b> using REST and GraphQL
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-sm-6"
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-delay="400"
            >
              <div className="single-services-box">
                <div className="icon">
                  <i className="flaticon-gear"></i>
                </div>

                <h3>
                  <Link href="/services/details/4">
                    Cyber Security
                  </Link>
                </h3>
                <p>
                  We provide comprehensive cybersecurity service ensuring compliance, and maintaining operational resilience. 
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-sm-6"
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-delay="500"
            >
              <div className="single-services-box">
                <div className="icon">
                  <i className="flaticon-gear"></i>
                </div>

                <h3>
                  <Link href="/services/details/5">CCTV Surveillance system</Link>
                </h3>
                <p>
                 We provide comprehensive CCTV surveillance system to ensure the security of IT infrastructure, protect sensitive data, and maintain a safe working environment.
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-sm-6"
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-delay="600"
            >
              <div className="single-services-box">
                <div className="icon">
                  <i className="flaticon-gear"></i>
                </div>

                <h3>
                  <Link href="/services/details/6">IT staff augmentation</Link>
                </h3>
                <p>
                  We provide services enable companies to swiftly scale their technical teams by integrating external professionals. This approach offers flexibility, cost-effectiveness.
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-sm-6"
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-delay="600"
            >
              <div className="single-services-box">
                <div className="icon">
                  <i className="flaticon-gear"></i>
                </div>

                <h3>
                  <Link href="/services/details/7">Business consulting</Link>
                </h3>
                <p>
                  We provide objective insight, specialized knowledge, and tactical support. Consultants analyze your organization, identify problems and opportunities, and collaborate with your team to implement solutions that enhance performance, streamline operations, and growth.
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-sm-6"
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-delay="600"
            >
              <div className="single-services-box">
                <div className="icon">
                  <i className="flaticon-gear"></i>
                </div>

                <h3>
                  <Link href="/services/details/8">IT Infrastructure </Link>
                </h3>
                <p>
                  We providing the backbone for delivering reliable, secure, and scalable services.
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-sm-6"
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-delay="600"
            >
              <div className="single-services-box">
                <div className="icon">
                  <i className="flaticon-gear"></i>
                </div>

                <h3>
                  <Link href="/services/details/9">Solar System and BMS   </Link>
                </h3>
                <p>
                 We Offers comprehensive solar solutions including consultancy, installation, maintenance, and panel cleaning.
                </p>
              </div>
            </div>
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

export default Services;
