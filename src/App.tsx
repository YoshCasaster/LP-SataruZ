import React, { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showPopup, setShowPopup] = useState(true);
  const slides = [
    "https://sy-cdnres.joyagegames.com/static/content/zjws/p-reg/img/5.f999efa6.jpg",
    "https://sy-cdnres.joyagegames.com/static/content/zjws/p-reg/img/2.ab66cccf.jpg",
    "https://sy-cdnres.joyagegames.com/static/content/zjws/p-reg/img/3.ef8727bb.jpg"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full">
      {/* Popup */}
      {showPopup && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm cursor-pointer"
          onClick={() => setShowPopup(false)}
        >
          <div className="relative max-w-lg w-full mx-4">
            <img
              src="https://pomf2.lain.la/f/ee1idzoc.png"
              alt="Popup"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}

      {/* Background 1 */}
      <section className="h-screen w-full bg-cover bg-center scroll-snap-align-start" 
        style={{ 
          backgroundImage: 'url(https://pomf2.lain.la/f/wf7oajr5.png)',
          scrollSnapAlign: 'start'
        }}>
      </section>

      {/* Background 2 */}
      <section 
        className="h-screen w-full bg-cover bg-center flex flex-col items-center px-4"
        style={{ 
          backgroundImage: 'url(https://pomf2.lain.la/f/u5y9sk90.png)',
          scrollSnapAlign: 'start'
        }}>
        <div className="flex flex-col items-center gap-4 mt-[30vh] ml-[30vw]">
          <a href="https://www.whatsapp.com/channel/0029VaWuvZl0G0XlE1b0W33P" 
            className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full transition-all transform hover:scale-105 hover:shadow-lg">
            <MessageCircle size={24} />
            <span>Channel</span>
          </a>
          <a href="https://chat.whatsapp.com/Fr8z5GVgECGCgIsvEdJGbs"
            className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full transition-all transform hover:scale-105 hover:shadow-lg">
            <MessageCircle size={24} />
            <span>Group</span>
          </a>
        </div>
      </section>

      {/* Background 3 */}
      <section 
        className="h-screen w-full bg-cover bg-center relative flex flex-col"
        style={{ 
          backgroundImage: 'url(https://pomf2.lain.la/f/a8h8y5nz.png)',
          scrollSnapAlign: 'start'
        }}>
        <div className="flex-1 flex items-center justify-center pt-20">
          <div className="w-full max-w-3xl mx-auto px-4">
            <div className="relative h-[60vh] overflow-hidden rounded-2xl shadow-2xl">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
                    currentSlide === index ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img
                    src={slide}
                    alt={`Feature ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all ${
                      currentSlide === index ? 'bg-white w-4' : 'bg-white/50'
                    }`}
                    onClick={() => setCurrentSlide(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-black/80 text-white py-4 text-center backdrop-blur-sm">
          <p className="text-sm">
            Copyright by{' '}
            <a href="https://github.com/YoshCasaster" className="text-blue-400 hover:underline">
              YoshCasaster
            </a>{' '}
            &{' '}
            <a href="https://zaenishi.xyz" className="text-blue-400 hover:underline">
              Zaenishi
            </a>
          </p>
        </footer>
      </section>
    </div>
  );
}

export default App;