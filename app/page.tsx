import Hero from '@/components/Hero';
import VideoPlaceholder from '@/components/VideoPlaceholder';
import FeatureSection from '@/components/FeatureSection';
import FeaturesGrid from '@/components/FeaturesGrid';
import FloatingBox from '@/components/general/FloatingBox';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Hero />
      <div className="relative z-10">
        <VideoPlaceholder />
        <FloatingBox
          color="bg-red-50"
          accentColor="bg-red-500"
          className="top-10 left-40 -z-10"
          icon={<Image src="/Icons/cat.svg" alt="Cat" width={64} height={64} />}
        />
        <FloatingBox
          color="bg-purple-50"
          accentColor="bg-purple-500"
          className="-top-10 right-60 -z-10"
          icon={<Image src="/Icons/checklist.svg" alt="Checklist" width={64} height={64} />}
        />
        <FloatingBox
          color="bg-teal-50"
          accentColor="bg-teal-500"
          className="bottom-10 left-10 -z-10"
          icon={<Image src="/Icons/bicycle.svg" alt="Bicycle" width={64} height={64} />}
        />
        <FloatingBox
          color="bg-orange-50"
          accentColor="bg-orange-500"
          className="-bottom-10 right-40 -z-10"
          icon={<Image src="/Icons/coffee.svg" alt="Coffee" width={64} height={64} />}
        />
      </div>
      <FeatureSection />
      <FeaturesGrid />
    </main>
  );
}
