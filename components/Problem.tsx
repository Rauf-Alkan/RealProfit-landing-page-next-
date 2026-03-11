import React from 'react';

export const Problem: React.FC = () => {
  return (
    <section id="problem" className="py-24 px-6 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Sessiz Red. <span className="text-red-500 border-b-4 border-red-500">En Pahalı Sorun.</span>
          </h2>
          <p className="text-xl text-zinc-400 leading-relaxed max-w-3xl mx-auto">
            Türkiye'de banka kartlarının büyük çoğunluğunda yurtdışı alışveriş{' '}
            <strong className="text-white">varsayılan olarak kapalı</strong> gelir.
            Müşteri bunu bilmez. Stripe sadece bir red kodu döner. Sen neden kaybettiğini asla öğrenemezsin.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-[#050505] p-8 border border-zinc-800 rounded-2xl">
            <div className="text-red-500 mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Müşteri Sebebini Bilmiyor</h3>
            <p className="text-zinc-500 leading-relaxed">
              Checkout'a geldi, ödeme yaptı, kart reddedildi. Stripe sadece "decline" diyor — neden? Kim bilir.
              Müşteri hayal kırıklığıyla sayfayı kapatıyor. Bir daha geri gelmiyor.
              Bu satışı sen değil, kötü UX kaybettirdi.
            </p>
          </div>

          <div className="bg-[#050505] p-8 border border-zinc-800 rounded-2xl">
            <div className="text-red-500 mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Sen Nedenini Göremiyorsun</h3>
            <p className="text-zinc-500 leading-relaxed">
              Stripe dashboard'unda "card_declined" görürsün. Neden reddedildiğini değil.
              Kaç müşterin bu yüzden ayrıldığını bilmiyorsun.
              Kaybettiğin ciroyu hesaplayamıyorsun. Kör uçuyorsun.
            </p>
          </div>
        </div>

        {/* Perry Marshall: Make them feel the exact number */}
        <div className="mt-12 bg-zinc-900/50 border border-red-900/30 p-8 rounded-2xl">
          <p className="text-center text-lg text-zinc-300 mb-2">
            Ayda 1.000 Türk ziyaretçin varsa ve sadece <strong className="text-red-400">%3'ü</strong> bu yüzden ayrılıyorsa:
          </p>
          <p className="text-center text-3xl font-extrabold text-white mt-4">
            Ortalama sepet ₺500 × 30 müşteri =
            <span className="text-red-500 ml-2">₺15.000 / ay kayıp.</span>
          </p>
          <p className="text-center text-sm text-zinc-500 mt-4">
            DeclineShield ayda $9.99. Tek bir müşteriyi kurtarman yeterli.
          </p>
        </div>
      </div>
    </section>
  );
};