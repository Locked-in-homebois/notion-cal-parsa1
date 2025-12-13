import Hero from "@/components/Hero";
import VideoPlaceholder from "@/components/VideoPlaceholder";
import FeatureSection from "@/components/FeatureSection";
import FeaturesGrid from "@/components/FeaturesGrid";
import IntegrationsGrid from "@/components/IntegrationsGrid";
import DownloadSection from "@/components/DownloadSection";
import QASection from "@/components/QA/QASection";
import PlanCard from "@/components/general/PlanCard";
// import Like from "@/components/general/Like";
// import Pop from "@/components/simplemodal";
// import Toggle from "@/components/general/Toggle";

// import FloatingBox from '@/components/general/FloatingBox';

export default function Home() {
  return (
    <main className="relative mx-auto flex max-w-[1440px] flex-col overflow-hidden">
      <Hero />
      <PlanCard />
      {/* <Toggle />
      <Pop /> */}
      {/* <Like /> */}
      <VideoPlaceholder />
      <FeatureSection />
      <FeaturesGrid />
      <IntegrationsGrid />
      <DownloadSection />
      <QASection />
    </main>
  );
}
