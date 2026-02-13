// src/app/page.tsx
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { Problem } from '@/components/Problem';
import { HowItWorks } from '@/components/HowItWorks';
import { Features } from '@/components/Features';
import { Comparison } from '@/components/Comparison';
import { Vision } from '@/components/Vision';
import { EarlyAccessForm } from '@/components/EarlyAccessForm';
import { FAQ } from '@/components/FAQ';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505] overflow-x-hidden text-white">
      <Navigation />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <Features />
        <Comparison />
        <Vision />
        <EarlyAccessForm />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}