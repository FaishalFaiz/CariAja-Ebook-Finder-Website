import React from "react";
import "./tailwind.css";
import Navbar from "./component/Navbar.jsx";
import CropEffect from "./assets/cropeffect.webp";

export default function App() {
  return (
    <>
      <Navbar />
      <header className="relative text-white w-full px-5 h-fit pt-[12vh] pb-[20vh] bg-gradient-to-b from-dark to-primary flex flex-col justify-center items-center">
        <h1 className="text-[2rem] md:text-[3rem] font-polyb text-wrap h-fit max-w-[35rem] text-center">Nyari <span className="font-polyw">e-book</span> tapi  <span className="bg-white text-primary px-3 rounded-md">ribet</span> & penuh <span className="font-polyi italic">drama</span>? Sini, <a href="# " className="text-light underline">CariAja.</a></h1>
        <div
            className="absolute left-0 bottom-0 w-full h-[50px] md:h-[70px] bg-repeat-x"
            style={{
              backgroundImage: `url(${CropEffect})`,
              backgroundSize: "auto 100%",
              backgroundPosition: "bottom center",
            }}
          ></div>
      </header>
      <main className="flex flex-col w-4/5 md:w-6/10 m-auto items-center justify-center mt-10">
            <section className="flex flex-col w-full items-center justify-center">
              <h3 className="text-center section-title">Kategori Populer</h3>
              <ul className="w-full flex flex-wrap p-0 items-center justify-center gap-5 mt-5">
                <li className="category-card"><a href="">Novel & Fiksi</a></li>
                <li className="category-card"><a href="">Pendidikan</a></li>
                <li className="category-card"><a href="">Sains</a></li>
                <li className="category-card"><a href="">Bisnis & Ekonomi</a></li>
                <li className="category-card"><a href="">Bahasa & Sastra</a></li>
                <li className="category-card"><a href="">Pengembangan Diri (Self-Help)</a></li>
                <li className="category-card"><a href="">30+</a></li>
              </ul>
            </section>

            {/* bagian List Buku */}
            <section className="flex flex-col w-full items-center justify-center mt-20 mb-10">
              <div className="flex w-full justify-between">
                <h3 className="section-title">Novel &amp; Fiksi -&gt;</h3>
                <a className="section-sub">Lihat Semua</a>
              </div>
            </section>
      </main>
    </>
  );
}