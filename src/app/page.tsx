import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { WhyUs } from '@/components/WhyUs';
import { Services } from '@/components/Services';
import { Testimonials } from '@/components/Testimonials';
import { CalendlySection } from '@/components/CalendlySection';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { CookieBanner } from '@/components/CookieBanner';
import { FloatingButtons } from '@/components/FloatingButtons';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <WhyUs />
        <Services />
        <Testimonials />
        <CalendlySection />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
      <CookieBanner />
    </div>
  );
}
