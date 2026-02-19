import React from 'react';

export const HowItWorks: React.FC = () => {
  const steps = [
    { num: "01", title: "Connect", desc: "One-click Shopify integration for all your entities." },
    { num: "02", title: "Upload", desc: "Inject bulk COGS data via CSV in seconds." },
    { num: "03", title: "Reconcile", desc: "Our engine automatically matches Shopify Payouts to your real bank deposits." },
    { num: "04", title: "Expose", desc: "Uncover exactly where hidden fees and refunds are draining your margin." },
    { num: "05", title: "Scale", desc: "Spend on ads with 100% confidence, knowing your true cash flow." },
  ];

  return (
    <section id="how-it-works" className="py-24 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">The Path To Absolute Clarity</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">Five steps to destroy the guesswork in your multi-store operation.</p>
        </div>

        <div className="relative">
          <div className="absolute top-1/2 left-0 w-full h-px bg-zinc-800 -translate-y-1/2 hidden lg:block"></div>
          
          <div className="grid lg:grid-cols-5 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="relative z-10 text-center">
                <div className="w-16 h-16 bg-zinc-900 border border-zinc-800 rounded-2xl flex items-center justify-center mx-auto mb-6 group hover:border-emerald-500 transition-all duration-300">
                  <span className="text-xl font-bold text-emerald-500">{step.num}</span>
                </div>
                <h3 className="font-bold text-xl mb-3">{step.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};