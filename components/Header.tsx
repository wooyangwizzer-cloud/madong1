
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-yellow-500 text-3xl font-impact tracking-tighter">DON LEE</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-bold tracking-widest uppercase">
          <a href="#" className="hover:text-yellow-500 transition-colors">Home</a>
          <a href="#movies" className="hover:text-yellow-500 transition-colors">Movies</a>
          <a href="#chat" className="hover:text-yellow-500 transition-colors">Ask Don Lee</a>
          <a href="#" className="text-gray-600 cursor-not-allowed">Store</a>
        </nav>

        <div className="flex items-center gap-4">
          <button className="bg-white text-black text-xs font-black px-4 py-2 rounded-sm hover:bg-yellow-500 transition-colors uppercase">
            Join Fan Club
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
