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
        <div className="pb-6 text-zinc-500 leading-relaxed">{answer}</div>
      )}
    </div>
  );
};

export const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "Shopify Plus aboneliğim yok, çalışır mı?",
      answer: "Evet. DeclineShield checkout sayfasına girmiyor — buton intercept yöntemiyle çalışıyor. Bu yüzden Basic, Advanced veya herhangi bir Shopify planında sorunsuz çalışır. Plus aboneliğine gerek yok."
    },
    {
      question: "Sadece Türk müşterilere mi gösteriyor?",
      answer: "Varsayılan olarak evet. Türkiye lokasyonundan gelen ziyaretçilere gösterir, diğer ülkelerden gelenlere dokunmaz. Test modu ile tüm ziyaretçilere gösterebilirsin."
    },
    {
      question: "Müşteri popup'ı görünce kaçmaz mı?",
      answer: "Tam tersi — müşteri neden ödeme yapamadığını anlar ve çözümünü bulur. Sessiz bir red karşısında sayfayı terk eden müşteri, adım adım rehber gördüğünde kalmayı tercih eder. Test verilerimiz bunu gösteriyor."
    },
    {
      question: "Kaç bankayı destekliyor?",
      answer: "Şu an Garanti BBVA, İş Bankası ve Ziraat Bankası destekleniyor. Halkbank, Yapı Kredi, Akbank yakında eklenecek. Hindistan için de destek geliyor."
    },
    {
      question: "Fiyatlandırma nasıl?",
      answer: "$9.99/ay sabit abonelik. İstediğin zaman iptal edebilirsin. Tek bir kurtarılan satış bile aylık ücreti karşılar."
    },
    {
      question: "Rakipler var mı, neden sizi seçmeliyim?",
      answer: "Genel checkout abandon araçları var ama hiçbiri Türkiye'deki banka kartı sorununu özelinde çözemiyor. Rakamlar, banka bazında rehber, Türkçe destek — bunlar genel araçlarda yok."
    }
  ];

  return (
    <section id="faq" className="py-24 px-6 bg-[#050505]">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Sık Sorulan Sorular</h2>
        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <FAQItem key={i} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};