export default function About() {
    return (
        <div
            className="section-bg background-image"
            style={{
                backgroundImage: "url('assets/images/section-bg-1.png')",
            }}
        >
            {/* Start About Area */}
            <section className="ed-about section-gap position-relative">
                <div className="ed-container container">
                    <div className="row align-items-center">
                        {/* About Images */}
                        <div className="col-lg-6 col-12">
                            <div className="ed-about__images">
                                <div className="ed-about__main-img">
                                    <img src="assets/images/about/about-1/about-img.png" alt="about-img" />
                                </div>
                                <div className="counter-card updown-ani">
                                    <div className="counter-card__icon">
                                        <i className="fi fi-rr-graduation-cap"></i>
                                    </div>
                                    <div className="counter-card__info">
                                        <h4>
                                            <span className="counter">9394</span>+
                                        </h4>
                                        <p>Enrolled Learners</p>
                                    </div>
                                </div>

                                <div className="ed-about__shapes">
                                    <img className="ed-about__shape-1" src="assets/images/about/about-1/shape-1.svg" alt="shape-1" />
                                    <img className="ed-about__shape-2" src="assets/images/about/about-1/shape-2.svg" alt="shape-2" />
                                    <img className="ed-about__shape-3 rotate-ani" src="assets/images/about/about-1/shape-3.svg" alt="shape-3" />
                                </div>
                            </div>
                        </div>

                        {/* About Content */}
                        <div className="col-lg-6 order-class col-12">
                            <div className="ed-about__content">
                                <div className="ed-section-head">
                                    <span className="ed-section-head__sm-title">WELCOME TO EDUNA</span>
                                    <h3 className="ed-section-head__title ed-split-text left">
                                        Digital Online Academy: Your <br />
                                        Path to Creative Excellence
                                    </h3>
                                    <p className="ed-section-head__text">
                                        Excedteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit.
                                    </p>
                                </div>
                                <div className="ed-about__feature">
                                    <ul className="ed-about__features-list">
                                        <li>
                                            <img src="assets/images/icons/icon-check-blue.svg" alt="icon-check-blue" />
                                            Our Expert Trainers
                                        </li>
                                        <li>
                                            <img src="assets/images/icons/icon-check-blue.svg" alt="icon-check-blue" />
                                            Online Remote Learning
                                        </li>
                                        <li>
                                            <img src="assets/images/icons/icon-check-blue.svg" alt="icon-check-blue" />
                                            Easy to follow curriculum
                                        </li>
                                        <li>
                                            <img src="assets/images/icons/icon-check-blue.svg" alt="icon-check-blue" />
                                            Lifetime Access
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img className="ed-about__shape-4" src="assets/images/abstracts/abstract-element-regular.svg" alt="shape-4" />
                </div>
            </section>
            {/* End About Area */}

            {/* Start Category Area */}
            <section className="ed-category section-gap pt-0">
                <div className="ed-container container">
                    <div className="row">
                        <div className="col-12">
                            <div className="ed-section-head d-flex-between">
                                <div className="ed-section-head__info">
                                    <span className="ed-section-head__sm-title">COURSE CATEGORIES</span>
                                    <h3 className="ed-section-head__title ed-split-text left m-0">Top Categories You Want to Learn</h3>
                                </div>
                                <div className="ed-section-head__btn">
                                    <a href="course-1.html" className="ed-btn">
                                        Find Courses
                                        <i className="fi fi-rr-arrow-small-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Categories */}
                    <div className="row">
                        <div className="col-12">
                            <div className="ed-category__wrapper">
                                {[
                                    { bg: 'bg-1', title: 'Business', courses: '04' },
                                    { bg: 'bg-2', title: 'Marketing', courses: '88' },
                                    { bg: 'bg-3', title: 'Design', courses: '23' },
                                    { bg: 'bg-4', title: 'Finance', courses: '02' },
                                    { bg: 'bg-5', title: 'Lifestyle', courses: '29' },
                                    { bg: 'bg-6', title: 'Cyber', courses: '45' },
                                    { bg: 'bg-7', title: 'Development', courses: '28' },
                                    { bg: 'bg-8', title: 'Photography', courses: '03' },
                                ].map((cat, index) => (
                                    <a
                                        key={cat.title}
                                        href="course-1.html"
                                        className="ed-category__card wow fadeInUp"
                                        data-wow-delay={`${0.3 + index * 0.2}s`}
                                        data-wow-duration="1s"
                                    >
                                        <div className={`ed-category__icon ${cat.bg}`}>
                                            <img src={`assets/images/category/category-1/${index + 1}.svg`} alt="icon" />
                                        </div>
                                        <div className="ed-category__info">
                                            <h4>{cat.title}</h4>
                                            <p>{cat.courses} Courses</p>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Category Area */}
        </div>
    );
}
