
import React from 'react';

export const Problem: React.FC = () => {
  return (
    <section id="problem" className="py-24 px-6 border-t border-zinc-900 bg-zinc-950/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-500 mb-4">The Brutal Truth</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Revenue is <span className="text-red-500">not</span> profit.
            </h3>
            <div className="space-y-6 text-lg text-zinc-400">
              <p>
                Shopify revenue figures are misleading. They don't account for transaction fees, processing times, or the delay between a sale and cash-in-bank.
              </p>
              <p>
                As you scale to multiple stores, the blind spots grow. Spreadsheets collapse. Managing COGS, returns, and payout schedules becomes a full-time job that gives you half-baked data.
              </p>
              <p className="text-zinc-100 font-medium">
                Most operators are making million-dollar decisions based on vanity metrics.
              </p>
            </div>
          </div>
          
          <div className="grid gap-4">
            {[
              { title: "Payout Timing Confusion", desc: "Know exactly when money hits your bank, not just when a customer checks out." },
              { title: "Multi-Store Blindness", desc: "Visibility usually ends at the store login page. We bring it all together." },
              { title: "Misleading Shopify Analytics", desc: "Refunds and fees distort the reality of your day-to-day operations." },
              { title: "Manual COGS Errors", desc: "Old CSVs and outdated costs create false profit assumptions." }
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/30 hover:border-zinc-700 transition-colors">
                <h4 className="font-bold text-white mb-1">{item.title}</h4>
                <p className="text-sm text-zinc-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
