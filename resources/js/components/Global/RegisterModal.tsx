export default function RegisterModal() {
    return (
        <>
            {/* Start Register Modal */}
            <div className="modal fade ed-auth__modal" id="registerModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="ed-auth__modal-content modal-content">
                        <button type="button" className="ed-auth__modal-close" data-bs-dismiss="modal" aria-label="Close">
                            <i className="fi-rr-cross"></i>
                        </button>

                        {/* Auth Head  */}
                        <div className="ed-auth__modal-head">
                            <a href="index.html" className="ed-auth__modal-logo">
                                <img src="assets/images/logo.svg" alt="logo" />
                            </a>
                            <h3 className="ed-auth__modal-title">Sign Up Now</h3>
                            <p className="ed-auth__modal-text">
                                already have an account?
                                <button type="button" data-bs-toggle="modal" data-bs-target="#loginModal">
                                    Sign In
                                </button>
                                <button type="button" data-bs-toggle="modal" data-bs-target="#loginModal">
                                    Sign In
                                </button>
                            </p>
                        </div>

                        {/* Auth Body  */}
                        <div className="ed-auth__modal-body">
                            <form action="#" method="post" className="ed-auth__modal-form">
                                <div className="form-group">
                                    <input type="text" name="name" placeholder="Enter name" required />
                                </div>

                                <div className="form-group">
                                    <input type="text" name="user name" placeholder="Enter user name" required />
                                </div>

                                <div className="form-group">
                                    <input type="email" name="email" placeholder="Enter email" required />
                                </div>

                                <div className="form-group">
                                    <input type="password" name="password" placeholder="Enter password" required />
                                </div>

                                <div className="form-check">
                                    <label className="form-check-label" htmlFor="flexCheckDefault2">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault2" />I agree with your{' '}
                                        <strong>Privacy Policy</strong>
                                    </label>
                                </div>
                                <div className="ed-auth__form-btn">
                                    <button type="submit" className="ed-btn">
                                        Register Now<i className="fi fi-rr-arrow-small-right"></i>
                                    </button>
                                </div>
                            </form>
                        </div>
                        {/* Auth Footer  */}
                        <div className="ed-auth__modal-footer">
                            <div className="ed-auth__modal-third-party">
                                <p>Or Sign Up with</p>
                                <ul className="ed-auth__modal-third-party-list">
                                    <li>
                                        <a className="google-login" href="https://www.google.com/">
                                            <img src="assets/images/icons/icon-color-google.svg" alt="icon-color-google" />
                                        </a>
                                    </li>

                                    <li>
                                        <a className="facebook-login" href="https://facebook.com/">
                                            <img src="assets/images/icons/icon-color-facebook.svg" alt="icon-color-facebook" />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="linkedin-login" href="https://www.linkedin.com/">
                                            <img src="assets/images/icons/icon-color-linkedin.svg" alt="icon-color-linkedin" />
                                        </a>

                                        <a className="google-login" href="https://www.google.com/">
                                            <img src="assets/images/icons/icon-color-google.svg" alt="icon-color-google" />
                                        </a>
                                    </li>

                                    <li>
                                        <a className="facebook-login" href="https://facebook.com/">
                                            <img src="assets/images/icons/icon-color-facebook.svg" alt="icon-color-facebook" />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="linkedin-login" href="https://www.linkedin.com/">
                                            <img src="assets/images/icons/icon-color-linkedin.svg" alt="icon-color-linkedin" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Register Modal */}
        </>
    );
}
