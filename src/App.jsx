"use client"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./components/HomePage"
import DonationPage from "./components/DonationPage"
import PhotoAlbumPage from "./components/PhotoAlbumPage"
import OtherFestivalsAlbumPage from "./components/OtherFestivalsAlbumPage"

export default function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          {/* Home */}
          <Route path="/" element={<HomePage />} />

          {/* Donation Page */}
          <Route path="/donation" element={<DonationPage />} />

          {/* Album Page (with category param) */}
          <Route path="/album/:category" element={<PhotoAlbumPage />} />

          {/* <Route path="/navratri-" element={<PhotoAlbumPage/>}/> */}

          {/* Other Festivals Album */}
          <Route path="/other-album" element={<OtherFestivalsAlbumPage />} />
        </Routes>
      </div>
    </Router>
  )
}
