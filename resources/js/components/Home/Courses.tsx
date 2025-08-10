export default function Courses() {
    return (
        <>
            {/* Start Features Area */}
            <section className="ed-features position-relative">
                <div className="ed-category__shapes">
                    <img className="ed-category__shape-1 updown-ani" src="assets/images/features/features-1/shape-1.svg" alt="shape-1" />
                    <img className="ed-category__shape-2 rotate-ani" src="assets/images/features/features-1/shape-2.svg" alt="shape-2" />
                </div>

                <div className="ed-container container">
                    <div className="row">
                        {/* Single Features Card */}
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="ed-features__card wow fadeInUp" data-wow-delay=".3s" data-wow-duration="1s">
                                <div className="ed-features__icon icon-bg bg-1">
                                    <img src="assets/images/features/features-1/1.svg" alt="icon" />
                                </div>
                                <div className="ed-features__info">
                                    <h4>Educator Support</h4>
                                    <p>Excedteur sint occaecat cupidatat non the proident sunt in culpa</p>
                                </div>
                            </div>
                        </div>

                        {/* Single Features Card */}
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="ed-features__card wow fadeInUp" data-wow-delay=".5s" data-wow-duration="1s">
                                <div className="ed-features__icon icon-bg bg-2">
                                    <img src="assets/images/features/features-1/2.svg" alt="icon" />
                                </div>
                                <div className="ed-features__info">
                                    <h4>Top Instructor</h4>
                                    <p>Excedteur sint occaecat cupidatat non the proident sunt in culpa</p>
                                </div>
                            </div>
                        </div>

                        {/* Single Features Card */}
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="ed-features__card wow fadeInUp" data-wow-delay=".7s" data-wow-duration="1s">
                                <div className="ed-features__icon icon-bg bg-3">
                                    <img src="assets/images/features/features-1/3.svg" alt="icon" />
                                </div>
                                <div className="ed-features__info">
                                    <h4>Award Winning</h4>
                                    <p>Excedteur sint occaecat cupidatat non the proident sunt in culpa</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Features Area */}

            {/* Start Course Area */}
            <section className="ed-course section-gap section-bg-1 position-relative">
                <div className="ed-course__shapes">
                    <img className="ed-course__shape-1 rotate-ani" src="assets/images/course/course-1/shape-1.svg" alt="shape-1" />
                    <img className="ed-course__shape-2 updown-ani" src="assets/images/abstracts/abstract-element-regular.svg" alt="shape-2" />
                    <img className="ed-course__shape-3 updown-ani" src="assets/images/course/course-1/shape-3.svg" alt="shape-3" />
                </div>

                <div className="ed-container container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 col-md-8 col-12">
                            <div className="ed-section-head text-center">
                                <span className="ed-section-head__sm-title">ONLINE COURSES</span>
                                <h3 className="ed-section-head__title ed-split-text left">Get Your Course With Us</h3>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        {/* 1 */}
                        <CourseCard
                            delay=".3s"
                            img="assets/images/course/course-1/1.png"
                            tag="Data Science"
                            lessons="23 Lessons"
                            teacher="Harrison Stone"
                            title="Data Competitive Strategy law and Organization Course"
                            reviews="09 Reviews"
                            price="$674.00"
                            students="673 Students"
                        />

                        {/* 2 */}
                        <CourseCard
                            delay=".5s"
                            img="assets/images/course/course-1/2.png"
                            tag="Business"
                            lessons="04 Lessons"
                            teacher="Alexander Wells"
                            title="Grow Personal Financial Security Thinking & Principles"
                            reviews="46 Reviews"
                            price="$633.00"
                            students="964 Students"
                        />

                        {/* 3 */}
                        <CourseCard
                            delay=".7s"
                            img="assets/images/course/course-1/3.png"
                            tag="Design"
                            lessons="87 Lessons"
                            teacher="John Smith"
                            title="The Complete Guide to Build RESTful API Application"
                            reviews="65 Reviews"
                            price="$383.00"
                            students="316 Students"
                        />

                        {/* 4 */}
                        <CourseCard
                            delay=".3s"
                            img="assets/images/course/course-1/4.png"
                            tag="Development"
                            lessons="04 Lessons"
                            teacher="Gabriel Cross"
                            title="Exploring Learning Landscapes in Academic Business"
                            reviews="94 Reviews"
                            price="$356.00"
                            students="352 Students"
                        />

                        {/* 5 */}
                        <CourseCard
                            delay=".5s"
                            img="assets/images/course/course-1/5.png"
                            tag="Marketing"
                            lessons="04 Lessons"
                            teacher="Maxwell Ford"
                            title="Voices from the Learning Manage Education Hub"
                            reviews="09 Reviews"
                            price="$643.00"
                            students="553 Students"
                        />

                        {/* 6 */}
                        <CourseCard
                            delay=".7s"
                            img="assets/images/course/course-1/6.png"
                            tag="Cyber Security"
                            lessons="04 Lessons"
                            teacher="Dominic Chase"
                            title="Starting SEO as your Home Based Business Courses"
                            reviews="09 Reviews"
                            price="$275.00"
                            students="254 Students"
                        />
                    </div>
                </div>
            </section>
            {/* End Course Area */}
        </>
    );
}

interface CourseCardProps {
    delay: string;
    img: string;
    tag: string;
    lessons: string;
    teacher: string;
    title: string;
    reviews: string;
    price: string;
    students: string;
}

/* Reusable course card component */
function CourseCard({ delay, img, tag, lessons, teacher, title, reviews, price, students }: CourseCardProps) {
    return (
        <div className="col-lg-6 col-xl-4 col-md-6 col-12">
            <div className="ed-course__card wow fadeInUp" data-wow-delay={delay} data-wow-duration="1s">
                <a href="course-details.html" className="ed-course__img">
                    <img src={img} alt="course-img" />
                </a>

                <a href="course-1.html" className="ed-course__tag">
                    {tag}
                </a>

                <div className="ed-course__body">
                    <div className="ed-course__lesson">
                        <div className="ed-course__part">
                            <i className="fi-rr-book"></i>
                            <p>{lessons}</p>
                        </div>
                        <div className="ed-course__teacher">
                            <i className="fi-rr-user"></i>
                            <p>{teacher}</p>
                        </div>
                    </div>

                    <a href="course-details.html" className="ed-course__title">
                        <h5>{title}</h5>
                    </a>

                    <div className="ed-course__rattings">
                        <ul>
                            {[...Array(5)].map((_, i) => (
                                <li key={i}>
                                    <i className="icofont-star"></i>
                                </li>
                            ))}
                            <li>
                                <span>({reviews})</span>
                            </li>
                        </ul>
                    </div>

                    <div className="ed-course__bottom">
                        <span className="ed-course__price">{price}</span>
                        <div className="ed-course__students">
                            <i className="fi fi-rr-graduation-cap"></i>
                            <p>{students}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
