import React from 'react';
import Image from 'next/image';

const VideoPlaceholder = () => {
  return (
    
    <div className="relative w-full max-w-5xl mx-auto my-8 md:my-16" style={{ paddingBottom: '56.25%' /* 16:9 aspect ratio */ }}>
      <div className="absolute top-0 left-0 w-full h-full bg-white/30 backdrop-blur-xl border border-gray-200 rounded-lg flex items-center justify-center">
        <p className="text-4xl md:text-6xl font-bold text-gray-800 tracking-tighter text-center">
          this should be a video
        </p>
      </div>
      
    </div>
  );
};

export default VideoPlaceholder;