// src/components/EarlyAccessForm.tsx
'use client'; // Next.js etkileşim için bunu ister
import React, { useState } from 'react';

export const EarlyAccessForm: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/early-access', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };
  return (
    <section id="early-access" className="py-24 px-6 bg-[#050505]">
      <div className="max-w-xl mx-auto">
        <div className="p-8 md:p-12 rounded-3xl border border-emerald-500/20 bg-emerald-500/[0.02] relative overflow-hidden">
          {/* Accent decoration */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-emerald-500/10 blur-[60px] rounded-full"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Join the Early Access List</h2>
            <p className="text-zinc-400 text-center mb-8 leading-relaxed">
              Real Profit is currently in invitation-only development. Early users get priority access and a direct line to our roadmap.
            </p>

            {status === 'success' ? (
              <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 p-6 rounded-2xl text-center">
                <h3 className="font-bold text-xl mb-2">You're on the list!</h3>
                <p>We'll reach out as soon as a spot opens up for your brand.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-5 py-4 bg-zinc-900 border border-zinc-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all text-white placeholder:text-zinc-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">Shopify Email</label>
                  <input
                    type="email"
                    required
                    placeholder="john@yourstore.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-5 py-4 bg-zinc-900 border border-zinc-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all text-white placeholder:text-zinc-600"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full py-4 bg-emerald-500 hover:bg-emerald-400 disabled:opacity-50 disabled:cursor-not-allowed text-black font-bold text-lg rounded-xl transition-all shadow-lg"
                >
                  {status === 'loading' ? 'Requesting...' : 'Request Early Access'}
                </button>
                <p className="text-center text-xs text-zinc-500 mt-4">
                  No spam. Only critical product updates. Limited spots available.
                </p>
              </form>
            )}
            
            {status === 'error' && (
              <p className="text-red-500 text-sm mt-4 text-center">Something went wrong. Please try again.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
