import React from 'react';

export const HowItWorks: React.FC = () => {
  const steps = [
    { num: "01", title: "Kur", desc: "Shopify app store'dan tek tıkla mağazana ekle. Kod yok, geliştirici yok." },
    { num: "02", title: "Tespit Et", desc: "Türkiye lokasyonundan gelen her müşteriyi otomatik olarak tanır." },
    { num: "03", title: "Uyar", desc: "Checkout butonuna basıldığında akıllı popup devreye girer." },
    { num: "04", title: "Yönlendir", desc: "Banka bazında adım adım kart açma rehberi gösterir." },
    { num: "05", title: "Kazan", desc: "Müşteri kartını açar, ödemeyi tamamlar. Satış kurtarılmış." },
  ];

  return (
    <section id="how-it-works" className="py-24 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">5 Adımda Kayıp Satışı Geri Al</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">Hiçbir teknik bilgi gerekmez. Kur ve unut.</p>
        </div>

        <div className="relative">
          <div className="absolute top-1/2 left-0 w-full h-px bg-zinc-800 -translate-y-1/2 hidden lg:block"></div>
          <div className="grid lg:grid-cols-5 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="relative z-10 text-center">
                <div className="w-16 h-16 bg-zinc-900 border border-zinc-800 rounded-2xl flex items-center justify-center mx-auto mb-6 hover:border-emerald-500 transition-all duration-300">
                  <span className="text-xl font-bold text-emerald-500">{step.num}</span>
                </div>
                <h3 className="font-bold text-xl mb-3">{step.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Screenshots — replace src with your actual paths */}
        <div className="mt-24 grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-zinc-800 overflow-hidden bg-zinc-900/40">
            <div className="px-5 py-3 border-b border-zinc-800 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/60"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/60"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-500/60"></div>
              <span className="text-xs text-zinc-500 ml-2">Mobil — Sepet Checkout</span>
            </div>
            <img
              src="/screenshots/mobile-popup.png"
              alt="DeclineShield mobil popup"
              className="w-full object-cover"
            />
          </div>

          <div className="rounded-2xl border border-zinc-800 overflow-hidden bg-zinc-900/40">
            <div className="px-5 py-3 border-b border-zinc-800 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/60"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/60"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-500/60"></div>
              <span className="text-xs text-zinc-500 ml-2">Desktop — Sepet Sayfası</span>
            </div>
            <img
              src="/screenshots/desktop-popup.png"
              alt="DeclineShield desktop popup"
              className="w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};