import React from 'react';

interface FloatingBoxProps {
  color: string;
  accentColor?: string;
  icon: React.ReactNode;
  className?: string;
}

const FloatingBox: React.FC<FloatingBoxProps> = ({ color, accentColor, icon, className }) => {
  return (
    <div className={`absolute ${className}`}>
      <div className="relative w-32 h-24 rounded-lg shadow-sm flex overflow-hidden -z-50">
        <div className={`w-4 ${accentColor}`}></div>
        <div className={`flex-1 ${color} flex items-center justify-center`}>
          {icon}
        </div>
      </div>
    </div>
  );
};

export default FloatingBox;
