import React from 'react';

export const Vision: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-zinc-950 relative overflow-hidden border-t border-zinc-900">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white">
            Herkes İçin Değil. <br />
            <span className="text-emerald-400">Senin İçin Mi?</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            DeclineShield çok spesifik bir sorunu çözüyor. Sende bu sorun varsa, dünyanın en ucuz satış kurtarma aracı bu.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <div className="bg-red-950/10 border border-red-900/30 p-8 rounded-2xl relative">
            <div className="absolute -top-4 left-8 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Sana Göre Değil
            </div>
            <ul className="space-y-6 mt-4">
              {[
                "Sadece yurt içi ödeme alıyorsun (iyzico, PayTR).",
                "Stripe kullanmıyorsun.",
                "Müşteri kitlen tamamen yabancı ülkelerden oluşuyor.",
                "Zaten sıfır checkout abandonment'ın var.",
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

          <div className="bg-emerald-950/10 border border-emerald-900/30 p-8 rounded-2xl relative">
            <div className="absolute -top-4 left-8 bg-emerald-500 text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Tam Senin İçin
            </div>
            <ul className="space-y-6 mt-4">
              {[
                "Stripe kullanıyorsun ve Türkiye'den müşteri alıyorsun.",
                "Stripe dashboard'unda açıklamasız card_declined görüyorsun.",
                "Checkout abandonment oranın yüksek ama nedenini bilmiyorsun.",
                "Her kayıp satışın canını yakıyor ve çözüm istiyorsun.",
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