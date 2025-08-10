export default function Hero() {
    return (
        <>
            {/* Start Hero Area */}
            <div
                className="section-bg hero-bg background-image"
                style={{
                    backgroundImage: "url('assets/images/hero/home-1/hero-bg.png')",
                }}
            >
                <section className="ed-hero">
                    <div className="ed-container-expand container">
                        {/* Hero Element Shapes */}
                        <div className="ed-hero__elements">
                            <img className="element-move ed-hero__shape-1" src="assets/images/hero/home-1/shape-1.svg" alt="shape-1" />
                            <img className="element-move ed-hero__shape-2" src="assets/images/hero/home-1/shape-2.svg" alt="shape-2" />
                            <img className="element-move ed-hero__shape-3" src="assets/images/hero/home-1/shape-3.svg" alt="shape-3" />
                            <img className="element-move ed-hero__shape-4" src="assets/images/hero/home-1/shape-4.svg" alt="shape-4" />
                            <img className="element-move ed-hero__shape-5" src="assets/images/hero/home-1/shape-5.png" alt="shape-5" />
                        </div>

                        <div className="row align-items-center">
                            <div className="col-lg-6 col-12">
                                {/* Hero Content */}
                                <div className="ed-hero__content">
                                    <h1 className="ed-hero__content-title ed-split-text left">
                                        Best <span>Online</span> Platform to Learn Everything
                                    </h1>

                                    <p className="ed-hero__content-text">
                                        Excedteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit.
                                    </p>

                                    <div className="ed-hero__btn">
                                        <a href="course-1.html" className="ed-btn">
                                            Find Courses
                                            <i className="fi fi-rr-arrow-small-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 col-12">
                                {/* Hero Image */}
                                <div className="ed-hero__image">
                                    <img src="assets/images/hero/home-1/hero-img.png" alt="hero-img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            {/* End Hero Area */}
        </>
    );
}
