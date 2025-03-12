"use client";
import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/global.css";
import CommercialLayout from "./layoutCommercial";

export default function QuoteCommercial() {
    const sectionRef = useRef(null);

    return (
        <CommercialLayout>
            <section
                id="free-quote"
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
                    <h2 className="display-3 mb-4">Request a Free Quote</h2>
                    <p className="lead">
                        Get a personalized quote for your pest control needs. Fill out the form
                        below, and our team will get back to you promptly.
                    </p>
                </div>

                {/* Free Quote Form */}
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
                                    backgroundColor: "#ffffff",
                                    color: "#000",
                                    border: "1px solid #ccc",
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
                                    backgroundColor: "#ffffff",
                                    color: "#000",
                                    border: "1px solid #ccc",
                                }}
                            />
                        </div>

                        {/* Phone Number */}
                        <div className="mb-4">
                            <label htmlFor="phone" className="form-label">
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                className="form-control"
                                placeholder="Enter your phone number"
                                required
                                style={{
                                    backgroundColor: "#ffffff",
                                    color: "#000",
                                    border: "1px solid #ccc",
                                }}
                            />
                        </div>

                        {/* Service Selection */}
                        <div className="mb-4">
                            <label htmlFor="service" className="form-label">
                                Select a Service
                            </label>
                            <select
                                id="service"
                                className="form-control"
                                required
                                style={{
                                    backgroundColor: "#ffffff",
                                    color: "#000",
                                    border: "1px solid #ccc",
                                }}
                            >
                                <option value="" disabled selected>
                                    Choose a service
                                </option>
                                <option value="termite">Termite Control</option>
                                <option value="bedbug">Bed Bug Treatment</option>
                                <option value="cockroach">Cockroach Management</option>
                                <option value="rodent">Rodent Control</option>
                                <option value="general">General Pest Control</option>
                            </select>
                        </div>

                        {/* Message */}
                        <div className="mb-4">
                            <label htmlFor="message" className="form-label">
                                Additional Information
                            </label>
                            <textarea
                                id="message"
                                className="form-control"
                                rows="4"
                                placeholder="Tell us more about your pest problem"
                                style={{
                                    backgroundColor: "#ffffff",
                                    color: "#000",
                                    border: "1px solid #ccc",
                                }}
                            ></textarea>
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
                            Submit Request
                        </button>
                    </form>
                </div>
            </section>
        </CommercialLayout>
    );
}
