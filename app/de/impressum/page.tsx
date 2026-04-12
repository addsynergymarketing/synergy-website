import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { CONTACT } from "@/content/site";

export const metadata: Metadata = {
  title: "Impressum",
  robots: { index: true, follow: true },
};

export default function Page() {
  return (
    <LegalLayout locale="de" title="Impressum">
      <p>
        Angaben gemäss den Informationspflichten für Dienstanbieter in der
        Schweiz.
      </p>

      <h2>Unternehmen</h2>
      <p>
        <strong>Synergy Marketing</strong>
        <br />
        Inhaber: Chaled Al-Farhani
        <br />
        Schweiz
      </p>

      <h2>Kontakt</h2>
      <p>
        E-Mail: <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
        <br />
        Telefon: <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
        <br />
        WhatsApp: <a href={CONTACT.whatsapp} target="_blank" rel="noopener">wa.me/41763936892</a>
      </p>

      <h2>Vertretungsberechtigte Person</h2>
      <p>Chaled Al-Farhani, Geschäftsführer</p>

      <h2>Haftungsausschluss</h2>
      <p>
        Die Inhalte dieser Website werden mit grösstmöglicher Sorgfalt erstellt.
        Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann
        jedoch keine Gewähr übernommen werden. Die Nutzung dieser Website
        erfolgt auf eigene Gefahr. Haftungsansprüche gegen den Anbieter wegen
        Schäden materieller oder immaterieller Art, die aus dem Zugriff, der
        Nutzung oder Nichtnutzung der Inhalte entstehen, sind ausgeschlossen,
        sofern kein nachweislich vorsätzliches oder grob fahrlässiges
        Verschulden vorliegt.
      </p>

      <h2>Haftung für Links</h2>
      <p>
        Verweise und Links auf Websites Dritter liegen ausserhalb unseres
        Verantwortungsbereichs. Ein Zugriff auf solche Seiten erfolgt
        ausschliesslich auf eigene Verantwortung des Nutzers. Für den Inhalt
        verlinkter externer Seiten sind ausschliesslich deren Betreiber
        verantwortlich.
      </p>

      <h2>Urheberrecht</h2>
      <p>
        Die Urheber- und alle weiteren Rechte an Inhalten, Bildern, Fotos und
        sonstigen Dateien auf dieser Website gehören ausschliesslich Synergy
        Marketing oder den speziell genannten Rechteinhabern. Für die
        Reproduktion jeglicher Elemente ist die schriftliche Zustimmung des
        Rechteinhabers im Voraus einzuholen.
      </p>

      <h2>Geltendes Recht und Gerichtsstand</h2>
      <p>
        Auf Streitigkeiten im Zusammenhang mit dieser Website ist
        ausschliesslich schweizerisches Recht anwendbar. Gerichtsstand ist der
        Sitz des Unternehmens in der Schweiz.
      </p>
    </LegalLayout>
  );
}
