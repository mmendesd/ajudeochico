import { AnimatePresence, motion } from 'framer-motion';
import { Check, Copy, MessageCircleHeart } from 'lucide-react';
import { useState } from 'react';
import type { CampaignData } from '../data/campaignData';
import { copyTextToClipboard } from '../utils/clipboard';
import { buildWhatsAppShareUrl, getCampaignUrl } from '../utils/share';
import SectionTitle from './SectionTitle';

type ShareSectionProps = {
  share: CampaignData['share'];
  contact: CampaignData['contact'];
  labels: CampaignData['labels'];
};

function ShareSection({ share, contact, labels }: ShareSectionProps) {
  const [copyStatus, setCopyStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const campaignUrl = getCampaignUrl(contact.campaignUrl);
  const whatsappUrl = buildWhatsAppShareUrl(share.message, campaignUrl);

  const handleCopy = async () => {
    const success = await copyTextToClipboard(campaignUrl);
    setCopyStatus(success ? 'success' : 'error');

    window.setTimeout(() => {
      setCopyStatus('idle');
    }, 2200);
  };

  return (
    <section className="py-14 sm:py-16 lg:py-20">
      <div className="section-shell">
        <div className="card-soft overflow-hidden">
          <div className="bg-gradient-to-r from-ink via-[#214150] to-sea px-6 py-10 sm:px-8 lg:px-10">
            <SectionTitle eyebrow={share.eyebrow} title={share.title} description={share.description} theme="dark" />

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="button-accent">
                <MessageCircleHeart size={18} />
                {share.whatsappButtonLabel}
              </a>
              <button type="button" onClick={handleCopy} className="button-secondary border-white/10 bg-white text-ink">
                {copyStatus === 'success' ? <Check size={18} /> : <Copy size={18} />}
                {copyStatus === 'success' ? share.copiedLabel : share.copyLinkButtonLabel}
              </button>
            </div>

            <AnimatePresence>
              {copyStatus !== 'idle' ? (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  className="mt-4 text-sm font-medium text-white"
                >
                  {copyStatus === 'success' ? labels.linkCopied : labels.linkUnavailable}
                </motion.p>
              ) : null}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShareSection;
