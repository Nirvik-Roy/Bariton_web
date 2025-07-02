import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from "next/link";
import Image from "next/image";

const Webinar = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      />

      <section className="webinar-area">
        <div className="row m-0">
          <div className="col-lg-6 p-0">
            <div className="webinar-content">
              <h2>Why Choose Us</h2>
              <p>
                Customer-centric & Collaborative: We work alongside your team, ensuring each project is a collaborative journey.
              </p>
              <p>
                Small Team, Big Impact: A focused team of seasoned professionals delivers high-quality outcomes efficiently and responsively
              </p>
              <p>
                End-to-end Innovation: From strategy and design to execution and support, we're with you every step.
              </p>

              <Link href="#" className="btn btn-primary">
                Watch More
              </Link>
            </div>
          </div>

          <div className="col-lg-6 p-0">
            <div
              className="webinar-video-image"
              style={{
                backgroundImage: `url(/images/woman.jpg)`,
              }}
            >
              <Image
                src="/images/woman.jpg"
                alt="image"
                width={532}
                height={398}
              />

              {/* <div
                onClick={() => setToggler(!toggler)}
                className="video-btn popup-youtube"
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-delay="600"
              >
                <i className="flaticon-play-button"></i>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Webinar;
