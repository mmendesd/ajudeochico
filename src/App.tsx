import { useEffect } from 'react';
import AboutChico from './components/AboutChico';
import AccidentStory from './components/AccidentStory';
import EvidenceSection from './components/EvidenceSection';
import FloatingDonateButton from './components/FloatingDonateButton';
import Footer from './components/Footer';
import HelpSection from './components/HelpSection';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import ProgressSection from './components/ProgressSection';
import RaffleSection from './components/RaffleSection';
import ShareSection from './components/ShareSection';
import UpdatesSection from './components/UpdatesSection';
import { campaignData } from './data/campaignData';

const updateMetaTag = (selector: string, value: string) => {
  const tag = document.querySelector<HTMLMetaElement>(selector);

  if (tag) {
    tag.setAttribute('content', value);
  }
};

function App() {
  useEffect(() => {
    document.title = campaignData.seo.title;
    updateMetaTag('meta[name="description"]', campaignData.seo.description);
    updateMetaTag('meta[property="og:title"]', campaignData.seo.title);
    updateMetaTag('meta[property="og:description"]', campaignData.seo.description);
    updateMetaTag('meta[property="og:image"]', campaignData.seo.ogImage);
    updateMetaTag('meta[property="og:url"]', campaignData.seo.url);
  }, []);

  return (
    <div className="page-shell">
      <Navbar
        brand={campaignData.brand}
        labels={campaignData.labels}
        links={campaignData.navigation}
        donateLabel={campaignData.hero.actions.donateNowLabel}
      />

      <main>
        <Hero data={campaignData} />
        <AboutChico about={campaignData.about} />
        <AccidentStory accident={campaignData.accident} clinic={campaignData.clinic} />
        <EvidenceSection evidence={campaignData.evidence} />
        <ProgressSection goal={campaignData.goal} />
        <HelpSection help={campaignData.help} contact={campaignData.contact} labels={campaignData.labels} />
        <RaffleSection raffle={campaignData.raffle} contact={campaignData.contact} />
        <UpdatesSection updates={campaignData.updates} />
        <ShareSection share={campaignData.share} contact={campaignData.contact} labels={campaignData.labels} />
      </main>

      <Footer footer={campaignData.footer} contact={campaignData.contact} />
      <FloatingDonateButton label={campaignData.hero.actions.donateNowLabel} href={`#${campaignData.help.id}`} />
    </div>
  );
}

export default App;
