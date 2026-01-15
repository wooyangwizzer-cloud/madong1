
import React, { useState } from 'react';

const Hero: React.FC = () => {
  const [isPunching, setIsPunching] = useState(false);

  const handlePunch = () => {
    setIsPunching(true);
    setTimeout(() => setIsPunching(false), 500);
  };

  return (
    <section className={`relative h-screen flex items-center justify-center overflow-hidden transition-all duration-300 ${isPunching ? 'punch-shake' : ''}`}>
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/madongseok/1920/1080" 
          alt="Ma Dong-seok Background" 
          className="w-full h-full object-cover opacity-40 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]"></div>
      </div>
      
      <div className="relative z-10 text-center px-4">
        <h2 className="text-yellow-500 font-impact text-2xl md:text-3xl mb-2 tracking-widest">REAL ACTION STAR</h2>
        <h1 className="text-6xl md:text-9xl font-impact mb-6 tracking-tighter uppercase leading-none">
          DON <span className="text-yellow-500">LEE</span><br/>
          <span className="text-white">마동석</span>
        </h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
          "진실의 방으로 갈 놈들, 다 드루와." <br/>
          대한민국을 넘어 할리우드를 휘어잡은 압도적인 주먹과 연기력.
        </p>
        
        <button 
          onClick={handlePunch}
          className="group relative inline-flex items-center justify-center px-10 py-4 font-bold text-white transition-all duration-200 bg-yellow-600 font-impact text-2xl hover:bg-yellow-500 active:scale-95 rounded-sm"
        >
          <span className="relative">한 방 날리기! 🥊</span>
        </button>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-gray-500 mt-2 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
