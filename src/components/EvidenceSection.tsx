import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import type { CampaignData } from '../data/campaignData';
import SectionTitle from './SectionTitle';

type EvidenceSectionProps = {
  evidence: CampaignData['evidence'];
};

function EvidenceSection({ evidence }: EvidenceSectionProps) {
  return (
    <section id={evidence.id} className="py-14 sm:py-16 lg:py-20">
      <div className="section-shell">
        <SectionTitle
          eyebrow={evidence.eyebrow}
          title={evidence.title}
          description={evidence.description}
          align="center"
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {evidence.items.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="card-soft overflow-hidden"
            >
              <img src={item.image} alt={item.alt} className="aspect-[16/10] w-full object-cover" />
              <div className="p-6">
                <span className="inline-flex rounded-full bg-sea/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sea">
                  {item.tag}
                </span>
                <h3 className="mt-4 text-xl font-semibold text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate">{item.description}</p>
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="button-secondary mt-5"
                    aria-label={`${item.actionLabel} ${item.title}`}
                  >
                    {item.actionLabel}
                    <ExternalLink size={16} />
                  </a>
                ) : null}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EvidenceSection;
