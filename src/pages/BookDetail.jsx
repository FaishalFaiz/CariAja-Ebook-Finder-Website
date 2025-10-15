import React from "react";
import { Bookmark } from "lucide-react";

export default function BookDetail() {
    return (
        <main className="w-4/5 md:w-6/10 mx-auto flex flex-col mt-[10vh]">
            <div className="w-full flex flex-col md:flex-row gap-10 justify-between ">
                {/* image */}
                <div className="h-fit w-full md:w-4/11 p-5 bg-gray-200 rounded-lg">
                    <img src="http://books.google.com/books/content?id=9DA5DwAAQBAJ&printsec=frontcover&img=1&zoom=3&edge=curl&source=gbs_api" className="w-full shadow-lg rounded-lg" />
                </div>
                {/* information */}
                <div className="flex w-full md:w-8/11 gap-10 flex-col">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row w-full justify-between">
                        <div className="flex flex-col gap-2 w-full">
                            <h1 className="text-[2rem] font-bold ">Seporsi Mie Ayam Sebelum Mati</h1>
                            <p className="text-[1.2rem] text-secondary">Dr. Maslan Lumbanraja, MTh</p>
                            <p className="text-gray-400">May 2025 · Goresan Pena</p>
                        </div>
                        <div className="w-fit flex justify-end">
                            <a className="flex items-center text-lg clickable gap-2">
                                <Bookmark size={16} /> <span>Bookmark</span>
                            </a>
                        </div>
                    </div>
                    {/* Deskripsi */}
                    <div className="flex gap-2 flex-col">
                        <p className="text-[1.1rem] font-bold">Deskripsi</p>
                        <p className="text-justify">Ale, seorang pria berusia 37 tahun memiliki tinggi badan 189 cm dan berat 138 kg. Badannya bongsor, berkulit hitam, dan memiliki masalah dengan bau badan. Sejak kecil, Ale hidup di lingkungan keluarga yang tidak mendukungnya. Ia tak memiliki teman dekat dan menjadi korban perundungan di sekolahnya.</p>
                    </div>
                    {/* Genre & Button */}
                    <div className="flex items-center justify-between">
                        <p className="text-primary font-bold">Genre : Romance, Fiction</p>
                        <a className="bg-primary text-white rounded-lg px-4 py-2">Lebih Lanjut -&gt;</a>
                    </div>
                    {/* Book Stat */}
                    <div className="flex w-1/2 justify-start items-center text-center text-blue-600 pb-2">
                        <div className="flex-1">
                            <p className="font-semibold text-lg">96</p>
                            <p className="text-gray-500 text-sm">Halaman</p>
                        </div>

                        <div className="h-6 border-r border-gray-300 mx-4"></div>

                        <div className="flex-1">
                            <p className="font-semibold text-lg">2.2</p>
                            <p className="text-gray-500 text-sm">Rating</p>
                        </div>

                        <div className="h-6 border-r border-gray-300 mx-4"></div>

                        <div className="flex-1">
                            <p className="font-semibold text-lg">ID</p>
                            <p className="text-gray-500 text-sm">Bahasa</p>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
}