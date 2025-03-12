"use client";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/global.css"; // Adjust the path as necessary
import CommercialLayout from "./layoutCommercial";

export default function CommercialHome() {
    const services = [
        {
            title: "Comprehensive Pest Management",
            description:
                "Tailored pest control plans for your business to ensure a pest-free environment year-round.",
            image: "/comprehensive.png",
        },
        {
            title: "24/7 Emergency Service",
            description:
                "Rapid response for unexpected pest issues, minimizing disruption to your business.",
            image: "/america.png",
        },
        {
            title: "Industries We Serve",
            description:
                "From restaurants and hotels to warehouses and office spaces, we specialize in all industries.",
            image: "/industry.png",
        },
        {
            title: "Eco-Friendly Solutions",
            description:
                "Sustainable pest control methods to protect your business and the environment.",
            image: "/eco.png",
        },
    ];

    return (
        <CommercialLayout>
            <section
                id="commercial-home"
                className="position-relative text-white py-5 text-center"
                style={{
                    fontFamily: "Quicksand",
                }}
            >
                {/* Hero Section */}
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
                    <h1 className="display-3 mb-3">United Pest Control</h1>
                    <h2 className="mb-4">Commercial Pest Control Solutions</h2>
                    <p className="lead">
                        Safeguard your business with our expert pest management solutions. United
                        Pest Control has over 40 years of experience delivering trusted services
                        tailored to large businesses.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="container d-flex flex-wrap justify-content-center gap-4">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="card shadow-sm text-white"
                            style={{
                                width: "300px",
                                backgroundColor: "#ffffff10",
                                borderRadius: "10px",
                                overflow: "hidden",
                                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
                            }}
                        >
                            <img
                                src={service.image}
                                alt={service.title}
                                className="card-img-top"
                                style={{ height: "200px", objectFit: "cover" }}
                            />
                            <div className="card-body">
                                <h5 className="card-title">{service.title}</h5>
                                <p className="card-text">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div
                    className="container position-relative d-flex flex-column justify-content-center align-items-center mt-5"
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
                    <h2>Ready to Protect Your Business?</h2>
                    <p className="lead">
                        Contact us today for a consultation and discover how we can help your
                        business stay pest-free.
                    </p>
                    <a
                        href="/contactus"
                        className="btn btn-primary"
                        style={{
                            padding: "10px 20px",
                            fontSize: "18px",
                            borderRadius: "5px",
                        }}
                    >
                        Contact Us
                    </a>
                </div>
            </section>
        </CommercialLayout>
    );
}
