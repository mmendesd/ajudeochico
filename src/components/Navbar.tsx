import { AnimatePresence, motion } from 'framer-motion';
import { HeartHandshake, Menu, X } from 'lucide-react';
import { useState } from 'react';
import type { CampaignData, NavigationLink } from '../data/campaignData';

type NavbarProps = {
  brand: CampaignData['brand'];
  links: NavigationLink[];
  donateLabel: string;
  labels: CampaignData['labels'];
};

function Navbar({ brand, links, donateLabel, labels }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-paper/80 backdrop-blur-xl">
      <nav className="section-shell flex h-20 items-center justify-between gap-4" aria-label={labels.navigationAriaLabel}>
        <a href="#topo" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-ink text-white shadow-soft">
            <HeartHandshake size={20} />
          </span>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sea">{brand.badge}</p>
            <p className="font-display text-2xl text-ink">{brand.name}</p>
          </div>
        </a>

        <div className="hidden items-center gap-2 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-slate transition hover:bg-white hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
            >
              {link.label}
            </a>
          ))}
          <a href="#ajudar" className="button-primary ml-2">
            {donateLabel}
          </a>
        </div>

        <button
          type="button"
          aria-expanded={isOpen}
          aria-label={isOpen ? labels.closeMenuAriaLabel : labels.menuAriaLabel}
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-black/5 bg-white text-ink shadow-soft transition hover:bg-mist focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink lg:hidden"
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="border-t border-black/5 bg-paper lg:hidden"
          >
            <div className="section-shell flex flex-col gap-2 py-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-2xl px-4 py-3 text-sm font-semibold text-ink transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              ))}
              <a href="#ajudar" className="button-primary mt-2 w-full" onClick={closeMenu}>
                {donateLabel}
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
