// components/Store.tsx
import React from 'react';
import { ShoppingCart, ExternalLink } from 'lucide-react';
//import { products } from '@/app/types/store';
import { products } from '@/types/store';

export default function Store() {
  return (
    <section id="store" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-2">IronCore Shop</h2>
            <h3 className="text-4xl md:text-5xl font-black text-white uppercase italic">Premium Gear</h3>
          </div>
          <button className="text-white border-b-2 border-orange-500 pb-1 flex items-center gap-2 hover:text-orange-500 transition font-bold uppercase text-sm">
            View All Products <ExternalLink size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group relative bg-zinc-900 rounded-2xl overflow-hidden border border-white/5 transition-all duration-500 hover:border-orange-500/50">
              
              {/* IMAGE CONTAINER */}
              <div className="aspect-[4/5] overflow-hidden relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                {/* OVERLAY BUTTON */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button className="bg-white text-black font-bold py-3 px-6 rounded-full flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    <ShoppingCart size={18} /> Add to Cart
                  </button>
                </div>
              </div>

              {/* DETAILS */}
              <div className="p-6">
                <span className="text-orange-500 text-xs font-bold uppercase tracking-widest">{product.category}</span>
                <h4 className="text-white text-xl font-bold mt-1 group-hover:text-orange-500 transition-colors">{product.name}</h4>
                <p className="text-gray-400 mt-2 font-mono">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}