'use client';
import React, { useState } from 'react';

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-zinc-800">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left hover:text-emerald-400 transition-colors"
      >
        <span className="text-lg font-medium">{question}</span>
        <span className={`transform transition-transform ${isOpen ? 'rotate-45' : ''}`}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </span>
      </button>
      {isOpen && (
        <div className="pb-6 text-zinc-500 leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
};

export const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "Why should I use this instead of basic Shopify analytics?",
      answer: "Shopify's dashboard shows you an illusion of success. It displays gross revenue the second an order drops, entirely ignoring the 2.9% + 30¢ processing fees, delayed refunds, and precise payout schedules. Real Profit doesn't guess; we reconcile directly with the money cleared for deposit."
    },
    {
      question: "What exactly does 'Payout-Driven Reconciliation' mean?",
      answer: "Most apps assume a transaction is profitable immediately. We wait. We sync with Shopify's Payout data to ensure every chargeback, return, and hidden fee is deducted. We match your dashboard to your actual bank account. If the money isn't in your bank, it's not profit."
    },
    {
      question: "Can it handle my multi-store architecture?",
      answer: "Yes. Unlike other tools that force you to log in and out or run parallel spreadsheets, Real Profit aggregates all your entities into one global dashboard, while allowing instant drill-downs into specific stores."
    },
    {
      question: "I only do about $3,000 a month in revenue. Can I use this?",
      answer: "Currently, no. Our infrastructure and onboarding process are designed strictly for serious operators scaling $10k+ a month who are dealing with complex COGS, ad spend, and multi-store operations."
    },
    {
      question: "Is this replacing QuickBooks or Xero?",
      answer: "No. QuickBooks is for your accountant at tax time. Real Profit is the daily financial flight deck for you, the operator, to make aggressive scaling decisions based on actual cash flow today."
    }
  ];

  return (
    <section id="faq" className="py-24 px-6 bg-[#050505]">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <FAQItem key={i} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};