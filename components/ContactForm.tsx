"use client";
import { useState } from "react";
import { content, type Locale, CONTACT } from "@/content/site";
import { ArrowRight } from "./Icons";

export default function ContactForm({ locale }: { locale: Locale }) {
  const t = content[locale].contactForm;
  const tFinal = content[locale].finalCta;
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "err">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      // Formsubmit.co — activate by sending a first message, then confirming via email.
      const res = await fetch(
        `https://formsubmit.co/ajax/${CONTACT.email}`,
        {
          method: "POST",
          headers: { Accept: "application/json" },
          body: data,
        }
      );
      if (res.ok) {
        setStatus("ok");
        form.reset();
      } else {
        setStatus("err");
      }
    } catch {
      setStatus("err");
    }
  }

  return (
    <section id="kontakt" className="section relative overflow-hidden">
      <div
        className="absolute -left-40 top-20 h-[440px] w-[440px] rounded-full opacity-25 blur-3xl"
        style={{ background: "radial-gradient(circle, #854CFF, transparent 70%)" }}
        aria-hidden
      />
      <div className="container-tight relative grid lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="eyebrow mb-4"><span className="h-px w-8 bg-white/30" />{tFinal.eyebrow}</div>
          <h2 className="text-display-lg font-semibold text-white mb-6">{tFinal.headline}</h2>
          <p className="text-white/65 leading-relaxed mb-8">{tFinal.body}</p>

          <div className="space-y-3 text-sm">
            <a
              href={`mailto:${CONTACT.email}`}
              className="flex items-center gap-3 text-white/80 hover:text-white transition-colors"
            >
              <span className="h-8 w-8 rounded-full border border-white/15 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.75"><rect x="2.5" y="4.5" width="19" height="15" rx="2.5" /><path d="m3 6 9 7 9-7" /></svg>
              </span>
              {CONTACT.email}
            </a>
            <a
              href={CONTACT.phoneHref}
              className="flex items-center gap-3 text-white/80 hover:text-white transition-colors"
            >
              <span className="h-8 w-8 rounded-full border border-white/15 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </span>
              {CONTACT.phone}
            </a>
          </div>
        </div>

        <div className="lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-10 backdrop-blur-sm"
          >
            <input type="hidden" name="_subject" value={`Neue Projektanfrage — Synergy Marketing (${locale.toUpperCase()})`} />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

            {status === "ok" ? (
              <div className="py-8 text-center">
                <h3 className="text-2xl font-display font-semibold text-white mb-3">{t.successTitle}</h3>
                <p className="text-white/65">{t.successBody}</p>
              </div>
            ) : (
              <>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <Field name="name" label={t.fields.name} required />
                  <Field name="company" label={t.fields.company} />
                </div>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <Field name="email" label={t.fields.email} type="email" required />
                  <Field name="phone" label={t.fields.phone} type="tel" />
                </div>
                <label className="block mb-5">
                  <span className="block text-xs uppercase tracking-wide text-white/55 mb-2">{t.fields.message}</span>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    placeholder={t.fields.placeholderMessage}
                    className="w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-white placeholder:text-white/30 focus:border-accent-blue focus:outline-none focus:ring-2 focus:ring-accent-blue/30 transition-all"
                  />
                </label>

                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="btn-primary w-full md:w-auto disabled:opacity-50"
                  >
                    {status === "sending" ? "…" : t.fields.submit} <ArrowRight className="h-4 w-4" />
                  </button>
                  <p className="text-xs text-white/45 leading-relaxed">{t.privacyNote}</p>
                </div>
                {status === "err" && (
                  <p className="mt-3 text-sm text-red-400">
                    {locale === "de"
                      ? "Es gab ein Problem beim Senden. Bitte schreiben Sie uns direkt an hello@synergymarketing.ch."
                      : "Something went wrong. Please email us directly at hello@synergymarketing.ch."}
                  </p>
                )}
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  name,
  label,
  type = "text",
  required = false,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="block text-xs uppercase tracking-wide text-white/55 mb-2">
        {label}
        {required && <span className="text-accent-blue">*</span>}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-white placeholder:text-white/30 focus:border-accent-blue focus:outline-none focus:ring-2 focus:ring-accent-blue/30 transition-all"
      />
    </label>
  );
}
