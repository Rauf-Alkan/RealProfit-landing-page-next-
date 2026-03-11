import React from 'react';

export const Comparison: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-[#050505] border-y border-zinc-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            Eski Yöntem Seni <span className="text-red-500">Kandırıyor.</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            "Zaten bilgilendirme banner'ı vardı" diyorsun. Ama o banner müşteriye hiçbir şey söylemiyor.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950/50">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-zinc-900 border-b border-zinc-800">
                <th className="p-6 font-bold text-zinc-500 uppercase text-xs tracking-widest w-1/3">Sorun</th>
                <th className="p-6 font-bold text-red-400 uppercase text-xs tracking-widest border-r border-zinc-800 w-1/3">Eski Yöntem</th>
                <th className="p-6 font-bold text-emerald-400 uppercase text-xs tracking-widest w-1/3">DeclineShield</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800">
              {[
                { label: "Müşteri Bilgilendirmesi", old: "Genel uyarı — kim okur?", next: "Tam ödeme anında, kişisel" },
                { label: "Banka Rehberi", old: "Yok. Müşteri kendi çözsün.", next: "Garanti, İş, Ziraat — adım adım" },
                { label: "Tetikleme Noktası", old: "Sayfa üstü banner — görmez", next: "3 noktada buton intercept" },
                { label: "Shopify Plus", old: "Checkout'a girmek için şart", next: "Gerekmez. Basic'te çalışır." },
                { label: "Kurtarılan Ciro Takibi", old: "Yok. Ne kaybettiğini bilmezsin.", next: "Gerçek zamanlı dashboard" },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-zinc-900/40 transition-colors">
                  <td className="p-6 font-medium text-white">{row.label}</td>
                  <td className="p-6 text-zinc-500 border-r border-zinc-800 line-through decoration-red-900/50">{row.old}</td>
                  <td className="p-6 text-emerald-400 font-bold bg-emerald-950/10">{row.next}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-zinc-500 italic">
            "Eğer müşteriye sadece 'kartını kontrol et' diyorsan, ona hiçbir şey söylemiyorsun."
          </p>
        </div>
      </div>
    </section>
  );
};