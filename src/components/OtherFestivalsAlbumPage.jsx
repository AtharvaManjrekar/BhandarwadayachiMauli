"use client";

import { useState, useRef } from "react";
import { Button } from "../ui/Button";
import { Card, CardContent } from "../ui/Card";
import {
  Menu,
  ArrowLeft,
  X,
  ChevronLeft,
  ChevronRight,
  Download,
  Heart,
  Calendar,
  Instagram,
  Youtube,
  Phone,
  DollarSign,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function OtherFestivalsAlbumPage({ albumCategory = 'navratri', onNavigateToHome, onNavigateToDonation, onNavigateToAlbum }) {
  const members = [
    { name: "अध्यक्ष: राजन तांडेल", role: "अध्यक्ष", phone: "+91 9702479990", image: null },
    { name: "सचिव: मल्यया लोकम", role: "सचिव", phone: "+91 9967567383", image: null },
    { name: "कोषाध्यक्ष: अजय गुरव", role: "कोषाध्यक्ष", phone: "+91 9867489964", image: null },
    { name: "सदस्य: अमित काटविलकर", role: "कार्यकारी सदस्य", phone: "+91 9987294540", image: null },
    { name: "सदस्य: मंगेश लोकम", role: "कार्यकारी सदस्य", phone: "+91 7671013468", image: null },
    { name: "सदस्य: राजेश नारकर", role: "सदस्य", phone: "+91 8169436196", image: null },
    { name: "सदस्य: ओमकार नायडू", role: "सदस्य", phone: "+91 7506753320", image: null },
    { name: "सदस्य: ओमकार पांढरे", role: "सदस्य", phone: "+91 8433638032", image: null },
    { name: "सदस्य: हार्दिक नाईक", role: "सदस्य", phone: "+91 9820347924", image: null },
    { name: "सदस्य: सागर पांढरे", role: "सदस्य", phone: "+91 9920765590", image: null },
    { name: "सदस्य: प्रशांत मोरे", role: "सदस्य", phone: "+91 7977511053", image: null },
    { name: "सदस्य: साहिल कदम", role: "कार्यकारी सदस्य", phone: "+91 9372285988", image: null },
  ];

  const navigate = useNavigate();

  const getInitials = (fullName) => {
    if (!fullName) return "";
    const raw = fullName.replace(/^[^:]+:\s*/, "").trim();
    const parts = raw.split(/\s+/);
    const first = parts[0]?.[0] || "";
    const second = parts[1]?.[0] || "";
    return (first + second).toUpperCase();
  };
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [imageOrientations, setImageOrientations] = useState({});


  // Sample photo data - you can replace with your actual photos
  const photos = [
    {
      id: 1,
      src: "/optimizied_assests/other-festival-card-6.jpg",
    },
    {
      id: 2,
      src: "/optimizied_assests/other-festival-card-7.jpg",
      year: "२०२३",
      title: "देवी प्रतिष्ठापना",
      description: "पवित्र देवी मूर्ती स्थापना",
    },
    {
      id: 3,
      src: "./src/assets/album/photo-3.jpg",
      year: "२०२३",
      title: "आरती",
      description: "संध्याकाळची भव्य आरती",
    },
    {
      id: 4,
      src: "./src/assets/album/photo-4.jpg",
      year: "२०२२",
      title: "सांस्कृतिक कार्यक्रम",
      description: "भक्तांचे सुंदर नृत्य",
    },
    {
      id: 5,
      src: "./src/assets/album/photo-5.jpg",
      year: "२०२२",
      title: "प्रसाद वितरण",
      description: "भक्तांना प्रसाद वाटप",
    },
    {
      id: 6,
      src: "./src/assets/album/photo-6.jpg",
      year: "२०२१",
      title: "कोविड काळ",
      description: "सुरक्षित उत्सव",
    },
    {
      id: 7,
      src: "./src/assets/album/photo-7.jpg",
      year: "२०२०",
      title: "ऑनलाइन दर्शन",
      description: "डिजिटल माध्यमातून दर्शन",
    },
    {
      id: 8,
      src: "./src/assets/album/photo-8.jpg",
      year: "२०१९",
      title: "मंडप सजावट",
      description: "भव्य मंडप अलंकरण",
    },
    {
      id: 9,
      src: "./src/assets/album/photo-9.jpg",
      year: "२०१९",
      title: "भजन संध्या",
      description: "भक्तिगीतांचा कार्यक्रम",
    },
    {
      id: 10,
      src: "./src/assets/album/photo-10.jpg",
      year: "२०१८",
      title: "विसर्जन",
      description: "पवित्र विसर्जन सोहळा",
    },
    {
      id: 11,
      src: "./src/assets/album/photo-11.jpg",
      year: "२०१८",
      title: "बाल कलाकार",
      description: "लहान मुलांचे सादरीकरण",
    },
    {
      id: 12,
      src: "./src/assets/album/photo-12.jpg",
      year: "२०१७",
      title: "महिला मंडळ",
      description: "महिलांचा सहभाग",
    },
    {
      id: 13,
      src: "./src/assets/album/photo-13.jpg",
      year: "२०१७",
      title: "युवा शक्ती",
      description: "तरुणांचे योगदान",
    },
    {
      id: 14,
      src: "./src/assets/album/photo-14.jpg",
      year: "२०१६",
      title: "४०वा वर्धापन दिन",
      description: "चाळीसावा वर्षगांठ",
    },
    {
      id: 15,
      src: "./src/assets/album/photo-15.jpg",
      year: "२०१५",
      title: "नवीन परंपरा",
      description: "आधुनिक तंत्रज्ञानाचा वापर",
    },
    {
      id: 16,
      src: "./src/assets/album/photo-16.jpg",
      year: "२०१४",
      title: "समुदायिक सेवा",
      description: "समाजसेवेचे कार्य",
    },
    {
      id: 17,
      src: "./src/assets/album/photo-17.jpg",
      year: "२०१३",
      title: "पारंपरिक नृत्य",
      description: "लावणी आणि कथक",
    },
    {
      id: 18,
      src: "./src/assets/album/photo-18.jpg",
      year: "२०१२",
      title: "धार्मिक प्रवचन",
      description: "संतांचे उपदेश",
    },
    {
      id: 19,
      src: "./src/assets/album/photo-19.jpg",
      year: "२०११",
      title: "अन्नदान",
      description: "निःशुल्क भोजन वितरण",
    },
    {
      id: 20,
      src: "./src/assets/album/photo-20.jpg",
      year: "२०१०",
      title: "सांस्कृतिक संध्या",
      description: "कलाकारांचे सादरीकरण",
    },
    {
      id: 21,
      src: "./src/assets/album/photo-21.jpg",
      year: "२००९",
      title: "मंडळाचे सदस्य",
      description: "कार्यकर्त्यांची सभा",
    },
    {
      id: 22,
      src: "./src/assets/album/photo-22.jpg",
      year: "२००८",
      title: "देवी शोभायात्रा",
      description: "रंगारंग मिरवणूक",
    },
    {
      id: 23,
      src: "./src/assets/album/photo-23.jpg",
      year: "२००७",
      title: "पुरस्कार वितरण",
      description: "उत्कृष्ट सेवेचा सन्मान",
    },
    {
      id: 24,
      src: "./src/assets/album/photo-24.jpg",
      year: "२००६",
      title: "३०वा वर्धापन दिन",
      description: "तीसावा वर्षगांठ उत्सव",
    },
    {
      id: 25,
      src: "./src/assets/album/photo-25.jpg",
      year: "२००५",
      title: "नवीन मंडप उद्घाटन",
      description: "आधुनिक मंडप निर्माण",
    },
    {
      id: 26,
      src: "./src/assets/album/photo-26.jpg",
      year: "२०००",
      title: "सहस्राब्दी उत्सव",
      description: "नवीन सहस्राब्दीचे स्वागत",
    },
    {
      id: 27,
      src: "./src/assets/album/photo-27.jpg",
      year: "१९९५",
      title: "रजत महोत्सव",
      description: "२५ वर्षांचा प्रवास",
    },
    {
      id: 28,
      src: "./src/assets/album/photo-28.jpg",
      year: "१९९०",
      title: "पारंपरिक उत्सव",
      description: "जुन्या पद्धतीचा उत्सव",
    },
    {
      id: 29,
      src: "./src/assets/album/photo-29.jpg",
      year: "१९८५",
      title: "दशक उत्सव",
      description: "पहिला मोठा उत्सव",
    },
    {
      id: 30,
      src: "./src/assets/album/photo-30.jpg",
      year: "१९७६",
      title: "स्थापना",
      description: "मंडळाची स्थापना",
    },
  ];

  const openModal = (photo, index) => {
    setSelectedImage(photo);
    setCurrentImageIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % photos.length;
    setSelectedImage(photos[nextIndex]);
    setCurrentImageIndex(nextIndex);
  };

  const prevImage = () => {
    const prevIndex = (currentImageIndex - 1 + photos.length) % photos.length;
    setSelectedImage(photos[prevIndex]);
    setCurrentImageIndex(prevIndex);
  };

  const downloadImage = () => {
    if (selectedImage) {
      const link = document.createElement("a");
      link.href = selectedImage.src;
      link.download = `${selectedImage.title}-${selectedImage.year}.jpg`;
      link.click();
    }
  };

  const downloadFromUrl = (url, filename = "image.jpg") => {
    if (!url) return;
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleImageLoad = (id) => (e) => {
    const img = e.currentTarget;
    const { naturalWidth, naturalHeight } = img;
    let orientation = "landscape";
    if (naturalWidth === naturalHeight) orientation = "square";
    else if (naturalWidth < naturalHeight) orientation = "portrait";
    setImageOrientations((prev) => ({ ...prev, [id]: orientation }));
  };

  const [isAlbumMenuOpen, setIsAlbumMenuOpen] = useState(false);
  const albumMenuTimeoutRef = useRef(null);

  const openAlbumMenu = () => {
    if (albumMenuTimeoutRef.current) {
      clearTimeout(albumMenuTimeoutRef.current);
      albumMenuTimeoutRef.current = null;
    }
    setIsAlbumMenuOpen(true);
  };

  const closeAlbumMenuWithDelay = () => {
    if (albumMenuTimeoutRef.current) {
      clearTimeout(albumMenuTimeoutRef.current);
    }
    albumMenuTimeoutRef.current = setTimeout(() => {
      setIsAlbumMenuOpen(false);
    }, 150);
  };

  const goHomeAndScroll = (id) => {
    navigate("/"); // first go home
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 300); // small delay so page loads
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = 0; // adjust this value to match your navbar height
      const y =
        element.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  // const scrollToSection = (id) => {
  //   const element = document.getElementById(id);
  //   if (element) {
  //     const yOffset = -450; // adjust this value to match your navbar height
  //     const y =
  //       element.getBoundingClientRect().top +
  //       window.pageYOffset +
  //       yOffset;
  //     window.scrollTo({ top: y, behavior: "smooth" });
  //   }
  // };


  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-red-500 to-orange-600 relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="fixed inset-0 opacity-10">
        <div
          className="absolute inset-0 bg-repeat animate-pulse"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.4'%3E%3Cpath d='M40 40c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm20 0c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-20 bg-gradient-to-r from-orange-500 to-yellow-600 backdrop-blur-sm border-b-4 border-yellow-400">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-36 h-28 rounded-lg overflow-hidden flex items-center justify-center">
                <img
                  src="/optimizied_assests/devi-mata-logo.webp"
                  alt="भंडारवाडयाची माऊली"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="text-left">
                <div className="amita-font font-bold leading-tight drop-shadow-lg">
                  <span className="block text-2xl md:text-4xl lg:text-4xl text-white">
                    भंडारवाडा नवरात्रौत्सव
                  </span>
                  <span className="block text-2xl md:text-3xl lg:text-4xl text-white">
                    मंडळ
                  </span>
                </div>
                <p className="text-red-700 font-bold text-sm lg:text-lg amita-font tracking-wide">
                  सुवर्ण महोत्सवी वर्ष
                </p>
              </div>
            </div>
            {/* Desktop nav */}
            <ul className="hidden md:flex items-center space-x-6 text-white font-semibold">
              <li>
                <button
                  className="hover:text-yellow-200 transition-colors"
                  onClick={() => navigate("/")}
                >
                  मुख्य
                </button>
              </li>
              <li>
                <button
                  className="hover:text-yellow-200 transition-colors"
                  onClick={() => goHomeAndScroll("timeline")}
                >
                  कार्यक्रम
                </button>
              </li>
              <li>
                <button
                  className="hover:text-yellow-200 transition-colors"
                  onClick={() => goHomeAndScroll("navratri_memories")}
                >
                  आठवणी
                </button>
              </li>
              <li
                className="relative"
                onMouseEnter={openAlbumMenu}
                onMouseLeave={closeAlbumMenuWithDelay}
              >
                <button
                  className="hover:text-yellow-200 transition-colors"
                  aria-haspopup="true"
                  aria-expanded={isAlbumMenuOpen}
                >
                  फोटो अल्बम
                </button>
                {isAlbumMenuOpen && (
                  <div className="absolute right-0 mt-2 w-64 bg-white/10 border border-white/20 rounded-xl text-white shadow-xl backdrop-blur-sm z-30">
                    <ul className="py-2 divide-y divide-white/10">
                      <li>
                        <button
                          className="w-full text-left px-4 py-3 hover:bg-white/10"
                          onClick={() => goHomeAndScroll("navratri_memories")}
                        >
                          नवरात्रौत्सव फोटो अल्बम
                        </button>
                      </li>
                      <li>
                        <button
                          className="w-full text-left px-4 py-3 hover:bg-white/10"
                          onClick={() => goHomeAndScroll("govinda_memories")}
                        >
                          गोविंदा फोटो अल्बम
                        </button>
                      </li>
                      <li>
                        <button
                          className="w-full text-left px-4 py-3 hover:bg-white/10"
                          onClick={() => goHomeAndScroll("other_memories")}
                        >
                          इतर उत्सव फोटो अल्बम
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
              </li>
              <li>
                <Button
                  size="sm"
                  className="bg-yellow-400 text-red-800 border-yellow-400 hover:bg-yellow-300 devanagari-font"
                  onClick={() => navigate("/donation")}
                >
                  <DollarSign className="w-4 h-4 mr-1" /> वर्गणी
                </Button>
              </li>
              <li>
                <button
                  className="hover:text-yellow-200 transition-colors"
                  onClick={() => scrollToSection("contact")}
                >
                  संपर्क
                </button>
              </li>
            </ul>
            {/* Mobile hamburger */}
            <button
              className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-white hover:text-yellow-200 hover:bg-white/10 transition"
              aria-label="Open Menu"
              onClick={() => setIsMenuOpen((v) => !v)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
          {false}
        </div>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden px-4">
          <div className="mt-4 bg-white/10 border border-white/20 rounded-xl text-white shadow-xl backdrop-blur-sm">
            <ul className="py-2 divide-y divide-white/10">
              <li>
                <button
                  className="w-full text-left px-4 py-3 hover:bg-white/10"
                  onClick={() => {
                    goHomeAndScroll("top");
                    setIsMenuOpen(false);
                  }}
                >
                  मुख्य
                </button>
              </li>
              <li>
                <button
                  className="w-full text-left px-4 py-3 hover:bg-white/10"
                  onClick={() => {
                    goHomeAndScroll("timeline");
                    setIsMenuOpen(false);
                  }}
                >
                  कार्यक्रम
                </button>
              </li>
              <li>
                <button
                  className="w-full text-left px-4 py-3 hover:bg-white/10"
                  onClick={() => {
                    goHomeAndScroll("navratri_memories");
                    setIsMenuOpen(false);
                  }}
                >
                  आठवणी
                </button>
              </li>
              <li>
                <button
                  className="w-full text-left px-4 py-3 hover:bg-white/10"
                  onClick={() => {
                    goHomeAndScroll("navratri_memories");
                    setIsMenuOpen(false);
                  }}
                >
                  नवरात्रौत्सव फोटो अल्बम
                </button>
              </li>
              <li>
                <button
                  className="w-full text-left px-4 py-3 hover:bg-white/10"
                  onClick={() => {
                    goHomeAndScroll("govinda_memories");
                    setIsMenuOpen(false);
                  }}
                >
                  गोविंदा फोटो अल्बम
                </button>
              </li>
              <li>
                <button
                  className="w-full text-left px-4 py-3 hover:bg-white/10"
                  onClick={() => {
                    goHomeAndScroll("other_memories");
                    setIsMenuOpen(false);
                  }}
                >
                  इतर उत्सव फोटो अल्बम
                </button>
              </li>
              <li>
                <button
                  className="w-full text-left px-4 py-3 hover:bg-white/10"
                  onClick={() => navigate("/donation")}
                >
                  वर्गणी
                </button>
              </li>
              <li>
                <button
                  className="w-full text-left px-4 py-3 hover:bg-white/10"
                  onClick={() => {
                    scrollToSection("contact");
                    setIsMenuOpen(false);
                  }}
                >
                  संपर्क
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* Header Section */}
      <section id="top" className="py-16 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg devanagari-font">
            इतर फोटो अल्बम
          </h1>
          <div className="text-2xl text-yellow-200 mb-8 font-semibold devanagari-font bg-red-800/30 backdrop-blur-sm rounded-lg p-6 border-2 border-yellow-400/50 max-w-4xl mx-auto">
            || श्री ब्राह्मणदेव प्रसन्न ||
          </div>
          <p className="text-xl text-white/90 devanagari-font max-w-3xl mx-auto leading-relaxed">
            १९७६ पासून आजपर्यंतच्या ५० वर्षांच्या प्रवासातील सुंदर क्षण
          </p>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-12 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6">
            {photos.map((photo, index) => {
              const orientation = imageOrientations[photo.id];
              const aspectClass = orientation === "portrait"
                ? "aspect-[3/4] sm:aspect-[2/3] md:aspect-[3/4] lg:aspect-[2/3]"
                : orientation === "square"
                  ? "aspect-[1/1]"
                  : "aspect-[16/9] sm:aspect-[4/3] md:aspect-[4/3] lg:aspect-[16/9]";

              return (
                <div
                  key={photo.id}
                  className="group cursor-pointer overflow-hidden rounded-3xl bg-white/10 backdrop-blur-sm border-2 border-yellow-400/30 hover:border-yellow-400 shadow-xl transform hover:scale-105 transition-all duration-300"
                  onClick={() => openModal(photo, index)}
                >
                  <div className={`relative overflow-hidden ${aspectClass}`}>
                    <button
                      aria-label="Download image"
                      onClick={(e) => { e.stopPropagation(); downloadFromUrl(photo.src, `photo-${photo.id}.jpg`); }}
                      className="absolute top-2 right-2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition"
                    >
                      <Download className="w-4 h-4" />
                    </button>
                    <img
                      src={photo.src || "/placeholder.svg"}
                      alt={photo.title}
                      onLoad={handleImageLoad(photo.id)}
                      className="absolute inset-0 w-full h-full object-cover object-center block group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modal for Full Size Image */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-6xl max-h-full">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-red-600 hover:bg-red-700 text-white rounded-full p-2 transition-colors duration-200"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white rounded-full p-3 backdrop-blur-sm transition-all duration-200"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white rounded-full p-3 backdrop-blur-sm transition-all duration-200"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Download Button */}
            <button
              onClick={downloadImage}
              className="absolute top-4 left-4 z-10 bg-green-600 hover:bg-green-700 text-white rounded-full p-2 transition-colors duration-200"
            >
              <Download className="w-6 h-6" />
            </button>

            {/* Image */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border-4 border-yellow-400/50">
              <img
                src={selectedImage.src || "/placeholder.svg"}
                alt={selectedImage.title}
                className="max-w-full max-h-[80vh] object-contain"
              />

              {/* Image Info */}
              <div className="p-6 bg-gradient-to-t from-black/80 to-transparent">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-6 h-6 text-yellow-400" />
                    <span className="text-yellow-300 font-bold devanagari-font text-2xl">
                      {selectedImage.year}
                    </span>
                  </div>
                  <div className="text-white/60 devanagari-font">
                    {currentImageIndex + 1} / {photos.length}
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-white devanagari-font mb-2">
                  {selectedImage.title}
                </h2>
                <p className="text-white/90 devanagari-font text-lg">
                  {selectedImage.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer id="contact" className="bg-gradient-to-r from-purple-800 to-indigo-800 text-white py-12 relative z-10 mt-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-6 mb-8">
              <div className="inline-block overflow-visible">
                <img
                  src="/assets/devi-mata-logo.jpeg"
                  alt="भंडारवाडयाची माऊली"
                  className="block max-w-[110px] h-auto"
                />
              </div>
              <h3 className="text-2xl font-bold devanagari-font">
                भंडारवाडा नवरात्रौत्सव मंडळ ❤️
              </h3>
            </div>
            {/* Members grid */}
            <div className="mb-8">
              <h4 className="text-xl font-semibold mb-6 devanagari-font">समिती सदस्य</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {members.map((m, idx) => (
                  <div
                    key={idx}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border-2 border-white/20 hover:bg-white/15 transition-colors duration-300"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-yellow-400 bg-gradient-to-br from-orange-400/60 to-red-500/60 flex items-center justify-center text-white text-base font-bold">
                        {m.image ? (
                          <img src={m.image} alt={m.name} className="w-full h-full object-cover" />
                        ) : (
                          <span>{getInitials(m.name)}</span>
                        )}
                      </div>
                      <div className="text-left">
                        <div className="text-white font-semibold text-sm devanagari-font">{m.name}</div>
                        <div className="text-white/80 text-xs devanagari-font">{m.role}</div>
                        <a
                          href={`tel:${m.phone.replace(/\s/g, "")}`}
                          className="mt-2 inline-flex items-center text-yellow-300 hover:text-yellow-200 text-xs"
                        >
                          <Phone className="w-4 h-4 mr-1" /> {m.phone}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center space-x-8 mb-8">
              <Button
                variant="ghost"
                size="lg"
                className="text-white hover:text-yellow-400 devanagari-font"
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/bhandarwadyachi_mauli/",
                    "_blank"
                  )
                }
              >
                <Instagram className="w-6 h-6 mr-3" />
                Instagram
              </Button>
              <Button
                variant="ghost"
                size="lg"
                className="text-white hover:text-yellow-400 devanagari-font"
                onClick={() =>
                  window.open(
                    "https://www.youtube.com/watch?v=vgjGEpJwA2A",
                    "_blank"
                  )
                }
              >
                <Youtube className="w-6 h-6 mr-3" />
                YouTube
              </Button>
            </div>
            <p className="text-lg text-yellow-200 devanagari-font mb-4">
              © 2025 भंडारवाडा नवरात्रौत्सव मंडळ | फोटो अल्बम
            </p>
            <p className="text-sm text-white/70 devanagari-font">
              || श्री ब्राह्मणदेव प्रसन्न || • वरळी गांव, मुंबई-३० •
              स्थापना-१९७६
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
