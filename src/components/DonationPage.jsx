"use client";

import { useState, useRef } from "react";
import { Button } from "../ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/Card";
import {
  ExternalLink,
  QrCode,
  Heart,
  Sparkles,
  Menu,
  X,
  DollarSign,
  Instagram,
  Youtube,
  Phone,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function DonationPage() {
  const navigate = useNavigate();

  // Society members (same as HomePage footer)
  const members = [
    { name: "प्रमुख: राजेश पाटील", role: "अध्यक्ष", phone: "+91 98xxxxxx01", image: null },
    { name: "सचिव: अमित जोशी", role: "सचिव", phone: "+91 98xxxxxx02", image: null },
    { name: "कोषाध्यक्ष: स्वाती देशमुख", role: "कोषाध्यक्ष", phone: "+91 98xxxxxx03", image: null },
    { name: "सदस्य: विनोद कदम", role: "कार्यकारी सदस्य", phone: "+91 98xxxxxx04", image: null },
    { name: "सदस्य: पूजा शिंदे", role: "कार्यकारी सदस्य", phone: "+91 98xxxxxx05", image: null },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  const getInitials = (fullName) => {
    if (!fullName) return "";
    const raw = fullName.replace(/^[^:]+:\s*/, "").trim();
    const parts = raw.split(/\s+/);
    const first = parts[0]?.[0] || "";
    const second = parts[1]?.[0] || "";
    return (first + second).toUpperCase();
  };

  // Navigate to home and scroll to section
  const goHomeAndScroll = (id) => {
    navigate("/"); // first go home
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 200); // small delay so page loads
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-600 via-red-500 to-pink-600 relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="fixed inset-0 opacity-10">
        <div
          className="absolute inset-0 bg-repeat animate-pulse"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.4'%3E%3Cpath d='M40 40c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm20 0c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      {/* Floating Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 animate-bounce">
          <Heart className="w-8 h-8 text-yellow-300 opacity-70" />
        </div>
        <div className="absolute top-40 right-20 animate-bounce delay-1000">
          <Sparkles className="w-6 h-6 text-pink-300 opacity-70" />
        </div>
        <div className="absolute bottom-20 left-20 animate-bounce delay-500">
          <QrCode className="w-6 h-6 text-orange-300 opacity-70" />
        </div>
        <div className="absolute top-60 right-10 animate-pulse">
          <div className="w-4 h-4 bg-yellow-400 rounded-full opacity-60"></div>
        </div>
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
              <li>
                <button className="hover:text-yellow-200 transition-colors" onClick={() => navigate("/")}>
                  मुख्य
                </button>
              </li>
              <li>
                <button className="hover:text-yellow-200 transition-colors" onClick={() => goHomeAndScroll("timeline")}>
                  कार्यक्रम
                </button>
              </li>
              <li>
                <button className="hover:text-yellow-200 transition-colors" onClick={() => goHomeAndScroll("navratri_memories")}>
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
                        <button className="w-full text-left px-4 py-3 hover:bg-white/10" onClick={() => goHomeAndScroll("navratri_memories")}>
                          नवरात्रौत्सव फोटो अल्बम
                        </button>
                      </li>
                      <li>
                        <button className="w-full text-left px-4 py-3 hover:bg-white/10" onClick={() => goHomeAndScroll("govinda_memories")}>
                          गोविंदा फोटो अल्बम
                        </button>
                      </li>
                      <li>
                        <button className="w-full text-left px-4 py-3 hover:bg-white/10" onClick={() => goHomeAndScroll("other_memories")}>
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
                >
                  <DollarSign className="w-4 h-4 mr-1" /> वर्गणी
                </Button>
              </li>
              <li>
                <button className="hover:text-yellow-200 transition-colors" onClick={() => goHomeAndScroll("contact")}>
                  संपर्क
                </button>
              </li>
            </ul>
            {/* Mobile hamburger */}
            <button className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-white hover:text-yellow-200 hover:bg-white/10 transition" aria-label="Open Menu" onClick={() => setIsMenuOpen(v => !v)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
          {isMenuOpen && (
            <div className="md:hidden mt-4 bg-white/10 border border-white/20 rounded-xl text-white shadow-xl backdrop-blur-sm">
              <ul className="py-2 divide-y divide-white/10">
                <li><button className="w-full text-left px-4 py-3 hover:bg-white/10" onClick={() => navigate("/")}>मुख्य</button></li>
                <li><button className="w-full text-left px-4 py-3 hover:bg-white/10" onClick={() => goHomeAndScroll("timeline")}>कार्यक्रम</button></li>
                <li><button className="w-full text-left px-4 py-3 hover:bg-white/10" onClick={() => goHomeAndScroll("navratri_memories")}>आठवणी</button></li>
                <li><button className="w-full text-left px-4 py-3 hover:bg-white/10" onClick={() => goHomeAndScroll("navratri_memories")}>नवरात्रौत्सव फोटो अल्बम</button></li>
                <li><button className="w-full text-left px-4 py-3 hover:bg-white/10" onClick={() => goHomeAndScroll("govinda_memories")}>गोविंदा फोटो अल्बम</button></li>
                <li><button className="w-full text-left px-4 py-3 hover:bg-white/10" onClick={() => goHomeAndScroll("other_memories")}>इतर उत्सव फोटो अल्बम</button></li>
                <li><button className="w-full text-left px-4 py-3 hover:bg-white/10" onClick={() => navigate("/donation")}>वर्गणी</button></li>
                <li><button className="w-full text-left px-4 py-3 hover:bg-white/10" onClick={() => { document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); setIsMenuOpen(false); }}>संपर्क</button></li>
              </ul>
            </div>
          )}
        </div>
      </nav>

      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 drop-shadow-lg devanagari-font">
              वर्गणीसाठी आपले हार्दिक स्वागत आहे!
            </h1>
            <div className="text-2xl text-yellow-200 mb-8 font-semibold devanagari-font bg-red-800/30 backdrop-blur-sm rounded-lg p-6 border-2 border-yellow-400/50 max-w-4xl mx-auto">
              || श्री ब्राह्मणदेव प्रसन्न ||
            </div>
            <p className="text-xl text-white/90 devanagari-font max-w-3xl mx-auto leading-relaxed">
              आपल्या उदार वर्गणीमुळे आमचा हा पवित्र उत्सव यशस्वी होतो. देवी
              मातेच्या कृपेने आपल्या सर्वांचे कल्याण होवो.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* QR Code Section */}
            <Card className="bg-white/20 backdrop-blur-md border-4 border-yellow-400/50 shadow-2xl">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-3xl font-bold text-white devanagari-font">
                  UPI/Paytm वर्गणी
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-8">
                <div className="bg-white rounded-2xl p-8 shadow-xl">
                  <div className="w-64 h-64 mx-auto bg-gray-200 rounded-xl flex items-center justify-center border-4 border-gray-300">
                    <div className="text-center">
                      <img src="/assets/sahil_kadam_scanner.jpg" alt="UPI" className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <p className="text-sm text-gray-500">MR. SAHIL KADAM</p>
                  <p className="text-sm text-gray-500">++91 93722 85988</p>
                </div>
                <div className="space-y-4">
                  <p className="text-lg text-white devanagari-font font-semibold bg-orange-800/30 backdrop-blur-sm rounded-lg p-4 border border-yellow-400/30">
                    कृपया वर्गणी भरल्यानंतर आपले नाव Google Form मध्ये नोंदवा.
                  </p>
                  <div className="flex flex-col space-y-3">
                    <div className="bg-green-600/20 backdrop-blur-sm rounded-lg p-3 border border-green-400/30">
                      <p className="text-white devanagari-font">✓ Google Pay</p>
                    </div>
                    <div className="bg-blue-600/20 backdrop-blur-sm rounded-lg p-3 border border-blue-400/30">
                      <p className="text-white devanagari-font">✓ PhonePe</p>
                    </div>
                    <div className="bg-purple-600/20 backdrop-blur-sm rounded-lg p-3 border border-purple-400/30">
                      <p className="text-white devanagari-font">✓ Paytm</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            {/* Google Form Section */}
            <Card className="bg-white/20 backdrop-blur-md border-4 border-yellow-400/50 shadow-2xl">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-3xl font-bold text-white devanagari-font">
                  नाव नोंदणी फॉर्म
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border-2 border-yellow-400/30">
                  <div className="text-center space-y-6">
                    <div className="w-24 h-24 mx-auto bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center shadow-xl">
                      <ExternalLink className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white devanagari-font">
                      Google Form
                    </h3>
                    <p className="text-white/90 devanagari-font text-lg leading-relaxed">
                      वर्गणी भरल्यानंतर कृपया या फॉर्ममध्ये आपले नाव, पत्ता आणि
                      वर्गणीची रक्कम नोंदवा.
                    </p>
                  </div>
                </div>
                <div className="space-y-6">
                  <Button
                    size="lg"
                    className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white shadow-xl transform hover:scale-105 transition-all duration-300 devanagari-font text-xl py-6" onClick={() =>
                      window.open(
                        "https://forms.gle/feh7vdsjvNdVVYAf6",
                        "_blank"
                      )
                    }
                  >
                    <ExternalLink className="w-6 h-6 mr-3" />
                    Google Form भरा
                  </Button>

                  <div className="bg-yellow-600/20 backdrop-blur-sm rounded-lg p-6 border-2 border-yellow-400/50">
                    <h4 className="text-lg font-bold text-white devanagari-font mb-3">
                      फॉर्ममध्ये भरावी लागणारी माहिती:
                    </h4>
                    <ul className="space-y-2 text-white/90 devanagari-font">
                      <li>• आपले पूर्ण नाव</li>
                      <li>• संपर्क क्रमांक</li>
                      <li>• पत्ता</li>
                      <li>• वर्गणीची रक्कम</li>
                      <li>• Transaction ID (वैकल्पिक)</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Thank You Section */}
          <div className="mt-20 text-center">
            <Card className="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-md border-4 border-yellow-400/50 shadow-2xl max-w-4xl mx-auto">
              <CardContent className="p-12">
                <Heart className="w-16 h-16 text-red-400 mx-auto mb-6" />
                <h2 className="text-4xl font-bold text-white mb-6 devanagari-font">
                  धन्यवाद!
                </h2>
                <p className="text-xl text-white/95 devanagari-font leading-relaxed mb-6">
                  आपल्या उदार वर्गणीमुळे आमचा हा पवित्र नवरात्री उत्सव अधिक भव्य
                  आणि दिव्य बनतो. देवी मातेच्या आशीर्वादाने आपल्या कुटुंबाचे
                  सर्व मंगल होवो.
                </p>
                <div className="text-lg text-yellow-200 devanagari-font bg-red-800/30 backdrop-blur-sm rounded-lg p-4 border border-yellow-400/30">
                  || श्री ब्राह्मणदेव प्रसन्न ||
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gradient-to-r from-purple-800 to-indigo-800 text-white py-12 relative z-10">
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
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
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
              © 2025 भंडारवाडा नवरात्रौत्सव मंडळ | वर्गणी पृष्ठ
            </p>
            <p className="text-sm text-white/70 devanagari-font">
              || श्री ब्राह्मणदेव प्रसन्न || • वरळी गांव, मुंबई-३० •
              स्थापना-१९७६
            </p>
          </div>
        </div>
      </footer>



    </div >
  );
}
