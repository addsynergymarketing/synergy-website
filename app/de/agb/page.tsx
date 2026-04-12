import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { CONTACT } from "@/content/site";

export const metadata: Metadata = {
  title: "Allgemeine Geschäftsbedingungen",
  robots: { index: true, follow: true },
};

export default function Page() {
  return (
    <LegalLayout locale="de" title="Allgemeine Geschäftsbedingungen">
      <p>
        Die nachfolgenden Allgemeinen Geschäftsbedingungen (nachfolgend „AGB“)
        gelten für alle Verträge, Leistungen und Angebote zwischen Synergy
        Marketing, Inhaber Chaled Al-Farhani (nachfolgend „Auftragnehmer“), und
        ihren Kundinnen und Kunden (nachfolgend „Auftraggeber“).
      </p>

      <h2>1. Geltungsbereich</h2>
      <p>
        Diese AGB gelten für sämtliche Leistungen des Auftragnehmers, darunter
        Beratung, Konzeption, Aufbau von Sales-Systemen, Funnel-Strategien,
        Landingpages, Performance-Kampagnen, Content- und Creative-Produktion,
        Reporting sowie laufende strategische oder operative Begleitung.
        Abweichende Bedingungen des Auftraggebers werden nur anerkannt, soweit
        ihnen der Auftragnehmer schriftlich zugestimmt hat.
      </p>

      <h2>2. Vertragsabschluss</h2>
      <p>
        Angebote des Auftragnehmers sind freibleibend. Ein Vertrag kommt
        zustande, sobald der Auftraggeber ein schriftliches oder digitales
        Angebot bestätigt oder der Auftragnehmer eine Auftragsbestätigung
        versendet. Änderungen und Nebenabreden bedürfen zu ihrer Wirksamkeit
        der schriftlichen oder digitalen Bestätigung beider Parteien.
      </p>

      <h2>3. Leistungsumfang</h2>
      <p>
        Der Leistungsumfang ergibt sich aus dem jeweiligen Angebot, der
        Auftragsbestätigung oder einem separaten Leistungsbeschrieb. Soweit
        nicht ausdrücklich anders vereinbart, schuldet der Auftragnehmer kein
        bestimmtes wirtschaftliches Ergebnis, sondern eine fachgerechte
        Erbringung der vereinbarten Leistungen nach den anerkannten Regeln
        der Branche.
      </p>

      <h2>4. Mitwirkungspflichten des Auftraggebers</h2>
      <p>
        Der Auftraggeber stellt alle zur Leistungserbringung erforderlichen
        Unterlagen, Informationen, Zugänge und Inhalte rechtzeitig und in
        verwertbarer Form zur Verfügung. Verzögerungen, die aus
        unvollständigen, fehlerhaften oder verspäteten Zulieferungen
        resultieren, gehen nicht zulasten des Auftragnehmers.
      </p>

      <h2>5. Honorar und Zahlungsbedingungen</h2>
      <p>
        Die Vergütung richtet sich nach dem Angebot beziehungsweise der
        individuellen Vereinbarung. Soweit nicht anders vereinbart, werden
        Leistungen in Teilschritten oder monatlich in Rechnung gestellt.
        Rechnungen sind innert 14 Tagen ab Rechnungsdatum ohne Abzug zahlbar.
        Ab dem 15. Tag nach Fälligkeit gerät der Auftraggeber ohne Mahnung
        in Verzug.
      </p>

      <h2>6. Drittkosten</h2>
      <p>
        Externe Kosten wie Werbebudgets, Software-Lizenzen, Tools oder
        Medienleistungen sind vom Auftraggeber zu tragen und werden ohne
        Aufschlag weiterverrechnet, sofern nichts anderes vereinbart wurde.
      </p>

      <h2>7. Laufzeit und Kündigung</h2>
      <p>
        Projektbezogene Aufträge enden mit der vollständigen Erbringung der
        vereinbarten Leistung. Laufende Mandate können von beiden Parteien
        schriftlich unter Einhaltung einer Kündigungsfrist von 30 Tagen auf
        das Monatsende gekündigt werden, sofern nichts Abweichendes
        vereinbart wurde. Das Recht zur ausserordentlichen Kündigung aus
        wichtigem Grund bleibt vorbehalten.
      </p>

      <h2>8. Nutzungsrechte</h2>
      <p>
        Mit vollständiger Bezahlung erhält der Auftraggeber die zur
        vertraglich vereinbarten Nutzung erforderlichen Rechte an den im
        Rahmen des Auftrags gelieferten Arbeitsergebnissen. Konzepte,
        Methoden, Vorlagen und interne Arbeitsunterlagen verbleiben im
        Eigentum des Auftragnehmers.
      </p>

      <h2>9. Vertraulichkeit</h2>
      <p>
        Beide Parteien verpflichten sich, alle im Rahmen der Zusammenarbeit
        zugänglich gemachten vertraulichen Informationen sorgfältig zu
        behandeln und nicht an Dritte weiterzugeben. Diese Pflicht besteht
        auch nach Beendigung des Vertragsverhältnisses fort.
      </p>

      <h2>10. Haftung</h2>
      <p>
        Der Auftragnehmer haftet für Schäden nur bei Vorsatz oder grober
        Fahrlässigkeit. Eine Haftung für entgangenen Gewinn, indirekte Schäden
        oder Folgeschäden ist, soweit gesetzlich zulässig, ausgeschlossen.
      </p>

      <h2>11. Datenschutz</h2>
      <p>
        Die Parteien halten sich an die anwendbaren Datenschutzvorschriften.
        Weitere Informationen zur Datenbearbeitung finden sich in der
        Datenschutzerklärung des Auftragnehmers.
      </p>

      <h2>12. Schlussbestimmungen</h2>
      <p>
        Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden,
        so berührt dies die Wirksamkeit der übrigen Bestimmungen nicht.
        Anwendbar ist ausschliesslich schweizerisches Recht. Gerichtsstand
        für alle Streitigkeiten ist der Sitz des Auftragnehmers in der
        Schweiz.
      </p>

      <h2>Kontakt</h2>
      <p>
        Synergy Marketing · Chaled Al-Farhani ·{" "}
        <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a> ·{" "}
        <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
      </p>
    </LegalLayout>
  );
}
