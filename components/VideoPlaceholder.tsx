import React from 'react';

const VideoPlaceholder = () => {
  return (
    <div className="flex items-center justify-center w-5xl h-[540px] mx-auto my-16">
      <div className="w-full h-full bg-white/30 backdrop-blur-xl border border-gray-400 rounded-lg flex items-center justify-center">
        <p className="text-6xl font-bold text-gray-800 tracking-tighter">
          this should be a video
        </p>
      </div>
    </div>
  );
};

export default VideoPlaceholder;