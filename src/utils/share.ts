export const getCampaignUrl = (campaignUrl: string) => campaignUrl;

export const buildWhatsAppShareUrl = (message: string, url: string) => {
  const content = `${message} ${url}`;
  return `https://wa.me/?text=${encodeURIComponent(content)}`;
};

export const buildWhatsAppContactUrl = (phoneNumber: string, message: string) =>
  `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
