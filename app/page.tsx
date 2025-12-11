import Hero from '@/components/Hero';
import VideoPlaceholder from '@/components/VideoPlaceholder';
import FeatureSection from '@/components/FeatureSection';
import FeaturesGrid from '@/components/FeaturesGrid';
import IntegrationsGrid from '@/components/IntegrationsGrid';
import DownloadSection from '@/components/DownloadSection';
import QASection from '@/components/QA/QASection';
import FloatingBox from '@/components/general/FloatingBox';
import Rotate from '@/components/animate/rotate';

export default function Home() {
  return (
    <main className="relative max-w-[1440px] flex flex-col mx-auto overflow-hidden">
      <Rotate />
      <FloatingBox
        color="red"
        icon="laptop"
        className="md:right-20 md:top-20 top-30 left-5"
      />
      <Hero />
      <VideoPlaceholder />
      <FeatureSection />
      <FeaturesGrid />
      <IntegrationsGrid />
      <DownloadSection />
      <QASection />
    </main>
  );
}
