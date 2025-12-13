"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence, type Variants } from "motion/react";

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
      bounce: 0.2,
    },
  },
  exit: {
    y: "-100%",
    transition: {
      duration: 0.3,
      type: "spring",
      bounce: 0,
    },
  },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <nav className="sticky top-0 z-50 border-b bg-white text-black shadow-sm">
      {/* DESKTOP */}
      <div className="mx-auto hidden w-full max-w-[1440px] grid-cols-3 items-center justify-between px-4 py-2 text-[13px] tracking-normal md:grid">
        <div className="flex gap-5 justify-self-start">
          <Link href={"/"}>
            <Image
              alt="logo"
              src="/next.svg"
              width={50}
              height={50}
              className="h-auto w-20"
            />
          </Link>
        </div>
        <div
          className="flex gap-5 justify-self-center whitespace-nowrap text-neutral-700"
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {navItems.map((item, index) => (
            <Link
              key={item.label}
              href={item.href}
              className="relative px-2 py-1 transition-colors hover:text-black"
              onMouseEnter={() => setHoveredIndex(index)}
            >
              {hoveredIndex === index && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 -z-10 rounded-lg bg-gray-200"
                  transition={{ type: "spring", duration: 0.6 }}
                />
              )}
              {item.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-5 justify-self-end">
          <Link href={""} className="">
            Log in
          </Link>
          <Link
            href={""}
            className="inline-block rounded-lg bg-black px-2 py-1 text-white transition-transform duration-300 hover:scale-105"
          >
            Get Notion Calendar free
          </Link>
        </div>
      </div>

      {/* Mobile menu */}
      <div className="flex items-center justify-between bg-white px-4 py-3 md:hidden">
        <Link href={"/"} onClick={() => setIsOpen(false)}>
          <Image
            alt="logo"
            src="/next.svg"
            width={40}
            height={40}
            className="h-auto w-16"
          />
        </Link>
        <button
          onClick={toggleMenu}
          className="text-neutral-600 transition-transform focus:outline-none active:scale-95"
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
            className="absolute top-full left-0 -z-10 flex h-[calc(100vh-60px)] w-full flex-col overflow-y-auto border-b bg-white px-6 py-6 shadow-xl md:hidden"
          >
            <div className="flex flex-col gap-6 text-[16px] font-medium text-neutral-600">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="transition-colors hover:text-black"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="my-8 h-px w-full bg-neutral-100"></div>
            <div className="flex flex-col gap-4">
              <Link
                href="#"
                onClick={() => setIsOpen(false)}
                className="text-[16px] font-medium text-neutral-600 hover:text-black"
              >
                Log in
              </Link>
              <button className="w-full rounded-lg bg-black py-3 text-sm font-medium text-white transition-colors hover:bg-neutral-800">
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
