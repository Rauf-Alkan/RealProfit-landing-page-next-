import React from 'react';

export const Vision: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-zinc-950 relative overflow-hidden border-t border-zinc-900">
      {/* Background glow for the warning vibe */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-500/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white">
            Let's Be Clear: <br className="md:hidden" />
            <span className="text-red-500">We Are NOT For Everyone.</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Real Profit is a surgical financial tool, not a toy. If you fit into the categories on the left, please close this page. We won't be a good fit.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* THE REJECTION (Who it's NOT for) */}
          <div className="bg-red-950/10 border border-red-900/30 p-8 rounded-2xl relative">
            <div className="absolute -top-4 left-8 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Do Not Apply If
            </div>
            <ul className="space-y-6 mt-4">
              {[
                "You are a hobbyist dropshipper getting 3 orders a day.",
                "You are too lazy to upload your COGS (Cost of Goods Sold).",
                "You care more about sharing 'Revenue' screenshots on Twitter than your actual bank deposits.",
                "You don't spend money on ads and don't care about precise ROAS."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="min-w-[24px] mt-1 text-red-500">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <span className="text-zinc-300 text-lg leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* THE INVITATION (Who it IS for) */}
          <div className="bg-emerald-950/10 border border-emerald-900/30 p-8 rounded-2xl relative">
            <div className="absolute -top-4 left-8 bg-emerald-500 text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Strictly Built For
            </div>
            <ul className="space-y-6 mt-4">
              {[
                "Multi-store operators drowning in chaotic spreadsheet data.",
                "Founders scaling ad spend who demand to know their exact net profit margin today.",
                "Operators who want their dashboard to reconcile 100% with their Shopify Payouts.",
                "Serious businesses doing $10,000+ in monthly revenue."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="min-w-[24px] mt-1 text-emerald-500">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-zinc-300 text-lg leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};