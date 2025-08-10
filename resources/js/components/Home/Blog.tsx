export default function BlogAndCallToAction() {
    return (
        <div className="section-bg background-image" style={{ backgroundImage: "url('assets/images/section-bg-3.png')" }}>
            {/* Start Blog Area */}
            <section className="ed-blog section-gap">
                <div className="ed-container container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 col-md-8 col-12">
                            <div className="ed-section-head text-center">
                                <span className="ed-section-head__sm-title">OUR NEWS</span>
                                <h3 className="ed-section-head__title ed-split-text left">Our New Articles</h3>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        {/* Single Blog */}
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="ed-blog__card wow fadeInUp" data-wow-delay=".3s" data-wow-duration="1s">
                                <div className="ed-blog__head">
                                    <div className="ed-blog__img">
                                        <img src="assets/images/blog/blog-1/1.png" alt="blog-img" />
                                    </div>
                                    <a href="blog.html" className="ed-blog__category">
                                        Education
                                    </a>
                                </div>
                                <div className="ed-blog__content">
                                    <ul className="ed-blog__meta">
                                        <li>
                                            <i className="fi fi-rr-calendar"></i>09 May, 2024
                                        </li>
                                        <li>
                                            <i className="fi fi-rr-comment-alt-dots"></i>32 Comments
                                        </li>
                                    </ul>
                                    <a href="blog-details.html" className="ed-blog__title">
                                        <h4>Solutions Your All Problem With Online Courses For Your Thinking</h4>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Single Blog */}
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="ed-blog__card wow fadeInUp" data-wow-delay=".5s" data-wow-duration="1s">
                                <div className="ed-blog__head">
                                    <div className="ed-blog__img">
                                        <img src="assets/images/blog/blog-1/2.png" alt="blog-img" />
                                    </div>
                                    <a href="blog.html" className="ed-blog__category">
                                        Business
                                    </a>
                                </div>
                                <div className="ed-blog__content">
                                    <ul className="ed-blog__meta">
                                        <li>
                                            <i className="fi fi-rr-calendar"></i>09 January, 2024
                                        </li>
                                        <li>
                                            <i className="fi fi-rr-comment-alt-dots"></i>98 Comments
                                        </li>
                                    </ul>
                                    <a href="blog-details.html" className="ed-blog__title">
                                        <h4>Exploring Learning Landscapes in All Academic Calendar For Season</h4>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Single Blog */}
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="ed-blog__card wow fadeInUp" data-wow-delay=".7s" data-wow-duration="1s">
                                <div className="ed-blog__head">
                                    <div className="ed-blog__img">
                                        <img src="assets/images/blog/blog-1/3.png" alt="blog-img" />
                                    </div>
                                    <a href="blog.html" className="ed-blog__category">
                                        Marketing
                                    </a>
                                </div>
                                <div className="ed-blog__content">
                                    <ul className="ed-blog__meta">
                                        <li>
                                            <i className="fi fi-rr-calendar"></i>03 June, 2024
                                        </li>
                                        <li>
                                            <i className="fi fi-rr-comment-alt-dots"></i>04 Comments
                                        </li>
                                    </ul>
                                    <a href="blog-details.html" className="ed-blog__title">
                                        <h4>Voices from the Learning Education Hub For Your Children</h4>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Blog Area */}

            {/* Start Call Action Area */}
            <section className="ed-call-action position-relative">
                <div className="ed-container container">
                    <div className="ed-call-action__inner position-relative">
                        <div className="ed-call-action__shapes">
                            <img
                                className="ed-call-action__shape-1 rotate-ani"
                                src="assets/images/call-action/call-action-1/shape-1.svg"
                                alt="shape-1"
                            />
                            <img className="ed-call-action__shape-2" src="assets/images/call-action/call-action-1/shape-2.svg" alt="shape-2" />
                            <img
                                className="ed-call-action__shape-3 updown-ani"
                                src="assets/images/call-action/call-action-1/shape-3.svg"
                                alt="shape-3"
                            />
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-12">
                                <div className="ed-call-action__img">
                                    <img src="assets/images/call-action/call-action-1/call-action-img.png" alt="call-action-img" />
                                </div>
                            </div>
                            <div className="col-lg-6 order-class col-12">
                                <div className="ed-call-action__content">
                                    <div className="ed-section-head">
                                        <span className="ed-section-head__sm-title">GET STARTED NOW</span>
                                        <h3 className="ed-section-head__title">
                                            Affordable Your Online Courses <br />& Learning Opportunities
                                        </h3>
                                        <p className="ed-section-head__text">
                                            Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit. Excepteur sint
                                            occaecat.
                                        </p>
                                    </div>
                                    <div className="ed-call-action__content-btn">
                                        <a href="course-1.html" className="ed-btn">
                                            Start Learning Today
                                            <i className="fi fi-rr-arrow-small-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Call Action Area */}
        </div>
    );
}
