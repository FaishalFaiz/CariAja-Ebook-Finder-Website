import React from "react";
import FooterIcon from "../assets/logo.svg";

export default function Footer() {
    return (
        <footer className="w-full bg-primary text-white flex flex-col md:flex-row justify-between items-center gap-5 py-10 px-[20%]">
            {/* Logo + Link */}
            <div className="flex flex-col gap-2 justify-center items-center text-center md:items-start">
                <img
                    src={FooterIcon}
                    alt="Footer Logo"
                    className="w-[clamp(120px,22vw,150px)]"
                    onClick={() => (window.location.href = "/")} // klik logo balik ke homepage
                />
                <p className="text-md">
                    <a href="#" className="hover:underline">Tentang Kami</a> •{" "}
                    <a href="#" className="hover:underline">Library</a> •{" "}
                    <a href="#" className="hover:underline">Bookmark</a>
                </p>
            </div>

            {/* Info pembuat */}
            <div className="text-sm items-center md:items-end flex flex-col gap-1">
                <p>Made By Faishal</p>
                <p>Jagoan IT © 2025.</p>
            </div>
        </footer>
    );
}
