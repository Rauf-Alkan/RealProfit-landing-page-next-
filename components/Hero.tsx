
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-8">
          The Operator's Choice
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6 leading-[1.1]">
          Stop tracking revenue.<br />
          <span className="gradient-text">Start tracking real profit.</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          See your true profit based on actual Shopify payouts — across all your stores. Built for scaling brands that outgrew spreadsheets.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <a 
            href="#early-access" 
            className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-zinc-200 text-black font-bold text-lg rounded-xl transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]"
          >
            Join Early Access
          </a>
          <a 
            href="#how-it-works" 
            className="w-full sm:w-auto px-8 py-4 bg-zinc-900 hover:bg-zinc-800 text-white font-bold text-lg rounded-xl border border-zinc-800 transition-all"
          >
            See How It Works
          </a>
        </div>
        
        <p className="text-sm text-zinc-500">
          Early access is limited to serious Shopify operators.
        </p>
      </div>
    </section>
  );
};
