
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Filmography from './components/Filmography';
import AIChat from './components/AIChat';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Header />
      
      <main>
        <Hero />
        
        <section className="py-20 px-4 bg-gradient-to-b from-[#0a0a0a] to-[#111]">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="p-8 border border-white/5 bg-white/5 rounded-lg">
              <div className="text-5xl font-impact text-yellow-500 mb-4">120M+</div>
              <div className="text-gray-400 uppercase tracking-widest text-sm font-bold">Accumulated Audience</div>
            </div>
            <div className="p-8 border border-white/5 bg-white/5 rounded-lg">
              <div className="text-5xl font-impact text-yellow-500 mb-4">50+</div>
              <div className="text-gray-400 uppercase tracking-widest text-sm font-bold">Global Movies</div>
            </div>
            <div className="p-8 border border-white/5 bg-white/5 rounded-lg">
              <div className="text-5xl font-impact text-yellow-500 mb-4">21"</div>
              <div className="text-gray-400 uppercase tracking-widest text-sm font-bold">Arm Circumference</div>
            </div>
          </div>
        </section>

        <Filmography />
        
        <AIChat />
      </main>

      <footer className="py-12 border-t border-white/5 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="font-impact text-3xl text-gray-700 mb-6">DON LEE</div>
          <div className="flex justify-center gap-6 mb-8 text-gray-500 uppercase text-xs font-bold tracking-widest">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Contact</a>
          </div>
          <p className="text-gray-600 text-xs">
            © 2024 Don Lee Official Fan Hub. All rights reserved. <br/>
            This is a fan page project powered by Gemini AI.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
