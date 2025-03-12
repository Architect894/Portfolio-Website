"use client";

import React, { useState } from "react";
import Link from "next/link";
import "../styles/global.css";
import styles from "../styles/styles.module.css";

export default function DropMenu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <header
            className="menu-container"
            style={{
                position: "sticky",
                top: "0",
                zIndex: "50",
                backgroundColor: "rgba(2, 41, 87, 0.8)",
                backdropFilter: "blur(5px)",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.5)",
                padding: "10px 20px",
            }}
        >
            <nav
                className="mx-auto flex max-w-8xl items-center justify-between p-0 lg:px-8"
                aria-label="Global"
            >
                {/* Logo */}
                <div className="flex md:flex-0 lg:mr-5">
                    <Link href="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">United Pest Control</span>
                        <img className="logo-container" src="/UTPC3.png" alt="Logo" />
                    </Link>
                </div>

                {/* Desktop Navigation Links */}
                <div className="hidden lg:flex lg:gap-x-2">
                    <Link href="/howwework" className="button-container py-1 px-3">
                        How We Work
                    </Link>
                    <Link href="/pestlibrary" className="button-container py-1 px-3">
                        Pest Library
                    </Link>
                    <Link href="/payment" className="button-container py-1 px-3">
                        Make A Payment
                    </Link>
                    <div className="relative">
                        <button
                            type="button"
                            onClick={toggleDropdown}
                            className="button-container py-1 px-1"
                        >
                            The United Difference
                        </button>
                        {isDropdownOpen && (
                            <div className="absolute mt-2 w-48 bg-gray-800 rounded-lg shadow-lg z-20">
                                <Link
                                    href="/testimonialResidential"
                                    className="block px-4 py-2 text-sm text-white hover:bg-gray-700"
                                >
                                    Testimonials
                                </Link>
                                <Link
                                    href="/ourstory"
                                    className="block px-4 py-2 text-sm text-white hover:bg-gray-700"
                                >
                                    Our Story
                                </Link>
                            </div>
                        )}
                    </div>
                </div>

                {/* Login and Commercial Buttons */}
                <div className="hidden lg:flex flex-1 justify-end lg:gap-x-6 button-group">
                    <Link
                        href="/clientlogin"
                        className="text-md font-quicksand text-white bg-blue-600 hover:bg-indigo-500 hover:text-white px-6 py-3 rounded-md shadow-md transition-all flex items-center"
                    >
                        Log in <span aria-hidden="true" className="ml-2">
                            →
                        </span>
                    </Link>
                    <Link
                        href="/freequote"
                        className="text-md font-quicksand text-gray-800 bg-yellow-200 hover:bg-yellow-500 hover:text-white px-6 py-3 rounded-md shadow-md transition-all flex items-center"
                    >
                        Free Quote <span aria-hidden="true" className="ml-2">
                            →
                        </span>
                    </Link>
                </div>

                {/* Mobile Menu Toggle Button */}
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={toggleMobileMenu}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                            />
                        </svg>
                    </button>
                </div>
            </nav>

            {/* Mobile Navigation Menu */}
            {isMenuOpen && (
                <div className="lg:hidden bg-gray-800 text-white p-5">
                    <Link href="/ourstory" className="block py-2 px-4 hover:bg-gray-700">
                        How We Work
                    </Link>
                    <Link href="/pestlibrary" className="block py-2 px-4 hover:bg-gray-700">
                        Pest Library
                    </Link>
                    <Link href="/payment" className="block py-2 px-4 hover:bg-gray-700">
                        Make a Payment
                    </Link>
                    <button
                        onClick={toggleDropdown}
                        className="block w-full text-left py-2 px-4 hover:bg-gray-700"
                    >
                        The United Difference
                    </button>
                    {isDropdownOpen && (
                        <div className="pl-4">
                            <Link
                                href="/testimonialResidential"
                                className="block py-4 px-4 hover:bg-gray-700"
                            >
                                Testimonials
                            </Link>
                            <Link
                                href="/ourstory"
                                className="block py-4 px-4 hover:bg-gray-700"
                            >
                                Our Story
                            </Link>
                        </div>
                    )}
                    <Link
                        href="/clientlogin"
                        className="text-md font-quicksand text-gray-800 bg-blue-600 hover:bg-indigo-500 hover:text-white px-4 py-2 rounded-md shadow-md transition-all"
                    >
                        Log in →
                    </Link>
                    <Link
                        href="/freequote"
                        className="text-md font-quicksand text-gray-800 bg-yellow-200 hover:bg-yellow-500 hover:text-white px-4 py-2 rounded-md shadow-md transition-all"
                    >
                        Free Quote →
                    </Link>
                </div>
            )}
        </header>
    );
}
