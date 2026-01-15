
import React, { useState } from 'react';

const Hero: React.FC = () => {
  const [isPunching, setIsPunching] = useState(false);

  const handlePunch = () => {
    setIsPunching(true);
    setTimeout(() => setIsPunching(false), 400);
  };

  return (
    <section className={`relative h-screen flex items-center justify-center overflow-hidden transition-all duration-300 ${isPunching ? 'punch-shake' : ''}`}>
      {/* Background with gritty overlay */}
      <div className="absolute inset-0 z-0 bg-black">
        <img 
          src="https://picsum.photos/seed/madongseok/1920/1080" 
          alt="Ma Dong-seok Background" 
          className="w-full h-full object-cover opacity-30 grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]"></div>
        {/* Animated dust effect (simulated with dots) */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
        </div>
      </div>
      
      <div className="relative z-10 text-center px-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-yellow-600 text-black font-black text-[10px] tracking-[0.4em] uppercase mb-8 rounded-sm animate-pulse">
          <span className="w-1.5 h-1.5 bg-black rounded-full"></span>
          World-Class Action Icon
        </div>
        
        <h1 className="text-7xl md:text-[12rem] font-impact mb-4 tracking-tighter uppercase leading-[0.85] text-white">
          DON <span className="text-yellow-600">LEE</span>
        </h1>
        <h2 className="text-3xl md:text-5xl font-impact mb-10 tracking-[0.2em] text-white/20 uppercase">
          마동석
        </h2>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-4">
          <button 
            onClick={handlePunch}
            className="group relative inline-flex items-center justify-center px-12 py-5 font-bold text-black transition-all duration-200 bg-yellow-600 font-impact text-3xl hover:bg-yellow-500 active:scale-90 rounded-sm shadow-[0_0_30px_rgba(234,179,8,0.3)]"
          >
            <span className="relative z-10">핵펀치 날리기 🥊</span>
            <div className="absolute inset-0 w-full h-full bg-white opacity-0 group-hover:opacity-10 transition-opacity"></div>
          </button>
          
          <a 
            href="#chat"
            className="px-12 py-5 border-2 border-white/20 hover:border-white/80 transition-all font-impact text-3xl uppercase tracking-tighter rounded-sm backdrop-blur-sm"
          >
            진실의 방 입장
          </a>
        </div>

        <p className="mt-12 text-gray-500 text-sm md:text-base font-bold tracking-[0.1em] uppercase opacity-60">
          "진실의 방으로 갈 놈들, 다 드루와."
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <span className="text-[10px] font-black uppercase tracking-[0.3em]">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
      </div>
      
      {/* Danger tape decoration */}
      <div className="absolute top-24 -left-20 bg-yellow-600 text-black px-20 py-1 font-black text-xs tracking-[0.5em] rotate-45 hidden lg:block border-y border-black/20 uppercase select-none">
        Danger Zone • Danger Zone • Danger Zone
      </div>
    </section>
  );
};

export default Hero;
