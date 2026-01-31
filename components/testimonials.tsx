// components/Testimonials.tsx
import React from 'react';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '@/types/testimonials';

export default function Testimonials() {
  return (
    <section id="reviews" className="py-24 bg-zinc-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="text-center mb-16">
          <h2 className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-2">Wall of Fame</h2>
          <h3 className="text-4xl md:text-6xl font-black text-white uppercase italic">Real Results</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div 
              key={item.id} 
              className="bg-zinc-900 p-8 rounded-3xl border border-white/5 relative group hover:border-orange-500/30 transition-all duration-300"
            >
              <Quote className="absolute top-6 right-8 text-white/5 group-hover:text-orange-500/10 transition-colors" size={60} />
              
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-orange-500 text-orange-500" />
                ))}
              </div>

              <p className="text-gray-300 italic mb-8 leading-relaxed relative z-10">
                "{item.content}"
              </p>

              <div className="flex items-center gap-4">
                <img 
                  src={item.avatar} 
                  alt={item.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-orange-500"
                />
                <div>
                  <h4 className="text-white font-bold">{item.name}</h4>
                  <p className="text-gray-500 text-xs uppercase tracking-tighter">{item.role}</p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-white/5">
                <span className="text-xs font-bold text-orange-500 bg-orange-500/10 px-3 py-1 rounded-full uppercase">
                  Result: {item.transformation}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}