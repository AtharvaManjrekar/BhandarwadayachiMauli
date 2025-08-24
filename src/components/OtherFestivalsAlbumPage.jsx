"use client";

import { useState } from "react";
import { Button } from "../ui/Button";
import { Card, CardContent } from "../ui/Card";
import {
  Menu,
  X,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Download,
  Heart,
  Calendar,
  Instagram,
  Youtube,
  Phone,
} from "lucide-react";

export default function OtherFestivalsAlbumPage({ onNavigateToHome, onNavigateToDonation, onNavigateToAlbum }) {
  const members = [
    { name: "प्रमुख: राजेश पाटील", role: "अध्यक्ष", phone: "+91 98xxxxxx01", image: null },
    { name: "सचिव: अमित जोशी", role: "सचिव", phone: "+91 98xxxxxx02", image: null },
    { name: "कोषाध्यक्ष: स्वाती देशमुख", role: "कोषाध्यक्ष", phone: "+91 98xxxxxx03", image: null },
    { name: "सदस्य: विनोद कदम", role: "कार्यकारी सदस्य", phone: "+91 98xxxxxx04", image: null },
    { name: "सदस्य: पूजा शिंदे", role: "कार्यकारी सदस्य", phone: "+91 98xxxxxx05", image: null },
  ];

  const getInitials = (fullName) => {
    if (!fullName) return "";
    const raw = fullName.replace(/^[^:]+:\s*/, "").trim();
    const parts = raw.split(/\s+/);
    const first = parts[0]?.[0] || "";
    const second = parts[1]?.[0] || "";
    return (first + second).toUpperCase();
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goHomeAndScroll = (id) => {
    onNavigateToHome?.();
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  // Example dataset for other festivals (replace with your real images)
  const photos = [
    { id: 1, src: "./src/assets/album/photo-21.jpg", year: "२०२४", title: "गणेशोत्सव", description: "गणेश स्थापना" },
    { id: 2, src: "./src/assets/album/photo-22.jpg", year: "२०२३", title: "दसरा", description: "रावण दहन" },
    { id: 3, src: "./src/assets/album/photo-23.jpg", year: "२०२३", title: "होळी", description: "रंगांची उधळण" },
    { id: 4, src: "./src/assets/album/photo-24.jpg", year: "२०२२", title: "दिवाळी", description: "दिवे आणि फुलबाज्या" },
    { id: 5, src: "./src/assets/album/photo-25.jpg", year: "२०२२", title: "मकरसंक्रांत", description: "तिळगुळ घ्या, गोड गोड बोला" },
  ];

  const openModal = (photo, index) => {
    setSelectedImage(photo);
    setCurrentImageIndex(index);
  };
  const closeModal = () => setSelectedImage(null);
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
                  src="/assets/devi-mata-logo.jpeg"
                  alt="भंडारवाडयाची माऊली"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="text-left">
                <div className="amita-font font-bold leading-tight drop-shadow-lg">
                  <span className="block text-2xl md:text-4xl lg:text-4xl text-white">भंडारवाडा नवरात्रौत्सव</span>
                  <span className="block text-2xl md:text-3xl lg:text-4xl text-white">मंडळ</span>
                </div>
                <p className="text-red-700 font-bold text-sm lg:text-lg amita-font tracking-wide">
                  सुवर्ण महोत्सवी वर्ष
                </p>
              </div>
            </div>
            {/* Desktop nav */}
            <ul className="hidden md:flex items-center space-x-6 text-white font-semibold">
              <li><button className="hover:text-yellow-200 transition-colors" onClick={() => document.getElementById('top')?.scrollIntoView({ behavior: 'smooth' })}>मुख्य</button></li>
              <li><button className="hover:text-yellow-200 transition-colors" onClick={() => document.getElementById('timeline')?.scrollIntoView({ behavior: 'smooth' })}>कार्यक्रम</button></li>
              <li><button className="hover:text-yellow-200 transition-colors" onClick={() => document.getElementById('memories')?.scrollIntoView({ behavior: 'smooth' })}>आठवणी</button></li>
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
                        <button className="w-full text-left px-4 py-3 hover:bg-white/10" onClick={() => document.getElementById('memories')?.scrollIntoView({ behavior: 'smooth' })}>नवरात्रौत्सव फोटो अल्बम</button>
                      </li>
                      <li>
                        <button className="w-full text-left px-4 py-3 hover:bg-white/10" onClick={() => document.getElementById('govinda')?.scrollIntoView({ behavior: 'smooth' })}>इतर उत्सव फोटो अल्बम</button>
                      </li>
                      <li>
                        <button className="w-full text-left px-4 py-3 hover:bg-white/10" onClick={() => document.getElementById('govinda')?.scrollIntoView({ behavior: 'smooth' })}>इतर उत्सव फोटो अल्बम</button>
                      </li>
                    </ul>
                  </div>
                )}
              </li>
              <li>
                <Button size="sm" className="bg-yellow-400 text-red-800 border-yellow-400 hover:bg-yellow-300 devanagari-font" onClick={onNavigateToDonation}>
                  <DollarSign className="w-4 h-4 mr-1" /> वर्गणी
                </Button>
              </li>
              <li><button className="hover:text-yellow-200 transition-colors" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>संपर्क</button></li>
            </ul>
            {/* Mobile hamburger */}
            <button className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-white hover:text-yellow-200 hover:bg-white/10 transition" aria-label="Open Menu" onClick={() => setIsMenuOpen(v => !v)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
          {isMenuOpen && (
            <div className="md:hidden mt-4 bg-white/10 border border-white/20 rounded-xl text-white shadow-xl backdrop-blur-sm">
              <ul className="py-2 divide-y divide-white/10">
                <li><button className="w-full text-left px-4 py-3 hover:bg-white/10" onClick={() => { document.getElementById('top')?.scrollIntoView({ behavior: 'smooth' }); setIsMenuOpen(false); }}>मुख्य</button></li>
                <li><button className="w-full text-left px-4 py-3 hover:bg-white/10" onClick={() => { document.getElementById('timeline')?.scrollIntoView({ behavior: 'smooth' }); setIsMenuOpen(false); }}>कार्यक्रम</button></li>
                <li><button className="w-full text-left px-4 py-3 hover:bg-white/10" onClick={() => { document.getElementById('memories')?.scrollIntoView({ behavior: 'smooth' }); setIsMenuOpen(false); }}>आठवणी</button></li>
                <li><button className="w-full text-left px-4 py-3 hover:bg-white/10" onClick={() => { document.getElementById('govinda')?.scrollIntoView({ behavior: 'smooth' }); setIsMenuOpen(false); }}>गोविंदा</button></li>
                <li><button className="w-full text-left px-4 py-3 hover:bg-white/10" onClick={() => { document.getElementById('memories')?.scrollIntoView({ behavior: 'smooth' }); setIsMenuOpen(false); }}>नवरात्रौत्सव फोटो अल्बम</button></li>
                <li><button className="w-full text-left px-4 py-3 hover:bg-white/10" onClick={() => { document.getElementById('other')?.scrollIntoView({ behavior: 'smooth' }); setIsMenuOpen(false); }}>इतर उत्सव फोटो अल्बम</button></li>
                <li><button className="w-full text-left px-4 py-3 hover:bg-white/10" onClick={() => { onNavigateToDonation?.(); setIsMenuOpen(false); }}>वर्गणी</button></li>
                <li><button className="w-full text-left px-4 py-3 hover:bg-white/10" onClick={() => { document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); setIsMenuOpen(false); }}>संपर्क</button></li>
              </ul>
            </div>
          )}
        </div>
      </nav>

      {/* Header Section */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg devanagari-font">
            इतर उत्सव फोटो अल्बम
          </h1>
          <div className="text-2xl text-yellow-200 mb-8 font-semibold devanagari-font bg-red-800/30 backdrop-blur-sm rounded-lg p-6 border-2 border-yellow-400/50 max-w-4xl mx-auto">
            || श्री ब्राह्मणदेव प्रसन्न ||
          </div>
          <p className="text-xl text-white/90 devanagari-font max-w-3xl mx-auto leading-relaxed">
            नवरात्र व्यतिरिक्त विविध उत्सवांतील सुंदर क्षण
          </p>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-12 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {photos.map((photo, index) => (
              <Card
                key={photo.id}
                className="group cursor-pointer overflow-hidden bg-white/10 backdrop-blur-sm border-2 border-yellow-400/30 hover:border-yellow-400 shadow-xl transform hover:scale-105 transition-all duration-300"
                onClick={() => openModal(photo, index)}
              >
                <CardContent className="p-0 relative">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={photo.src || "/placeholder.svg"}
                      alt={photo.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-yellow-300 font-bold devanagari-font text-lg">
                          {photo.year}
                        </span>
                        <Heart className="w-5 h-5 text-red-400" />
                      </div>
                      <h3 className="text-white font-bold devanagari-font text-sm mb-1">
                        {photo.title}
                      </h3>
                      <p className="text-white/80 devanagari-font text-xs">
                        {photo.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-6xl max-h-full">
            <button onClick={closeModal} className="absolute top-4 right-4 z-10 bg-red-600 hover:bg-red-700 text-white rounded-full p-2 transition-colors duration-200">
              <X className="w-6 h-6" />
            </button>
            <button onClick={prevImage} className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white rounded-full p-3 backdrop-blur-sm transition-all duration-200">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button onClick={nextImage} className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white rounded-full p-3 backdrop-blur-sm transition-all duration-200">
              <ChevronRight className="w-6 h-6" />
            </button>
            <button onClick={downloadImage} className="absolute top-4 left-4 z-10 bg-green-600 hover:bg-green-700 text-white rounded-full p-2 transition-colors duration-200">
              <Download className="w-6 h-6" />
            </button>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border-4 border-yellow-400/50">
              <img src={selectedImage.src || "/placeholder.svg"} alt={selectedImage.title} className="max-w-full max-h-[80vh] object-contain" />
              <div className="p-6 bg-gradient-to-t from-black/80 to-transparent">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-6 h-6 text-yellow-400" />
                    <span className="text-yellow-300 font-bold devanagari-font text-2xl">{selectedImage.year}</span>
                  </div>
                  <div className="text-white/60 devanagari-font">
                    {currentImageIndex + 1} / {photos.length}
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-white devanagari-font mb-2">{selectedImage.title}</h2>
                <p className="text-white/90 devanagari-font text-lg">{selectedImage.description}</p>
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
                <img src="/assets/devi-mata-logo.jpeg" alt="भंडारवाडयाची माऊली" className="block max-w-[110px] h-auto" />
              </div>
              <h3 className="text-2xl font-bold devanagari-font">भंडारवाडा नवरात्रौत्सव मंडळ ❤️</h3>
            </div>
            <div className="mb-8">
              <h4 className="text-xl font-semibold mb-6 devanagari-font">समिती सदस्य</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                {members.map((m, idx) => (
                  <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border-2 border-white/20 hover:bg-white/15 transition-colors duration-300">
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
                        <a href={`tel:${m.phone.replace(/\s/g, "")}`} className="mt-2 inline-flex items-center text-yellow-300 hover:text-yellow-200 text-xs">
                          <Phone className="w-4 h-4 mr-1" /> {m.phone}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center space-x-8 mb-8">
              <Button variant="ghost" size="lg" className="text-white hover:text-yellow-400 devanagari-font" onClick={() => window.open("https://www.instagram.com/bhandarwadyachi_mauli/", "_blank")}>
                <Instagram className="w-6 h-6 mr-3" />
                Instagram
              </Button>
              <Button variant="ghost" size="lg" className="text-white hover:text-yellow-400 devanagari-font" onClick={() => window.open("https://www.youtube.com/watch?v=vgjGEpJwA2A", "_blank")}>
                <Youtube className="w-6 h-6 mr-3" />
                YouTube
              </Button>
            </div>
            <p className="text-lg text-yellow-200 devanagari-font mb-4">© 2025 भंडारवाडा नवरात्रौत्सव मंडळ | इतर उत्सव फोटो अल्बम</p>
            <p className="text-sm text-white/70 devanagari-font">|| श्री ब्राह्मणदेव प्रसन्न || • वरळी गांव, मुंबई-३० • स्थापना-१९७६</p>
          </div>
        </div>
      </footer>
    </div>
  );
}


