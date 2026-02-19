import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* FILTER: Weeding out the 80% tire-kickers */}
        <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-red-500/20 bg-red-500/5 text-red-400 text-xs font-bold uppercase tracking-widest mb-8">
          STRICTLY FOR SHOPIFY STORES DOING $10K+/MO
        </div>
        
        {/* AGITATION: Punching the pain point */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6 leading-[1.1]">
          Your Shopify Dashboard <br />
          <span className="text-red-500">Is Lying To You.</span>
        </h1>
        
        {/* USP & PAIN REVERSAL */}
        <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          You see massive revenue on screen, but your bank account disagrees. Hidden fees, returns, and ad costs are eating your margins. Ditch the estimates and track your exact net profit down to the penny based on <strong className="text-emerald-400 font-semibold">actual Payout data</strong>.
        </p>

        {/* CTA: Creating exclusivity */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <a 
            href="#early-access" 
            className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-zinc-200 text-black font-bold text-lg rounded-xl transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]"
          >
            Request Access
          </a>
          <a 
            href="#problem" 
            className="w-full sm:w-auto px-8 py-4 bg-zinc-900 hover:bg-zinc-800 text-white font-bold text-lg rounded-xl border border-zinc-800 transition-all"
          >
            See The Ugly Truth
          </a>
        </div>
        <p className="text-sm text-zinc-500 font-medium">
          * Applications are reviewed manually. Hobbyist dropshippers will not be accepted.
        </p>
      </div>
    </section>
  );
};