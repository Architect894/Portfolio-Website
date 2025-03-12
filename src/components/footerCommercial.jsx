"use client";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/styles.module.css"; // Adjust the path if necessary
import "../styles/global.css";

export default function CommercialFooter() {
    return (
        <footer
            className="text-white py-5"
            style={{
                backgroundColor: "rgb(0, 61, 117)", // Bright blue background color
                fontFamily: "Quicksand",
            }}
        >
            <div className="container">
                <div className="row">
                    {/* Company Information */}
                    <div className="col-md-4 text-center text-md-start mb-4 mb-md-0">
                        <img
                            src="/UTPC2.png" // Replace with your actual logo path
                            alt="United Termite & Pest Control"
                            style={{
                                maxWidth: "150px",
                                backgroundColor:" #ffffff",
                                borderRadius: "5px",
                            }}
                        />
                        <address className="mt-3">
                            <p>1811 Carroll Ave.</p>
                            <p>Caruthersville, MO 63830</p>
                            <p>
                                <a href="tel:5733330189" className="text-white text-decoration-none">
                                    573-333-0189
                                </a>
                            </p>
                            <p>
                                <a
                                    href="mailto:info@utpmo.com"
                                    className="text-white text-decoration-none"
                                >
                                    info@utpmo.com
                                </a>
                            </p>
                        </address>
                    </div>

                    {/* Links */}
                    <div className="col-md-4 text-center">
                        <h5 className="mb-4">Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="/quoteCommercial" className="text-white text-decoration-none">Free Quote</a></li>
                            <li><a href="/" className="text-white text-decoration-none">Residential</a></li>
                            <li><a href="/commercial" className="text-white text-decoration-none">Commercial</a></li>
                            <li><a href="/pestCommercial" className="text-white text-decoration-none">Pest Library</a></li>
                        </ul>
                    </div>

                    {/* About Us */}
                    <div className="col-md-4 text-center text-md-start">
                        <h5 className="mb-4">About Us</h5>
                        <p>
                            At United Termite and Pest Control, we are here to make your life
                            better. For many, our home is our biggest investment, so let us
                            protect that investment from all pests and termites. We can also
                            keep your business cleaner, safer, and more secure. Call us for a
                            free quote for any project.
                        </p>
                        <a
                            href="#"
                            className="btn btn-warning text-dark text-decoration-none mt-3"
                            style={{ borderRadius: "5px" }}
                        >
                            Follow Us &nbsp; <i className="bi bi-facebook"></i>
                        </a>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div
                    className="text-center mt-5 pt-3"
                    style={{ borderTop: "1px solid #FFFFFF" }}
                >
                    <small>
                        Designed & Hosted: By <span className="text-warning">Elliott Software LLC</span>
                    </small>
                </div>
            </div>
        </footer>
    );
}
