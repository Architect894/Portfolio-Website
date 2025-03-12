"use client";
import React, { useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/styles.module.css'; // Adjust the path as necessary
import '../styles/global.css';
import PagesLayout from './pageslayout';

export default function TestimonialResidential() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(styles['visible']);
                } else {
                    entry.target.classList.remove(styles['visible']);
                }
            });
        }, { threshold: 0.1 });

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    const testimonials = [
        {
            name: "John Doe",
            feedback: "United Pest Control eliminated our termite issue quickly and professionally. Highly recommend their services!",
            image: "/john.png",
        },
        {
            name: "Jane Smith",
            feedback: "Thanks to their team, our home is now rodent-free. Exceptional customer service and attention to detail.",
            image: "/jane.png",
        },
        {
            name: "Michael Johnson",
            feedback: "Affordable and effective pest control solutions. The staff is friendly and knowledgeable.",
            image: "/michael.png",
        },
        {
            name: "Emily Davis",
            feedback: "We had a severe bed bug issue, but United Pest Control resolved it efficiently. Truly lifesaving!",
            image: "/emily.png",
        },
    ];

    return (
        <PagesLayout>
            <section
                id="testimonials"
                className="position-relative text-white py-5 text-center"
                ref={sectionRef}
                style={{
                    position: 'relative',
                    marginTop: "2%",
                    fontFamily: "Quicksand"
                }}
            >
                {/* Header Content */}
                <div
                    className="container position-relative d-flex flex-column justify-content-center align-items-center mb-5"
                    style={{
                        zIndex: 1,
                        backgroundColor: 'rgba(0, 0, 0, 0.1)', // Semi-transparent background
                        backdropFilter: 'blur(10px)', // Apply blur to the background
                        borderRadius: '10px', // Rounded corners for aesthetic
                        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.4)', // Subtle shadow for separation
                        padding: '20px', // Padding inside the text box
                        maxWidth: '90%', // Limit the width
                    }}
                >
                    <h2 className="display-3 mb-3">What Our Clients Say</h2>
                    <p className="lead">
                        See why our clients trust United Pest Control for all their pest management needs.
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="container d-flex flex-wrap justify-content-center gap-4">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="card shadow-sm"
                            style={{
                                width: "300px",
                                backgroundColor: "#ffffff10",
                                borderRadius: "10px",
                                overflow: "hidden",
                                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
                            }}
                        >
                            <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="card-img-top"
                                style={{ height: "200px", objectFit: "cover" }}
                            />
                            <div className="card-body text-white">
                                <h5 className="card-title">{testimonial.name}</h5>
                                <p className="card-text">"{testimonial.feedback}"</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </PagesLayout>
    );
}
