import React from 'react';

interface FloatingBoxProps {
  color: string;
  icon: React.ReactNode;
  className?: string;
}

const FloatingBox: React.FC<FloatingBoxProps> = ({ color, icon, className }) => {
  return (
    <div className={`absolute ${className}`}>
      <div className={`relative w-32 h-24 ${color} rounded-lg shadow-sm flex items-center justify-center`}>
        {icon}
      </div>
    </div>
  );
};

export default FloatingBox;
