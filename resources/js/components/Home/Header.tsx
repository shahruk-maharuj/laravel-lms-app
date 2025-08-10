export default function Header() {
    return (
        <>
            {/* Start Header Area */}
            <header className="ed-header">
                <div className="ed-container-expand container">
                    <div className="ed-header__inner">
                        <div className="row align-items-center">
                            <div className="col-lg-7 col-12">
                                {/* Navigation Menu */}
                                <nav className="ed-header__navigation">
                                    <ul className="ed-header__menu">
                                        <li className="active">
                                            <a href="javascript:void(0)">
                                                Home<i className="fi fi-ss-angle-small-down"></i>
                                            </a>
                                            <ul className="sub-menu">
                                                <li className="active">
                                                    <a href="index.html">Home One</a>
                                                </li>
                                                <li>
                                                    <a href="index-2.html">Home Two</a>
                                                </li>
                                                <li>
                                                    <a href="index-3.html">Home Three</a>
                                                </li>
                                                <li>
                                                    <a href="index-4.html">Home Four</a>
                                                </li>
                                                <li>
                                                    <a href="index-5.html">Home Five</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)">
                                                Courses<i className="fi fi-ss-angle-small-down"></i>
                                            </a>
                                            <ul className="sub-menu">
                                                <li>
                                                    <a href="course-1.html">Course One</a>
                                                </li>
                                                <li>
                                                    <a href="course-2.html">Course Two</a>
                                                </li>
                                                <li>
                                                    <a href="course-3.html">Course Three</a>
                                                </li>
                                                <li>
                                                    <a href="course-details.html">Course Details</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)">
                                                Pages<i className="fi fi-ss-angle-small-down"></i>
                                            </a>
                                            <ul className="sub-menu">
                                                <li>
                                                    <a href="javascript:void(0)">
                                                        Products<i className="fi fi-ss-angle-small-right"></i>
                                                    </a>
                                                    <ul className="sub-menu third-menu">
                                                        <li>
                                                            <a href="product.html">Product</a>
                                                        </li>
                                                        <li>
                                                            <a href="product-details.html">Product Details</a>
                                                        </li>
                                                        <li>
                                                            <a href="cart.html">Product Cart</a>
                                                        </li>
                                                        <li>
                                                            <a href="checkout.html">Product Checkout</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0)">
                                                        Teacher <i className="fi fi-ss-angle-small-right"></i>
                                                    </a>
                                                    <ul className="sub-menu third-menu">
                                                        <li>
                                                            <a href="teacher.html">Teacher</a>
                                                        </li>
                                                        <li>
                                                            <a href="teacher-details.html">Teacher Details</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="faq.html">Faq</a>
                                                </li>
                                                <li>
                                                    <a href="404.html">404 Error</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)">
                                                News<i className="fi fi-ss-angle-small-down"></i>
                                            </a>
                                            <ul className="sub-menu">
                                                <li>
                                                    <a href="blog.html">Blog </a>
                                                </li>
                                                <li>
                                                    <a href="blog-details.html">Blog Details</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)">
                                                About<i className="fi fi-ss-angle-small-down"></i>
                                            </a>
                                            <ul className="sub-menu">
                                                <li>
                                                    <a href="about-1.html">About One </a>
                                                </li>
                                                <li>
                                                    <a href="about-2.html">About Two</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="contact.html">Contact</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="col-lg-5 col-12">
                                {/* Header Right */}
                                <div className="ed-header__right">
                                    <ul className="ed-header__contact">
                                        <li>
                                            <a href="tel:+532 321 33 33">+532 321 33 33</a>
                                        </li>
                                        <li>
                                            <a href="mailto:helloeduna@gmail.com">helloeduna@gmail.com</a>
                                        </li>
                                    </ul>
                                    <div className="ed-header__action">
                                        <div className="ed-header__cart">
                                            <button
                                                type="button"
                                                data-bs-toggle="offcanvas"
                                                data-bs-target="#edSidebarCart"
                                                aria-controls="offcanvasRight"
                                                className="ed-topbar__action-icon"
                                            >
                                                <img src="assets/images/icons/icon-grey-bag.svg" alt="icon-grey-bag" />
                                                <span>3</span>
                                            </button>
                                        </div>
                                        <div className="ed-header__menu">
                                            <button
                                                type="button"
                                                data-bs-toggle="offcanvas"
                                                data-bs-target="#edSidebar"
                                                aria-controls="offcanvasRight"
                                            >
                                                <img src="assets/images/icons/icon-grey-menu-3-line.svg" alt="icon-grey-menu-3-line" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/* End Header Area */}
        </>
    );
}
