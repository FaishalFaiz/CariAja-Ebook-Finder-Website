import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Bookmark } from "lucide-react";
import DOMPurify from "dompurify";

export default function BookDetail() {
    const { id } = useParams(); // Ambil ID dari URL
    const navigate = useNavigate();
    const [book, setBook] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchBook() {
            try {
                const res = await fetch(`https://www.googleapis.com/books/v1/volumes/${id}`);
                const data = await res.json();
                setBook(data);
            } catch (error) {
                console.error("Gagal mengambil data:", error);
            } finally {
                setLoading(false);
            }
        }

        fetchBook();
    }, [id]);

    // loading effect
    if (loading)
        return (
            <div className="w-full mt-[20vh] flex justify-center ">
                <p className="p-10">Loading...</p>
            </div>
        );

    // false condition
    if (!book) return <p className="p-10 text-red-500">Buku tidak ditemukan.</p>;

    const info = book.volumeInfo;

    // URL gambar resolusi tinggi
    const originalThumb =
        info.imageLinks?.thumbnail || info.imageLinks?.smallThumbnail;

    const highResImage = originalThumb
        ? `https://images.weserv.nl/?url=${encodeURIComponent(
            originalThumb
                .replace("zoom=1", "zoom=3")
                .replace("zoom=2", "zoom=3")
                .replace("http://", "")
        )}&w=800&h=1200&fit=cover`
        : "https://via.placeholder.com/300x450?text=No+Image";

    return (
        <main className="w-4/5   md:w-6/10 mx-auto flex flex-col mt-[5vh] md:mt-[10vh]">
            <a
                onClick={() => navigate(-1)}
                className="my-5 text-xl w-fit cursor-pointer active:text-gray-400 hover:text-gray-400 transition"
            >
                &lt;- Kembali
            </a>

            <div className="w-full flex flex-col md:flex-row gap-10 justify-between ">
                {/* image */}
                <div className="h-fit w-full md:w-4/11 p-5 bg-gray-200 rounded-lg">
                    <img
                        src={highResImage}
                        alt={info.title}
                        className="w-full shadow-lg rounded-lg"
                    />
                </div>

                {/* information */}
                <div className="flex w-full md:w-8/11 gap-10 flex-col">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row w-full gap-2 justify-between">
                        <div className="flex flex-col gap-2 w-full">
                            <h1 className="text-[2rem] font-bold ">{info.title}</h1>
                            <p className="text-[1.2rem] text-secondary">
                                {info.authors?.join(", ")}
                            </p>
                            <p className="text-gray-400">
                                {info.publishedDate} ·{" "}
                                {info.publisher || "Tidak diketahui"}
                            </p>
                        </div>
                        <div className="w-fit flex justify-end">
                            <a className="flex items-center text-lg clickable gap-2">
                                <Bookmark size={16} /> <span>Bookmark</span>
                            </a>
                        </div>
                    </div>

                    {/* Deskripsi */}
                    <div className="flex gap-2 flex-col">
                        <div
                            className="text-justify line-clamp-10 prose prose-sm md:prose-base max-w-none"
                            dangerouslySetInnerHTML={{
                                __html: DOMPurify.sanitize(info.description || "<p>Tidak ada deskripsi tersedia.</p>"),
                            }}
                        />
                    </div>

                    {/* Genre & Button */}
                    <div className="flex flex-col gap-5 md:flex-row items-center justify-between">
                        <p className="text-primary font-bold line-clamp-1">
                            Genre: {info.categories ? info.categories.slice(0, 2).join(", ") + (info.categories.length > 2 ? ", ..." : "") : "Tidak ada kategori"}
                        </p>
                        <a
                            href={info.previewLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-primary w-fit text-nowrap  min-w-[184px] clickable text-white rounded-lg px-4 py-2"
                        >
                            Lihat Lebih Lanjut -&gt;
                        </a>
                    </div>

                    {/* Book Stat */}
                    <div className="flex w-full md:w-1/2 md:justify-start items-center text-center text-blue-600 pb-2">
                        <div className="flex-1">
                            <p className="font-semibold text-lg">
                                {info.pageCount || "?"}
                            </p>
                            <p className="text-gray-500 text-sm">Halaman</p>
                        </div>

                        <div className="h-6 border-r border-gray-300 mx-4"></div>

                        <div className="flex-1">
                            <p className="font-semibold text-lg">
                                {info.averageRating || "-"}
                            </p>
                            <p className="text-gray-500 text-sm">Rating</p>
                        </div>

                        <div className="h-6 border-r border-gray-300 mx-4"></div>

                        <div className="flex-1">
                            <p className="font-semibold text-lg">
                                {info.language?.toUpperCase()}
                            </p>
                            <p className="text-gray-500 text-sm">Bahasa</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
