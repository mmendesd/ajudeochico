import { AnimatePresence, motion } from 'framer-motion';
import { Check, Copy, ExternalLink, QrCode, Wallet } from 'lucide-react';
import { useState } from 'react';
import type { CampaignData } from '../data/campaignData';
import { copyTextToClipboard } from '../utils/clipboard';
import { buildWhatsAppContactUrl } from '../utils/share';
import SectionTitle from './SectionTitle';

type HelpSectionProps = {
  help: CampaignData['help'];
  contact: CampaignData['contact'];
  labels: CampaignData['labels'];
};

function HelpSection({ help, contact, labels }: HelpSectionProps) {
  const [copyStatus, setCopyStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const whatsappUrl = buildWhatsAppContactUrl(contact.whatsappNumber, help.whatsappMessage);

  const handlePixCopy = async () => {
    const success = await copyTextToClipboard(help.pix.key);
    setCopyStatus(success ? 'success' : 'error');

    window.setTimeout(() => {
      setCopyStatus('idle');
    }, 2200);
  };

  return (
    <section id={help.id} className="py-14 sm:py-16 lg:py-20">
      <div className="section-shell">
        <SectionTitle eyebrow={help.eyebrow} title={help.title} description={help.description} align="center" />

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            className="card-soft p-6 sm:p-7"
          >
            <span className="inline-flex rounded-full bg-amber/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-amber">
              {help.vakinha.badge}
            </span>
            <div className="mt-5 flex items-start gap-4">
              <span className="rounded-2xl bg-amber/10 p-3 text-amber">
                <Wallet size={22} />
              </span>
              <div>
                <h3 className="text-2xl font-semibold text-ink">{help.vakinha.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate">{help.vakinha.description}</p>
              </div>
            </div>
            <a
              href={help.vakinha.link}
              target="_blank"
              rel="noreferrer"
              className="button-primary mt-8 w-full sm:w-auto"
            >
              {help.vakinha.buttonLabel}
              <ExternalLink size={16} />
            </a>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ delay: 0.08 }}
            className="card-soft p-6 sm:p-7"
          >
            <span className="inline-flex rounded-full bg-sea/12 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sea">
              {help.pix.badge}
            </span>
            <div className="mt-5 flex items-start gap-4">
              <span className="rounded-2xl bg-sea/10 p-3 text-sea">
                <QrCode size={22} />
              </span>
              <div>
                <h3 className="text-2xl font-semibold text-ink">{help.pix.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate">{help.pix.description}</p>
              </div>
            </div>

            <div className="mt-7 grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="rounded-[24px] bg-cloud p-5">
                <p className="text-sm font-semibold text-slate">{help.pix.keyLabel}</p>
                <p className="mt-3 break-all text-lg font-bold text-ink">{help.pix.key}</p>
                <button type="button" onClick={handlePixCopy} className="button-accent mt-5 w-full sm:w-auto">
                  {copyStatus === 'success' ? <Check size={16} /> : <Copy size={16} />}
                  {copyStatus === 'success' ? help.pix.copiedLabel : help.pix.copyLabel}
                </button>
                <AnimatePresence>
                  {copyStatus !== 'idle' ? (
                    <motion.p
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      className={`mt-3 text-sm font-medium ${copyStatus === 'success' ? 'text-sea' : 'text-coral'}`}
                    >
                      {copyStatus === 'success' ? labels.pixCopied : labels.pixUnavailable}
                    </motion.p>
                  ) : null}
                </AnimatePresence>
              </div>

              <div className="rounded-[24px] border border-black/5 bg-white p-4">
                <p className="text-sm font-semibold text-slate">{help.pix.qrCodeLabel}</p>
                <img src={help.pix.qrCode} alt={help.pix.qrCodeAlt} className="mt-3 w-full rounded-[20px]" />
                <p className="mt-3 text-sm leading-6 text-slate">{help.pix.note}</p>
              </div>
            </div>
          </motion.article>
        </div>

        <div className="mt-6 card-soft p-5 sm:p-6">
          <p className="text-sm leading-7 text-slate">{help.whatsappPrompt}</p>
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="button-secondary mt-4">
            {help.whatsappButtonLabel}
          </a>
        </div>
      </div>
    </section>
  );
}

export default HelpSection;
