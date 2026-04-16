import { motion } from 'framer-motion';
import type { CampaignData } from '../data/campaignData';
import SectionTitle from './SectionTitle';

type UpdatesSectionProps = {
  updates: CampaignData['updates'];
};

function UpdatesSection({ updates }: UpdatesSectionProps) {
  return (
    <section id={updates.id} className="py-14 sm:py-16 lg:py-20">
      <div className="section-shell">
        <SectionTitle
          eyebrow={updates.eyebrow}
          title={updates.title}
          description={updates.description}
          align="center"
        />

        <div className="relative mt-10 grid gap-5">
          <div className="absolute left-4 top-0 hidden h-full w-px bg-ink/10 sm:block" />
          {updates.items.map((item, index) => (
            <motion.article
              key={`${item.date}-${item.title}`}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="relative sm:pl-14"
            >
              <span className="absolute left-0 top-6 hidden h-8 w-8 rounded-full border-4 border-cloud bg-sea sm:block" />
              <div className="card-soft p-6">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sea">{item.tag}</p>
                    <h3 className="mt-2 text-xl font-semibold text-ink">{item.title}</h3>
                  </div>
                  <p className="text-sm font-medium text-slate">{item.date}</p>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate sm:text-base">{item.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default UpdatesSection;
