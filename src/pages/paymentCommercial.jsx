"use client";
import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/global.css";
import CommercialLayout from "./layoutCommercial";

export default function CommercialPayment() {
    const sectionRef = useRef(null);

    return (
        <CommercialLayout>
            <section
                id="make-payment"
                className="position-relative text-white py-5 text-center"
                ref={sectionRef}
                style={{
                    position: "relative",
                    marginTop: "2%",
                    fontFamily: "Quicksand",
                }}
            >
                {/* Content Header */}
                <div
                    className="container position-relative d-flex flex-column justify-content-center align-items-center mb-5"
                    style={{
                        zIndex: 1,
                        backgroundColor: "rgba(0, 0, 0, 0.1)", // Semi-transparent background
                        backdropFilter: "blur(10px)", // Apply blur to the background
                        borderRadius: "10px", // Rounded corners for aesthetic
                        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.4)", // Subtle shadow for separation
                        padding: "20px", // Padding inside the text box
                        maxWidth: "90%", // Limit the width
                    }}
                >
                    <h2 className="display-3 mb-4">Make a Payment</h2>
                    <p className="lead">
                        Securely make a payment online for your United Pest Control services.
                    </p>
                </div>

                {/* Payment Form */}
                <div
                    className="container"
                    style={{
                        maxWidth: "500px",
                        backgroundColor: "#ffffff10",
                        borderRadius: "10px",
                        padding: "20px",
                        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
                    }}
                >
                    <form>
                        {/* Name Input */}
                        <div className="mb-4">
                            <label htmlFor="name" className="form-label">
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="form-control"
                                placeholder="Enter your full name"
                                required
                                style={{
                                    backgroundColor: "#ffffff10",
                                    color: "#fff",
                                    border: "1px solid #555",
                                }}
                            />
                        </div>

                        {/* Email Input */}
                        <div className="mb-4">
                            <label htmlFor="email" className="form-label">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="form-control"
                                placeholder="Enter your email address"
                                required
                                style={{
                                    backgroundColor: "#ffffff10",
                                    color: "#fff",
                                    border: "1px solid #555",
                                }}
                            />
                        </div>

                        {/* Payment Amount */}
                        <div className="mb-4">
                            <label htmlFor="amount" className="form-label">
                                Payment Amount
                            </label>
                            <input
                                type="number"
                                id="amount"
                                className="form-control"
                                placeholder="Enter payment amount"
                                required
                                style={{
                                    backgroundColor: "#ffffff10",
                                    color: "#fff",
                                    border: "1px solid #555",
                                }}
                            />
                        </div>

                        {/* Card Details */}
                        <div className="mb-4">
                            <label htmlFor="card-number" className="form-label">
                                Card Number
                            </label>
                            <input
                                type="text"
                                id="card-number"
                                className="form-control"
                                placeholder="XXXX XXXX XXXX XXXX"
                                required
                                style={{
                                    backgroundColor: "#ffffff10",
                                    color: "#fff",
                                    border: "1px solid #555",
                                }}
                            />
                        </div>
                        <div className="row">
                            <div className="col-md-6 mb-4">
                                <label htmlFor="expiry-date" className="form-label">
                                    Expiry Date
                                </label>
                                <input
                                    type="text"
                                    id="expiry-date"
                                    className="form-control"
                                    placeholder="MM/YY"
                                    required
                                    style={{
                                        backgroundColor: "#ffffff10",
                                        color: "#fff",
                                        border: "1px solid #555",
                                    }}
                                />
                            </div>
                            <div className="col-md-6 mb-4">
                                <label htmlFor="cvv" className="form-label">
                                    CVV
                                </label>
                                <input
                                    type="text"
                                    id="cvv"
                                    className="form-control"
                                    placeholder="XXX"
                                    required
                                    style={{
                                        backgroundColor: "#ffffff10",
                                        color: "#fff",
                                        border: "1px solid #555",
                                    }}
                                />
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="btn btn-primary w-100"
                            style={{
                                backgroundColor: "#003b7e",
                                border: "none",
                                padding: "10px",
                                fontSize: "16px",
                                borderRadius: "5px",
                            }}
                        >
                            Submit Payment
                        </button>
                    </form>
                </div>
            </section>
        </CommercialLayout>
    );
}
