
import Link from 'next/link';
import FloatingBox from './general/FloatingBox'; // Assuming FloatingBox is in './general'

const DownloadSection = () => {
  return (
    <section className="py-16 mt-10 bg-white">
      <div className="container max-w-[1000px] mx-auto px-4 text-center relative">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Get Notion Calendar for free.
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Unlock a better way to manage your time and life.
        </p>
        <Link href="#" className="text-blue-600 hover:text-blue-700 text-lg font-medium">
          Get Notion Calendar free &rarr;
        </Link>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Desktop App Card */}
          <div className="bg-[#F7F7F5] rounded-xl p-8 flex flex-col items-center">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Desktop App</h3>
            <div className="bg-gray-300 w-full h-64 rounded-lg flex items-center justify-center text-gray-600 text-lg">
              [Desktop Interface Image Placeholder]
            </div>
            <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-white text-gray-800 px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-shadow">
                macOS
              </button>
              <button className="bg-white text-gray-800 px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-shadow">
                Windows
              </button>
            </div>
          </div>

          {/* Mobile App Card */}
          <div className="bg-[#F7F7F5] rounded-xl p-8 flex flex-col items-center">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Mobile App</h3>
            <div className="bg-gray-300 w-full max-w-xs h-[250px] rounded-lg flex items-center justify-center text-gray-600 text-lg mb-8">
              [Mobile Phone Mockup Placeholder]
            </div>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-white text-gray-800 px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-shadow">
                Apple App Store
              </button>
              <button className="bg-white text-gray-800 px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-shadow">
                Google Play
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
