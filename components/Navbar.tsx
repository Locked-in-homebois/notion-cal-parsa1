"use client";

import { useState } from "react";
import Link from "next/link";

const navItems = [
  { label: "Notion", href: "#" },
  { label: "Mail", href: "#" },
  { label: "Calendar", href: "#" },
  { label: "AI", href: "#" },
  { label: "Enterprise", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Explore", href: "#" },
  { label: "Request a demo", href: "#" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 8.7V15.3C21 16.2 20.2 17 19.3 17H4.7C3.8 17 3 16.2 3 15.3V8.7C3 7.8 3.8 7 4.7 7H19.3C20.2 7 21 7.8 21 8.7Z" />
              <path d="M7 17V7" />
              <path d="M12 17V7" />
              <path d="M17 17V7" />
            </svg>
            <span className="text-base sm:text-lg font-semibold tracking-tight">
              Notion
            </span>
          </Link>

          {/* Desktop center nav */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2">
            <div className="flex items-center gap-5">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm font-light text-gray-600 hover:text-gray-900"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop right side */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="#"
              className="text-sm font-light text-gray-600 hover:text-gray-900"
            >
              Log in
            </Link>
            <button className="rounded-lg bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-gray-900">
              Get Notion Calendar free
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={toggleMenu}
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 md:hidden"
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
          >
            <svg
              className="h-6 w-6 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M10 18h10" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden border-t border-gray-100 bg-white/95 backdrop-blur-sm transition-[max-height,opacity] duration-300 ${isOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="px-4 py-3 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
            >
              {item.label}
            </Link>
          ))}

          <div className="mt-3 border-t border-gray-100 pt-3 space-y-2">
            <Link
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
            >
              Log in
            </Link>
            <button className="w-full rounded-lg bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-gray-900">
              Get Notion Calendar free
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
