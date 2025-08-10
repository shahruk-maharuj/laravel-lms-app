export default function Sidebar() {
    return (
        <>
            {/* Start Sidebar */}
            <div className="offcanvas offcanvas-end ed-sidebar" tabIndex={-1} id="edSidebar" aria-labelledby="offcanvasRightLabel">
                <div className="ed-sidebar-header">
                    <a href="index-1.html" className="ed-sidebar-logo">
                        <img src="assets/images/logo.svg" alt="logo" />
                    </a>
                    <button type="button" className="text-reset" data-bs-dismiss="offcanvas" aria-label="Close">
                        <i className="fi fi-rr-cross"></i>
                    </button>
                </div>
                <div className="ed-sidebar-body m-0">
                    {/* Single Widget  */}
                    <div className="ed-sidebar-widget">
                        <h3 className="ed-sidebar-widget-title">Contacts Us:</h3>
                        {/* Sigle Info  */}
                        <div className="ed-contact__info-item">
                            <div className="ed-contact__info-icon">
                                <img src="assets/images/icons/icon-phone-blue.svg" alt="icon-phone-blue" />
                            </div>
                            <div className="ed-contact__info-content">
                                <span>24/7 Support</span>
                                <a href="tel:+532 321 33 33">+532 321 33 33</a>
                            </div>
                        </div>
                        {/* Sigle Info  */}
                        <div className="ed-contact__info-item">
                            <div className="ed-contact__info-icon">
                                <img src="assets/images/icons/icon-envelope-blue.svg" alt="icon-envelope-blue" />
                            </div>
                            <div className="ed-contact__info-content">
                                <span>Send Message</span>
                                <a href="mailto:eduna@gmail.com">eduna@gmail.com3</a>
                            </div>
                        </div>

                        {/* Sigle Info  */}
                        <div className="ed-contact__info-item">
                            <div className="ed-contact__info-icon">
                                <img src="assets/images/icons/icon-location-blue.svg" alt="icon-location-blue" />
                            </div>
                            <div className="ed-contact__info-content">
                                <span>Our Locati0n</span>
                                <a href="#">32/Jenin, London</a>
                            </div>
                        </div>
                    </div>

                    {/* Single Widget  */}
                    <div className="ed-sidebar-widget">
                        <h3 className="ed-sidebar-widget-title">Follow Us:</h3>
                        <ul className="ed-sidebar-social">
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
                                =======
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

                    {/* Single Widget  */}
                    <div className="ed-sidebar-widget">
                        <h3 className="ed-sidebar-widget-title">Subscribe Now:</h3>
                        <form action="#" method="post" className="ed-sidebar-subscribe">
                            <input type="email" name="email-address" placeholder="Enter email" required />
                            <button type="submit" className="ed-btn">
                                Subscribe<i className="fi fi-rr-arrow-small-right"></i>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            {/* End Sidebar  */}
            {/* Start Back To Top  */}
            <div className="progress-wrap">
                <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
                    <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
                </svg>
            </div>
            {/* End Back To Top */}
        </>
    );
}
