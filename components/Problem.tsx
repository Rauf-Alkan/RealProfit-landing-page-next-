import React from 'react';

export const Problem: React.FC = () => {
  return (
    <section id="problem" className="py-24 px-6 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-4xl mx-auto">
        {/* THE HOOK: The harsh reality check */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            The <span className="text-red-500 border-b-4 border-red-500">Dashboard Delusion</span>.
          </h2>
          <p className="text-xl text-zinc-400 leading-relaxed max-w-3xl mx-auto">
            You had a record-breaking month. Shopify sent the notification. Your ad account shows a massive ROAS. But when it’s time to pay the credit cards and the suppliers, the math doesn't add up. <strong className="text-white">Where did the cash go?</strong>
          </p>
        </div>

        {/* THE AGITATION: Breaking down exactly how they are bleeding money */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-[#050505] p-8 border border-zinc-800 rounded-2xl">
            <div className="text-red-500 mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">You Are Operating on "Ghost Money"</h3>
            <p className="text-zinc-500 leading-relaxed">
              Shopify reports a sale the second a customer clicks buy. But they don't clearly show the 2.9% + 30¢ processing fee, the currency conversion loss, or the exact moment a refund actually drains your account. You are making scaling decisions based on money that doesn't exist yet.
            </p>
          </div>

          <div className="bg-[#050505] p-8 border border-zinc-800 rounded-2xl">
            <div className="text-red-500 mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">The Multi-Store Spreadsheet Hell</h3>
            <p className="text-zinc-500 leading-relaxed">
              Managing multiple stores means downloading separate CSVs, matching them with different ad accounts, and manually updating stale COGS data line by line. By the time you calculate your true Net Profit for Tuesday, it's already Friday. Your data is dead on arrival.
            </p>
          </div>
        </div>

        {/* THE TWIST: Pointing out the ultimate mistake */}
        <div className="mt-12 bg-zinc-900/50 border border-zinc-800 p-8 rounded-2xl text-center">
          <p className="text-lg text-zinc-300">
            If you don't know your exact profit margin today, you can't confidently scale your ads tomorrow. <br className="hidden md:block"/>
            <strong className="text-white">You aren't running a business. You are playing a very expensive guessing game.</strong>
          </p>
        </div>
      </div>
    </section>
  );
};