import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="footer-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div
                className="single-footer-widget"
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="100"
              >
                <div className="logo">
                  <Link href="/">
                    <Image
                      src="/images/gruelogo_head_foot.png"
                      alt="image"
                      width={149}
                      height={37}
                    />
                  </Link>
                  {/* <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud.
                  </p> */}
                </div>

                <ul className="social">
                  <li>
                    <a href="https://www.facebook.com/" target="_blank">
                      <i className="flaticon-facebook-letter-logo"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/" target="_blank">
                      <i className="flaticon-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/" target="_blank">
                      <i className="flaticon-instagram-logo"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/" target="_blank">
                      <i className="flaticon-youtube-play-button"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div
                className="single-footer-widget"
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                <h3>Services</h3>

                <ul className="footer-services-list">
                  <li>
                    <Link href="/services/details/1">IT Consulting</Link>
                  </li>
                  <li>
                    <Link href="/services/details/2">SAP ERP OR SAP Solution</Link>
                  </li>
                  <li>
                    <Link href="/services/details/3">Custom Application Development Services </Link>
                  </li>
                  <li>
                    <Link href="/services/details/4">Cyber Security</Link>
                  </li>
                  <li>
                    <Link href="/services/details/5">CCTV Surveillance system</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div
                className="single-footer-widget"
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="300"
              >
                <h3>Quick Links</h3>

                <ul className="quick-links-list">
                  <li>
                    <Link href="/about-us">About Us</Link>
                  </li>
                  <li>
                    <Link href="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact</Link>
                  </li>
                  <li>
                    <Link href="/services">Services</Link>
                  </li>
                  {/* <li>
                    <Link href="/pricing">Pricing</Link>
                  </li> */}
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div
                className="single-footer-widget"
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="400"
              >
                <h3>Contacts</h3>

                <ul className="footer-contact-list">
                  <li>
                    <span>Address:</span>
                    FLAT – G/F, GROUND FLOOR, “NIGHAM SMRITI APARTMENT” 175/1, BLOCK A, Bangur Ave, Kolkata, West Bengal 700055
                  </li>
                  <li>
                    <span>Email:</span>
                    gnb@gruenbleen.com
                  </li>
                  <li>
                    <span>Phone:</span>
                    091637 76777
                  </li>
                  {/* <li>
                    <span>Fax:</span>
                   091637 76777
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6 col-sm-6">
                <p>
                  Copyright &copy;{currentYear} Grue & Bleen. All Rights Reserved{" "}
                  {/* <a href="https://envytheme.com/" target="_blank">
                    EnvyTheme
                  </a> */}

                </p>
              </div>

              <div className="col-lg-6 col-md-6 col-sm-6">
                <ul style={{
                  cursor:'pointer'
                }}>
                  <li>
                    <a >Privacy Policy</a>
                  </li>
                  <li>
                    <a >Terms & Conditions</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="circle-map">
          <Image
            src="/images/circle-map.png"
            alt="image"
            width={370}
            height={292}
          />
        </div>

        <div className="lines">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
