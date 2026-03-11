'use client';
import React from 'react';

export const Navigation: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800/50 bg-[#050505]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-emerald-500 rounded flex items-center justify-center font-bold text-black text-xs">DS</div>
          <span className="font-bold text-xl tracking-tight uppercase">DeclineShield</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          <a href="#problem" className="hover:text-white transition-colors">Problem</a>
          <a href="#how-it-works" className="hover:text-white transition-colors">Nasıl Çalışır</a>
          <a href="#features" className="hover:text-white transition-colors">Özellikler</a>
          <a href="#faq" className="hover:text-white transition-colors">SSS</a>
        </div>
        <a
          href="#early-access"
          className="px-5 py-2 bg-emerald-500 hover:bg-emerald-400 text-black text-sm font-bold rounded-full transition-all"
        >
          Hemen Kur
        </a>
      </div>
    </nav>
  );
};