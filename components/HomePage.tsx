import type { Locale } from "@/content/site";
import TopBar from "./TopBar";
import Navigation from "./Navigation";
import Hero from "./Hero";
import TrustStrip from "./TrustStrip";
import SalesLogic from "./SalesLogic";
import Problem from "./Problem";
import Services from "./Services";
import WhyUs from "./WhyUs";
import Process from "./Process";
import Cases from "./Cases";
import Testimonials from "./Testimonials";
import Tools from "./Tools";
import Founder from "./Founder";
import Workshop from "./Workshop";
import FAQ from "./FAQ";
import ContactForm from "./ContactForm";
import Footer from "./Footer";
import WhatsAppSticky from "./WhatsAppSticky";
import CookieBanner from "./CookieBanner";
import JsonLd from "./JsonLd";
import RevealInit from "./RevealInit";

// Small helper that wraps a section in a reveal-on-scroll container.
function Reveal({ children }: { children: React.ReactNode }) {
  return <div data-reveal>{children}</div>;
}

export default function HomePage({ locale }: { locale: Locale }) {
  return (
    <>
      <TopBar locale={locale} />
      <Navigation locale={locale} />
      <main>
        <Hero locale={locale} />
        <Reveal>
          <TrustStrip locale={locale} />
        </Reveal>
        <Reveal>
          <SalesLogic locale={locale} />
        </Reveal>
        <Reveal>
          <Problem locale={locale} />
        </Reveal>
        <Reveal>
          <Services locale={locale} />
        </Reveal>
        <Reveal>
          <WhyUs locale={locale} />
        </Reveal>
        <Reveal>
          <Process locale={locale} />
        </Reveal>
        <Reveal>
          <Cases locale={locale} />
        </Reveal>
        <Workshop locale={locale} />
        <Reveal>
          <Testimonials locale={locale} />
        </Reveal>
        <Reveal>
          <Tools locale={locale} />
        </Reveal>
        <Reveal>
          <Founder locale={locale} />
        </Reveal>
        <Reveal>
          <FAQ locale={locale} />
        </Reveal>
        <Reveal>
          <ContactForm locale={locale} />
        </Reveal>
      </main>
      <Footer locale={locale} />
      <WhatsAppSticky locale={locale} />
      <CookieBanner locale={locale} />
      <JsonLd locale={locale} />
      <RevealInit />
    </>
  );
}
