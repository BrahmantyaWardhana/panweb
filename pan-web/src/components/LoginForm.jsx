import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function LoginForm() {
    return (
        <section className="h-100" style={{ backgroundColor: "#f7f7f7" }}>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-8 col-lg-6">
                        <div className="card shadow-sm">
                            <div className="row g-0">
                                {/* Left side - Form */}
                                <div className="col-12 col-md-6">
                                    <div className="card-body p-4">
                                        <h4>Please login to your account</h4>
                                        <form>
                                            <div className="mb-4">
                                                <label className="form-label" htmlFor="email-input">Username</label>
                                                <input
                                                    type="email"
                                                    id="email-input"
                                                    className="form-control"
                                                    placeholder="Phone number or email address"
                                                />
                                            </div>

                                            <div className="mb-4">
                                                <label className="form-label" htmlFor="password-input">Password</label>
                                                <input
                                                    type="password"
                                                    id="password-input"
                                                    className="form-control"
                                                    placeholder="Password"
                                                />
                                            </div>

                                            <div className="text-center pt-1 mb-5 pb-1">
                                                <button className="btn btn-primary w-100" type="button">Log in</button>
                                                <a className="text-muted" href="#!">Forgot password?</a>
                                            </div>

                                            <div className="d-flex align-items-center justify-content-center pb-4">
                                                <p className="mb-0 me-2">Don't have an account?</p>
                                                <button type="button" className="btn btn-outline-danger">Create new</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>

                                {/* Right side - Text with colored background */}
                                <div className="col-12 col-md-6" style={{ backgroundColor: "#6c757d" }}>
                                    <div className="text-white px-4 py-5">
                                        <h5>Welcome to Our Platform</h5>
                                        <p className="small mb-0">
                                            Join us today to experience the best services and exclusive content.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LoginForm;
