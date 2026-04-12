import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { CONTACT } from "@/content/site";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  robots: { index: true, follow: true },
};

export default function Page() {
  return (
    <LegalLayout locale="de" title="Datenschutzerklärung">
      <p>
        Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen. In
        dieser Erklärung informieren wir Sie transparent darüber, welche
        Personendaten wir im Rahmen unserer Website und unserer Leistungen
        bearbeiten, zu welchem Zweck dies erfolgt und welche Rechte Ihnen
        zustehen. Grundlage unserer Datenbearbeitung sind das Schweizerische
        Datenschutzgesetz (DSG) sowie – soweit anwendbar – die europäische
        Datenschutz-Grundverordnung (DSGVO).
      </p>

      <h2>1. Verantwortliche Stelle</h2>
      <p>
        Synergy Marketing, Inhaber Chaled Al-Farhani, Schweiz
        <br />
        <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a> ·{" "}
        <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
      </p>

      <h2>2. Erhebung und Bearbeitung von Personendaten</h2>
      <p>
        Wir bearbeiten in erster Linie jene Personendaten, die wir von Ihnen im
        Rahmen einer Kontaktaufnahme, eines Erstgesprächs oder im Verlauf einer
        Zusammenarbeit erhalten. Dazu gehören insbesondere Name, Unternehmen,
        E-Mail-Adresse, Telefonnummer sowie Angaben, die Sie uns aktiv
        übermitteln.
      </p>

      <h2>3. Zweck der Bearbeitung</h2>
      <ul>
        <li>
          Beantwortung von Anfragen, Vorbereitung und Durchführung von
          Erstgesprächen
        </li>
        <li>
          Vertragserfüllung und Abwicklung beauftragter Projekte und Mandate
        </li>
        <li>
          Kommunikation, Projektorganisation und Rechnungsstellung
        </li>
        <li>
          Verbesserung unseres Angebots und unserer Website
        </li>
        <li>
          Erfüllung gesetzlicher Pflichten
        </li>
      </ul>

      <h2>4. Cookies und technische Daten</h2>
      <p>
        Beim Besuch dieser Website setzen wir derzeit ausschliesslich technisch
        notwendige Cookies ein. Optionale Analyse- oder Marketing-Cookies
        werden nur dann aktiviert, wenn Sie ausdrücklich einwilligen. Dazu
        verwenden wir ein Consent-Element, mit dem Sie Cookies annehmen oder
        ablehnen können. Ihre Auswahl wird lokal in Ihrem Browser gespeichert.
      </p>

      <h2>5. Tracking und Analyse</h2>
      <p>
        Aktuell setzen wir keine externen Tracking- oder Analysedienste ein.
        Sollten in Zukunft Dienste wie beispielsweise Google Analytics, Meta
        Pixel, LinkedIn Insight Tag oder ähnliche Dienste eingesetzt werden,
        erfolgt dies ausschliesslich auf Basis Ihrer Einwilligung und wird in
        dieser Erklärung entsprechend angepasst.
      </p>

      <h2>6. Kontaktformular und E-Mail-Kommunikation</h2>
      <p>
        Wenn Sie uns über das Kontaktformular oder per E-Mail erreichen, werden
        die übermittelten Angaben zur Bearbeitung Ihrer Anfrage und für den
        Fall von Anschlussfragen gespeichert. Die Daten werden nur so lange
        aufbewahrt, wie es für den jeweiligen Zweck erforderlich ist.
      </p>

      <h2>7. Weitergabe an Dritte</h2>
      <p>
        Eine Weitergabe Ihrer Daten an Dritte erfolgt nur, soweit dies für die
        Erbringung unserer Leistungen erforderlich ist, wir gesetzlich dazu
        verpflichtet sind oder Sie ausdrücklich eingewilligt haben. Bei
        Einsatz von Dienstleistern (z. B. Hosting, CRM, E-Mail-Versand) stellen
        wir sicher, dass diese die datenschutzrechtlichen Anforderungen
        einhalten.
      </p>

      <h2>8. Datensicherheit</h2>
      <p>
        Wir treffen angemessene technische und organisatorische Massnahmen,
        um Ihre Daten vor Verlust, Missbrauch und unbefugtem Zugriff zu
        schützen. Die Übermittlung der Website erfolgt verschlüsselt über
        HTTPS.
      </p>

      <h2>9. Ihre Rechte</h2>
      <p>
        Sie haben das Recht, Auskunft über die zu Ihrer Person bearbeiteten
        Daten zu verlangen, unrichtige Daten berichtigen zu lassen sowie –
        soweit gesetzlich vorgesehen – deren Löschung oder Einschränkung zu
        verlangen. Zudem können Sie einer Bearbeitung widersprechen oder eine
        erteilte Einwilligung jederzeit mit Wirkung für die Zukunft
        widerrufen.
      </p>

      <h2>10. Kontakt</h2>
      <p>
        Bei Fragen zum Datenschutz erreichen Sie uns unter{" "}
        <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>.
      </p>

      <h2>11. Änderungen</h2>
      <p>
        Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf
        anzupassen, etwa bei technischen Änderungen oder neuen gesetzlichen
        Anforderungen. Die jeweils aktuelle Version ist auf dieser Seite
        abrufbar.
      </p>
    </LegalLayout>
  );
}
