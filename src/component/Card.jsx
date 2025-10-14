import React from "react";

export default function Card({ title, author, img, lazy, bookId }) {
    // Gunakan proxy images.weserv.nl agar gambar bisa tampil
    const proxyImage = `https://images.weserv.nl/?url=${encodeURIComponent(
        img.replace("http://", "https://")
    )}`;

    return (
        <div className="flex flex-col items-start w-[45%] sm:w-[30%] clickable md:w-[220px]" id={bookId}>
            {/* Container gambar dengan aspect ratio */}
            <div className="w-full aspect-[2/3] overflow-hidden shadow-lg  rounded-xl">
                <img
                    src={proxyImage}
                    alt={title}
                    className="w-full h-full object-cover"
                    loading={lazy ? "lazy" : "eager"}
                />
            </div>

            <h4 className="text-md md:text-2xl max-w-[128px] md:max-w-none mt-3 font-medium text-black line-clamp-2">
                {title}
            </h4>
            <p className="text-gray-500 text-xs md:text-[1rem]">{author}</p>
        </div>
    );
}
