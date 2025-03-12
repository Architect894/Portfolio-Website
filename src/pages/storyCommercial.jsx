"use client";
import React, { useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/styles.module.css'; // Adjust the path as necessary
import '../styles/global.css';
import CommercialLayout from './layoutCommercial';

export default function Ourstory() {
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

    return (
        <CommercialLayout>
            <section
                id="our-story"
                className="position-relative text-white py-5 text-center"
                ref={sectionRef}
                style={{
                    position: 'relative',
                    marginTop: "20%",
                    fontFamily: "Quicksand"
                }}
            >
                {/* Content */}
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
                    <h2 className="display-3 mb-3">Our Story</h2>
                    <p className="lead">
                        Forty years ago, Kerry founded United Pest Control with a dream to provide 
                        families and businesses with peace of mind through effective and reliable pest control solutions. 
                        With a passion for hard work and a commitment to exceptional service, Kerry laid the foundation 
                        for a business that would stand the test of time.
                    </p>
                    <p className="lead">
                        Over the decades, Kerry passed down his knowledge, values, and dedication to his son, Dayton. 
                        Together, they worked tirelessly to expand the business while maintaining the personal touch 
                        and care that made them a household name in pest control.
                    </p>
                    <p className="lead">
                        Today, Dayton continues the tradition, preparing to pass the torch to the next generation. 
                        At United Pest Control, our legacy is built on trust, experience, and a deep commitment to 
                        keeping your environment safe and pest-free.
                    </p>
                </div>

                {/* Video Showcase */}
                <div className="container d-flex flex-wrap justify-content-center gap-4">
                    {['/nologo.mp4', '/prologo.mp4', '/prologo.mp4', '/nologo.mp4'].map((src, index) => (
                        <div key={index} style={{ width: '45%', maxWidth: '500px', position: 'relative' }}>
                            <video
                                className="w-100 rounded shadow"
                                style={{ height: 'auto', objectFit: 'cover' }}
                                src={src}
                                autoPlay
                                loop
                                muted
                                playsInline
                            ></video>
                        </div>
                    ))}
                </div>
            </section>
        </CommercialLayout>
    );
}
