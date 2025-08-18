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
} from "lucide-react";

export default function HomePage({ onNavigateToDonation, onNavigateToAlbum }) {
  const [isVisible, setIsVisible] = useState(false);
  const railRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [totalSlides, setTotalSlides] = useState(0);
  const slideMetricsRef = useRef({ slideSize: 0 });

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

  useEffect(() => {
    setIsVisible(true);
  }, []);

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
              <div className="text-center">
                <div className="amita-font  text-3xl  tracking-wide">
                  <span className="block text-2xl font-black md:text-2xl text-yellow-50">भंडारवाडा नवरात्रौत्सव</span>
                  <span className="block text-lg md:text-xl text-yellow-50">मंडळ</span>
                </div>
                <p className="text-yellow-200 text-sm devanagari-font">
                  सुवर्ण महोत्सवी वर्ष
                </p>
              </div>
            </div>
            <div className="flex space-x-2">
              <Button
                variant="outline"
                size="sm"
                className="bg-yellow-400 text-red-800 border-yellow-400 hover:bg-yellow-300 devanagari-font"
                onClick={onNavigateToDonation}
              >
                <DollarSign className="w-4 h-4 mr-1" />
                वर्गणी
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 z-10">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              className={`text-center lg:text-left lg:ml-10 transition-all duration-1000 ${isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-full opacity-0"
                }`}
            >
              <div className="mb-8">
                <div className="devanagari-font leading-tight mb-6">
                  <span className="block text-4xl md:text-6xl font-extrabold text-yellow-50">भंडारवाडा नवरात्रौत्सव</span>
                  <span className="block text-3xl md:text-5xl font-extrabold text-yellow-50">मंडळ</span>
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

      {/* About Section */}
      <section className="py-20 bg-white/10 backdrop-blur-sm relative z-10">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-md border-4 border-yellow-400/50 shadow-2xl">
            <CardContent className="p-10">
              <h2 className="text-4xl font-bold text-center text-white mb-8 devanagari-font">
                आमच्या परंपरेबद्दल
              </h2>
              <div className="text-xl text-white/95 text-center leading-relaxed space-y-6 devanagari-font max-w-4xl mx-auto">
                <p className="bg-red-800/20 backdrop-blur-sm rounded-lg p-6 border border-yellow-400/30">
                  १९७६ पासून आम्ही वरळी गावात नवरात्रीचा उत्सव अत्यंत
                  भक्तिभावाने साजरा करत आहोत. या ५० वर्षांच्या पवित्र प्रवासात
                  आम्ही हजारो भक्तांच्या मनात देवी मातेची अटूट भक्ती रुजवली आहे.
                </p>
                <p className="bg-orange-800/20 backdrop-blur-sm rounded-lg p-6 border border-yellow-400/30">
                  आमचा हा सुवर्ण महोत्सवी वर्ष सर्व भक्तांसाठी अत्यंत विशेष आणि
                  पवित्र आहे. श्री ब्राह्मणदेव प्रसन्न या दैवी आशीर्वादाने आम्ही
                  पुढील अनेक वर्षे या पावन परंपरेला चालू ठेवू आणि समाजसेवेत
                  योगदान देत राहू.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Old Memories Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-12 devanagari-font">
            जुन्या आठवणी
          </h2>

          {/* Horizontal Image Rail */}
          <div className="relative max-w-7xl mx-auto">
            <div
              className="flex space-x-6 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory"
              id="memoryRail"
              ref={railRef}
            >
              {/* Memory Image 1 */}
              <div className="flex-shrink-0 group relative overflow-hidden rounded-3xl shadow-2xl border-4 border-yellow-400/50 bg-white/10 backdrop-blur-sm transform hover:scale-105 transition-all duration-500 w-80 h-80 memory-rail-item snap-center">
                <img
                  src="/assets/card-1.jpg"
                  alt="स्थापना वर्ष"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Memory Image 2 */}
              <div className="flex-shrink-0 group relative overflow-hidden rounded-3xl shadow-2xl border-4 border-yellow-400/50 bg-white/10 backdrop-blur-sm transform hover:scale-105 transition-all duration-500 w-80 h-80 memory-rail-item snap-center">
                <img
                  src="/assets/card-4.jpg"
                  alt="दशक उत्सव"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Memory Image 3 */}
              <div className="flex-shrink-0 group relative overflow-hidden rounded-3xl shadow-2xl border-4 border-yellow-400/50 bg-white/10 backdrop-blur-sm transform hover:scale-105 transition-all duration-500 w-80 h-80 memory-rail-item snap-center">
                <img
                  src="/assets/card-3.jpg"
                  alt="रजत महोत्सव"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Memory Image 4 */}
              <div className="flex-shrink-0 group relative overflow-hidden rounded-3xl shadow-2xl border-4 border-yellow-400/50 bg-white/10 backdrop-blur-sm transform hover:scale-105 transition-all duration-500 w-80 h-80 memory-rail-item snap-center">
                <img
                  src="/assets/card-5.jpg"
                  alt="नवीन मंडप"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Memory Image 5 */}
              <div className="flex-shrink-0 group relative overflow-hidden rounded-3xl shadow-2xl border-4 border-yellow-400/50 bg-white/10 backdrop-blur-sm transform hover:scale-105 transition-all duration-500 w-80 h-80 memory-rail-item snap-center">
                <img
                  src="/assets/card-6.jpg"
                  alt="डिजिटल युग"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Memory Image 6 */}
              <div className="flex-shrink-0 group relative overflow-hidden rounded-3xl shadow-2xl border-4 border-yellow-400/50 bg-white/10 backdrop-blur-sm transform hover:scale-105 transition-all duration-500 w-80 h-80 memory-rail-item snap-center">
                <img
                  src="/assets/card-2.jpg"
                  alt="सुवर्ण महोत्सव"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* View More Button Card - Inside the Rail */}
              <div
                className="flex-shrink-0 flex items-center justify-center rounded-3xl shadow-2xl border-4 border-yellow-400/50 bg-gradient-to-br from-orange-500/80 to-red-500/80 backdrop-blur-sm w-80 h-80 cursor-pointer transform hover:scale-105 transition-all duration-500 group memory-rail-item snap-center"
                onClick={onNavigateToAlbum}
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
        </div>
      </section>

      {/* Instagram Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-12 devanagari-font">
            आमच्यासोबत जुडा
          </h2>
          <div className="max-w-lg mx-auto">
            <Card className="bg-white/20 backdrop-blur-md border-4 border-white/30 shadow-2xl">
              <CardContent className="p-10">
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
      <footer className="bg-gradient-to-r from-purple-800 to-indigo-800 text-white py-12 relative z-10">
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
