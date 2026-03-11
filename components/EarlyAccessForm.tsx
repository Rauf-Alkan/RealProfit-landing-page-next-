'use client';
import React, { useState } from 'react';

export const EarlyAccessForm: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitted'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitted');
  };

  return (
    <section id="early-access" className="py-24 px-6 bg-[#050505] relative border-t border-zinc-900">
      <div className="max-w-3xl mx-auto">
        <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 blur-[80px] rounded-full pointer-events-none"></div>

          <div className="relative z-10 text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-700 bg-zinc-800/50 text-zinc-300 text-xs font-bold uppercase tracking-widest mb-6">
              <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              7 Gün Ücretsiz — Sonra $9.99/ay
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Hemen Başla</h2>
            <p className="text-zinc-400 text-lg">
              Kurulum 2 dakika. Kredi kartı gerekmez. İlk müşteri geldiği andan itibaren koruma başlar.
            </p>
          </div>

          {status === 'idle' ? (
            <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-zinc-300">Adın</label>
                  <input
                    required
                    type="text"
                    id="name"
                    className="w-full bg-[#050505] border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors"
                    placeholder="Ahmet Yılmaz"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-zinc-300">E-posta</label>
                  <input
                    required
                    type="email"
                    id="email"
                    className="w-full bg-[#050505] border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors"
                    placeholder="ahmet@magazan.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="store" className="text-sm font-medium text-zinc-300">Shopify Mağaza URL'in</label>
                <input
                  required
                  type="text"
                  id="store"
                  className="w-full bg-[#050505] border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors"
                  placeholder="maganiz.myshopify.com"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-white hover:bg-zinc-200 text-black font-bold text-lg rounded-xl px-8 py-4 mt-4 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] flex items-center justify-center gap-2"
              >
                Ücretsiz Başla
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>

              <p className="text-center text-xs text-zinc-600 mt-4">
                7 günlük deneme süresinde ücret alınmaz. İstediğin zaman iptal edebilirsin.
              </p>
            </form>
          ) : (
            <div className="text-center py-12 relative z-10 border border-emerald-900/30 bg-emerald-950/10 rounded-2xl">
              <div className="w-16 h-16 bg-emerald-500/20 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Kaydın Alındı.</h3>
              <p className="text-zinc-400">Shopify App Store onayının ardından sana haber vereceğiz. Teşekkürler.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};