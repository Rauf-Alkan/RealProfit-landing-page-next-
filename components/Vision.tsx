
import React from 'react';

export const Vision: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-zinc-950 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 blur-[100px] rounded-full"></div>
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-8">Built for Operators Who Care About Real Numbers.</h2>
        <p className="text-xl text-zinc-400 leading-relaxed mb-10">
          Real Profit is not another vanity analytics dashboard. It is a payout-driven profit engine designed specifically for serious Shopify founders who value clarity over hype.
        </p>
        <div className="flex items-center justify-center gap-2 text-zinc-500">
          <div className="w-1 h-1 bg-zinc-700 rounded-full"></div>
          <span className="text-sm font-medium uppercase tracking-[0.2em]">Designed for high-growth commerce</span>
          <div className="w-1 h-1 bg-zinc-700 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};
