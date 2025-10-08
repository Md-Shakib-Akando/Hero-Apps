"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/assets/logo.png";
import { FaGithub, FaBars, FaTimes } from "react-icons/fa";

export default function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="border-b border-gray-300 bg-white fixed top-0 left-0 w-full z-50 py-2">
            <div className="flex justify-between items-center  py-3 md:max-w-11/12 md:mx-auto">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <Image src={logo} alt="Logo" width={40} height={40} />
                    <h1 className="text-[#632EE3] font-bold text-xl md:text-2xl">Hero.io</h1>
                </div>

                {/* Desktop Menu */}
                <nav className="hidden md:flex gap-6 items-center">
                    <Link href="/" className="hover:text-[#9F62F2] transition font-semibold">
                        Home
                    </Link>
                    <Link href="/apps" className="hover:text-[#9F62F2] transition font-semibold">
                        Apps
                    </Link>
                    <Link href="/installation" className="hover:text-[#9F62F2] transition font-semibold">
                        Installation
                    </Link>
                    <Link href="/addToApps" className="hover:text-[#9F62F2] transition font-semibold">
                        Add To Apps
                    </Link>


                </nav>
                <div className="hidden md:block">
                    <a
                        href="https://github.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-[#8c4ee3] transition"
                    >
                        <FaGithub size={20} /> Contribute
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden text-[#9F62F2] focus:outline-none"
                >
                    {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {menuOpen && (
                <div className="md:hidden bg-white border-t border-gray-200 shadow-md">
                    <nav className="flex flex-col items-center gap-4 py-4">
                        <Link
                            href="/"
                            className="hover:text-[#9F62F2] transition"
                            onClick={() => setMenuOpen(false)}
                        >
                            Home
                        </Link>
                        <Link
                            href="/apps"
                            className="hover:text-[#9F62F2] transition"
                            onClick={() => setMenuOpen(false)}
                        >
                            Apps
                        </Link>
                        <Link
                            href="/installation"
                            className="hover:text-[#9F62F2] transition"
                            onClick={() => setMenuOpen(false)}
                        >
                            Installation
                        </Link>
                        <Link
                            href="/addToApps"
                            className="hover:text-[#9F62F2] transition"
                            onClick={() => setMenuOpen(false)}
                        >
                            Add To Apps
                        </Link>
                        <a
                            href="https://github.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-[#8c4ee3] transition"
                            onClick={() => setMenuOpen(false)}
                        >
                            <FaGithub size={20} /> Contribute
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
}
