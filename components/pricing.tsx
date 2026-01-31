// components/Pricing.tsx
"use client";

import React, { useState } from 'react';
import { CheckCircle2, Zap } from 'lucide-react';
import { plans } from '@/types/gym';

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="py-24 px-4 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-2">Membership</h2>
          <h3 className="text-4xl md:text-6xl font-black text-white uppercase italic mb-6">Level Up Your Life</h3>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 text-sm font-bold">
            <span className={!isYearly ? "text-white" : "text-gray-500"}>MONTHLY</span>
            <button 
              onClick={() => setIsYearly(!isYearly)}
              className="w-14 h-7 bg-zinc-800 rounded-full p-1 transition-colors relative"
            >
              <div className={`w-5 h-5 bg-orange-500 rounded-full transition-transform ${isYearly ? 'translate-x-7' : 'translate-x-0'}`} />
            </button>
            <span className={isYearly ? "text-white" : "text-gray-500"}>YEARLY <span className="text-orange-500 text-[10px] ml-1 bg-orange-500/10 px-2 py-0.5 rounded-full">SAVE 20%</span></span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div 
              key={plan.name}
              className={`p-10 rounded-[2.5rem] border transition-all duration-500 flex flex-col relative overflow-hidden ${
                plan.isPopular 
                ? 'border-orange-500 bg-zinc-900 scale-105 shadow-[0_0_40px_rgba(249,115,22,0.15)]' 
                : 'border-white/5 bg-zinc-900/50 hover:border-white/20'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 right-0 bg-orange-500 text-black text-[10px] font-black px-4 py-1 uppercase tracking-widest rounded-bl-xl">
                  Most Popular
                </div>
              )}

              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-5xl font-black text-white">
                  ${isYearly ? Math.floor(parseInt(plan.price.replace('$', '')) * 0.8) : plan.price.replace('$', '')}
                </span>
                <span className="text-gray-500 font-medium">/mo</span>
              </div>

              <ul className="space-y-5 mb-10 flex-grow">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-gray-400 text-sm">
                    <CheckCircle2 className="text-orange-500 mt-0.5 shrink-0" size={18} />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-2xl font-black uppercase tracking-widest transition-all ${
                plan.isPopular 
                ? 'bg-orange-500 text-black hover:bg-orange-600 shadow-lg' 
                : 'bg-white text-black hover:bg-zinc-200'
              }`}>
                Join {plan.name}
              </button>
            </div>
          ))}
        </div>

        {/* Comparison Disclaimer */}
        <p className="text-center text-gray-600 text-xs mt-12">
          * All plans include a one-time $49 initiation fee. Cancel anytime with 30 days notice.
        </p>
      </div>
    </section>
  );
}