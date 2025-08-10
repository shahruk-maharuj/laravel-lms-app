export default function Footer() {
    return (
        <div>
            {/* Start Footer Area */}
            <div className="ed-footer section-bg-color-1 position-relative">
                {/* Footer Top */}
                <div className="ed-footer__top position-relative">
                    <div className="ed-footer__shapes">
                        <img className="ed-footer__shape-1" src="assets/images/footer/footer-1/shape-1.svg" alt="shape-1" />
                        <img className="ed-footer__shape-2 rotate-ani" src="assets/images/footer/footer-1/shape-2.svg" alt="shape-2" />
                        <img className="ed-footer__shape-3" src="assets/images/footer/footer-1/shape-3.svg" alt="shape-3" />
                    </div>

                    <div className="ed-container container">
                        <div className="row g-0">
                            {/* About Section */}
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="ed-footer__widget ed-footer__about">
                                    <a href="index.html" className="ed-footer__logo">
                                        <img src="assets/images/logo.svg" alt="footer-logo" />
                                    </a>
                                    <p className="ed-footer__about-text">
                                        Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit.
                                    </p>
                                    <ul className="ed-footer__about-social">
                                        <li>
                                            <a href="https://www.facebook.com/" target="_blank">
                                                <img src="assets/images/icons/icon-dark-facebook.svg" alt="icon-dark-facebook" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.twitter.com/" target="_blank">
                                                <img src="assets/images/icons/icon-dark-twitter.svg" alt="icon-dark-twitter" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.dribbble.com/" target="_blank">
                                                <img src="assets/images/icons/icon-dark-dribbble.svg" alt="icon-dark-dribbble" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/" target="_blank">
                                                <img src="assets/images/icons/icon-dark-instagram.svg" alt="icon-dark-instagram" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Links */}
                            <div className="col-lg-2 col-md-6 col-12">
                                <div className="ed-footer__widget">
                                    <h4 className="ed-footer__widget-title">Links</h4>
                                    <ul className="ed-footer__widget-links">
                                        <li>
                                            <a href="about-1.html">About Us</a>
                                        </li>
                                        <li>
                                            <a href="course-1.html">Our Courses</a>
                                        </li>
                                        <li>
                                            <a href="#">Pricing Plan</a>
                                        </li>
                                        <li>
                                            <a href="contact.html">Contact Us</a>
                                        </li>
                                        <li>
                                            <a href="blog.html">Our News</a>
                                        </li>
                                        <li>
                                            <a href="faq.html">FAQ’s</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Contact */}
                            <div className="col-lg-3 col-md-6 col-12">
                                <div className="ed-footer__widget contact-widget">
                                    <h4 className="ed-footer__widget-title">Contact</h4>
                                    <div className="ed-footer__contact">
                                        <div className="ed-footer__contact-icon">
                                            <img src="assets/images/icons/icon-phone-blue.svg" alt="icon-phone-blue" />
                                        </div>
                                        <div className="ed-footer__contact-info">
                                            <span>24/7 Support</span>
                                            <a href="tel:+5323213333">+532 321 33 33</a>
                                        </div>
                                    </div>
                                    <div className="ed-footer__contact">
                                        <div className="ed-footer__contact-icon">
                                            <img src="assets/images/icons/icon-envelope-blue.svg" alt="icon-envelope-blue" />
                                        </div>
                                        <div className="ed-footer__contact-info">
                                            <span>Send Message</span>
                                            <a href="mailto:eduna@gmail.com">eduna@gmail.com</a>
                                        </div>
                                    </div>
                                    <div className="ed-footer__contact">
                                        <div className="ed-footer__contact-icon">
                                            <img src="assets/images/icons/icon-location-blue.svg" alt="icon-location-blue" />
                                        </div>
                                        <div className="ed-footer__contact-info">
                                            <span>Our Location</span>
                                            <a href="#" target="_blank">
                                                32/Jenin, London
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Newsletter */}
                            <div className="col-lg-3 col-md-6 col-12">
                                <div className="ed-footer__widget newsletter-widget">
                                    <h4 className="ed-footer__widget-title">Subscribe</h4>
                                    <div className="ed-footer__newsletter">
                                        <p className="ed-footer__about-text">Enter your email address to register to our newsletter subscription</p>
                                        <form action="#" method="post" className="ed-footer__newsletter-form">
                                            <input type="email" name="email" placeholder="Enter email" required />
                                            <button type="submit" className="ed-btn">
                                                Subscribe Now<i className="fi fi-rr-arrow-small-right"></i>
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="ed-footer__bottom">
                    <div className="ed-container container">
                        <div className="row">
                            <div className="col-12">
                                <p className="ed-footer__copyright-text">
                                    Copyright 2024 Eduna | Developed By
                                    <a href="https://themeforest.net/user/bizantheme" target="_blank">
                                        {' '}
                                        BizanTheme
                                    </a>
                                    . All Rights Reserved
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Footer Area */}
        </div>
    );
}
