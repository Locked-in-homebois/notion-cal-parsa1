import React from 'react';
import FloatingBox from './FloatingBox';
import Image from 'next/image';

const FeatureCard = ({ title, description, visual, className }: { title: string, description: string, visual: React.ReactNode, className?: string }) => (
  <div className={`bg-white border rounded-xl shadow-sm p-8 ${className}`}>
    <h3 className="text-2xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 mb-6">{description}</p>
    {visual}
  </div>
);

const FeatureSection = () => {
  return (
    <section className="py-20 relative">
      <FloatingBox
        color="bg-pink-100"
        accentColor="bg-pink-500"
        className="top-50 left-10"
        icon={<Image src="/cat.svg" alt="Cat" width={64} height={64} />}
      />
      <FloatingBox
        color="bg-indigo-100"
        accentColor="bg-indigo-500"
        className="top-30 right-40"
        icon={<Image src="/checklist.svg" alt="Checklist" width={64} height={64} />}
      />
      <FloatingBox
        color="bg-lime-100"
        accentColor="bg-lime-500"
        className="bottom-10 left-10"
        icon={<Image src="/bicycle.svg" alt="Bicycle" width={64} height={64} />}
      />
      <FloatingBox
        color="bg-amber-100"
        accentColor="bg-amber-500"
        className="bottom-100 right-10"
        icon={<Image src="/coffee.svg" alt="Coffee" width={64} height={64} />}
      />
      <div className="container mx-auto text-center">
        <h2 className="text-6xl font-bold mb-4">Time management, simplified.</h2>
        <p className="text-xl text-gray-500 mb-12">Designed for focus. Built for speed.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FeatureCard
            className="md:col-span-2"
            title="See your schedule at a glance"
            description="Access your upcoming events and join meetings in a single click from your menu bar."
            visual={
              <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
                <p className="text-gray-400">Desktop Calendar View Placeholder</p>
              </div>
            }
          />
          <FeatureCard
            title="Built-in scheduling"
            description="Share your availability with a link and let others book a time that works for everyone."
            visual={
              <div className="bg-gray-100 rounded-lg h-48 p-4 flex flex-col justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gray-300 mr-4"></div>
                  <div>
                    <p className="font-semibold">Your Name</p>
                    <p className="text-sm text-gray-500">Scheduling Link</p>
                  </div>
                </div>
                <div className="flex justify-between mt-4">
                  <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">30 min</div>
                  <div className="bg-gray-200 px-3 py-1 rounded-full text-sm">Book a time</div>
                </div>
              </div>
            }
          />
          <FeatureCard
            title="Work across time zones"
            description="Drag and drop time zones to see your schedule from a different point of view."
            visual={
              <div className="bg-gray-100 rounded-lg h-48 p-4 flex justify-around">
                <div className="text-center">
                  <p className="font-semibold">GMT</p>
                  <p className="text-2xl">10:00</p>
                </div>
                <div className="text-center">
                  <p className="font-semibold">EST</p>
                  <p className="text-2xl">05:00</p>
                </div>
                <div className="text-center">
                  <p className="font-semibold">PST</p>
                  <p className="text-2xl">02:00</p>
                </div>
              </div>
            }
          />
          <FeatureCard
            title="Modern design"
            description="A calendar you’ll actually enjoy using, with a command palette for quick actions."
            visual={
              <div className="bg-gray-100 rounded-lg h-48 p-4 flex items-center justify-center">
                <div className="bg-white shadow-lg rounded-lg p-4 w-full max-w-xs">
                  <p className="text-gray-400">Ctrl + K</p>
                </div>
              </div>
            }
          />
          <FeatureCard
            title="Available in 12 languages"
            description="Notion Calendar is available in English, Korean, Japanese, and more."
            visual={
              <div className="bg-gray-100 rounded-lg h-48 p-4 relative">
                <div className="absolute top-4 left-4 bg-white shadow-md rounded-full px-3 py-1">English</div>
                <div className="absolute top-16 right-8 bg-white shadow-md rounded-full px-3 py-1">Korean</div>
                <div className="absolute bottom-8 left-12 bg-white shadow-md rounded-full px-3 py-1">Japanese</div>
                <div className="absolute bottom-4 right-20 bg-white shadow-md rounded-full px-3 py-1">French</div>
              </div>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
