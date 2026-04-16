import { motion } from 'framer-motion';
import { AlertCircle, Building2, Stethoscope } from 'lucide-react';
import type { CampaignData } from '../data/campaignData';
import SectionTitle from './SectionTitle';

type AccidentStoryProps = {
  accident: CampaignData['accident'];
  clinic: CampaignData['clinic'];
};

function AccidentStory({ accident, clinic }: AccidentStoryProps) {
  return (
    <section id={accident.id} className="py-14 sm:py-16 lg:py-20">
      <div className="section-shell">
        <div className="rounded-[32px] bg-ink px-5 py-10 text-white shadow-lift sm:px-8 sm:py-12 lg:px-10">
          <SectionTitle eyebrow={accident.eyebrow} title={accident.title} description={accident.intro} theme="dark" />

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="grid gap-4">
              {accident.facts.map((fact, index) => (
                <motion.div
                  key={fact}
                  initial={{ opacity: 0, x: -18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  className="rounded-[24px] border border-white/10 bg-white/5 p-5 backdrop-blur"
                >
                  <p className="text-base leading-7 text-white/90">{fact}</p>
                </motion.div>
              ))}
            </div>

            <div className="grid gap-5">
              <div className="rounded-[28px] border border-white/10 bg-white/6 p-6">
                <div className="flex items-start gap-4">
                  <span className="rounded-2xl bg-coral/15 p-3 text-coral">
                    <AlertCircle size={22} />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{accident.urgencyTitle}</h3>
                    <p className="mt-2 text-sm leading-7 text-white/75">{accident.urgencyText}</p>
                  </div>
                </div>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-white/6 p-6">
                <div className="flex items-start gap-4">
                  <span className="rounded-2xl bg-white/10 p-3 text-white">
                    <Building2 size={22} />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{clinic.name}</h3>
                    <p className="mt-2 text-sm leading-7 text-white/75">{clinic.description}</p>
                  </div>
                </div>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-gradient-to-br from-sea/25 to-amber/20 p-6">
                <div className="flex items-start gap-4">
                  <span className="rounded-2xl bg-white/15 p-3 text-white">
                    <Stethoscope size={22} />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{accident.supportTitle}</h3>
                    <p className="mt-2 text-sm leading-7 text-white/80">{accident.supportText}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AccidentStory;
