import { motion } from 'framer-motion';
import { PawPrint } from 'lucide-react';
import type { CampaignData } from '../data/campaignData';
import SectionTitle from './SectionTitle';

type AboutChicoProps = {
  about: CampaignData['about'];
};

function AboutChico({ about }: AboutChicoProps) {
  return (
    <section id={about.id} className="py-14 sm:py-16 lg:py-20">
      <div className="section-shell">
        <SectionTitle eyebrow={about.eyebrow} title={about.title} description={about.description} />

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="grid gap-6">
            {about.paragraphs.map((paragraph, index) => (
              <motion.div
                key={paragraph}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="card-soft p-6 sm:p-7"
              >
                <p className="text-base leading-8 text-slate">{paragraph}</p>
              </motion.div>
            ))}

            <div className="card-soft p-6 sm:p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sea">{about.highlightsTitle}</p>
              <div className="mt-5 grid gap-4">
                {about.highlights.map((highlight) => (
                  <div key={highlight} className="flex items-start gap-3">
                    <span className="mt-1 rounded-full bg-sea/10 p-2 text-sea">
                      <PawPrint size={16} />
                    </span>
                    <p className="text-sm leading-7 text-slate sm:text-base">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
            {about.images.map((image, index) => (
              <motion.div
                key={image.src}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="card-soft overflow-hidden p-3"
              >
                <img src={image.src} alt={image.alt} className="aspect-[4/3] w-full rounded-[22px] object-cover" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutChico;
