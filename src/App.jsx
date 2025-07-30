"use client";

import { useState } from "react";
import HomePage from "./components/HomePage";
import DonationPage from "./components/DonationPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <div className="min-h-screen">
      {currentPage === "home" ? (
        <HomePage onNavigateToDonation={() => setCurrentPage("donation")} />
      ) : (
        <DonationPage onNavigateToHome={() => setCurrentPage("home")} />
      )}
    </div>
  );
}
