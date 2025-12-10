'use client';

import { useState } from 'react';

interface QAItemProps {
  question: string;
  answer: string;
}

const QAItem: React.FC<QAItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-t border-gray-200 py-4">
      <button
        type="button"
        className="flex w-full justify-between items-center cursor-pointer text-left"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <h3 className="text-lg font-medium text-gray-800">{question}</h3>
        <div
          className={`ml-4 transform transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'
            }`}
        >
          {/* Single icon that rotates */}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 5V19"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5 12H19"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>

      <div
        className={`mt-4 text-gray-600 overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default QAItem;
