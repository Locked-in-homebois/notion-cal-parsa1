import React from 'react';
import Image from 'next/image';

const GridCard = ({ title, description, visual, className }: { title: string, description: string, visual: React.ReactNode, className?: string }) => (
  <div className={`bg-white border rounded-xl shadow-sm p-8 ${className}`}>
    <h3 className="text-2xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 mb-6">{description}</p>
    {visual}
  </div>
);

const FeaturesGrid = () => {
  return (
    <section className="py-20 px-5">

      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-12">Work and life, playing nice.</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <GridCard
            className="md:col-span-3"
            title="Connect multiple calendars"
            description="Easily sync work and personal calendars"
            visual={
              <div className="bg-gray-100 rounded-lg h-96 flex flex-col justify-center p-8 space-y-4">
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded-full bg-blue-500 mr-4"></div>
                  <p>Work</p>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded-full bg-green-500 mr-4"></div>
                  <p>Personal</p>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded-full bg-red-500 mr-4"></div>
                  <p>Side Project</p>
                </div>
              </div>
            }
          />
          <GridCard
            title="No more double bookings"
            description="See all your commitments in one place to avoid conflicts."
            visual={
              <div className="bg-gray-100 rounded-lg h-48 flex items-center justify-center p-4">
                <div className="relative w-full h-full">
                  <div className="absolute top-4 left-4 w-3/4 h-1/2 bg-blue-200 rounded-lg"></div>
                  <div className="absolute bottom-4 right-4 w-3/4 h-1/2 bg-red-200 rounded-lg"></div>
                </div>
              </div>
            }
          />
          <GridCard
            title="Easy-to-use mobile app"
            description="Stay on top of your schedule from anywhere."
            visual={
              <div className="bg-gray-100 rounded-lg h-48 flex items-center justify-center p-4">
                <div className="bg-white rounded-xl shadow-lg w-3/4 h-full p-4">
                  <div className="h-1/3 bg-gray-200 rounded-lg mb-2"></div>
                  <div className="h-1/3 bg-gray-200 rounded-lg mb-2"></div>
                  <div className="h-1/3 bg-gray-200 rounded-lg"></div>
                </div>
              </div>
            }
          />
          <GridCard
            title="Integrates with your favorite tools"
            description="Notion Calendar works with Google Meet, Zoom, and more."
            visual={
              <div className="bg-gray-100 rounded-lg h-48 flex items-center justify-center p-4 space-x-4">
                <div className="w-12 h-12 rounded-full bg-blue-500"></div>
                <div className="w-12 h-12 rounded-full bg-red-500"></div>
                <div className="w-12 h-12 rounded-full bg-yellow-500"></div>
              </div>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
