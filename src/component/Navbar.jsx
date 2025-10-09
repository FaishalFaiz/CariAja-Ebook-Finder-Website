import React, { useState } from "react";
import logo from "../assets/logo.svg"; // ganti sesuai logomu
import { Menu, X, Bookmark, Search } from "lucide-react"; // ikon modern (pastikan kamu punya lucide-react)

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="flex items-center justify-center px-6 py-6 bg-dark text-white shadow-md">
            <div className="flex flex-row justify-between gap-4 items-center w-[90vw] md:w-[70vw]">
                <div className="flex items-center gap-2 hidden md:block">
                    <img src={logo} alt="Logo" className="w-[clamp(100px,8vw,140px)]" />
                </div>

                <div className="flex items-center bg-white rounded-full overflow-hidden w-full md:max-w-xl">
                    <Search className="text-gray-400 ml-3" size={18} />
                    <input
                        type="text"
                        placeholder="Cari Judul Buku, Penulis"
                        className="flex-1 px-3 py-2 text-gray-700 focus:outline-none placeholder:text-sm  md:placeholder:text-base"
                    />
                </div>

                <button
                    className="md:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
                <ul
                    className={`absolute left-0 top-[85px] py-3 md:py-0 w-full bg-dark text-center md:static md:flex md:w-auto md:space-x-6 transition-all duration-300 ${isOpen ? "block" : "hidden md:block"
                        }`}
                >
                    <li>
                        <a href="#" className="block px-4 py-2 hover:text-blue-400">
                            Library
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="flex items-center justify-center gap-2 px-4 py-2 hover:text-blue-400 transition-colors"
                        >
                            <Bookmark size={16} />
                            <span>Bookmark</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="inline-block px-4 py-2 bg-light text-primary font-medium rounded-full text-nowrap hover:bg-yellow-500 transition-colors duration-200"
                        >
                            Tentang Kami
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
