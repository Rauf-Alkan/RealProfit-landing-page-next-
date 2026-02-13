
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 border-t border-zinc-900 bg-zinc-950">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-zinc-800 rounded flex items-center justify-center font-bold text-white">RP</div>
          <span className="font-bold tracking-tight uppercase">Real Profit</span>
        </div>
        
        <div className="flex gap-8 text-sm text-zinc-500">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="mailto:support@realprofit.io" className="hover:text-white transition-colors">Contact</a>
        </div>
        
        <div className="text-sm text-zinc-600">
          © {new Date().getFullYear()} Real Profit. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
