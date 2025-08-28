import React from "react";
import Link from "next/link";
import BlogCommentsArea from "./BlogCommentsArea";
import BlogSidebar from "./BlogSidebar";
import Image from "next/image";

const BlogDetailsContent = () => {
  return (
    <>
      <section className="blog-details-area ptb-110">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="blog-details">
                <div className="article-image">
                  <Image
                    src="/images/blog/blog-details.jpg"
                    alt="image"
                    width={900}
                    height={600}
                  />
                </div>

                <div className="article-content">
                  <div className="entry-meta">
                    <ul>

                    </ul>
                  </div>

                  <h2>The ethics of AI</h2>

                  <p>
                    Generative AI tools are becoming everyday business utilities, yet true value comes from proprietary fine tuning, integration. AI isn't here to replace humans—it’s a powerful collaborator. And also AI expansion continues beyond software—it’s reshaping data centers and chip design. Massive infrastructure investments, like the Stargate initiative, aim to build next-gen compute capacity.
                  </p>

                

             

                  {/* <blockquote className="wp-block-quote">
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </p>

                    <cite>Tom Cruise</cite>
                  </blockquote> */}

              

                  <ul className="wp-block-gallery columns-3">
                    <li className="blocks-gallery-item">
                      <figure>
                        <Image
                          src="/images/blog/blog1.jpg"
                          alt="image"
                          width={510}
                          height={415}
                        />
                      </figure>
                    </li>

                    <li className="blocks-gallery-item">
                      <figure>
                        <Image
                          src="/images/blog/blog2.jpg"
                          alt="image"
                          width={510}
                          height={415}
                        />
                      </figure>
                    </li>

                    <li className="blocks-gallery-item">
                      <figure>
                        <Image
                          src="/images/blog/blog3.jpg"
                          alt="image"
                          width={510}
                          height={415}
                        />
                      </figure>
                    </li>
                  </ul>

                 
                </div>

                {/* <div className="article-footer">
                    <div className="article-tags">
                      <span>
                        <i className="fas fa-bookmark"></i>
                      </span>

                      <Link href="#">Fashion</Link>
                      <Link href="#">Games</Link>
                      <Link href="#">Travel</Link>
                    </div>

                    <div className="article-share">
                      <ul className="social">
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
                            href="https://www.twitter.com/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="fab fa-twitter"></i>
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
                        <li>
                          <a
                            href="https://www.instagram.com/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="fab fa-instagram"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div> */}
              </div>

              {/* Blog Comments Area */}
              {/* <BlogCommentsArea /> */}
            </div>

            <div className="col-lg-4 col-md-12">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetailsContent;
