import React from "react";
import Link from "next/link";
import blog3 from "../../public/images/blog-details/comments-author/img-1.jpg";
import blog4 from "../../public/images/blog-details/comments-author/img-2.jpg";
import blog5 from "../../public/images/blog-details/comments-author/img-3.jpg";
import blog6 from "../../public/images/blog-details/author.jpg";
import gl1 from "../../public/images/blog/img-1.jpg";
import gl2 from "../../public/images/blog/img-2.jpg";
import blogs from "../../api/blogs";
import { useRouter } from "next/router";
import BlogSidebar from "../BlogSidebar/BlogSidebar.js";
import Image from "next/image";

const BlogSingle = (props) => {
  const router = useRouter();

  const BlogDetails = blogs.find((item) => item.slug === router.query.slug);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <section className="wpo-blog-single-section section-padding">
      <div className="container">
        <div className="row">
          <div className={`col col-lg-8 col-12 ${props.blRight}`}>
            <div className="wpo-blog-content">
              <div className="post format-standard-image">
                <div className="entry-media">
                  <Image
                    src={BlogDetails.blogSingleImg}
                    alt=""
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </div>
                <div className="entry-meta">
                  <ul>
                    <li>
                      <i className="fi flaticon-user"></i> By{" "}
                      <Link href="/blog-single/Why-Industry-Are-A-Juicy-Target-For-Cyberattack">
                        {BlogDetails.author}
                      </Link>{" "}
                    </li>
                    <li>
                      <i className="fi flaticon-comment-white-oval-bubble"></i>{" "}
                      Comments {BlogDetails.comment}
                    </li>
                    <li>
                      <i className="fi flaticon-calendar"></i>{" "}
                      {BlogDetails.create_at}
                    </li>
                  </ul>
                </div>
                <h2>{BlogDetails.title2}</h2>
                <p>
                  In the modern era of healthcare, robust cybersecurity is just as critical as state-of-the-art medical equipment. Patient data, encompassing sensitive clinical histories and diagnostic findings, represents a lucrative target for malicious actors. Hospitals and medical institutions must deploy comprehensive, multi-layered security frameworks to prevent devastating breaches that could compromise both patient privacy and operational integrity. Proactive risk assessments, regular software audits, and staff training form the frontline of defense against evolving digital threats. 
                </p>
                <blockquote>
                  An effective medical cybersecurity policy doesn't just protect data—it protects lives. Disruption of critical hospital networks can directly inhibit patient care, making reliable IT infrastructure an indispensable component of modern clinical operations.
                </blockquote>
                <p>
                  Furthermore, implementing strict access controls and end-to-end encryption ensures that patient information remains confidential, only accessible to authorized medical personnel. By treating data security as a core tenet of patient care, institutions foster trust, ensure compliance with health regulations, and solidify their reputation for safety and reliability.
                </p>

                <div className="gallery">
                  <div>
                    <Image
                      src={gl1}
                      alt=""
                      style={{ maxWidth: "100%", height: "auto" }}
                    />
                  </div>
                  <div>
                    <Image
                      src={gl2}
                      alt=""
                      style={{ maxWidth: "100%", height: "auto" }}
                    />
                  </div>
                </div>
              </div>

              <div className="tag-share clearfix">
                <div className="tag">
                  <span>Share: </span>
                  <ul>
                    <li>
                      <Link href="/blog-single/Why-Industry-Are-A-Juicy-Target-For-Cyberattack">
                        Planning
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog-single/Why-Industry-Are-A-Juicy-Target-For-Cyberattack">
                        Helth
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog-single/Why-Industry-Are-A-Juicy-Target-For-Cyberattack">
                        Beauty
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="tag-share-s2 clearfix">
                <div className="tag">
                  <span>Share: </span>
                  <ul>
                    <li>
                      <Link href="/blog-single/Why-Industry-Are-A-Juicy-Target-For-Cyberattack">
                        facebook
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog-single/Why-Industry-Are-A-Juicy-Target-For-Cyberattack">
                        twitter
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog-single/Why-Industry-Are-A-Juicy-Target-For-Cyberattack">
                        linkedin
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog-single/Why-Industry-Are-A-Juicy-Target-For-Cyberattack">
                        pinterest
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="author-box">
                <div className="author-avatar">
                  <Link
                    href="/blog-single/Why-Industry-Are-A-Juicy-Target-For-Cyberattack"
                    target="_blank"
                  >
                    <Image
                      src={blog6}
                      alt=""
                      style={{ maxWidth: "100%", height: "auto" }}
                    />
                  </Link>
                </div>
                <div className="author-content">
                  <Link
                    href="/blog-single/Why-Industry-Are-A-Juicy-Target-For-Cyberattack"
                    className="author-name"
                  >
                    Author: {BlogDetails.author}
                  </Link>
                  <p>
                    Passionate about the intersection of modern healthcare and robust digital defense systems. Advancing global medical standards through innovative research.
                  </p>
                  <div className="socials">
                    <ul className="social-link">
                      <li>
                        <Link href="/blog-single/Why-Industry-Are-A-Juicy-Target-For-Cyberattack">
                          <i className="ti-facebook"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog-single/Why-Industry-Are-A-Juicy-Target-For-Cyberattack">
                          <i className="ti-twitter-alt"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog-single/Why-Industry-Are-A-Juicy-Target-For-Cyberattack">
                          <i className="ti-linkedin"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog-single/Why-Industry-Are-A-Juicy-Target-For-Cyberattack">
                          <i className="ti-instagram"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="more-posts">
                <div className="previous-post">
                  <Link href="/blog">
                    <span className="post-control-link">Previous Post</span>
                    <span className="post-name">
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditiis praesentium.
                    </span>
                  </Link>
                </div>
                <div className="next-post">
                  <Link href="/blog-left-sidebar">
                    <span className="post-control-link">Next Post</span>
                    <span className="post-name">
                      Dignissimos ducimus qui blanditiis praesentiu deleniti
                      atque corrupti quos dolores
                    </span>
                  </Link>
                </div>
              </div>

              <div className="comments-area">
                <div className="comments-section">
                  <h3 className="comments-title">Comments</h3>
                  <ol className="comments">
                    <li
                      className="comment even thread-even depth-1"
                      id="comment-1"
                    >
                      <div id="div-comment-1">
                        <div className="comment-theme">
                          <div className="comment-image">
                            <Image
                              src={blog3}
                              alt=""
                              style={{ maxWidth: "100%", height: "auto" }}
                            />
                          </div>
                        </div>
                        <div className="comment-main-area">
                          <div className="comment-wrapper">
                            <div className="comments-meta">
                              <h4>
                                John Abraham{" "}
                                <span className="comments-date">
                                  January 12,2025 At 9.00am
                                </span>
                              </h4>
                            </div>
                            <div className="comment-area">
                              <p>
                                Excellent perspective on a critical issue. Protecting patient data is paramount in today's high-tech medical environment. 
                              </p>
                              <div className="comments-reply">
                                <Link
                                  className="comment-reply-link"
                                  href="/blog-single/Why-Industry-Are-A-Juicy-Target-For-Cyberattack"
                                >
                                  <span>Reply</span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <ul className="children">
                        <li className="comment">
                          <div>
                            <div className="comment-theme">
                              <div className="comment-image">
                                <Image
                                  src={blog4}
                                  alt=""
                                  style={{ maxWidth: "100%", height: "auto" }}
                                />
                              </div>
                            </div>
                            <div className="comment-main-area">
                              <div className="comment-wrapper">
                                <div className="comments-meta">
                                  <h4>
                                    Lily Watson{" "}
                                    <span className="comments-date">
                                      January 12,2025 At 9.00am
                                    </span>
                                  </h4>
                                </div>
                                <div className="comment-area">
                                  <p>
                                    I completely agree. Training our hospital staff in basic cybersecurity protocols has made a massive difference.
                                  </p>
                                  <div className="comments-reply">
                                    <Link
                                      className="comment-reply-link"
                                      href="/blog-single/Why-Industry-Are-A-Juicy-Target-For-Cyberattack"
                                    >
                                      <span>Reply</span>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <ul>
                            <li className="comment">
                              <div>
                                <div className="comment-theme">
                                  <div className="comment-image">
                                    <Image
                                      src={blog5}
                                      alt=""
                                      style={{
                                        maxWidth: "100%",
                                        height: "auto",
                                      }}
                                    />
                                  </div>
                                </div>
                                <div className="comment-main-area">
                                  <div className="comment-wrapper">
                                    <div className="comments-meta">
                                      <h4>
                                        John Abraham{" "}
                                        <span className="comments-date">
                                          January 12,2025 At 9.00am
                                        </span>
                                      </h4>
                                    </div>
                                    <div className="comment-area">
                                      <p>
                                        It's true, every department must be aligned. We can't afford vulnerabilities in our critical care networks.
                                      </p>
                                      <div className="comments-reply">
                                        <Link
                                          className="comment-reply-link"
                                          href="/blog-single/Why-Industry-Are-A-Juicy-Target-For-Cyberattack"
                                        >
                                          <span>Reply</span>
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="comment">
                      <div>
                        <div className="comment-theme">
                          <div className="comment-image">
                            <Image
                              src={blog3}
                              alt=""
                              style={{ maxWidth: "100%", height: "auto" }}
                            />
                          </div>
                        </div>
                        <div className="comment-main-area">
                          <div className="comment-wrapper">
                            <div className="comments-meta">
                              <h4>
                                John Abraham{" "}
                                <span className="comments-date">
                                  January 12,2025 At 9.00am
                                </span>
                              </h4>
                            </div>
                            <div className="comment-area">
                              <p>
                                Thanks for this comprehensive guide. We will be reviewing our clinic's IT policies immediately.
                              </p>
                              <div className="comments-reply">
                                <Link
                                  className="comment-reply-link"
                                  href="/blog-single/Why-Industry-Are-A-Juicy-Target-For-Cyberattack"
                                >
                                  <span>Reply</span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ol>
                </div>
                <div className="comment-respond">
                  <h3 className="comment-reply-title">Post Comments</h3>
                  <form
                    onSubmit={submitHandler}
                    id="commentform"
                    className="comment-form"
                  >
                    <div className="form-textarea">
                      <textarea
                        id="comment"
                        placeholder="Write Your Comments..."
                      ></textarea>
                    </div>
                    <div className="form-inputs">
                      <input placeholder="Website" type="url" />
                      <input placeholder="Name" type="text" />
                      <input placeholder="Email" type="email" />
                    </div>
                    <div className="form-submit">
                      <input id="submit" value="Post Comment" type="submit" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <BlogSidebar blLeft={props.blLeft} />
        </div>
      </div>
    </section>
  );
};

export default BlogSingle;
