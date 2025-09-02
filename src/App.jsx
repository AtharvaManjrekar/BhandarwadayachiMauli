"use client"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./components/HomePage"
import DonationPage from "./components/DonationPage"
import PhotoAlbumPage from "./components/PhotoAlbumPage"
import OtherFestivalsAlbumPage from "./components/OtherFestivalsAlbumPage"
import GovindaPhotosPage from "./components/GovindaPhotosPage"
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <ScrollToTop />
        <Routes>
          {/* Home */}
          <Route path="/" element={<HomePage />} />

          {/* Donation Page */}
          <Route path="/donation" element={<DonationPage />} />

          <Route path="/navratri-album" element={<PhotoAlbumPage />} />

          <Route path="/govinda-album" element={<GovindaPhotosPage />} />

          {/* Other Festivals Album */}
          <Route path="/other-album" element={<OtherFestivalsAlbumPage />} />
        </Routes>
      </div>
    </Router>
  )
}
