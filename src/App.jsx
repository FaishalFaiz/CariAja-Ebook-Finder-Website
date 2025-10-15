  import React from "react";
  import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


  import "@/tailwind.css";
  // component
  import Navbar from "@/component/Navbar";
  import Footer from "@/component/Footer";
  // pages
  import About from "@/pages/About";
  import BookDetail from "@/pages/BookDetail";
  import Home from "@/pages/Home";
  import Bookmark from "@/pages/Bookmark";
  import Library from "@/pages/Library";
  import AppAPI from "@/pages/Api"; // pages ini buat template API

  function App() {
    return (
      <Router>
        <div className="min-h-screen flex flex-col">
          {/* Navbar */}
          <Navbar />

          {/* Halaman & Konten*/}
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/library" element={<Library />} />
              <Route path="/bookmark" element={<Bookmark />} />
              <Route path="/bookdetail/:id" element={<BookDetail />} />
              <Route path="/api" element={<AppAPI />} />
            </Routes>
          </div>

          {/* Footer */}
          <Footer />
        </div>
      </Router>
    );
  }

  export default App;
