import { HeartHandshake } from 'lucide-react';

type FloatingDonateButtonProps = {
  href: string;
  label: string;
};

function FloatingDonateButton({ href, label }: FloatingDonateButtonProps) {
  return (
    <div className="fixed inset-x-4 bottom-4 z-40 md:hidden">
      <a href={href} className="button-primary w-full justify-center shadow-lift">
        <HeartHandshake size={18} />
        {label}
      </a>
    </div>
  );
}

export default FloatingDonateButton;
