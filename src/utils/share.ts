export const getCurrentCampaignUrl = (fallbackUrl: string) =>
  typeof window !== 'undefined' ? window.location.href : fallbackUrl;

export const buildWhatsAppShareUrl = (message: string, url: string) => {
  const content = `${message}\n\n${url}`;
  return `https://wa.me/?text=${encodeURIComponent(content)}`;
};

export const buildWhatsAppContactUrl = (phoneNumber: string, message: string) =>
  `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
