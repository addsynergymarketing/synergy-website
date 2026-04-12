import Link from "next/link";
import type { Locale } from "@/content/site";
import TopBar from "./TopBar";
import Navigation from "./Navigation";
import Footer from "./Footer";
import WhatsAppSticky from "./WhatsAppSticky";
import CookieBanner from "./CookieBanner";

export default function LegalLayout({
  locale,
  title,
  children,
}: {
  locale: Locale;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <TopBar locale={locale} />
      <Navigation locale={locale} />
      <main className="pt-16 pb-24">
        <div className="container-tight max-w-3xl">
          <Link
            href={`/${locale}`}
            className="text-sm text-white/55 hover:text-white transition-colors inline-flex items-center gap-1.5 mb-8"
          >
            ← {locale === "de" ? "Zurück zur Startseite" : "Back to home"}
          </Link>
          <h1 className="text-display-md font-semibold text-white mb-10">{title}</h1>
          <div className="prose prose-invert max-w-none text-white/75 leading-relaxed space-y-6 [&_h2]:text-white [&_h2]:font-display [&_h2]:font-semibold [&_h2]:text-xl [&_h2]:mt-10 [&_h2]:mb-3 [&_h3]:text-white [&_h3]:font-display [&_h3]:font-semibold [&_h3]:text-base [&_h3]:mt-6 [&_h3]:mb-2 [&_p]:text-[15px] [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5 [&_a]:text-accent-blue [&_a]:underline">
            {children}
          </div>
        </div>
      </main>
      <Footer locale={locale} />
      <WhatsAppSticky locale={locale} />
      <CookieBanner locale={locale} />
    </>
  );
}
