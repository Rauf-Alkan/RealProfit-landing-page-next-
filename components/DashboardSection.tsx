import React from 'react';

export const DashboardSection: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-[#050505] border-t border-zinc-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Her Şey Gözünün Önünde.</h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Kaç müşteri uyarıldı, kaçı devam etti, kaç TL kurtarıldı — gerçek zamanlı.
          </p>
        </div>

        {/* 3 stat cards */}
        <div className="grid grid-cols-3 gap-6 mb-10 max-w-3xl mx-auto">
          {[
            { val: "$9,035", label: "Tahmini Kurtarılan Ciro", color: "text-emerald-400" },
            { val: "5", label: "Kurtarılan Sepet", color: "text-blue-400" },
            { val: "10", label: "Kalkan Gösterimi", color: "text-purple-400" },
          ].map((stat, i) => (
            <div key={i} className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 text-center">
              <div className={`text-3xl font-extrabold mb-1 ${stat.color}`}>{stat.val}</div>
              <div className="text-xs text-zinc-500 leading-tight">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Dashboard screenshot — replace src with your actual path */}
        <div className="rounded-2xl border border-zinc-800 overflow-hidden shadow-[0_0_60px_rgba(0,128,96,0.08)]">
          <div className="px-5 py-3 border-b border-zinc-800 bg-zinc-900/80 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/60"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/60"></div>
            <div className="w-3 h-3 rounded-full bg-emerald-500/60"></div>
            <span className="text-xs text-zinc-500 ml-2">DeclineShield — Kontrol Paneli</span>
          </div>
          <img
            src="/screenshots/dashboard.png"
            alt="DeclineShield Dashboard"
            className="w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};