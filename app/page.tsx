import Hero from '@/components/Hero';
import VideoPlaceholder from '@/components/VideoPlaceholder';
import FloatingBox from '@/components/FloatingBox';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Hero />
      <FloatingBox
        color="bg-blue-100"
        className="top-20 left-40"
        icon={<Image src="/laptop.svg" alt="Laptop" width={64} height={64} />}
      />
      <FloatingBox
        color="bg-yellow-100"
        className="top-16 right-32"
        icon={<Image src="/basketball.svg" alt="Basketball" width={64} height={64} />}
      />
      <div className="relative z-10">
        <VideoPlaceholder />
      </div>

      <FloatingBox
        color="bg-red-100"
        className="top-[550px] left-80 z-0"
        icon={<Image src="/cat.svg" alt="Cat" width={64} height={64} />}
      />
      <FloatingBox
        color="bg-purple-100"
        className="top-[550px] right-80 z-0"
        icon={<Image src="/checklist.svg" alt="Checklist" width={64} height={64} />}
      />
      <FloatingBox
        color="bg-orange-100"
        className="bottom-20 right-40"
        icon={<Image src="/coffee.svg" alt="Coffee" width={64} height={64} />}
      />
      <FloatingBox
        color="bg-green-100"
        className="bottom-48 left-32"
        icon={<Image src="/laptop.svg" alt="Laptop" width={64} height={64} />}
      />
    </main>
  );
}
