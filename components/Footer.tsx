import Link from "next/link";
import Image from "next/image";
import { content, type Locale, CONTACT } from "@/content/site";
import { Linkedin, Instagram, WhatsAppIcon } from "./Icons";

export default function Footer({ locale }: { locale: Locale }) {
  const t = content[locale].footer;
  const nav = content[locale].nav;
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-ink-900 pt-16 pb-10">
      <div className="container-tight">
        <div className="grid md:grid-cols-12 gap-10 mb-12">
          <div className="md:col-span-5">
            <Link href={`/${locale}`} className="inline-flex items-center gap-3 mb-5">
              <Image src="/logo-white.png" alt="Synergy Marketing" width={180} height={40} className="h-8 w-auto" />
            </Link>
            <p className="text-white/55 max-w-xs leading-relaxed text-sm">{t.tagline}</p>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-xs uppercase tracking-[0.18em] text-white/40 mb-4">{t.navTitle}</h4>
            <ul className="space-y-2.5 text-sm">
              {nav.items.map((i) => (
                <li key={i.href}>
                  <a href={i.href} className="text-white/70 hover:text-white transition-colors">{i.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-xs uppercase tracking-[0.18em] text-white/40 mb-4">{t.legalTitle}</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href={nav.legal.impressum.href} className="text-white/70 hover:text-white transition-colors">{nav.legal.impressum.label}</Link></li>
              <li><Link href={nav.legal.agb.href} className="text-white/70 hover:text-white transition-colors">{nav.legal.agb.label}</Link></li>
              <li><Link href={nav.legal.datenschutz.href} className="text-white/70 hover:text-white transition-colors">{nav.legal.datenschutz.label}</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.18em] text-white/40 mb-4">{t.contactTitle}</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href={`mailto:${CONTACT.email}`} className="text-white/70 hover:text-white transition-colors">{CONTACT.email}</a></li>
              <li><a href={CONTACT.phoneHref} className="text-white/70 hover:text-white transition-colors">{CONTACT.phone}</a></li>
              <li><a href={CONTACT.whatsapp} target="_blank" rel="noopener" className="text-white/70 hover:text-white transition-colors">WhatsApp</a></li>
            </ul>
            <div className="flex items-center gap-3 mt-5">
              <a href={CONTACT.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn" className="h-9 w-9 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:border-white/30 hover:text-white transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href={CONTACT.instagram} target="_blank" rel="noopener" aria-label="Instagram" className="h-9 w-9 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:border-white/30 hover:text-white transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href={CONTACT.whatsapp} target="_blank" rel="noopener" aria-label="WhatsApp" className="h-9 w-9 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:border-white/30 hover:text-white transition-colors">
                <WhatsAppIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="divider-gradient mb-6" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <p>{t.copyright.replace("{year}", String(year))}</p>
          <p>{CONTACT.company} · {CONTACT.owner}</p>
        </div>
      </div>
    </footer>
  );
}
