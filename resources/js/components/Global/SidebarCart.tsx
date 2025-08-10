export default function SidebarCart() {
    return (
        <>
            {/* Start Sidebar Cart */}
            <div
                className="offcanvas offcanvas-end ed-sidebar ed-sidebar-cart"
                tabIndex={-1}
                id="edSidebarCart"
                aria-labelledby="offcanvasRightLabel"
            >
                <div className="ed-sidebar-header">
                    <h3 className="ed-sidebar-header-title">Add to cart</h3>
                    <button type="button" className="text-reset" data-bs-dismiss="offcanvas" aria-label="Close">
                        <i className="fi fi-rr-cross"></i>
                    </button>
                </div>
                <div className="ed-sidebar-body">
                    {/* Single Cart Item  */}
                    <div className="ed-sidebar-cart-item">
                        <div className="ed-sidebar-cart-main">
                            <div className="ed-sidebar-cart-img">
                                <img src="assets/images/product/cart-1.png" alt="cart-1" />
                            </div>
                            <div className="ed-sidebar-cart-info">
                                <span>
                                    1 x <strong>$64</strong>
                                </span>
                                <a href="product-details.html">Digital marketing demo</a>
                            </div>
                        </div>
                        <div className="ed-sidebar-cart-remove">
                            <button type="button">
                                <i className="fi-rr-cross"></i>
                            </button>
                        </div>
                    </div>

                    {/* Single Cart Item  */}
                    <div className="ed-sidebar-cart-item">
                        <div className="ed-sidebar-cart-main">
                            <div className="ed-sidebar-cart-img">
                                <img src="assets/images/product/cart-2.png" alt="cart-2" />
                            </div>
                            <div className="ed-sidebar-cart-info">
                                <span>
                                    1 x <strong>$74</strong>
                                </span>
                                <a href="product-details.html">Business solution book</a>
                            </div>
                        </div>
                        <div className="ed-sidebar-cart-remove">
                            <button type="button">
                                <i className="fi-rr-cross"></i>
                            </button>
                        </div>
                    </div>

                    {/* Single Cart Item */}
                    <div className="ed-sidebar-cart-item">
                        <div className="ed-sidebar-cart-main">
                            <div className="ed-sidebar-cart-img">
                                <img src="assets/images/product/cart-3.png" alt="cart-3" />
                            </div>
                            <div className="ed-sidebar-cart-info">
                                <span>
                                    1 x <strong>$94</strong>
                                </span>
                                <a href="product-details.html">Business type</a>
                            </div>
                        </div>
                        <div className="ed-sidebar-cart-remove">
                            <button type="button">
                                <i className="fi-rr-cross"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="ed-sidebar-footer">
                    <div className="ed-sidebar-cart-subtotal">
                        <p>
                            Subtotal:<span> $224</span>
                        </p>
                        <a href="checkout.html" className="ed-sidebar-cart-btn">
                            Checkout
                        </a>
                    </div>
                </div>
            </div>
            {/* End Sidebar Cart */}
        </>
    );
}
