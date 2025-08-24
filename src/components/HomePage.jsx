"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "../ui/Button";
import { Card, CardContent } from "../ui/Card";
import {
  Instagram,
  Youtube,
  MapPin,
  Calendar,
  Sparkles,
  Heart,
  DollarSign,
  ArrowRight,
  Phone,
  Menu,
  X,
} from "lucide-react";
// import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export default function HomePage({ onNavigateToDonation, onNavigateToAlbum }) {
  const [isVisible, setIsVisible] = useState(false);
  const railRef = useRef(null);
  const govindaRailRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAlbumMenuOpen, setIsAlbumMenuOpen] = useState(false);
  const albumMenuTimeoutRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeGovindaIndex, setActiveGovindaIndex] = useState(0);
  const [totalSlides, setTotalSlides] = useState(0);
  const [totalGovindaSlides, setTotalGovindaSlides] = useState(0);
  const slideMetricsRef = useRef({ slideSize: 0 });
  const govindaSlideMetricsRef = useRef({ slideSize: 0 });

  // Society members shown in the footer
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

  // This year's timeline (edit dates/details as needed)
  const timeline = [
    {
      date: "२१ सप्टेंबर २०२५",
      title: "देवी आगमन",
      description: "भव्य शोभायात्रेसह देवीचे आगमन आणि स्वागत",
    },
    {
      date: "२२ सप्टेंबर २०२५",
      title: "घटस्थापना",
      description: "विधिवत पूजा आणि मंडप उद्घाटन",
    },
    {
      date: "३-१ ऑक्टोबर २०२५",
      title: "दैनिक आरती व कार्यक्रम",
      description: "सकाळ-संध्याकाळ आरती, भजन, सांस्कृतिक कार्यक्रम",
    },
    {
      date: "५ ऑक्टोबर २०२५",
      title: "गरबा/दांडिया",
      description: "समस्त भाविकांसाठी दांडिया नाईट",
    },
    {
      date: "८ ऑक्टोबर २०२५",
      title: "महालक्ष्मी पूजा",
      description: "विशेष अलंकार, महाप्रसाद आणि सत्संग",
    },
    {
      date: "३ ऑक्टोबर २०२५",
      title: "विसर्जन मिरवणूक",
      description: "भक्तिपूर्ण मिरवणूक आणि निरोप",
    },
  ];

  const getTimelineIcon = (title) => {
    if (!title) return Calendar;
    if (title.includes("आगमन") || title.includes("गरबा") || title.includes("दांडिया")) return Sparkles;
    if (title.includes("पूजा") || title.includes("आरती") || title.includes("कार्यक्रम")) return Heart;
    if (title.includes("विसर्जन")) return ArrowRight;
    return Calendar;
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

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

  useEffect(() => {
    const container = railRef.current;
    if (!container) return;

    const measure = () => {
      const children = Array.from(container.children);
      setTotalSlides(children.length);
      if (children.length === 0) return;
      const first = children[0];
      let slideSize = first.offsetWidth;
      if (children.length > 1) {
        const second = children[1];
        const gap = second.offsetLeft - first.offsetLeft - first.offsetWidth;
        slideSize += isNaN(gap) ? 24 : gap;
      } else {
        slideSize += 24;
      }
      slideMetricsRef.current.slideSize = slideSize;
    };

    const onScroll = () => {
      const { slideSize } = slideMetricsRef.current;
      if (!slideSize) return;
      const currentIndex = Math.round(container.scrollLeft / slideSize);
      const clamped = Math.max(0, Math.min(currentIndex, container.children.length - 1));
      setActiveIndex(clamped);
    };

    measure();
    onScroll();
    window.addEventListener("resize", measure);
    container.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("resize", measure);
      container.removeEventListener("scroll", onScroll);
    };
  }, []);

  const scrollToIndex = (index) => {
    const container = railRef.current;
    if (!container) return;
    const { slideSize } = slideMetricsRef.current;
    container.scrollTo({ left: index * slideSize, behavior: "smooth" });
  };

  useEffect(() => {
    const container = govindaRailRef.current;
    if (!container) return;

    const measure = () => {
      const children = Array.from(container.children);
      setTotalGovindaSlides(children.length);
      if (children.length === 0) return;
      const first = children[0];
      let slideSize = first.offsetWidth;
      if (children.length > 1) {
        const second = children[1];
        const gap = second.offsetLeft - first.offsetLeft - first.offsetWidth;
        slideSize += isNaN(gap) ? 24 : gap;
      } else {
        slideSize += 24;
      }
      govindaSlideMetricsRef.current.slideSize = slideSize;
    };

    const onScroll = () => {
      const { slideSize } = govindaSlideMetricsRef.current;
      if (!slideSize) return;
      const currentIndex = Math.round(container.scrollLeft / slideSize);
      const clamped = Math.max(0, Math.min(currentIndex, container.children.length - 1));
      setActiveGovindaIndex(clamped);
    };

    measure();
    onScroll();
    window.addEventListener("resize", measure);
    container.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("resize", measure);
      container.removeEventListener("scroll", onScroll);
    };
  }, []);

  const scrollGovindaToIndex = (index) => {
    const container = govindaRailRef.current;
    if (!container) return;
    const { slideSize } = govindaSlideMetricsRef.current;
    container.scrollTo({ left: index * slideSize, behavior: "smooth" });
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -450; // adjust this value to match your navbar height
      const y =
        element.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };


  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-600 via-orange-500 to-yellow-400 relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="fixed inset-0 opacity-10">
        <div
          className="absolute inset-0 bg-repeat animate-pulse"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.3'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      {/* Floating Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 animate-bounce">
          <Sparkles className="w-8 h-8 text-yellow-300 opacity-70" />
        </div>
        <div className="absolute top-40 right-20 animate-bounce delay-1000">
          <Heart className="w-6 h-6 text-pink-300 opacity-70" />
        </div>
        <div className="absolute bottom-20 left-20 animate-bounce delay-500">
          <Sparkles className="w-6 h-6 text-orange-300 opacity-70" />
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
                  onClick={() => scrollToSection("top")}
                >
                  मुख्य
                </button>
              </li>
              <li>
                <button
                  className="hover:text-yellow-200 transition-colors"
                  onClick={() => scrollToSection("timeline")}
                >
                  कार्यक्रम
                </button>
              </li>
              <li>
                <button
                  className="hover:text-yellow-200 transition-colors"
                  onClick={() => scrollToSection("navratri_memories")}
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
                          onClick={() => scrollToSection("navratri_memories")}
                        >
                          नवरात्रौत्सव फोटो अल्बम
                        </button>
                      </li>
                      <li>
                        <button
                          className="w-full text-left px-4 py-3 hover:bg-white/10"
                          onClick={() => scrollToSection("govinda_memories")}
                        >
                          गोविंदा फोटो अल्बम
                        </button>
                      </li>
                      <li>
                        <button
                          className="w-full text-left px-4 py-3 hover:bg-white/10"
                          onClick={() => scrollToSection("other_memories")}
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
          {isMenuOpen && (
            <div className="md:hidden mt-4 bg-white/10 border border-white/20 rounded-xl text-white shadow-xl backdrop-blur-sm">
              <ul className="py-2 divide-y divide-white/10">
                <li>
                  <button
                    className="w-full text-left px-4 py-3 hover:bg-white/10"
                    onClick={() => {
                      scrollToSection("top");
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
                      scrollToSection("timeline");
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
                      scrollToSection("navratri_memories");
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
                      scrollToSection("navratri_memories");
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
                      scrollToSection("govinda_memories");
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
                      scrollToSection("other_memories");
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
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="top" className="relative py-20 z-10">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              className={`text-center lg:text-left lg:ml-10 transition-all duration-1000 ${isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-full opacity-0"
                }`}
            >
              <div className="mb-8">
                <div className="amita-font font-extrabold leading-wide mb-6">
                  <span className="block text-5xl md:text-6xl font-extrabold text-yellow-50 lg:ml-12">भंडारवाडा नवरात्रौत्सव</span>
                  <span className="block text-5xl md:text-5xl font-extrabold text-yellow-50 tracking-wide text-center mt-4">मंडळ</span>
                </div>
                <div className="text-2xl md:text-4xl text-yellow-200 mb-6 font-bold devanagari-font">
                  सुवर्ण महोत्सवी वर्ष
                </div>
                <div className="text-xl md:text-2xl text-orange-100 mb-8 font-semibold devanagari-font bg-red-800/30 backdrop-blur-sm rounded-lg p-4 border-2 border-yellow-400/50">
                  || श्री ब्राह्मणदेव प्रसन्न ||
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-8 mb-10 text-white">
                <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                  <MapPin className="w-6 h-6 text-yellow-400" />
                  <span className="devanagari-font text-lg font-medium">
                    वरळी गांव, मुंबई-३०
                  </span>
                </div>
                <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                  <Calendar className="w-6 h-6 text-yellow-400" />
                  <span className="devanagari-font text-lg font-medium">
                    स्थापना-१९७६
                  </span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white shadow-xl transform hover:scale-105 transition-all duration-300 devanagari-font text-lg px-8 py-4"
                  onClick={() =>
                    window.open(
                      "https://www.instagram.com/bhandarwadyachi_mauli/",
                      "_blank"
                    )
                  }
                >
                  <Instagram className="w-6 h-6 mr-3" />
                  Instagram वर फॉलो करा
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-red-800 shadow-xl transform hover:scale-105 transition-all duration-300 devanagari-font text-lg px-8 py-4"
                  onClick={() =>
                    window.open(
                      "https://www.youtube.com/watch?v=vgjGEpJwA2A",
                      "_blank"
                    )
                  }
                >
                  <Youtube className="w-6 h-6 mr-3" />
                  देवी गीत ऐका
                </Button>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white shadow-xl transform hover:scale-105 transition-all duration-300 devanagari-font text-lg px-8 py-4"
                  onClick={onNavigateToDonation}
                >
                  <Heart className="w-6 h-6 mr-3" />
                  वर्गणी द्या
                </Button>
              </div>
            </div>
            <div
              className={`relative transition-all duration-1000 delay-300 ${isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-full opacity-0"
                }`}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full blur-3xl opacity-40 animate-pulse"></div>
                <div className="relative z-10 lg:-mt-10 lg:ml-40 bg-white/10 backdrop-blur-sm rounded-3xl p-8 border-4 border-yellow-400/50 shadow-2xl w-full max-w-full sm:max-w-md lg:max-w-sm">
                  <img
                    src="/assets/bhandarwada-devi-home-page.jpg"
                    alt="देवी माता"
                    className="max-h-[450px] w-full object-contain drop-shadow-2xl rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="py-20 bg-white/10 backdrop-blur-sm relative z-10">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-3 devanagari-font">या वर्षातील कार्यक्रम</h2>
          <p className="text-center text-yellow-200/90 mb-12 devanagari-font">तारीख, पूजा व विशेष कार्यक्रम</p>
          <div className="relative max-w-5xl mx-auto">
            <div className="absolute left-6 md:left-1/2 translate-x-0 md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-yellow-400/80 to-orange-500/80"></div>
            <ul className="space-y-12">
              {timeline.map((item, idx) => {
                const Icon = getTimelineIcon(item.title);
                const isLeft = idx % 2 === 0;
                return (
                  <li key={idx} className="relative w-full">
                    <span className="absolute top-7 left-6 md:left-1/2 translate-x-0 md:-translate-x-1/2 w-4 h-4 bg-yellow-400 rounded-full ring-4 ring-orange-500/30 shadow"></span>
                    <span className="absolute top-7 left-6 md:left-1/2 translate-x-0 md:-translate-x-1/2 w-4 h-4 rounded-full bg-yellow-400/40 animate-ping"></span>
                    <div className={`w-full flex ${isLeft ? "md:justify-start md:pr-6" : "md:justify-end md:pl-6"} justify-start pl-4 pr-2`}>
                      <div
                        className={`w-full md:w-1/2 ${isLeft ? "md:pr-6 md:text-right" : "md:pl-6 md:text-left"} pl-6 text-left`}
                      >
                        <div
                          className={`inline-flex items-center ${isLeft ? "md:flex-row-reverse" : ""}`}
                          style={{ gap: "12px" }}
                        >
                          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500/80 to-red-500/80 border-2 border-yellow-400/60 shadow-xl flex items-center justify-center backdrop-blur-sm">
                            <Icon className="w-7 h-7 text-white" />
                          </div>
                          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-yellow-400/40 shadow-xl transition-all duration-500 ease-out hover:scale-[1.02]" style={{ transitionDelay: `${idx * 80}ms` }}>
                            <div className={`devanagari-font text-xs mb-2 ${isLeft ? "justify-end" : "justify-start"} flex`}>
                              <span className="inline-flex items-center bg-yellow-400/15 text-yellow-200 border border-yellow-400/40 rounded-full px-3 py-1">{item.date}</span>
                            </div>
                            <h3 className="text-2xl font-bold text-white devanagari-font mb-2">{item.title}</h3>
                            <p className="text-white/90 devanagari-font text-lg">{item.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      {/* Old Memories Section */}
      <section id="navratri_memories" className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-12 devanagari-font">
            नवरात्री उत्सवाचा इतिहास
          </h2>

          {/* Horizontal Image Rail */}
          <div className="relative max-w-7xl mx-auto">
            <div
              className="flex space-x-6 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory"
              id="memoryRail"
              ref={railRef}
            >
              {/* Memory Image 1 */}
              <div className="flex-shrink-0 group relative overflow-hidden rounded-3xl shadow-2xl border-4 border-yellow-400/50 bg-white/10 backdrop-blur-sm transition-all duration-500 w-80 h-80 memory-rail-item snap-center card-3d">
                <div className="absolute inset-0 card-3d-inner">
                  <img
                    src="/assets/card-1.jpg"
                    alt="स्थापना वर्ष"
                    className="w-full h-full object-cover card-3d-media"
                  />
                </div>
              </div>

              {/* Memory Image 2 */}
              <div className="flex-shrink-0 group relative overflow-hidden rounded-3xl shadow-2xl border-4 border-yellow-400/50 bg-white/10 backdrop-blur-sm transition-all duration-500 w-80 h-80 memory-rail-item snap-center card-3d">
                <div className="absolute inset-0 card-3d-inner">
                  <img
                    src="/assets/card-4.jpg"
                    alt="दशक उत्सव"
                    className="w-full h-full object-cover card-3d-media"
                  />
                </div>
              </div>

              {/* Memory Image 3 */}
              <div className="flex-shrink-0 group relative overflow-hidden rounded-3xl shadow-2xl border-4 border-yellow-400/50 bg-white/10 backdrop-blur-sm transition-all duration-500 w-80 h-80 memory-rail-item snap-center card-3d">
                <div className="absolute inset-0 card-3d-inner">
                  <img
                    src="/assets/card-3.jpg"
                    alt="रजत महोत्सव"
                    className="w-full h-full object-cover card-3d-media"
                  />
                </div>
              </div>

              {/* Memory Image 4 */}
              <div className="flex-shrink-0 group relative overflow-hidden rounded-3xl shadow-2xl border-4 border-yellow-400/50 bg-white/10 backdrop-blur-sm transition-all duration-500 w-80 h-80 memory-rail-item snap-center card-3d">
                <div className="absolute inset-0 card-3d-inner">
                  <img
                    src="/assets/card-5.jpg"
                    alt="नवीन मंडप"
                    className="w-full h-full object-cover card-3d-media"
                  />
                </div>
              </div>

              {/* Memory Image 5 */}

              {/* View More Button Card - Inside the Rail */}
              <div
                className="flex-shrink-0 flex items-center justify-center rounded-3xl shadow-2xl border-4 border-yellow-400/50 bg-gradient-to-br from-orange-500/80 to-red-500/80 backdrop-blur-sm w-80 h-80 cursor-pointer transform hover:scale-105 transition-all duration-500 group memory-rail-item snap-center"
                onClick={() => onNavigateToAlbum?.('navratri')}
              >
                <div className="text-center p-8">
                  <div className="mb-6">
                    <div className="w-20 h-20 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-white/30 transition-all duration-300">
                      <ArrowRight className="w-10 h-10 text-white group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-center space-x-2">
                    <Heart className="w-5 h-5 text-pink-200" />
                    <span className="text-white/80 devanagari-font text-sm">
                      अधिक फोटो
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* Scroll Navigation Dots (dynamic) */}
            <div className="flex justify-center mt-8 space-x-3">
              {Array.from({ length: totalSlides }).map((_, idx) => (
                <button
                  key={idx}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${activeIndex === idx
                    ? "bg-yellow-300 scale-125 ring-2 ring-yellow-200"
                    : "bg-yellow-500/50 hover:bg-yellow-400/80"
                    }`}
                  onClick={() => scrollToIndex(idx)}
                />
              ))}
            </div>
          </div>
          {/* Govinda Images Rail */}
          <div id="govinda_memories" className="mt-20">
            <h3 className="text-3xl font-bold text-center text-white mb-12 devanagari-font">
              इतर सण
            </h3>
            <div className="relative max-w-7xl mx-auto">
              <div
                className="flex space-x-6 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory"
                id="govindaRail"
                ref={govindaRailRef}
              >
                {/* Govinda Image 1 */}
                <div className="flex-shrink-0 group relative overflow-hidden rounded-3xl shadow-2xl border-4 border-yellow-400/50 bg-white/10 backdrop-blur-sm transition-all duration-500 w-80 h-80 memory-rail-item snap-center card-3d">
                  <div className="absolute inset-0 card-3d-inner">
                    <img
                      src="/assets/card-2.jpg"
                      alt="गोविंदा 1"
                      className="w-full h-full object-cover card-3d-media"
                    />
                  </div>
                </div>

                {/* Govinda Image 2 */}
                <div className="flex-shrink-0 group relative overflow-hidden rounded-3xl shadow-2xl border-4 border-yellow-400/50 bg-white/10 backdrop-blur-sm transition-all duration-500 w-80 h-80 memory-rail-item snap-center card-3d">
                  <div className="absolute inset-0 card-3d-inner">
                    <img
                      src="/assets/card-3.jpg"
                      alt="गोविंदा 2"
                      className="w-full h-full object-cover card-3d-media"
                    />
                  </div>
                </div>

                {/* Govinda Image 3 */}
                <div className="flex-shrink-0 group relative overflow-hidden rounded-3xl shadow-2xl border-4 border-yellow-400/50 bg-white/10 backdrop-blur-sm transition-all duration-500 w-80 h-80 memory-rail-item snap-center card-3d">
                  <div className="absolute inset-0 card-3d-inner">
                    <img
                      src="/assets/card-4.jpg"
                      alt="गोविंदा 3"
                      className="w-full h-full object-cover card-3d-media"
                    />
                  </div>
                </div>

                {/* Govinda Image 4 */}
                <div className="flex-shrink-0 group relative overflow-hidden rounded-3xl shadow-2xl border-4 border-yellow-400/50 bg-white/10 backdrop-blur-sm transition-all duration-500 w-80 h-80 memory-rail-item snap-center card-3d">
                  <div className="absolute inset-0 card-3d-inner">
                    <img
                      src="/assets/card-5.jpg"
                      alt="गोविंदा 4"
                      className="w-full h-full object-cover card-3d-media"
                    />
                  </div>
                </div>

                {/* Govinda Image 5 */}
                <div className="flex-shrink-0 group relative overflow-hidden rounded-3xl shadow-2xl border-4 border-yellow-400/50 bg-white/10 backdrop-blur-sm transition-all duration-500 w-80 h-80 memory-rail-item snap-center card-3d">
                  <div className="absolute inset-0 card-3d-inner">
                    <img
                      src="/assets/card-6.jpg"
                      alt="गोविंदा 5"
                      className="w-full h-full object-cover card-3d-media"
                    />
                  </div>
                </div>

                {/* Govinda Image 6 */}
                <div className="flex-shrink-0 group relative overflow-hidden rounded-3xl shadow-2xl border-4 border-yellow-400/50 bg-white/10 backdrop-blur-sm transition-all duration-500 w-80 h-80 memory-rail-item snap-center card-3d">
                  <div className="absolute inset-0 card-3d-inner">
                    <img
                      src="/assets/card-1.jpg"
                      alt="गोविंदा 6"
                      className="w-full h-full object-cover card-3d-media"
                    />
                  </div>
                </div>

                {/* View More Button Card - Inside the Rail */}
                <div
                  className="flex-shrink-0 flex items-center justify-center rounded-3xl shadow-2xl border-4 border-yellow-400/50 bg-gradient-to-br from-orange-500/80 to-red-500/80 backdrop-blur-sm w-80 h-80 cursor-pointer transform hover:scale-105 transition-all duration-500 group memory-rail-item snap-center"
                  onClick={() => onNavigateToAlbum?.('navratri')}
                >
                  <div className="text-center p-8">
                    <div className="mb-6">
                      <div className="w-20 h-20 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-white/30 transition-all duration-300">
                        <ArrowRight className="w-10 h-10 text-white group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                    <div className="mt-4 flex items-center justify-center space-x-2">
                      <Heart className="w-5 h-5 text-pink-200" />
                      <span className="text-white/80 devanagari-font text-sm">अधिक फोटो</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Scroll Navigation Dots (dynamic) */}
              <div className="flex justify-center mt-8 space-x-3">
                {Array.from({ length: totalGovindaSlides }).map((_, idx) => (
                  <button
                    key={idx}
                    aria-label={`Go to govinda slide ${idx + 1}`}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${activeGovindaIndex === idx
                      ? "bg-yellow-300 scale-125 ring-2 ring-yellow-200"
                      : "bg-yellow-500/50 hover:bg-yellow-400/80"
                      }`}
                    onClick={() => scrollGovindaToIndex(idx)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Other Images Rail */}
          <div id="other_memories" className="mt-20">
            <h3 className="text-3xl font-bold text-center text-white mb-12 devanagari-font">
              इतर सण
            </h3>
            <div className="relative max-w-7xl mx-auto">
              <div
                className="flex space-x-6 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory"
                id="other_festival_memories_rail"
                ref={govindaRailRef}
              >
                {/* Govinda Image 1 */}
                <div className="flex-shrink-0 group relative overflow-hidden rounded-3xl shadow-2xl border-4 border-yellow-400/50 bg-white/10 backdrop-blur-sm transition-all duration-500 w-80 h-80 memory-rail-item snap-center card-3d">
                  <div className="absolute inset-0 card-3d-inner">
                    <img
                      src="/assets/card-2.jpg"
                      alt="गोविंदा 1"
                      className="w-full h-full object-cover card-3d-media"
                    />
                  </div>
                </div>

                {/* Govinda Image 2 */}
                <div className="flex-shrink-0 group relative overflow-hidden rounded-3xl shadow-2xl border-4 border-yellow-400/50 bg-white/10 backdrop-blur-sm transition-all duration-500 w-80 h-80 memory-rail-item snap-center card-3d">
                  <div className="absolute inset-0 card-3d-inner">
                    <img
                      src="/assets/card-3.jpg"
                      alt="गोविंदा 2"
                      className="w-full h-full object-cover card-3d-media"
                    />
                  </div>
                </div>

                {/* Govinda Image 3 */}
                <div className="flex-shrink-0 group relative overflow-hidden rounded-3xl shadow-2xl border-4 border-yellow-400/50 bg-white/10 backdrop-blur-sm transition-all duration-500 w-80 h-80 memory-rail-item snap-center card-3d">
                  <div className="absolute inset-0 card-3d-inner">
                    <img
                      src="/assets/card-4.jpg"
                      alt="गोविंदा 3"
                      className="w-full h-full object-cover card-3d-media"
                    />
                  </div>
                </div>

                {/* Govinda Image 4 */}
                <div className="flex-shrink-0 group relative overflow-hidden rounded-3xl shadow-2xl border-4 border-yellow-400/50 bg-white/10 backdrop-blur-sm transition-all duration-500 w-80 h-80 memory-rail-item snap-center card-3d">
                  <div className="absolute inset-0 card-3d-inner">
                    <img
                      src="/assets/card-5.jpg"
                      alt="गोविंदा 4"
                      className="w-full h-full object-cover card-3d-media"
                    />
                  </div>
                </div>

                {/* Govinda Image 5 */}
                <div className="flex-shrink-0 group relative overflow-hidden rounded-3xl shadow-2xl border-4 border-yellow-400/50 bg-white/10 backdrop-blur-sm transition-all duration-500 w-80 h-80 memory-rail-item snap-center card-3d">
                  <div className="absolute inset-0 card-3d-inner">
                    <img
                      src="/assets/card-6.jpg"
                      alt="गोविंदा 5"
                      className="w-full h-full object-cover card-3d-media"
                    />
                  </div>
                </div>

                {/* Govinda Image 6 */}
                <div className="flex-shrink-0 group relative overflow-hidden rounded-3xl shadow-2xl border-4 border-yellow-400/50 bg-white/10 backdrop-blur-sm transition-all duration-500 w-80 h-80 memory-rail-item snap-center card-3d">
                  <div className="absolute inset-0 card-3d-inner">
                    <img
                      src="/assets/card-1.jpg"
                      alt="गोविंदा 6"
                      className="w-full h-full object-cover card-3d-media"
                    />
                  </div>
                </div>

                {/* View More Button Card - Inside the Rail */}
                <div
                  className="flex-shrink-0 flex items-center justify-center rounded-3xl shadow-2xl border-4 border-yellow-400/50 bg-gradient-to-br from-orange-500/80 to-red-500/80 backdrop-blur-sm w-80 h-80 cursor-pointer transform hover:scale-105 transition-all duration-500 group memory-rail-item snap-center"
                  onClick={() => navigate("/other_festivals_album")}
                >
                  <div className="text-center p-8">
                    <div className="mb-6">
                      <div className="w-20 h-20 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-white/30 transition-all duration-300">
                        <ArrowRight className="w-10 h-10 text-white group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                    <div className="mt-4 flex items-center justify-center space-x-2">
                      <Heart className="w-5 h-5 text-pink-200" />
                      <span className="text-white/80 devanagari-font text-sm">अधिक फोटो</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Scroll Navigation Dots (dynamic) */}
              <div className="flex justify-center mt-8 space-x-3">
                {Array.from({ length: totalGovindaSlides }).map((_, idx) => (
                  <button
                    key={idx}
                    aria-label={`Go to govinda slide ${idx + 1}`}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${activeGovindaIndex === idx
                      ? "bg-yellow-300 scale-125 ring-2 ring-yellow-200"
                      : "bg-yellow-500/50 hover:bg-yellow-400/80"
                      }`}
                    onClick={() => scrollGovindaToIndex(idx)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-12 devanagari-font">
            आमच्यासोबत जुडा
          </h2>
          <div className="max-w-lg mx-auto ">
            <Card className="bg-white/20 backdrop-blur-md border-4 border-white/30 shadow-2xl">
              <CardContent className="p-10 mt-5">
                <Instagram className="w-20 h-20 text-white mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-6 devanagari-font">
                  Instagram वर फॉलो करा
                </h3>
                <p className="text-white/90 mb-8 devanagari-font text-lg">
                  आमच्या सर्व कार्यक्रमांची नवीनतम माहिती मिळवा
                </p>
                <Button
                  size="lg"
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white shadow-xl transform hover:scale-105 transition-all duration-300 devanagari-font text-lg py-4"
                  onClick={() =>
                    window.open(
                      "https://www.instagram.com/bhandarwadyachi_mauli/",
                      "_blank"
                    )
                  }
                >
                  @bhandarwadyachi_mauli
                </Button>
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
              <h3 className="text-2xl font-bold amita-font tracking-wide">
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
              © 2025 भंडारवाडा नवरात्रौत्सव मंडळ | Designed for Social Media
              Presence
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
