import React, { useState } from "react";
import axios from "axios";
import "./tailwind.css";

const API_KEY = import.meta.env.VITE_API_KEY;

export default function App() {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function searchBooks() {
    if (!query.trim()) return;

    setLoading(true);
    setError("");
    setBooks([]);

    const url = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
      query
    )}&maxResults=12&key=${API_KEY}`;

    try {
      const res = await axios.get(url);
      const data = res.data;

      if (data.items) setBooks(data.items);
      else setError("Buku tidak ditemukan.");
    } catch (err) {
      console.error(err);
      setError("Terjadi kesalahan saat mengambil data.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">
        Cari Buku
      </h1>

      <div className="flex justify-center items-center mb-8">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ketik judul atau penulis..."
          className="border border-gray-300 rounded-lg p-2 w-64 mr-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={searchBooks}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Cari
        </button>
      </div>

      {loading && (
        <p className="text-center text-gray-500 font-medium">Sedang mencari...</p>
      )}
      {error && (
        <p className="text-center text-red-500 font-medium">{error}</p>
      )}

      <div className="bg-blue-100 rounded-xl p-4">
        {books.length > 0 && (
          <p className="text-sm text-gray-600 mb-3">
            Ditemukan {books.length} hasil:
          </p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.map((book) => {
            const info = book.volumeInfo;
            return (
              <div
                key={book.id}
                className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition"
              >
                <div className="flex gap-4">
                  <img
                    src={
                      info.imageLinks
                        ? info.imageLinks.thumbnail
                        : "https://via.placeholder.com/100"
                    }
                    alt="cover"
                    className="w-24 h-32 object-cover rounded"
                  />
                  <div className="flex flex-col justify-between">
                    <div>
                      <h3 className="font-semibold text-lg text-gray-800">
                        {info.title || "No Title"}
                      </h3>
                      <p className="text-sm text-gray-600">
                        <strong>Penulis:</strong>{" "}
                        {info.authors ? info.authors.join(", ") : "Tidak diketahui"}
                      </p>
                      <p className="text-sm text-gray-600">
                        <strong>Tahun:</strong> {info.publishedDate || "N/A"}
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-gray-700 mt-3">
                  {info.description
                    ? info.description.substring(0, 120) + "..."
                    : "Tidak ada deskripsi"}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
