import Hero from '@/components/Hero';
import VideoPlaceholder from '@/components/VideoPlaceholder';
import FeatureSection from '@/components/FeatureSection';
import FeaturesGrid from '@/components/FeaturesGrid';
import IntegrationsGrid from '@/components/IntegrationsGrid';
import DownloadSection from '@/components/DownloadSection';
import QASection from '@/components/QA/QASection';
import Image from 'next/image';
import FloatingBox from '@/components/general/FloatingBox';

export default function Home() {
  return (
        <main className="relative overflow-hidden">
          <FloatingBox
            color="bg-red-50"
            accentColor="bg-red-500"
            icon={<Image src="/Icons/laptop.svg" alt="Laptop Icon" width={24} height={24} />}
            className="hidden md:block right-20 top-20"
          />
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
