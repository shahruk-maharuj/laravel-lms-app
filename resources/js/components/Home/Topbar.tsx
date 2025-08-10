export default function Topbar() {
    return (
        <>
            {/* Start Topbar Area */}
            <div className="ed-topbar">
                <div className="ed-container-expand container">
                    <div className="ed-topbar__inner">
                        {/* Logo */}
                        <div className="ed-topbar__logo">
                            <a href="index.html">
                                <img src="assets/images/logo.svg" alt="logo" />
                            </a>
                        </div>

                        {/* Category Dropdown */}
                        <div className="ed-topbar__search-widget">
                            <div className="ed-topbar__category">
                                <select>
                                    <option data-display="All Categories">All Categories</option>
                                    <option value="1">Business</option>
                                    <option value="2">Marketing</option>
                                    <option value="3">Design</option>
                                    <option value="4">Finance</option>
                                    <option value="5">Lifestyle</option>
                                    <option value="6">Development</option>
                                    <option value="7">Photography</option>
                                </select>
                            </div>
                            <div className="ed-topbar__search">
                                <form action="#" method="post">
                                    <input type="search" name="search" placeholder="Search your courses..." required />
                                    <button type="submit">
                                        Search<i className="fi-rr-search"></i>
                                    </button>
                                </form>
                            </div>
                        </div>

                        {/* Topbar Info */}
                        <div className="ed-topbar__info">
                            {/* Topbar Social */}
                            <ul className="ed-topbar__info-social">
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
                            {/* Topbar Buttons */}
                            <div className="ed-topbar__info-buttons">
                                <button type="button" className="register-btn" data-bs-toggle="modal" data-bs-target="#registerModal">
                                    Register
                                </button>
                                <button type="button" className="login-btn" data-bs-toggle="modal" data-bs-target="#loginModal">
                                    Log In
                                </button>
                            </div>

                            {/* Mobile Menu Button */}
                            <button type="button" className="mobile-menu-offcanvas-toggler" data-bs-toggle="modal" data-bs-target="#offcanvas-modal">
                                <span className="line"></span>
                                <span className="line"></span>
                                <span className="line"></span>
                            </button>
                            {/* End Mobile Menu Button */}
                        </div>
                    </div>
                </div>
            </div>
            {/* End Topbar Area */}
        </>
    );
}
