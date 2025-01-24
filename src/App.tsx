import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';

function App() {
  const [showPopup, setShowPopup] = useState(true);

  return (
    <div className="relative w-full">
      {/* Popup */}
      {showPopup && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center cursor-pointer animate-[fadeIn_0.3s_ease-in-out]"
          onClick={() => setShowPopup(false)}
        >
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm animate-[fadeIn_0.3s_ease-in-out]" />
          <div className="relative max-w-lg w-full mx-4">
            <img
              src="https://pomf2.lain.la/f/joiyttj5.png"
              alt="Popup"
              className="w-full h-auto rounded-lg shadow-2xl animate-[pulseGlow_1.5s_infinite] transition-all duration-300"
            />
            <div className="absolute inset-0 rounded-lg border-4 border-transparent animate-[lightPulse_2s_infinite]"></div>
          </div>
        </div>
      )}

      {/* Background 1 */}
      <section
        className="h-screen w-full bg-cover bg-center scroll-snap-align-start"
        style={{
          backgroundImage: 'url(https://pomf2.lain.la/f/trndp6w1.png)',
          scrollSnapAlign: 'start',
        }}
      ></section>

      {/* Background 2 */}
      <section
        className="h-screen w-full bg-cover bg-center flex flex-col items-center px-4"
        style={{
          backgroundImage: 'url(https://pomf2.lain.la/f/sqf3m4dy.png)',
          scrollSnapAlign: 'start',
        }}
      >
        <div className="flex flex-col items-center gap-4 mt-[30vh] ml-[30vw]">
          <a
            href="https://www.whatsapp.com/channel/0029VaWuvZl0G0XlE1b0W33P"
            className="flex items-center gap-1.5 bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-full text-sm transition-all transform hover:scale-105 hover:shadow-lg"
          >
            <MessageCircle size={18} />
            <span>Channel</span>
          </a>
          <a
            href="https://chat.whatsapp.com/Fr8z5GVgECGCgIsvEdJGbs"
            className="flex items-center gap-1.5 bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-full text-sm transition-all transform hover:scale-105 hover:shadow-lg"
          >
            <MessageCircle size={18} />
            <span>Forum</span>
          </a>
        </div>
      </section>

      {/* Background 3 */}
      <section
        className="h-screen w-full bg-cover bg-center relative flex flex-col"
        style={{
          backgroundImage: 'url(https://pomf2.lain.la/f/26ndpqgz.png)',
          scrollSnapAlign: 'start',
        }}
      >
        {/* Footer */}
        <footer className="bg-black/80 text-white py-4 text-center backdrop-blur-sm mt-auto">
          <p className="text-sm">
            Copyright by{' '}
            <a
              href="https://github.com/YoshCasaster"
              className="text-blue-400 hover:underline"
            >
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
