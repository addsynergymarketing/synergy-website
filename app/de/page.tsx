import type { Metadata } from "next";
import HomePage from "@/components/HomePage";

export const metadata: Metadata = {
  title: "Synergy Marketing — Bevor Marketing skaliert, muss Vertrieb funktionieren",
  description:
    "Swiss Quality Agency für Sales-Systeme, Funnel, Landingpages und Performance-Kampagnen. Wir bauen Systeme, die qualifizierte Anfragen planbar in Umsatz verwandeln.",
  alternates: {
    canonical: "https://synergymarketing.ch/de",
    languages: {
      "de-CH": "https://synergymarketing.ch/de",
      "en": "https://synergymarketing.ch/en",
    },
  },
};

export default function Page() {
  return <HomePage locale="de" />;
}
