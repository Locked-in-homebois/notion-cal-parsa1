"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between relative">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 8.7V15.3C21 16.2 20.2 17 19.3 17H4.7C3.8 17 3 16.2 3 15.3V8.7C3 7.8 3.8 7 4.7 7H19.3C20.2 7 21 7.8 21 8.7Z" />
              <path d="M7 17V7" />
              <path d="M12 17V7" />
              <path d="M17 17V7" />
            </svg>
            <span className="ml-2 text-lg font-semibold">Notion</span>
          </Link>
        </div>

        <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
          <div className="flex items-center space-x-4">
            <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm font-light">Notion</Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm font-light">Mail</Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm font-light">Calendar</Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm font-light">AI</Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm font-light">Enterprise</Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm font-light">Pricing</Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm font-light">Explore</Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm font-light">Request a demo</Link>
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm font-light">Log in</Link>
          <button className="bg-black text-white px-4 py-2 rounded-lg font-semibold text-sm">
            Get Notion Calendar free
          </button>
        </div>
        
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="outline-none">
            <svg className="w-6 h-6 text-gray-500 hover:text-gray-900" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Notion</Link>
            <Link href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Mail</Link>
            <Link href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Calendar</Link>
            <Link href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">AI</Link>
            <Link href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Enterprise</Link>
            <Link href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Pricing</Link>
            <Link href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Explore</Link>
            <Link href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Request a demo</Link>
            <Link href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Log in</Link>
            <button className="w-full bg-black text-white mt-4 px-4 py-2 rounded-lg font-semibold">
              Get Notion Calendar free
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
