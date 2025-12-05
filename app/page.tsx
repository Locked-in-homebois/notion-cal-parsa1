import Hero from '@/components/Hero';
import VideoPlaceholder from '@/components/VideoPlaceholder';
import FeatureSection from '@/components/FeatureSection';
import FeaturesGrid from '@/components/FeaturesGrid';
import IntegrationsGrid from '@/components/IntegrationsGrid';
import DownloadSection from '@/components/DownloadSection';
import QASection from '@/components/QA/QASection';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Hero />
      <div className="relative z-10">
        <VideoPlaceholder />
      </div>
      <FeatureSection />
      <FeaturesGrid />
      <IntegrationsGrid />
      <DownloadSection />
      <QASection />
    </main>
  );
}
