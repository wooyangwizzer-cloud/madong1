
import React from 'react';
import { MOVIES } from '../constants';

const Filmography: React.FC = () => {
  return (
    <section id="movies" className="py-24 px-4 bg-[#111111]">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-yellow-500 font-impact text-xl mb-2">WORKS</h2>
            <h3 className="text-4xl md:text-5xl font-impact uppercase">Filmography</h3>
          </div>
          <div className="hidden md:block text-gray-500 text-sm">
            Total {MOVIES.length} Masterpieces
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {MOVIES.map((movie) => (
            <div key={movie.id} className="group relative bg-[#0a0a0a] overflow-hidden rounded-lg transition-transform hover:-translate-y-2 border border-white/5 hover:border-yellow-500/50">
              <div className="aspect-[2/3] overflow-hidden">
                <img 
                  src={movie.imageUrl} 
                  alt={movie.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-yellow-500 font-bold text-sm">{movie.year}</span>
                  <span className="bg-white/10 text-xs px-2 py-1 rounded text-gray-300">ROLE: {movie.role}</span>
                </div>
                <h4 className="text-2xl font-impact mb-3 text-white group-hover:text-yellow-500 transition-colors">{movie.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {movie.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Filmography;
