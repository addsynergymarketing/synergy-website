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
import FAQ from "./FAQ";
import ContactForm from "./ContactForm";
import Footer from "./Footer";
import WhatsAppSticky from "./WhatsAppSticky";
import CookieBanner from "./CookieBanner";
import JsonLd from "./JsonLd";

export default function HomePage({ locale }: { locale: Locale }) {
  return (
    <>
      <TopBar locale={locale} />
      <Navigation locale={locale} />
      <main>
        <Hero locale={locale} />
        <TrustStrip locale={locale} />
        <SalesLogic locale={locale} />
        <Problem locale={locale} />
        <Services locale={locale} />
        <WhyUs locale={locale} />
        <Process locale={locale} />
        <Cases locale={locale} />
        <Testimonials locale={locale} />
        <Tools locale={locale} />
        <Founder locale={locale} />
        <FAQ locale={locale} />
        <ContactForm locale={locale} />
      </main>
      <Footer locale={locale} />
      <WhatsAppSticky locale={locale} />
      <CookieBanner locale={locale} />
      <JsonLd locale={locale} />
    </>
  );
}
