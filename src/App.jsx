"use client"

import { useState } from "react"
import HomePage from "./components/HomePage"
import DonationPage from "./components/DonationPage"
import PhotoAlbumPage from "./components/PhotoAlbumPage"

export default function App() {
  const [currentPage, setCurrentPage] = useState("home")

  return (
    <div className="min-h-screen">
      {currentPage === "home" && (
        <HomePage
          onNavigateToDonation={() => setCurrentPage("donation")}
          onNavigateToAlbum={() => setCurrentPage("album")}
        />
      )}
      {currentPage === "donation" && <DonationPage onNavigateToHome={() => setCurrentPage("home")} />}
      {currentPage === "album" && <PhotoAlbumPage onNavigateToHome={() => setCurrentPage("home")} />}
    </div>
  )
}
