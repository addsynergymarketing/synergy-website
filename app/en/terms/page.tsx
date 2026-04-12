import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { CONTACT } from "@/content/site";

export const metadata: Metadata = { title: "Terms" };

export default function Page() {
  return (
    <LegalLayout locale="en" title="Terms & Conditions">
      <p>
        The legally binding version of our terms & conditions is the German one
        (<a href="/de/agb">AGB</a>). The summary below is provided for convenience.
      </p>

      <h2>1. Scope</h2>
      <p>
        These terms apply to all services provided by Synergy Marketing, owner
        Chaled Al-Farhani, including consulting, sales-system build, funnel and
        landing-page work, performance campaigns, content and creative, reporting
        and ongoing advisory.
      </p>

      <h2>2. Contract</h2>
      <p>
        Offers are non-binding. A contract is concluded once the client confirms an
        offer in writing or digitally, or once Synergy Marketing issues an order
        confirmation. Changes require confirmation by both parties.
      </p>

      <h2>3. Scope of services</h2>
      <p>
        The scope of work is defined in the respective offer or statement of work.
        Unless explicitly agreed otherwise, the provider owes professional execution
        of the agreed services, not a specific commercial outcome.
      </p>

      <h2>4. Client cooperation</h2>
      <p>
        The client provides all necessary information, access and content in due
        time. Delays resulting from incomplete or late deliverables are not the
        provider's responsibility.
      </p>

      <h2>5. Fees and payment</h2>
      <p>
        Fees are invoiced in milestones or monthly instalments. Invoices are payable
        within 14 days of the invoice date, net.
      </p>

      <h2>6. Third-party costs</h2>
      <p>
        External costs (ad spend, tools, licences, media) are borne by the client and
        passed through without surcharge unless otherwise agreed.
      </p>

      <h2>7. Term and termination</h2>
      <p>
        Project work ends on delivery. Ongoing retainers can be terminated by either
        party in writing with 30 days' notice to month-end, unless otherwise agreed.
      </p>

      <h2>8. Rights of use</h2>
      <p>
        Upon full payment, the client receives the usage rights necessary for the
        agreed use of the delivered results. Concepts, methods and internal working
        documents remain the intellectual property of the provider.
      </p>

      <h2>9. Confidentiality</h2>
      <p>
        Both parties treat confidential information with care and do not pass it on
        to third parties. This obligation continues after the contract ends.
      </p>

      <h2>10. Liability</h2>
      <p>
        Liability is limited to intent and gross negligence. Liability for lost
        profits, indirect or consequential damages is excluded as far as legally
        permissible.
      </p>

      <h2>11. Governing law</h2>
      <p>
        Swiss law applies exclusively. Place of jurisdiction is the registered seat
        of the provider in Switzerland.
      </p>

      <h2>Contact</h2>
      <p>
        Synergy Marketing · Chaled Al-Farhani ·{" "}
        <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a> ·{" "}
        <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
      </p>
    </LegalLayout>
  );
}
