import React, { useState } from "react";
import logo from "../assets/logo.svg";
import { Menu, X, Bookmark, Search } from "lucide-react"; // ikon modern (pastikan lucide-react sudah terinstal)

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="z-50 flex items-center justify-center px-6 py-6 md:py-10 bg-dark text-white sticky top-0">
            <div className="flex flex-row justify-between gap-4 items-center w-[90vw] md:w-[70vw]">

                {/* Logo */}
                <img
                    src={logo}
                    alt="Logo"
                    className="w-[clamp(120px,8vw,140px)] clickable hidden md:block"
                    onClick={() => (window.location.href = "/")} // klik untuk balik ke homepage
                />

                {/* Search Bar */}
                <div className="flex items-center bg-white rounded-full overflow-hidden w-full md:max-w-xl">
                    <Search className="text-gray-400 ml-3" size={18} />
                    <input
                        type="text"
                        placeholder="Cari Judul Buku, Penulis"
                        className="flex-1 px-3 py-2 text-gray-700 focus:outline-none placeholder:text-sm md:placeholder:text-base"
                    />
                </div>

                {/* Tombol Toggle Menu (Mobile) */}
                <button
                    className="lg:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Menu */}
                <ul
                    className={`absolute left-0 top-[85px] py-3 lg:py-0 w-full bg-dark text-center lg:static lg:flex lg:w-auto lg:space-x-6 transition-all duration-300 ${isOpen ? "block" : "hidden lg:block"
                        }`}
                >
                    <li className="clickable">
                        <a href="#" className="block px-4 py-2">
                            Library
                        </a>
                    </li>

                    <li className="clickable">
                        <a
                            href="#"
                            className="flex items-center justify-center gap-2 px-4 py-2"
                        >
                            <Bookmark size={16} />
                            <span>Bookmark</span>
                        </a>
                    </li>

                    <li className="clickable">
                        <a
                            href="#"
                            className="inline-block px-4 py-2 bg-light text-primary font-medium rounded-full text-nowrap"
                        >
                            Tentang Kami
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
