import React from "react";
import ContactForm from "./ContactForm";
import Image from "next/image";

const ContactFormContent = () => {
  return (
    <>
      <section className="contact-area ptb-110">
        <div className="container">
          <div className="section-title">
            <span>Message Us</span>
            <h2>Let's Build Something Great Together</h2>
            <p>
              Have a project in mind or looking for a reliable tech partner? We're just a message away. Whether you're a startup, enterprise, or government body, our team is here to listen, advise, and deliver. 
            </p>
          </div>

          <div className="contact-form">
            <div className="row align-items-center">
              <div className="col-lg-5 col-md-12">
                <div className="contact-image">
                  <Image
                    src="/images/contact.png"
                    alt="image"
                    width={395}
                    height={480}
                  />
                </div>
              </div>

              <div className="col-lg-7 col-md-12">
                <ContactForm />
              </div>
            </div>
          </div>

          {/* Contact info */}
          <div className="contact-info">
            <div className="contact-info-content">
              <h3>📬 Reach Out</h3>
              <h3>Grue and Bleen Technologies Pvt. Ltd.</h3>
              <h2>
                <span className="number">📞 +91-XXXXXXXXXX</span>
                <span className="or">OR</span>
                <span className="email">✉️ info@gruebleen.com</span>
              </h2>

              <h3 style={{marginTop:"20px"}}>Business Hours:</h3>
              <h3>Monday to Saturday: 9:30 AM - 7:00 PM IST</h3>
              <h3>Sunday: Closed</h3>

              <ul className="social">
                <li>
                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-google"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
                {/* <li>
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default ContactFormContent;
