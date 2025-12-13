import Hero from '@/components/Hero';
import VideoPlaceholder from '@/components/VideoPlaceholder';
import FeatureSection from '@/components/FeatureSection';
import FeaturesGrid from '@/components/FeaturesGrid';
import IntegrationsGrid from '@/components/IntegrationsGrid';
import DownloadSection from '@/components/DownloadSection';
import QASection from '@/components/QA/QASection';
import Pop from "@/components/simplemodal";

// import FloatingBox from '@/components/general/FloatingBox';

export default function Home() {
  return (
    <main className="relative max-w-[1440px] flex flex-col mx-auto overflow-hidden">
      <Hero />
      <Pop />
      <VideoPlaceholder />
      <FeatureSection />
      <FeaturesGrid />
      <IntegrationsGrid />
      <DownloadSection />
      <QASection />
    </main>
  );
}
