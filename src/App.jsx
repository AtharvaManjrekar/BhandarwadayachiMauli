"use client"

import { useState } from "react"
import HomePage from "./components/HomePage"
import DonationPage from "./components/DonationPage"
import PhotoAlbumPage from "./components/PhotoAlbumPage"
import OtherFestivalsAlbumPage from "./components/OtherFestivalsAlbumPage"

export default function App() {
  const [currentPage, setCurrentPage] = useState("home")
  const [albumCategory, setAlbumCategory] = useState("navratri")

  return (
    <div className="min-h-screen">
      {currentPage === "home" && (
        <HomePage
          onNavigateToDonation={() => setCurrentPage("donation")}
          onNavigateToAlbum={(category = "navratri") => {
            if (category === "other") {
              setCurrentPage("otherAlbum")
            } else {
              setAlbumCategory(category)
              setCurrentPage("album")
            }
          }}
        />
      )}

      {currentPage === "donation" && (
        <DonationPage
          onNavigateToHome={() => setCurrentPage("home")}
          onNavigateToAlbum={(category = "navratri") => {
            setAlbumCategory(category)
            setCurrentPage("album")
          }}
          onNavigateToDonation={() => setCurrentPage("donation")}
        />
      )}

      {currentPage === "album" && (
        <PhotoAlbumPage
          albumCategory={albumCategory}
          onNavigateToHome={() => setCurrentPage("home")}
          onNavigateToAlbum={(category = "navratri") => {
            setAlbumCategory(category)
            setCurrentPage("album")
          }}
          onNavigateToDonation={() => setCurrentPage("donation")}
        />
      )}

      {currentPage === "otherAlbum" && (
        <OtherFestivalsAlbumPage
          onNavigateToHome={() => setCurrentPage("home")}
          onNavigateToAlbum={(category = "navratri") => {
            setAlbumCategory(category)
            setCurrentPage("album")
          }}
          onNavigateToDonation={() => setCurrentPage("donation")}
        />
      )}
    </div>
  )
}
