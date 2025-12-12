"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence, type Variants } from "motion/react"


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

const menuVars: Variants = {
  initial: {
    y: "-100%",
  },
  animate: {
    y: "0%",
    transition: {
      duration: 0.4,
      type: "spring",
      bounce: 0.2
    }
  },
  exit: {
    y: "-100%",
    transition: {
      duration: 0.3,
      type: "spring",
      bounce: 0
    }
  }
}

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <nav className="sticky top-0 z-50 bg-white text-black shadow-sm border-b ">
      {/* DESKTOP */}
      <div className="hidden md:grid grid-cols-3 w-full items-center justify-between py-2 px-4 mx-auto max-w-[1440px] text-[13px] tracking-normal">
        <div className="justify-self-start flex gap-5">
          <Link href={"/"}>
            <Image
              alt="logo"
              src="/next.svg"
              width={50}
              height={50}
              className="w-20 h-auto"

            />
          </Link>
        </div>
        <div
          className="flex gap-5 justify-self-center text-neutral-700 whitespace-nowrap"
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {navItems.map((item, index) => (
            <Link
              key={item.label}
              href={item.href}
              className="relative px-2 py-1 hover:text-black transition-colors"
              onMouseEnter={() => setHoveredIndex(index)}
            >
              {hoveredIndex === index && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-gray-200 rounded-lg -z-10"
                  transition={{ type: "spring", duration: 0.6 }}
                />
              )}
              {item.label}
            </Link>
          ))}
        </div>
        <div className="flex gap-5 items-center justify-self-end">
          <Link href={""} className="">
            Log in
          </Link>
          <Link href={""} className="inline-block bg-black text-white rounded-lg hover:scale-105 transition-transform duration-300 px-2 py-1">
            Get Notion Calendar free
          </Link>
        </div>
      </div>

      {/* Mobile menu */}
      <div className="md:hidden bg-white flex items-center justify-between px-4 py-3">
        <Link href={"/"} onClick={() => setIsOpen(false)}>
          <Image
            alt="logo"
            src="/next.svg"
            width={40}
            height={40}
            className="w-16 h-auto"
          />
        </Link>
        <button
          onClick={toggleMenu}
          className="text-neutral-600 focus:outline-none active:scale-95 transition-transform"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* 2. Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="md:hidden -z-10 absolute top-full left-0 w-full bg-white border-b shadow-xl flex flex-col px-6 py-6 h-[calc(100vh-60px)] overflow-y-auto"
          >
            <div className="flex flex-col gap-6 text-[16px] font-medium text-neutral-600">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="hover:text-black transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="w-full h-px bg-neutral-100 my-8"></div>
            <div className="flex flex-col gap-4">
              <Link
                href="#"
                onClick={() => setIsOpen(false)}
                className="text-[16px] font-medium text-neutral-600 hover:text-black"
              >
                Log in
              </Link>
              <button className="w-full bg-black text-white rounded-lg py-3 font-medium text-sm hover:bg-neutral-800 transition-colors">
                Get Notion Calendar free
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
