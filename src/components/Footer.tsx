import { Instagram, MessageCircleMore } from 'lucide-react';
import type { CampaignData } from '../data/campaignData';
import { buildWhatsAppContactUrl } from '../utils/share';

type FooterProps = {
  footer: CampaignData['footer'];
  contact: CampaignData['contact'];
};

function Footer({ footer, contact }: FooterProps) {
  const whatsappUrl = buildWhatsAppContactUrl(contact.whatsappNumber, footer.whatsappMessage);

  return (
    <footer className="pb-24 pt-8 md:pb-10">
      <div className="section-shell">
        <div className="rounded-[32px] bg-ink px-6 py-8 text-white shadow-lift sm:px-8 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/60">{footer.eyebrow}</p>
              <h2 className="mt-4 font-display text-3xl text-white">{contact.tutorName}</h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/75">{footer.thankYouMessage}</p>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/75">{footer.finalMessage}</p>
            </div>

            <div className="grid gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-[24px] border border-white/10 bg-white/5 p-5 transition hover:bg-white/10"
              >
                <div className="flex items-center gap-3">
                  <MessageCircleMore size={18} />
                  <span className="text-sm font-semibold uppercase tracking-[0.16em] text-white/65">{footer.whatsappLabel}</span>
                </div>
                <p className="mt-3 text-xl font-semibold text-white">{contact.whatsappDisplay}</p>
              </a>

              <a
                href={contact.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-[24px] border border-white/10 bg-white/5 p-5 transition hover:bg-white/10"
              >
                <div className="flex items-center gap-3">
                  <Instagram size={18} />
                  <span className="text-sm font-semibold uppercase tracking-[0.16em] text-white/65">{footer.instagramLabel}</span>
                </div>
                <p className="mt-3 text-xl font-semibold text-white">{contact.instagramHandle}</p>
              </a>
            </div>
          </div>

          <div className="mt-8 border-t border-white/10 pt-6">
            <p className="text-sm leading-7 text-white/70">{footer.transparencyNote}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
