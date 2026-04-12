// Synergy Marketing — Bilingual site content (DE = Swiss High German, EN = Business English)
// Single source of truth for all page copy. Components import `content[locale]`.

export type Locale = "de" | "en";

export const CONTACT = {
  email: "hello@synergymarketing.ch",
  phone: "+41 76 393 68 92",
  phoneHref: "tel:+41763936892",
  whatsapp: "https://wa.me/41763936892",
  linkedin: "https://uk.linkedin.com/company/synergymarketingch",
  instagram: "https://www.instagram.com/synergymarketing.ch/",
  company: "Synergy Marketing",
  owner: "Chaled Al-Farhani",
  role: {
    de: "Geschäftsführer",
    en: "Managing Director",
  },
};

export const LOCALES: Locale[] = ["de", "en"];

const de = {
  nav: {
    items: [
      { href: "#leistungen", label: "Leistungen" },
      { href: "#warum-wir", label: "Warum wir" },
      { href: "#prozess", label: "Prozess" },
      { href: "#ergebnisse", label: "Ergebnisse" },
      { href: "#faq", label: "FAQ" },
    ],
    cta: "Projekt starten",
    legal: {
      impressum: { href: "/de/impressum", label: "Impressum" },
      agb: { href: "/de/agb", label: "AGB" },
      datenschutz: { href: "/de/datenschutz", label: "Datenschutz" },
    },
  },
  topBar: {
    tagline: "Ihr Partner für Sales-Systeme, Funnel und planbares Wachstum",
    contactLabel: "Schreiben Sie uns",
  },
  hero: {
    preHeadline: "Swiss Quality Agency",
    headlineA: "Bevor Marketing skaliert,",
    headlineB: "muss Vertrieb funktionieren.",
    subheadline:
      "Wir bauen Unternehmen zuerst ein sauberes Sales-System auf und skalieren danach mit Funnel, Content, Landingpages und Kampagnen. So wird aus Aufmerksamkeit ein strukturierter Prozess, der qualifizierte Anfragen planbar in Umsatz verwandelt.",
    primaryCta: "Kostenloses Erstgespräch",
    secondaryCta: "Leistungen ansehen",
    trust: "Für Unternehmen, die nicht einfach mehr Sichtbarkeit wollen, sondern ein System, das verkauft.",
  },
  trust: {
    headline: "Für ambitionierte Unternehmen, die Wachstum nicht dem Zufall überlassen.",
    pillars: [
      { k: "Vertrieb zuerst", v: "Sales-Struktur vor Skalierung" },
      { k: "System statt Aktionismus", v: "Funnel, CRM und Kampagnen verzahnt" },
      { k: "Swiss Made", v: "Klar, direkt, wirtschaftlich" },
      { k: "Messbar", v: "Reporting, Optimierung, Skalierung" },
    ],
  },
  salesLogic: {
    eyebrow: "Sales trifft Content",
    headline:
      "Content, Funnel und Kampagnen wirken erst dann richtig, wenn der Vertriebsunterbau sauber steht.",
    body:
      "Viele Unternehmen starten direkt mit Content, Ads oder einer neuen Landingpage. Das Problem: Wenn intern kein sauberer Sales-Prozess besteht, versanden Leads, Follow-ups bleiben liegen und Budget wird verbrannt. Deshalb arbeiten wir in einer klaren Reihenfolge.",
    cards: [
      {
        no: "01",
        title: "Sales-System",
        body: "CRM, Leadphasen, Follow-up-Logik, Verantwortlichkeiten, erste Automationen.",
      },
      {
        no: "02",
        title: "Funnel-System",
        body: "Positionierung, Landingpage, Creatives, Content, Angebotslogik.",
      },
      {
        no: "03",
        title: "Kampagnen & Skalierung",
        body: "Google Ads, Meta Ads, Reporting, Testing, datenbasierte Optimierung.",
      },
    ],
  },
  problem: {
    eyebrow: "Das eigentliche Problem",
    headline:
      "Viele Unternehmen investieren zu früh in Marketing und zu spät in einen sauberen Sales-Prozess.",
    lead:
      "Die meisten Probleme entstehen nicht durch fehlende Sichtbarkeit, sondern durch fehlende Struktur. Leads kommen rein, werden aber nicht sauber bearbeitet. Kampagnen laufen, aber intern fehlt der rote Faden.",
    points: [
      {
        title: "Zu viele lose Baustellen",
        body: "Website, Ads, Social, CRM und Follow-up laufen nebeneinander – aber nicht als ein System.",
      },
      {
        title: "Leads gehen verloren",
        body: "Anfragen kommen rein, werden zu langsam bearbeitet, unklar nachverfolgt oder intern nicht sauber übergeben.",
      },
      {
        title: "Marketing ohne Vertriebsbasis",
        body: "Bevor Kampagnen skalieren können, braucht es klare Prozesse, Angebote, Zuständigkeiten und sauberes Tracking.",
      },
      {
        title: "Kein klarer Wachstumspfad",
        body: "Viele arbeiten mit Einzelmassnahmen statt mit einer Logik, die von Anfrage bis Abschluss sauber aufgebaut ist.",
      },
    ],
    close: "Kommt Ihnen das bekannt vor? Dann brauchen Sie vermutlich nicht zuerst mehr Reichweite, sondern zuerst mehr Struktur.",
    cta: "Jetzt Lösung finden",
  },
  services: {
    eyebrow: "Leistungen",
    headline:
      "Nicht einfach Marketing. Sondern ein System, das Vertrieb und Wachstum verbindet.",
    lead:
      "Wir liefern keine isolierten Einzelmassnahmen, sondern eine klare Reihenfolge: zuerst Vertriebsgrundlage, dann Funnel, dann Skalierung.",
    items: [
      {
        no: "01",
        title: "Sales-System Aufbau",
        body: "Analyse des Sales-Prozesses, CRM-Setup oder -Optimierung, Leadphasen, Dealstufen, Follow-up-Logik, Terminprozess, erste Automationen.",
      },
      {
        no: "02",
        title: "Sales Funnel & Landingpages",
        body: "Positionierung, Angebotsschärfung, Funnel-Struktur, Landingpage-Konzept, Conversion-Optimierung, Call-to-Action-Logik.",
      },
      {
        no: "03",
        title: "Performance Kampagnen",
        body: "Datenbasierte Kampagnen auf Google, Meta und weiteren Kanälen – abgestimmt auf Angebot, Funnel und Zielgruppe.",
      },
      {
        no: "04",
        title: "Content & Creative",
        body: "Performance-orientierter Content und Creatives, die nicht nur gut aussehen, sondern gezielt im Funnel wirken.",
      },
      {
        no: "05",
        title: "Reporting & Skalierung",
        body: "Laufende Auswertung, Performance-Analyse, Funnel-Optimierung, Creative-Iteration und datenbasierte Skalierung.",
      },
      {
        no: "06",
        title: "Strategie & Begleitung",
        body: "Audits, Roadmaps, strategische Priorisierung und operative Begleitung mit Fokus auf Umsetzbarkeit.",
      },
    ],
  },
  whyUs: {
    eyebrow: "Warum wir",
    headline: "Wir verkaufen kein Marketing. Wir bauen Systeme, die verkaufen.",
    lead:
      "Der Unterschied liegt nicht in einzelnen Massnahmen, sondern in der Reihenfolge. Wir denken zuerst in Sales-Prozess, dann in Funnel, dann in Skalierung.",
    rows: [
      {
        us: "Wir denken zuerst in Sales-Prozess, dann in Funnel – und erst danach in Skalierung.",
        them: "Startet direkt mit Design, Ads oder Content.",
      },
      {
        us: "Wir verbinden Vertrieb, Content, Landingpages und Kampagnen zu einer klaren Logik.",
        them: "Trennt Marketing oft vom Vertrieb.",
      },
      {
        us: "Wir bauen Grundlagen, die intern nutzbar und später automatisierbar sind.",
        them: "Liefert einzelne Massnahmen statt ein Gesamtsystem.",
      },
      {
        us: "Wir fokussieren auf Struktur, Nachverfolgung und planbare Ergebnisse.",
        them: "Produziert Aktivität, aber nicht immer saubere Prozesse.",
      },
    ],
    usLabel: "Synergy Marketing",
    themLabel: "Typische Agentur",
  },
  process: {
    eyebrow: "Prozess",
    headline: "In 3 Phasen zu einem System, das Anfragen planbar in Umsatz verwandelt.",
    lead:
      "Kein Aktionismus, kein Durcheinander, kein Marketing ohne Grundlage. Wir arbeiten in einer klaren Reihenfolge, damit jeder Schritt auf dem vorherigen aufbaut.",
    phases: [
      {
        no: "01",
        title: "Sales-Prozess & Vertriebsgrundlage",
        body: "Wir analysieren den aktuellen Stand, strukturieren den Vertriebsprozess und schaffen die Basis für saubere Leadbearbeitung, Follow-up und Wachstum.",
        timing: "2 bis 4 Wochen",
      },
      {
        no: "02",
        title: "Funnel, Landingpage & Kampagnen-Setup",
        body: "Sobald die Grundlage steht, bauen wir die eigentliche Wachstumsstrecke: Positionierung, Angebotslogik, Landingpage, Creatives und Kampagnen.",
        timing: "ca. 2 bis 4 Wochen",
      },
      {
        no: "03",
        title: "Optimierung, Reporting & Skalierung",
        body: "Jetzt wird nicht mehr geraten, sondern auf Basis realer Daten verbessert. Wir analysieren, optimieren und skalieren die Massnahmen, die wirklich funktionieren.",
        timing: "fortlaufend",
      },
    ],
  },
  cases: {
    eyebrow: "Ergebnisse",
    headline: "Keine leeren Versprechen. Sondern Systeme, die messbar besser funktionieren.",
    lead:
      "Je nach Ausgangslage liegen die grössten Hebel an unterschiedlicher Stelle – mal im Sales-Prozess, mal im Funnel, mal in den Kampagnen. Entscheidend ist, dass alles sauber zusammenspielt.",
    items: [
      {
        tag: "Sales-System & Struktur",
        title: "CRM- und Follow-up-Prozess neu aufgebaut",
        body: "Leadphasen, Zuständigkeiten und Automationen so geordnet, dass keine Anfrage mehr unbemerkt liegen bleibt.",
      },
      {
        tag: "Sales Funnel & Landingpage",
        title: "Anfragen gezielter in qualifizierte Leads verwandelt",
        body: "Positionierung, Angebotslogik und Landingpage auf einen klaren Vertriebsprozess ausgerichtet.",
      },
      {
        tag: "Kampagnen & Skalierung",
        title: "Performance Schritt für Schritt verbessert",
        body: "Datenbasiertes Testing, Creative-Iteration und saubere Skalierung der Massnahmen, die wirklich funktionieren.",
      },
    ],
    close: "Ihr Projekt könnte der nächste saubere Case sein.",
    cta: "Projekt besprechen",
  },
  testimonials: {
    eyebrow: "Stimmen",
    headline: "Das sagen Unternehmen, die Struktur statt Aktionismus aufgebaut haben.",
    items: [
      {
        quote:
          "Was uns überzeugt hat, war nicht einfach Marketing, sondern die Klarheit im ganzen Prozess. Endlich hatten wir einen roten Faden von Anfrage bis Nachverfolgung.",
      },
      {
        quote:
          "Synergy hat nicht einfach Kampagnen gestartet, sondern zuerst die Basis sauber aufgebaut. Genau das hat später den Unterschied gemacht.",
      },
      {
        quote:
          "Besonders stark war die Verbindung aus Sales-Struktur, Funnel-Denken und operativer Umsetzung. Das Ganze fühlte sich endlich wie ein System an.",
      },
    ],
  },
  tools: {
    eyebrow: "Tools & Systeme",
    headline: "Entscheidend ist nicht das Tool. Entscheidend ist, wie alles zusammenspielt.",
    body:
      "Wir arbeiten mit den Systemen, die für saubere Prozesse, Funnel und Wachstum relevant sind. Ein gutes System entsteht nicht durch Software allein, sondern durch die richtige Struktur dahinter.",
    list: [
      "HubSpot",
      "Google Ads",
      "Meta Ads",
      "LinkedIn",
      "Shopify",
      "WordPress",
      "Analytics",
      "Tracking & Tag Management",
      "CRM-Systeme",
      "Automationen",
      "KI-gestützte Prozesse",
      "Reporting-Dashboards",
    ],
  },
  founder: {
    eyebrow: "Geschäftsführung",
    headline: "Struktur ist Chefsache.",
    body:
      "Ich baue für unsere Kunden nicht einfach Kampagnen. Ich übernehme Verantwortung für die Reihenfolge, in der Sales, Funnel und Skalierung ineinandergreifen. Das ist der Unterschied zwischen Aktivität und messbarem Wachstum.",
    signature: "Chaled Al-Farhani",
    role: "Geschäftsführer, Synergy Marketing",
    imageAlt: "Chaled Al-Farhani, Geschäftsführer von Synergy Marketing",
  },
  faq: {
    eyebrow: "FAQ",
    headline: "Klare Antworten auf die häufigsten Fragen.",
    items: [
      {
        q: "Was macht Synergy Marketing konkret?",
        a: "Wir bauen zuerst die vertriebliche Grundlage eines Unternehmens auf und skalieren danach mit Funnel, Landingpages, Content und Kampagnen. Ziel ist ein System, das qualifizierte Anfragen planbar in Umsatz verwandelt.",
      },
      {
        q: "Startet ihr immer zuerst mit Marketing?",
        a: "Nein. Wenn der Sales-Prozess intern noch nicht sauber steht, starten wir in der Regel zuerst mit der Vertriebsgrundlage. Erst danach macht es Sinn, Kampagnen und Funnel in die Breite zu ziehen.",
      },
      {
        q: "Für wen ist das Angebot geeignet?",
        a: "Vor allem für Unternehmen, die bereits ein solides Angebot haben, aber ihre Neukundengewinnung strukturierter, planbarer und skalierbarer aufbauen möchten.",
      },
      {
        q: "Bietet ihr nur Beratung oder setzt ihr auch um?",
        a: "Wir begleiten nicht nur strategisch, sondern setzen je nach Bedarf auch operativ um – von der Sales-Struktur über Landingpages bis hin zu Kampagnen und Optimierung.",
      },
      {
        q: "Wie läuft der Start ab?",
        a: "Im Erstgespräch schauen wir uns Angebot, Sales-Prozess, Funnel und Marketing an. Sie erhalten anschliessend eine klare Empfehlung zur sinnvollsten Reihenfolge.",
      },
      {
        q: "Was kostet ein Projekt bei euch?",
        a: "Das hängt davon ab, ob zuerst die Vertriebsgrundlage, ein Funnel oder direkt eine grössere Wachstumsstrecke aufgebaut wird. Den konkreten Rahmen klären wir im Erstgespräch.",
      },
    ],
  },
  finalCta: {
    eyebrow: "Nächster Schritt",
    headline: "Wenn Sie Wachstum nicht dem Zufall überlassen wollen, sollten wir sprechen.",
    body:
      "Ob zuerst Sales-Struktur, Funnel oder Kampagnen der richtige Hebel ist, hängt von Ihrer aktuellen Situation ab. Wir helfen Ihnen, die richtige Reihenfolge zu finden – und daraus ein System zu bauen, das funktioniert.",
    primary: "Kostenloses Erstgespräch buchen",
    secondary: "Projekt anfragen",
  },
  workshop: {
    eyebrow: "Wachstums-Intensivworkshop",
    badge: "Risikofrei",
    headline: "Ihr Wachstumsfahrplan – in 4 Stunden gemeinsam erarbeitet.",
    price: "690 CHF",
    priceNote: "einmalig, exkl. MwSt. — voll anrechenbar",
    body:
      "In einem intensiven 4-Stunden-Workshop gehen wir gemeinsam eng und strukturiert durch die drei Dimensionen, die über Ihr Wachstum entscheiden: die Vergangenheit Ihres Unternehmens, den ehrlichen Status quo und das konkrete Zielbild für die Zukunft. Das Ergebnis: eine dokumentierte Situationsanalyse und ein klarer, priorisierter Projektplan, den Sie unmittelbar umsetzen können – mit oder ohne uns.",
    highlights: [
      "Vergangenheit — was hat bisher funktioniert, was nicht und warum",
      "Status quo — ehrliche Analyse von Angebot, Sales-Prozess, Funnel und Marketing",
      "Zukunft — klares Zielbild, priorisierte Hebel, realistischer Zeitplan",
      "Dokumentierter Wachstumsfahrplan mit konkreten nächsten Schritten",
    ],
    credit:
      "Entscheiden Sie sich anschliessend für eine Zusammenarbeit, werden die vollen 690 CHF vom Projekthonorar abgezogen. Sie zahlen also effektiv nichts – und gehen in jedem Fall mit einem fertigen Fahrplan nach Hause.",
    cta: "Wachstumsfahrplan sichern",
  },
  contactForm: {
    eyebrow: "Projektanfrage",
    headline: "Lassen Sie uns über Ihr Wachstum sprechen.",
    fields: {
      name: "Name",
      company: "Unternehmen",
      email: "E-Mail",
      phone: "Telefon (optional)",
      message: "Worum geht es?",
      submit: "Anfrage senden",
      placeholderMessage: "Kurz Ihre Ausgangslage: aktuelles Angebot, Sales-Prozess, wichtigste Frage.",
    },
    privacyNote: "Mit dem Absenden stimmen Sie unserer Datenschutzerklärung zu.",
    successTitle: "Danke, Ihre Anfrage ist bei uns.",
    successBody: "Wir melden uns innerhalb eines Werktags persönlich zurück.",
  },
  footer: {
    tagline: "Sales-Systeme, Funnel und Wachstum mit Struktur.",
    navTitle: "Navigation",
    legalTitle: "Rechtliches",
    contactTitle: "Kontakt",
    socialTitle: "Social",
    copyright: "© {year} Synergy Marketing. Alle Rechte vorbehalten.",
  },
  whatsapp: {
    label: "WhatsApp",
    aria: "Schreiben Sie uns auf WhatsApp",
  },
  cookie: {
    title: "Cookies & Datenschutz",
    body:
      "Wir setzen aktuell nur technisch notwendige Cookies ein. Optionale Analyse- und Marketing-Cookies werden erst nach Ihrer Zustimmung aktiv.",
    accept: "Alle akzeptieren",
    decline: "Nur notwendige",
    more: "Mehr erfahren",
  },
};

const en = {
  nav: {
    items: [
      { href: "#services", label: "Services" },
      { href: "#why-us", label: "Why us" },
      { href: "#process", label: "Process" },
      { href: "#results", label: "Results" },
      { href: "#faq", label: "FAQ" },
    ],
    cta: "Start a project",
    legal: {
      impressum: { href: "/en/imprint", label: "Imprint" },
      agb: { href: "/en/terms", label: "Terms" },
      datenschutz: { href: "/en/privacy", label: "Privacy" },
    },
  },
  topBar: {
    tagline: "Your partner for sales systems, funnels and predictable growth",
    contactLabel: "Get in touch",
  },
  hero: {
    preHeadline: "Swiss Quality Agency",
    headlineA: "Before marketing can scale,",
    headlineB: "sales has to work.",
    subheadline:
      "We build the sales foundation first — CRM, lead handling, follow-up, offer logic — then we scale with funnels, content, landing pages and campaigns. The result: a structured process that turns attention into qualified pipeline, predictably.",
    primaryCta: "Book a free intro call",
    secondaryCta: "See what we do",
    trust: "Built for companies that don't want more visibility — they want a system that sells.",
  },
  trust: {
    headline: "For ambitious companies that don't leave growth to chance.",
    pillars: [
      { k: "Sales first", v: "Foundation before scale" },
      { k: "System, not noise", v: "Funnel, CRM and campaigns in sync" },
      { k: "Swiss Made", v: "Clear, direct, commercial" },
      { k: "Measurable", v: "Reporting, optimisation, scaling" },
    ],
  },
  salesLogic: {
    eyebrow: "Sales meets content",
    headline:
      "Content, funnels and campaigns only perform once the sales foundation is in place.",
    body:
      "Most companies jump straight into content, ads or a new landing page. The problem: if the internal sales process isn't tight, leads stall, follow-ups slip and budget burns. That's why we work in a deliberate order.",
    cards: [
      {
        no: "01",
        title: "Sales system",
        body: "CRM, lead stages, follow-up logic, ownership, first automations.",
      },
      {
        no: "02",
        title: "Funnel system",
        body: "Positioning, landing page, creatives, content, offer architecture.",
      },
      {
        no: "03",
        title: "Campaigns & scale",
        body: "Google Ads, Meta Ads, reporting, testing, data-driven optimisation.",
      },
    ],
  },
  problem: {
    eyebrow: "The real problem",
    headline:
      "Most companies invest in marketing too early and in a clean sales process too late.",
    lead:
      "The real bottleneck usually isn't visibility — it's structure. Leads come in but aren't handled cleanly. Campaigns run, but internally there's no connecting thread.",
    points: [
      {
        title: "Too many disconnected efforts",
        body: "Website, ads, social, CRM and follow-up run side by side — but not as one system.",
      },
      {
        title: "Leads slip through",
        body: "Enquiries come in but get handled too slowly, tracked unclearly or handed over without structure.",
      },
      {
        title: "Marketing without a sales base",
        body: "Before campaigns can scale, you need clean processes, offers, ownership and reliable tracking.",
      },
      {
        title: "No clear growth path",
        body: "Too many teams run individual tactics instead of one logic that carries a lead from first touch to close.",
      },
    ],
    close: "Sound familiar? Then what you need isn't more reach — it's more structure.",
    cta: "Find your fix",
  },
  services: {
    eyebrow: "What we do",
    headline: "Not just marketing. A system that connects sales and growth.",
    lead:
      "We don't deliver isolated tactics. We work in a clear order: sales foundation first, then funnel, then scale.",
    items: [
      {
        no: "01",
        title: "Sales system build",
        body: "Sales process audit, CRM setup or optimisation, lead stages, deal stages, follow-up logic, booking flow, first automations.",
      },
      {
        no: "02",
        title: "Sales funnels & landing pages",
        body: "Positioning, offer sharpening, funnel architecture, landing page concept, conversion optimisation, CTA logic.",
      },
      {
        no: "03",
        title: "Performance campaigns",
        body: "Data-driven campaigns on Google, Meta and beyond — aligned with offer, funnel and audience.",
      },
      {
        no: "04",
        title: "Content & creative",
        body: "Performance-led content and creative that doesn't just look good — it earns its place in the funnel.",
      },
      {
        no: "05",
        title: "Reporting & scaling",
        body: "Continuous analysis, funnel optimisation, creative iteration and data-driven scaling of what actually works.",
      },
      {
        no: "06",
        title: "Strategy & advisory",
        body: "Audits, roadmaps, strategic prioritisation and hands-on advisory focused on execution.",
      },
    ],
  },
  whyUs: {
    eyebrow: "Why us",
    headline: "We don't sell marketing. We build systems that sell.",
    lead:
      "The difference isn't in individual tactics — it's in the order of operations. Sales process first, then funnel, then scale.",
    rows: [
      {
        us: "We think sales process first, funnel second, scale third.",
        them: "Starts with design, ads or content.",
      },
      {
        us: "We connect sales, content, landing pages and campaigns into one clear logic.",
        them: "Keeps marketing and sales in separate lanes.",
      },
      {
        us: "We build foundations you can run internally and automate later.",
        them: "Delivers tactics instead of a system.",
      },
      {
        us: "We focus on structure, follow-through and predictable outcomes.",
        them: "Produces activity, not always process.",
      },
    ],
    usLabel: "Synergy Marketing",
    themLabel: "Typical agency",
  },
  process: {
    eyebrow: "Process",
    headline: "Three phases to a system that turns enquiries into revenue, predictably.",
    lead:
      "No busywork, no improvisation, no marketing without a base. We work in a clear order so every step builds on the one before.",
    phases: [
      {
        no: "01",
        title: "Sales process & foundation",
        body: "We audit the current state, structure the sales process and lay the groundwork for clean lead handling, follow-up and growth.",
        timing: "2 to 4 weeks",
      },
      {
        no: "02",
        title: "Funnel, landing page & campaign setup",
        body: "Once the foundation holds, we build the actual growth engine: positioning, offer logic, landing page, creatives and campaigns.",
        timing: "approx. 2 to 4 weeks",
      },
      {
        no: "03",
        title: "Optimisation, reporting & scale",
        body: "Now we stop guessing and start improving on real data. We analyse, optimise and scale what actually works.",
        timing: "ongoing",
      },
    ],
  },
  cases: {
    eyebrow: "Results",
    headline: "No empty promises. Systems that measurably perform better.",
    lead:
      "Depending on the starting point, the biggest lever sits in a different place — sometimes sales, sometimes funnel, sometimes campaigns. What matters is that all the pieces work together.",
    items: [
      {
        tag: "Sales system & structure",
        title: "CRM and follow-up process rebuilt from the ground up",
        body: "Lead stages, ownership and automations aligned so that no enquiry falls through unnoticed.",
      },
      {
        tag: "Sales funnel & landing page",
        title: "Enquiries turned into qualified leads — on purpose",
        body: "Positioning, offer logic and landing page aligned with a clear sales process end-to-end.",
      },
      {
        tag: "Campaigns & scale",
        title: "Performance improved step by step",
        body: "Data-driven testing, creative iteration and clean scaling of what actually moves the pipeline.",
      },
    ],
    close: "Your project could be the next clean case.",
    cta: "Discuss your project",
  },
  testimonials: {
    eyebrow: "Client voices",
    headline: "What clients say after trading noise for structure.",
    items: [
      {
        quote:
          "What convinced us wasn't the marketing itself — it was the clarity across the whole process. We finally had one thread from first enquiry to follow-up.",
      },
      {
        quote:
          "Synergy didn't just launch campaigns. They built the foundation first. That's exactly what made the difference later.",
      },
      {
        quote:
          "The real strength was the combination of sales structure, funnel thinking and hands-on execution. For the first time it actually felt like a system.",
      },
    ],
  },
  tools: {
    eyebrow: "Tools & systems",
    headline: "The tool isn't what matters. How everything fits together is.",
    body:
      "We work with the systems that matter for clean processes, funnels and growth. A good system doesn't come from software alone — it comes from the structure behind it.",
    list: [
      "HubSpot",
      "Google Ads",
      "Meta Ads",
      "LinkedIn",
      "Shopify",
      "WordPress",
      "Analytics",
      "Tracking & tag management",
      "CRM systems",
      "Automations",
      "AI-assisted workflows",
      "Reporting dashboards",
    ],
  },
  founder: {
    eyebrow: "Founder",
    headline: "Structure starts at the top.",
    body:
      "For our clients I don't just build campaigns. I take ownership of the order in which sales, funnel and scale fit together. That's the difference between activity and measurable growth.",
    signature: "Chaled Al-Farhani",
    role: "Managing Director, Synergy Marketing",
    imageAlt: "Chaled Al-Farhani, Managing Director of Synergy Marketing",
  },
  faq: {
    eyebrow: "FAQ",
    headline: "Straight answers to the questions we hear most.",
    items: [
      {
        q: "What does Synergy Marketing actually do?",
        a: "We build the sales foundation of a company first, then scale with funnels, landing pages, content and campaigns. The goal is a system that turns qualified enquiries into revenue, predictably.",
      },
      {
        q: "Do you always start with marketing?",
        a: "No. If the internal sales process isn't solid yet, we usually start with the sales foundation. Only then does it make sense to scale campaigns and funnels.",
      },
      {
        q: "Who is this for?",
        a: "Primarily for companies that already have a strong offer but want their new-business engine to be more structured, predictable and scalable.",
      },
      {
        q: "Are you consulting only, or do you also execute?",
        a: "Both. We advise strategically and — where it makes sense — execute operationally: from sales structure through to landing pages, campaigns and optimisation.",
      },
      {
        q: "How does it start?",
        a: "In a first call we look at the offer, sales process, funnel and marketing. You get a clear recommendation on the most effective order to move in.",
      },
      {
        q: "What does a project cost?",
        a: "It depends on whether we start with the sales foundation, a funnel build or a larger growth track. We agree the concrete scope in the first call.",
      },
    ],
  },
  finalCta: {
    eyebrow: "Next step",
    headline: "If growth isn't something you want to leave to chance, we should talk.",
    body:
      "Whether sales structure, funnel or campaigns are the right lever first depends on where you stand today. We'll help you find the right order — and build a system that actually works.",
    primary: "Book a free intro call",
    secondary: "Submit a project",
  },
  workshop: {
    eyebrow: "Growth intensive",
    badge: "Risk-free",
    headline: "Your growth roadmap — built with you in 4 hours.",
    price: "CHF 690",
    priceNote: "one-off, excl. VAT — fully credited",
    body:
      "In one intensive 4-hour workshop we work through the three dimensions that decide whether a company scales: where you've come from, where you honestly stand today, and where you want to go. You leave with a documented situation analysis and a clear, prioritised project plan you can put to work immediately — with or without us.",
    highlights: [
      "Past — what has worked, what hasn't, and why",
      "Status quo — honest review of offer, sales process, funnel and marketing",
      "Future — clear target picture, prioritised levers, realistic timeline",
      "Documented growth roadmap with concrete next steps",
    ],
    credit:
      "If you decide to work with us afterwards, the full CHF 690 are credited against the project investment. So effectively you pay nothing — and either way you walk away with a finished roadmap.",
    cta: "Secure my growth roadmap",
  },
  contactForm: {
    eyebrow: "Project enquiry",
    headline: "Let's talk about your growth.",
    fields: {
      name: "Name",
      company: "Company",
      email: "Email",
      phone: "Phone (optional)",
      message: "What's this about?",
      submit: "Send enquiry",
      placeholderMessage: "A short note on where you stand: current offer, sales process, main question.",
    },
    privacyNote: "By submitting you agree to our privacy policy.",
    successTitle: "Thanks — your enquiry is with us.",
    successBody: "We'll get back to you personally within one business day.",
  },
  footer: {
    tagline: "Sales systems, funnels and growth — with structure.",
    navTitle: "Navigation",
    legalTitle: "Legal",
    contactTitle: "Contact",
    socialTitle: "Social",
    copyright: "© {year} Synergy Marketing. All rights reserved.",
  },
  whatsapp: {
    label: "WhatsApp",
    aria: "Message us on WhatsApp",
  },
  cookie: {
    title: "Cookies & privacy",
    body:
      "We only set technically necessary cookies right now. Optional analytics and marketing cookies will only activate with your consent.",
    accept: "Accept all",
    decline: "Essential only",
    more: "Learn more",
  },
};

export const content = { de, en } as const;
export type Content = (typeof content)[Locale];
