"use client";

import React from "react";
import Link from "next/link";
import { Clock, Phone } from "lucide-react"; // Ensure lucide-react is installed
import "../styles/global.css";

export default function HeaderTop() {
    return (
        <div
            className="header-top py-2 px-3"
            style={{
                fontFamily: "Quicksand, sans-serif",
                fontSize: "14px",
            }}
        >
            <div className="header-content d-flex justify-content-between align-items-center flex-wrap">
                {/* Left: Phone and Hours */}
                <div className="header-left d-flex align-items-center gap-3 mb-2">
                    {/* Phone */}
                    <div className="d-flex align-items-center">
                        <Phone size={16} className="me-2" />
                        <a
                            href="tel:573-333-0189"
                            className="text-white text-decoration-none hover-effect"
                        >
                            (573) 333-0189
                        </a>
                    </div>

                    {/* Hours */}
                    <div className="d-flex align-items-center">
                        <Clock size={16} className="me-2" />
                        <span>8:00 AM - 5:00 PM</span>
                    </div>
                </div>

                {/* Right: Residential | Commercial */}
                <div className="header-links d-flex align-items-center gap-3">
                    <Link href="/" className="header-link">
                        Residential
                    </Link>
                    <span>|</span>
                    <Link href="/commercial" className="header-link">
                        Commercial
                    </Link>
                </div>
            </div>
        </div>
    );
}
