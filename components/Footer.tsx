// components/Footer.tsx
import React from 'react';
import { Dumbbell, Instagram, Twitter, Mail, ShoppingCart } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Dumbbell className="text-orange-500" size={28} />
              <span className="text-xl font-black italic">IRONCORE</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Premium fitness equipment and elite coaching. Elevate your performance.
            </p>
          </div>

          {/* STORE COLUMN */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm flex items-center gap-2">
              <ShoppingCart size={16} className="text-orange-500" /> Store
            </h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link href="#" className="hover:text-white transition">Apparel</Link></li>
              <li><Link href="#" className="hover:text-white transition">Supplements</Link></li>
              <li><Link href="#" className="hover:text-white transition">Gym Gear</Link></li>
              <li><Link href="#" className="hover:text-white transition">Digital Guides</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Members</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link href="#" className="hover:text-white transition">My Account</Link></li>
              <li><Link href="#" className="hover:text-white transition">Class Booking</Link></li>
              <li><Link href="#" className="hover:text-white transition">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Newsletter</h4>
            <div className="flex gap-2">
              <input type="email" placeholder="Email" className="bg-zinc-900 border border-white/10 rounded-lg px-3 py-2 text-sm w-full outline-none focus:border-orange-500" />
              <button className="bg-orange-500 p-2 rounded-lg"><Mail size={18} className="text-black" /></button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}