
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Filmography from './components/Filmography';
import AIChat from './components/AIChat';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] selection:bg-yellow-500 selection:text-black">
      <Header />
      
      <main>
        <Hero />
        
        {/* Stats Section */}
        <section className="py-24 px-4 bg-gradient-to-b from-[#0a0a0a] to-[#111] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent"></div>
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center relative z-10">
            <div className="p-10 border border-white/5 bg-white/5 backdrop-blur-sm rounded-2xl group hover:border-yellow-500/30 transition-all duration-300">
              <div className="text-6xl font-impact text-yellow-500 mb-4 group-hover:scale-110 transition-transform">1.2억</div>
              <div className="text-gray-400 uppercase tracking-widest text-sm font-bold">누적 관객 수</div>
            </div>
            <div className="p-10 border border-white/5 bg-white/5 backdrop-blur-sm rounded-2xl group hover:border-yellow-500/30 transition-all duration-300">
              <div className="text-6xl font-impact text-yellow-500 mb-4 group-hover:scale-110 transition-transform">50+</div>
              <div className="text-gray-400 uppercase tracking-widest text-sm font-bold">출연 작품</div>
            </div>
            <div className="p-10 border border-white/5 bg-white/5 backdrop-blur-sm rounded-2xl group hover:border-yellow-500/30 transition-all duration-300">
              <div className="text-6xl font-impact text-yellow-500 mb-4 group-hover:scale-110 transition-transform">21"</div>
              <div className="text-gray-400 uppercase tracking-widest text-sm font-bold">팔뚝 둘레 (인치)</div>
            </div>
          </div>
        </section>

        <Filmography />
        
        <AIChat />
      </main>

      <footer className="py-20 border-t border-white/5 bg-[#050505] relative">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="font-impact text-4xl text-white/10 mb-8 tracking-tighter">DON LEE OFFICIAL</div>
          <div className="flex flex-wrap justify-center gap-8 mb-10 text-gray-500 uppercase text-xs font-bold tracking-[0.2em]">
            <a href="#" className="hover:text-yellow-500 transition-colors">Privacy</a>
            <a href="#" className="hover:text-yellow-500 transition-colors">Terms</a>
            <a href="#" className="hover:text-yellow-500 transition-colors">Business</a>
            <a href="#" className="hover:text-yellow-500 transition-colors">Contact</a>
          </div>
          <div className="w-16 h-1 bg-yellow-600 mx-auto mb-10"></div>
          <p className="text-gray-600 text-[10px] leading-loose max-w-md mx-auto">
            본 사이트는 배우 마동석의 팬 페이지이며, <br/>
            모든 AI 응답은 Gemini에 의해 생성됩니다. <br/>
            &copy; 2024 DON LEE HUB. ALL RIGHTS RESERVED.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
