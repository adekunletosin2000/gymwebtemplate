// app/page.tsx
import React from 'react';
import { Play } from 'lucide-react';

// Import your custom components
import Store from '@/components/store';
import Testimonials from '@/components/testimonials';
import Pricing from '@/components/pricing'; // Move your pricing logic here if you haven't yet!
import Contact from '@/components/contact'; // Future component for contact/join section

export default function GymLandingPage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      
      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-40" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter mb-4 leading-none">
            Forged in <span className="text-orange-500 italic">Iron</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto font-light">
            The premium fitness experience for those who refuse to settle for average.
          </p>
          <div className="flex flex-col md:flex-row gap-5 justify-center items-center">
            <button className="bg-orange-500 hover:bg-orange-600 text-black font-bold py-5 px-10 rounded-full transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(249,115,22,0.4)]">
              START YOUR TRANSFORMATION
            </button>
            <button className="flex items-center justify-center gap-3 border border-white/20 hover:bg-white/5 py-5 px-10 rounded-full transition group">
              <div className="bg-white/10 p-2 rounded-full group-hover:bg-orange-500 transition-colors">
                <Play size={18} className="group-hover:text-black" />
              </div> 
              WATCH PROMO
            </button>
          </div>
        </div>
      </section>

      {/* 1. STORE SECTION (New placement) */}
      <Store />

      {/* 2. TESTIMONIALS SECTION */}
      <Testimonials />

      {/* 3. PRICING SECTION */}
      <Pricing />

      {/* 4. CONTACT / JOIN SECTION */}
      <Contact/>

    </div>
  );
}