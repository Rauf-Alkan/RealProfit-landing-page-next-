import React from 'react';

export const Comparison: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-[#050505] border-y border-zinc-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            The Old Way Is <span className="text-red-500">Bleeding You Dry.</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            Stop relying on hopium and delayed spreadsheets. See exactly why serious operators are migrating to Real Profit.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950/50">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-zinc-900 border-b border-zinc-800">
                <th className="p-6 font-bold text-zinc-500 uppercase text-xs tracking-widest w-1/3">The Bottleneck</th>
                <th className="p-6 font-bold text-red-400 uppercase text-xs tracking-widest border-r border-zinc-800 w-1/3">The Amateur Way</th>
                <th className="p-6 font-bold text-emerald-400 uppercase text-xs tracking-widest w-1/3">Real Profit</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800">
              {[
                { 
                  label: "Data Accuracy", 
                  old: "Vague Estimates & 'Hopium'", 
                  new: "100% Payout-Driven Truth" 
                },
                { 
                  label: "Multi-Store Views", 
                  old: "Logging In & Out 5 Times", 
                  new: "Unified Global Command Center" 
                },
                { 
                  label: "COGS Management", 
                  old: "Stale, Manual Spreadsheets", 
                  new: "Instant CSV Bulk Sync" 
                },
                { 
                  label: "Processing Fees", 
                  old: "Hidden, Ignored & Lost", 
                  new: "Exposed & Accounted For" 
                },
                { 
                  label: "Decision Making", 
                  old: "Blind Scaling Risk", 
                  new: "Cash-Flow Certainty" 
                }
              ].map((row, i) => (
                <tr key={i} className="hover:bg-zinc-900/40 transition-colors">
                  <td className="p-6 font-medium text-white">{row.label}</td>
                  <td className="p-6 text-zinc-500 border-r border-zinc-800 line-through decoration-red-900/50">{row.old}</td>
                  <td className="p-6 text-emerald-400 font-bold bg-emerald-950/10">{row.new}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* THE FINAL NAIL IN THE COFFIN */}
        <div className="mt-8 text-center">
          <p className="text-sm text-zinc-500 italic">
            "If your current tool doesn't reconcile with your actual bank deposits, it's not a financial tool. It's a toy."
          </p>
        </div>
      </div>
    </section>
  );
};