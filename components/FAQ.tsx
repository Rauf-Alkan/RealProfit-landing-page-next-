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
      question: "How is this different from Shopify analytics?",
      answer: "Shopify shows you orders and revenue, often including tax and excluding many processing fees. Real Profit connects to your Payouts data, matching costs precisely to the moment money is cleared for deposit. We also provide a unified view for multiple stores, which Shopify lacks."
    },
    {
      question: "Does this replace accounting software?",
      answer: "No. Think of Real Profit as your daily flight deck. While accounting software like QuickBooks is for your tax compliance, Real Profit is for your daily decision-making as an operator."
    },
    {
      question: "Is this built for multi-store brands?",
      answer: "Absolutely. Multi-store architecture is at our core. You can aggregate all stores into one dashboard or drill into specific entities without logging in and out."
    },
    {
      question: "How does payout-based profit calculation work?",
      answer: "Instead of assuming a transaction is successful the moment an order is placed, we wait for the Shopify Payout sync. This ensures that every refund, chargeback, and processing fee is accounted for accurately before we report a 'Net Profit' number."
    },
    {
      question: "When will early access begin?",
      answer: "We are rolling out spots weekly to ensure high-touch support for our initial cohort. Typically, users receive an invitation within 2-4 weeks of joining the waitlist."
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
