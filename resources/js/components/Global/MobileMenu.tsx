export default function MobileMenu() {
    return (
        <>
            {/* Start Mobile Menu Offcanvas */}
            <div className="modal mobile-menu-modal offcanvas-modal fade" id="offcanvas-modal">
                <div className="modal-dialog offcanvas-dialog">
                    <div className="modal-content">
                        <div className="modal-header offcanvas-header">
                            {/* Mobile Menu Logo */}
                            <div className="offcanvas-logo">
                                <a href="index.html">
                                    <img src="assets/images/logo.svg" alt="#" />
                                </a>
                            </div>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                <i className="fi fi-ss-cross"></i>
                            </button>
                        </div>
                        <div className="mobile-menu-modal-main-body">
                            {/* Mobile Menu Navigation */}
                            <nav className="offcanvas__menu">
                                <ul className="offcanvas__menu_ul">
                                    <li className="offcanvas__menu_li">
                                        <a className="offcanvas__menu_item active" href="index.html">
                                            Home
                                        </a>
                                        <ul className="offcanvas__sub_menu">
                                            <li className="offcanvas__sub_menu_li">
                                                <a href="index.html" className="offcanvas__sub_menu_item active">
                                                    Home One
                                                </a>
                                            </li>
                                            <li className="offcanvas__sub_menu_li">
                                                <a href="index-2.html" className="offcanvas__sub_menu_item">
                                                    Home Two
                                                </a>
                                            </li>

                                            <li className="offcanvas__sub_menu_li">
                                                <a href="index-3.html" className="offcanvas__sub_menu_item">
                                                    Home Three
                                                </a>
                                            </li>

                                            <li className="offcanvas__sub_menu_li">
                                                <a href="index-4.html" className="offcanvas__sub_menu_item">
                                                    Home Four
                                                </a>
                                            </li>

                                            <li className="offcanvas__sub_menu_li">
                                                <a href="index-5.html" className="offcanvas__sub_menu_item">
                                                    Home Five
                                                </a>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="offcanvas__menu_li">
                                        <a className="offcanvas__menu_item" href="course-1.html">
                                            Courses
                                        </a>
                                        <ul className="offcanvas__sub_menu">
                                            <li className="offcanvas__sub_menu_li">
                                                <a href="course-1.html" className="offcanvas__sub_menu_item">
                                                    Course One
                                                </a>
                                            </li>
                                            <li className="offcanvas__sub_menu_li">
                                                <a href="course-2.html" className="offcanvas__sub_menu_item">
                                                    Course Two
                                                </a>
                                            </li>
                                            <li className="offcanvas__sub_menu_li">
                                                <a href="course-3.html" className="offcanvas__sub_menu_item">
                                                    Course Three
                                                </a>
                                            </li>
                                            <li className="offcanvas__sub_menu_li">
                                                <a href="course-details.html" className="offcanvas__sub_menu_item">
                                                    Course Details
                                                </a>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="offcanvas__menu_li">
                                        <a className="offcanvas__menu_item" href="javascript:void(0)">
                                            Pages
                                        </a>
                                        <ul className="offcanvas__sub_menu">
                                            <li className="offcanvas__sub_menu_li">
                                                <a href="product.html" className="offcanvas__sub_menu_item">
                                                    Products
                                                </a>
                                                <ul className="offcanvas__sub_menu">
                                                    <li className="offcanvas__sub_menu_li">
                                                        <a className="offcanvas__sub_menu_item" href="product.html">
                                                            Product
                                                        </a>
                                                    </li>
                                                    <li className="offcanvas__sub_menu_li">
                                                        <a className="offcanvas__sub_menu_item" href="product-details.html">
                                                            Product Details
                                                        </a>
                                                    </li>
                                                    <li className="offcanvas__sub_menu_li">
                                                        <a className="offcanvas__sub_menu_item" href="cart.html">
                                                            Product Cart
                                                        </a>
                                                    </li>
                                                    <li className="offcanvas__sub_menu_li">
                                                        <a className="offcanvas__sub_menu_item" href="checkout.html">
                                                            Product Checkout
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="offcanvas__sub_menu_li">
                                                <a href="teacher.html" className="offcanvas__sub_menu_item">
                                                    Teacher{' '}
                                                </a>
                                                <ul className="offcanvas__sub_menu">
                                                    <li className="offcanvas__sub_menu_li">
                                                        <a className="offcanvas__sub_menu_item" href="teacher.html">
                                                            Teacher
                                                        </a>
                                                    </li>
                                                    <li className="offcanvas__sub_menu_li">
                                                        <a className="offcanvas__sub_menu_item" href="teacher-details.html">
                                                            Teacher Details
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="offcanvas__sub_menu_li">
                                                <a href="faq.html" className="offcanvas__sub_menu_item">
                                                    Faq
                                                </a>
                                            </li>

                                            <li className="offcanvas__sub_menu_li">
                                                <a href="404.html" className="offcanvas__sub_menu_item">
                                                    404 Error
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="offcanvas__menu_li">
                                        <a className="offcanvas__menu_item" href="blog.html">
                                            News
                                        </a>
                                        <ul className="offcanvas__sub_menu">
                                            <li className="offcanvas__sub_menu_li">
                                                <a href="blog.html" className="offcanvas__sub_menu_item">
                                                    Blog
                                                </a>
                                            </li>
                                            <li className="offcanvas__sub_menu_li">
                                                <a href="blog-details.html" className="offcanvas__sub_menu_item">
                                                    Blog Details
                                                </a>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="offcanvas__menu_li">
                                        <a className="offcanvas__menu_item" href="about-1.html">
                                            About
                                        </a>
                                        <ul className="offcanvas__sub_menu">
                                            <li className="offcanvas__sub_menu_li">
                                                <a href="about-1.html" className="offcanvas__sub_menu_item">
                                                    About One
                                                </a>
                                            </li>
                                            <li className="offcanvas__sub_menu_li">
                                                <a href="about-2.html" className="offcanvas__sub_menu_item">
                                                    About Two
                                                </a>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="offcanvas__menu_li">
                                        <a className="offcanvas__menu_item" href="contact.html">
                                            Contact
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Mobile Menu Offcanvas */}
        </>
    );
}
