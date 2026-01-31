// components/Navbar.tsx
"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X, Dumbbell, ShoppingBag } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // 1. Change navbar background transparency on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 2. Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navLinks = [
    { name: 'Membership', href: '#pricing' },
    { name: 'Store', href: '#store' },
    { name: 'Testimonials', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* --- MAIN NAVIGATION BAR --- */}
      <nav className={`fixed w-full z-[100] top-0 transition-all duration-300 ${
        scrolled ? 'bg-black/90 backdrop-blur-lg py-4 border-b border-white/10' : 'bg-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* LOGO */}
            <Link href="/" className="flex items-center gap-2 group">
              <Dumbbell className="text-orange-500 group-hover:rotate-12 transition-transform" size={32} />
              <span className="text-2xl font-black tracking-tighter italic uppercase text-white">
                Iron<span className="text-orange-500">Core</span>
              </span>
            </Link>

            {/* DESKTOP MENU (Hidden on Mobile) */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  className="text-sm font-semibold uppercase tracking-widest text-gray-300 hover:text-orange-500 transition-colors flex items-center gap-1"
                >
                  {link.name === 'Store' && <ShoppingBag size={14} />}
                  {link.name}
                </Link>
              ))}
              <button className="bg-orange-500 text-black px-8 py-3 rounded-full font-black uppercase text-xs tracking-widest hover:bg-white hover:scale-105 transition-all shadow-lg shadow-orange-500/20">
                Join Now
              </button>
            </div>

            {/* MOBILE HAMBURGER BUTTON */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="text-white p-2 hover:bg-white/10 rounded-full transition z-[110] relative"
                aria-label="Toggle Menu"
              >
                {isOpen ? <X size={30} /> : <Menu size={30} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* --- MOBILE OVERLAY DRAWER (Slides from Right) --- */}
      <div className={`fixed inset-0 z-[90] bg-black/95 backdrop-blur-xl transition-transform duration-500 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } md:hidden`}>
        
        {/* Content Container: Aligned to the Right */}
        <div className="flex flex-col items-end justify-center h-full space-y-8 px-10 text-right">
          
          {navLinks.map((link, i) => (
            <Link
              key={link.name}
              href={link.href}
              style={{ transitionDelay: `${isOpen ? i * 75 : 0}ms` }}
              className={`text-5xl font-black uppercase italic tracking-tighter text-white hover:text-orange-500 transition-all duration-300 ${
                isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          {/* Mobile CTA */}
          <button 
            onClick={() => setIsOpen(false)}
            className={`bg-orange-500 text-black px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-lg mt-8 shadow-[0_0_20px_rgba(249,115,22,0.4)] transition-all duration-500 delay-300 ${
                isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Join the Club
          </button>

          {/* Bottom Social Decoration */}
          <div className={`pt-12 flex gap-6 text-gray-500 transition-opacity duration-700 delay-500 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
            <span className="text-xs font-bold tracking-widest uppercase">Instagram</span>
            <span className="text-xs font-bold tracking-widest uppercase">Twitter</span>
          </div>
        </div>
      </div>
    </>
  );
}