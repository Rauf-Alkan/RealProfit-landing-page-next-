
import React from 'react';

export const Comparison: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-[#050505] border-y border-zinc-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Upgrade your clarity.</h2>
          <p className="text-zinc-400">Stop fighting your tools and start managing your profit.</p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-zinc-800">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-zinc-900/50 border-b border-zinc-800">
                <th className="p-6 font-bold text-zinc-500 uppercase text-xs tracking-widest">Feature</th>
                <th className="p-6 font-bold text-zinc-500 uppercase text-xs tracking-widest">The Old Way</th>
                <th className="p-6 font-bold text-emerald-500 uppercase text-xs tracking-widest">Real Profit</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800">
              {[
                { label: "Data Accuracy", old: "Estimates & Manual Entry", new: "Payout-Driven Truth" },
                { label: "Multi-Store Views", old: "Infinite Tab Switching", new: "Unified Global Dashboard" },
                { label: "COGS Management", old: "Stale Spreadsheets", new: "Dynamic Bulk Sync" },
                { label: "Fee Visibility", old: "Hidden & Forgotten", new: "Automated Tracking" },
                { label: "Actionability", old: "Vague Assumptions", new: "Operator Clarity" }
              ].map((row, i) => (
                <tr key={i} className="hover:bg-zinc-900/30 transition-colors">
                  <td className="p-6 font-medium">{row.label}</td>
                  <td className="p-6 text-zinc-500">{row.old}</td>
                  <td className="p-6 text-emerald-400 font-bold">{row.new}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
