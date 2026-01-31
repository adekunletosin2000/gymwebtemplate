// components/Contact.tsx
"use client";

import React from 'react';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* LEFT: INFO & MAP */}
          <div>
            <h2 className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-2">Visit Us</h2>
            <h3 className="text-4xl md:text-6xl font-black text-white uppercase italic mb-8">Get In Touch</h3>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="bg-orange-500/10 p-3 rounded-lg text-orange-500">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Location</h4>
                  <p className="text-gray-400">123 Iron Street, Muscle Beach, CA 90210</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-orange-500/10 p-3 rounded-lg text-orange-500">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Hours</h4>
                  <p className="text-gray-400">Mon - Fri: 5:00 AM - 11:00 PM</p>
                  <p className="text-gray-400">Sat - Sun: 7:00 AM - 8:00 PM</p>
                </div>
              </div>
            </div>

            {/* MOCK MAP */}
            <div className="w-full h-64 bg-zinc-900 rounded-3xl border border-white/10 relative overflow-hidden group">
               <div className="absolute inset-0 bg-[url('https://api.mapbox.com/styles/v1/mapbox/dark-v10/static/-118.47,34.01,12,0/600x400?access_token=YOUR_TOKEN')] bg-cover opacity-50 grayscale group-hover:grayscale-0 transition-all duration-700" />
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-orange-500 w-4 h-4 rounded-full animate-ping" />
                  <div className="bg-orange-500 w-3 h-3 rounded-full absolute" />
               </div>
               <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold border border-white/10">
                 OPEN IN GOOGLE MAPS
               </div>
            </div>
          </div>

          {/* RIGHT: CONTACT FORM */}
          <div className="bg-zinc-900/50 p-8 md:p-12 rounded-[2.5rem] border border-white/5 shadow-2xl">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full bg-black border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-orange-500 transition" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Email Address</label>
                  <input type="email" placeholder="john@example.com" className="w-full bg-black border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-orange-500 transition" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Subject</label>
                <select className="w-full bg-black border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-orange-500 transition appearance-none">
                  <option>Membership Inquiry</option>
                  <option>Personal Training</option>
                  <option>Store Support</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Message</label>
                <textarea rows={4} placeholder="How can we help you reach your goals?" className="w-full bg-black border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-orange-500 transition resize-none"></textarea>
              </div>

              <button className="w-full bg-orange-500 hover:bg-orange-600 text-black font-black uppercase tracking-widest py-5 rounded-xl transition flex items-center justify-center gap-3 group">
                Send Message <Send size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}