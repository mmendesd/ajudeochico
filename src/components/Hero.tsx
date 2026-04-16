import { motion } from 'framer-motion';
import { ArrowRight, HeartPulse, Landmark, ShieldCheck } from 'lucide-react';
import type { CampaignData } from '../data/campaignData';
import { formatCurrencyBRL } from '../utils/currency';

type HeroProps = {
  data: CampaignData;
};

function Hero({ data }: HeroProps) {
  const progress = Math.min((data.goal.raisedAmount / data.goal.goalAmount) * 100, 100);
  const iconMap = {
    shield: ShieldCheck,
    pulse: HeartPulse,
    landmark: Landmark,
  } as const;

  return (
    <section id="topo" className="section-shell pb-14 pt-8 sm:pb-16 sm:pt-12 lg:pb-20 lg:pt-16">
      <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="order-2 lg:order-1"
        >
          <span className="eyebrow">{data.hero.eyebrow}</span>
          <h1 className="mt-6 max-w-3xl font-display text-4xl leading-tight text-ink sm:text-5xl lg:text-6xl">
            {data.hero.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate">{data.hero.subtitle}</p>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate">{data.hero.description}</p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href={data.help.vakinha.link} target="_blank" rel="noreferrer" className="button-primary">
              {data.hero.actions.donateNowLabel}
              <ArrowRight size={18} />
            </a>
            <a href={`#${data.help.id}`} className="button-accent">
              {data.hero.actions.pixLabel}
            </a>
            <a href={`#${data.about.id}`} className="button-secondary">
              {data.hero.actions.storyLabel}
            </a>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            <div className="card-soft p-4">
              <p className="text-sm font-semibold text-slate">{data.goal.labels.goal}</p>
              <p className="mt-2 text-2xl font-bold text-ink">{formatCurrencyBRL(data.goal.goalAmount)}</p>
              <p className="mt-2 text-sm leading-6 text-slate">{data.hero.cards[0].description}</p>
            </div>
            <div className="card-soft p-4">
              <p className="text-sm font-semibold text-slate">{data.goal.labels.raised}</p>
              <p className="mt-2 text-2xl font-bold text-ink">{formatCurrencyBRL(data.goal.raisedAmount)}</p>
              <p className="mt-2 text-sm leading-6 text-slate">{data.hero.cards[1].description}</p>
            </div>
            <div className="card-soft p-4">
              <p className="text-sm font-semibold text-slate">{data.hero.cards[2].label}</p>
              <p className="mt-2 text-xl font-bold text-ink">{data.clinic.name}</p>
              <p className="mt-2 text-sm leading-6 text-slate">{data.clinic.description}</p>
            </div>
          </div>

          <div className="mt-6 card-soft p-5">
            <div className="flex items-center justify-between gap-3">
              <p className="text-sm font-semibold text-slate">{data.goal.labels.progress}</p>
              <p className="text-sm font-semibold text-ink">{progress.toFixed(0)}%</p>
            </div>
            <div className="mt-3 h-3 overflow-hidden rounded-full bg-mist">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.9, delay: 0.2 }}
                className="h-full rounded-full bg-gradient-to-r from-sea to-amber"
              />
            </div>
            <p className="mt-3 text-sm leading-6 text-slate">{data.hero.trustNote}</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="order-1 lg:order-2"
        >
          <div className="relative overflow-hidden rounded-[32px] border border-white/70 bg-white p-4 shadow-lift">
            <div className="absolute inset-0 bg-glow opacity-80" />
            <img
              src={data.hero.image.src}
              alt={data.hero.image.alt}
              className="relative z-10 aspect-[4/4.2] w-full rounded-[24px] object-cover"
            />
            <div className="relative z-10 mt-4 grid gap-3 sm:grid-cols-3">
              {data.hero.trustItems.map((item) => {
                const Icon = iconMap[item.icon];

                return (
                  <div key={item.title} className="rounded-3xl bg-white/90 p-4 backdrop-blur">
                    <Icon size={20} className="text-sea" />
                    <p className="mt-3 text-sm font-semibold text-ink">{item.title}</p>
                    <p className="mt-1 text-sm leading-6 text-slate">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
