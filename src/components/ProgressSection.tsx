import { motion } from 'framer-motion';
import type { CampaignData } from '../data/campaignData';
import { formatCurrencyBRL } from '../utils/currency';
import SectionTitle from './SectionTitle';

type ProgressSectionProps = {
  goal: CampaignData['goal'];
};

function ProgressSection({ goal }: ProgressSectionProps) {
  const progress = Math.min((goal.raisedAmount / goal.goalAmount) * 100, 100);

  const summaryCards = [
    { label: goal.labels.goal, value: goal.goalAmount },
    { label: goal.labels.raised, value: goal.raisedAmount },
    { label: goal.labels.remaining, value: goal.remainingAmount },
  ];

  return (
    <section id={goal.id} className="py-14 sm:py-16 lg:py-20">
      <div className="section-shell">
        <div className="card-soft p-6 sm:p-8 lg:p-10">
          <SectionTitle eyebrow={goal.eyebrow} title={goal.title} description={goal.description} />

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {summaryCards.map((card, index) => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="rounded-[24px] bg-cloud p-5"
              >
                <p className="text-sm font-semibold text-slate">{card.label}</p>
                <p className="mt-3 text-3xl font-bold text-ink">{formatCurrencyBRL(card.value)}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 rounded-[28px] bg-ink p-6 sm:p-7">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">{goal.labels.progress}</p>
                <p className="mt-3 font-display text-4xl text-white sm:text-5xl">{progress.toFixed(0)}%</p>
              </div>
              <p className="max-w-xl text-sm leading-7 text-white/75">{goal.note}</p>
            </div>

            <div className="mt-6 h-4 overflow-hidden rounded-full bg-white/10">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${progress}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="h-full rounded-full bg-gradient-to-r from-amber via-[#e5b06f] to-sea"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProgressSection;
