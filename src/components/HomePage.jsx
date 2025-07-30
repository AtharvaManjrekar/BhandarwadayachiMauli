"use client";

import { useState, useEffect } from "react";
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
} from "lucide-react";

export default function HomePage({ onNavigateToDonation }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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
      <nav className="relative z-20 bg-red-800/90 backdrop-blur-sm border-b-4 border-yellow-400">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-32 h-20 overflow-hidden shadow-lg bg-white rounded-lg">
                <img
                  src="/assets/devi-mata-logo.jpeg"
                  alt="भंडारवाडयाची माऊली"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-white">
                <h1 className="text-xl md:text-2xl font-bold devanagari-font">
                  भंडारवाडा नवरात्रौत्सव मंडळ
                </h1>
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
              className={`text-center lg:text-left lg:ml-10 transition-all duration-1000 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-full opacity-0"
              }`}
            >
              <div className="mb-8">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg devanagari-font leading-tight">
                  भंडारवाडा नवरात्रौत्सव मंडळ
                </h1>
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
              className={`relative transition-all duration-1000 delay-300 ${
                isVisible
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Memory Card 1 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-2xl border-4 border-yellow-400/50 bg-white/10 backdrop-blur-sm transform hover:scale-105 transition-all duration-500">
              <div className="aspect-square overflow-hidden">
                <img
                  src="/assets/card-1.jpg"
                  alt=""
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Memory Card 2 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-2xl border-4 border-yellow-400/50 bg-white/10 backdrop-blur-sm transform hover:scale-105 transition-all duration-500">
              <div className="aspect-square overflow-hidden">
                <img
                  src="/assets/card-4.jpg"
                  alt="१९८५ - दशक उत्सव"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Memory Card 3 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-2xl border-4 border-yellow-400/50 bg-white/10 backdrop-blur-sm transform hover:scale-105 transition-all duration-500">
              <div className="aspect-square overflow-hidden">
                <img
                  src="/assets/card-3.jpg"
                  alt="१९९५ - रजत महोत्सव"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Memory Card 4 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-2xl border-4 border-yellow-400/50 bg-white/10 backdrop-blur-sm transform hover:scale-105 transition-all duration-500">
              <div className="aspect-square overflow-hidden">
                <img
                  src="/assets/card-5.jpg"
                  alt="२००५ - नवीन मंडप"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Memory Card 5 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-2xl border-4 border-yellow-400/50 bg-white/10 backdrop-blur-sm transform hover:scale-105 transition-all duration-500">
              <div className="aspect-square overflow-hidden">
                <img
                  src="/assets/card-6.jpg"
                  alt="२०१५ - डिजिटल युग"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Memory Card 6 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-2xl border-4 border-yellow-400/50 bg-white/10 backdrop-blur-sm transform hover:scale-105 transition-all duration-500">
              <div className="aspect-square overflow-hidden">
                <img
                  src="/assets/card-2.jpg"
                  alt="२०२० - कोविड काळ"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* View More Button */}
          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-xl transform hover:scale-105 transition-all duration-300 devanagari-font text-lg px-8 py-4"
              onClick={() => {
                // You can add functionality to show more memories or open a gallery
                alert("अधिक आठवणी लवकरच येत आहेत!");
              }}
            >
              <Heart className="w-6 h-6 mr-3" />
              अधिक आठवणी पहा
            </Button>
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
      <footer className="bg-red-900 text-white py-12 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-6 mb-8">
              <div className="w-24 h-16 overflow-hidden shadow-lg bg-white rounded-lg">
                <img
                  src="/assets/devi-mata-logo.jpeg"
                  alt="भंडारवाडयाची माऊली"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold devanagari-font">
                भंडारवाडा नवरात्रौत्सव मंडळ ❤️
              </h3>
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
