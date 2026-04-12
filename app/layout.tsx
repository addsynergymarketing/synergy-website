import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const powerGrotesk = localFont({
  src: "../public/fonts/PowerGrotesk-Regular.ttf",
  variable: "--font-display",
  display: "swap",
  weight: "400 700",
  preload: true,
});

const nunito = localFont({
  src: "../public/fonts/Nunito-VariableFont_wght.ttf",
  variable: "--font-sans",
  display: "swap",
  weight: "200 900",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://synergymarketing.ch"),
  title: {
    default: "Synergy Marketing — Sales-Systeme, Funnel und planbares Wachstum",
    template: "%s · Synergy Marketing",
  },
  description:
    "Bevor Marketing skaliert, muss Vertrieb funktionieren. Wir bauen Sales-Systeme, Funnel und Kampagnen, die qualifizierte Anfragen planbar in Umsatz verwandeln.",
  keywords: [
    "Sales System",
    "B2B Marketing Schweiz",
    "Funnel Agentur",
    "Landingpage",
    "Performance Marketing",
    "HubSpot",
    "CRM",
    "Leadgenerierung",
    "Marketing Agentur Zürich",
    "Swiss Marketing Agency",
  ],
  authors: [{ name: "Synergy Marketing" }],
  creator: "Synergy Marketing",
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: [{ url: "/favicon.png" }],
  },
  openGraph: {
    type: "website",
    locale: "de_CH",
    alternateLocale: ["en_US"],
    url: "https://synergymarketing.ch",
    siteName: "Synergy Marketing",
    title: "Synergy Marketing — Sales-Systeme, Funnel und planbares Wachstum",
    description:
      "Bevor Marketing skaliert, muss Vertrieb funktionieren. Wir bauen Systeme, die qualifizierte Anfragen planbar in Umsatz verwandeln.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Synergy Marketing" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Synergy Marketing — Sales-Systeme, Funnel und planbares Wachstum",
    description:
      "Bevor Marketing skaliert, muss Vertrieb funktionieren. Systeme, die planbar verkaufen.",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: {
    canonical: "https://synergymarketing.ch/de",
    languages: {
      "de-CH": "https://synergymarketing.ch/de",
      "en": "https://synergymarketing.ch/en",
    },
  },
};

export const viewport = {
  themeColor: "#020103",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      className={`${powerGrotesk.variable} ${nunito.variable}`}
      suppressHydrationWarning
    >
      <body>{children}</body>
    </html>
  );
}
