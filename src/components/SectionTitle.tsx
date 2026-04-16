import { motion } from 'framer-motion';

type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: 'left' | 'center';
  theme?: 'light' | 'dark';
};

function SectionTitle({ eyebrow, title, description, align = 'left', theme = 'light' }: SectionTitleProps) {
  const alignment = align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl';
  const eyebrowClass = theme === 'dark' ? 'bg-white/10 text-white border-white/10' : '';
  const titleClass = theme === 'dark' ? 'text-white' : 'text-ink';
  const descriptionClass = theme === 'dark' ? 'text-white/75' : 'text-slate';

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className={alignment}
    >
      <span className={`eyebrow ${eyebrowClass}`}>{eyebrow}</span>
      <h2 className={`mt-5 font-display text-3xl leading-tight sm:text-4xl ${titleClass}`}>{title}</h2>
      <p className={`mt-4 text-base leading-7 sm:text-lg ${descriptionClass}`}>{description}</p>
    </motion.div>
  );
}

export default SectionTitle;
