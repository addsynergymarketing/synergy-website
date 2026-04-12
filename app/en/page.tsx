import type { Metadata } from "next";
import HomePage from "@/components/HomePage";

export const metadata: Metadata = {
  title: "Synergy Marketing — Before marketing can scale, sales has to work",
  description:
    "Swiss quality agency for sales systems, funnels, landing pages and performance campaigns. We build systems that turn qualified enquiries into revenue, predictably.",
  alternates: {
    canonical: "https://synergymarketing.ch/en",
    languages: {
      "de-CH": "https://synergymarketing.ch/de",
      "en": "https://synergymarketing.ch/en",
    },
  },
};

export default function Page() {
  return <HomePage locale="en" />;
}
