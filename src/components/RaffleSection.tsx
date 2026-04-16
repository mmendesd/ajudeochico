import { motion } from 'framer-motion';
import { MessageCircleMore, Ticket } from 'lucide-react';
import type { CampaignData } from '../data/campaignData';
import { formatCurrencyBRL } from '../utils/currency';
import { buildWhatsAppContactUrl } from '../utils/share';
import SectionTitle from './SectionTitle';

type RaffleSectionProps = {
  raffle: CampaignData['raffle'];
  contact: CampaignData['contact'];
};

function RaffleSection({ raffle, contact }: RaffleSectionProps) {
  const whatsappUrl = buildWhatsAppContactUrl(contact.whatsappNumber, raffle.whatsappMessage);

  return (
    <section id={raffle.id} className="py-14 sm:py-16 lg:py-20">
      <div className="section-shell">
        <div className="rounded-[32px] bg-gradient-to-br from-[#fff7ee] via-white to-[#eef5f3] px-5 py-10 shadow-soft sm:px-8 lg:px-10">
          <SectionTitle eyebrow={raffle.eyebrow} title={raffle.title} description={raffle.description} />

          <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              className="rounded-[28px] bg-ink p-6 text-white shadow-soft"
            >
              <span className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
                {raffle.badge}
              </span>
              <div className="mt-6 flex items-start gap-4">
                <span className="rounded-2xl bg-white/10 p-3 text-white">
                  <Ticket size={22} />
                </span>
                <div>
                  <p className="text-sm text-white/70">{raffle.labels.pricePerNumber}</p>
                  <p className="mt-2 text-3xl font-bold">{formatCurrencyBRL(raffle.pricePerNumber)}</p>
                </div>
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[22px] bg-white/8 p-4">
                  <p className="text-sm text-white/70">{raffle.labels.totalNumbers}</p>
                  <p className="mt-2 text-2xl font-bold">
                    {raffle.totalNumbers} {raffle.labels.totalNumbersSuffix}
                  </p>
                </div>
                <div className="rounded-[22px] bg-white/8 p-4">
                  <p className="text-sm text-white/70">{raffle.labels.drawDate}</p>
                  <p className="mt-2 text-2xl font-bold">{raffle.drawDate}</p>
                </div>
              </div>
              <p className="mt-6 text-sm leading-7 text-white/75">{raffle.note}</p>
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="button-accent mt-7 w-full sm:w-auto">
                <MessageCircleMore size={18} />
                {raffle.buttonLabel}
              </a>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-3">
              {raffle.prizes.map((prize, index) => (
                <motion.div
                  key={prize.position}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: index * 0.08 }}
                  className="card-soft p-6"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sea">{prize.position}</p>
                  <p className="mt-4 text-lg font-semibold text-ink">{prize.description}</p>
                  <p className="mt-6 font-display text-4xl text-ink">{formatCurrencyBRL(prize.value)}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RaffleSection;
