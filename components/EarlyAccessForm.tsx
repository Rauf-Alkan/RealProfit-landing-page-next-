'use client';
import React, { useState } from 'react';

export const EarlyAccessForm: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitted'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Burada form verilerini alıp backend'e göndereceksin.
    setStatus('submitted');
  };

  return (
    <section id="early-access" className="py-24 px-6 bg-[#050505] relative border-t border-zinc-900">
      <div className="max-w-3xl mx-auto">
        <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 md:p-12 relative overflow-hidden">
          
          {/* Subtle background element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 blur-[80px] rounded-full pointer-events-none"></div>

          <div className="relative z-10 text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-700 bg-zinc-800/50 text-zinc-300 text-xs font-bold uppercase tracking-widest mb-6">
              <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              Private Beta Application
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Apply For Early Access</h2>
            <p className="text-zinc-400 text-lg">
              To ensure system stability and provide white-glove onboarding, we are strictly limiting access. We accept high-volume operators first.
            </p>
          </div>

          {status === 'idle' ? (
            <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-zinc-300">Your Name</label>
                  <input required type="text" id="name" className="w-full bg-[#050505] border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-zinc-300">Work Email</label>
                  <input required type="email" id="email" className="w-full bg-[#050505] border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors" placeholder="founder@brand.com" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="store" className="text-sm font-medium text-zinc-300">Shopify Store URL</label>
                  <input required type="text" id="store" className="w-full bg-[#050505] border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors" placeholder="yourbrand.myshopify.com" />
                </div>
                
                {/* THE 80/20 FILTER DROPDOWN */}
                <div className="space-y-2">
                  <label htmlFor="revenue" className="text-sm font-medium text-zinc-300">Average Monthly Revenue</label>
                  <select required id="revenue" className="w-full bg-[#050505] border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors appearance-none">
                    <option value="" disabled selected>Select an option...</option>
                    <option value="under_10k">Under $10,000</option>
                    <option value="10k_50k">$10,000 - $50,000</option>
                    <option value="50k_250k">$50,000 - $250,000</option>
                    <option value="over_250k">$250,000+</option>
                  </select>
                </div>
              </div>

              <button type="submit" className="w-full bg-white hover:bg-zinc-200 text-black font-bold text-lg rounded-xl px-8 py-4 mt-4 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] flex items-center justify-center gap-2">
                Submit Application
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
              
              <p className="text-center text-xs text-zinc-600 mt-4">
                By applying, you understand that Real Profit connects strictly via Payouts and requires accurate COGS data to function effectively.
              </p>
            </form>
          ) : (
            <div className="text-center py-12 relative z-10 border border-emerald-900/30 bg-emerald-950/10 rounded-2xl">
              <div className="w-16 h-16 bg-emerald-500/20 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Application Received.</h3>
              <p className="text-zinc-400">Our team will review your store details. If you qualify for the current rollout phase, we will contact you via email shortly.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};