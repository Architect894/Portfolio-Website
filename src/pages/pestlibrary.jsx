"use client";
import React, { useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/styles.module.css"; // Adjust the path as necessary
import "../styles/global.css";
import PagesLayout from "./pageslayout";

export default function PestLibrary() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(styles["visible"]);
                    } else {
                        entry.target.classList.remove(styles["visible"]);
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    const pests = [
        {
            name: "Termites",
            description: "Wood-destroying insects that cause extensive structural damage.",
            image: "/termite.png",
        },
        {
            name: "Bed Bugs",
            description: "Small, blood-feeding insects that infest sleeping areas.",
            image: "/bedbug.png",
        },
        {
            name: "Cockroaches",
            description: "Disease-carrying pests commonly found in kitchens and bathrooms.",
            image: "/cockroach.png",
        },
        {
            name: "Ants",
            description: "Common household invaders searching for food and shelter.",
            image: "/ant.png",
        },
        {
            name: "Spiders",
            description: "Eight-legged arachnids, some of which can be venomous.",
            image: "/spider.png",
        },
        {
            name: "Mosquitoes",
            description: "Biting insects that spread diseases like malaria and dengue.",
            image: "/mosquito.png",
        },
        {
            name: "Rodents",
            description: "Mice and rats that chew through structures and contaminate food.",
            image: "/rodent.png",
        },
        {
            name: "Bees & Wasps",
            description: "Stinging insects that can pose threats near homes and gardens.",
            image: "/beewasp.png",
        },
    ];

    return (
        <PagesLayout>
            <section
                id="bug-library"
                className="position-relative text-white py-2 text-center"
                ref={sectionRef}
                style={{
                    position: "relative",
                    marginTop: "2%",
                    fontFamily: "Quicksand",
                }}
            >
                {/* Content */}
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
                    <h2 className="display-3 mb-5">Pest Library</h2>
                    <p className="lead">
                        At United Pest Control, we pride ourselves on offering top-tier pest
                        management solutions. Explore our library of common pests we handle.
                    </p>
                </div>

                {/* Bug Grid */}
                <div className="container d-flex flex-wrap justify-content-center gap-4">
                    {pests.map((pest, index) => (
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
                                src={pest.image}
                                alt={pest.name}
                                className="card-img-top"
                                style={{ height: "200px", objectFit: "cover" }}
                            />
                            <div className="card-body text-white">
                                <h5 className="card-title">{pest.name}</h5>
                                <p className="card-text">{pest.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </PagesLayout>
    );
}
