"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FiMenu, FiX, FiArrowUpRight } from "react-icons/fi";

interface NavItem {
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: "Simulator", href: "/#simulator" },
  { label: "Case Studies", href: "/#case-studies" },
  { label: "Growth Audit", href: "/#audit-funnel" },
  { label: "Contact", href: "/#contact" },
];

export default function NavbarLayout() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  // Monitors page offsets to swap design weights when user interacts with navigation context
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md border-b border-neutral-200/50 py-4 shadow-sm"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Deep Identity Signature Link */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="w-3 h-3 rounded-full bg-emerald-500 group-hover:scale-125 transition-transform" />
          <span className="font-black text-xl tracking-tight text-neutral-900 uppercase">
            Growth<span className="text-emerald-500">.</span>Desk
          </span>
        </Link>

        {/* Desktop Interface Links Matrix */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-semibold text-neutral-600 hover:text-neutral-900 transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-emerald-500 hover:after:w-full after:transition-all"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA Alignment Interface */}
        <div className="hidden md:flex items-center">
          <Link
            href="#audit-funnel"
            className="flex items-center gap-1.5 bg-neutral-900 text-white hover:bg-emerald-500 hover:text-neutral-900 text-xs font-bold uppercase tracking-widest px-5 py-2.5 rounded-full transition-all shadow-sm active:scale-95"
          >
            Claim Audit <FiArrowUpRight className="text-sm" />
          </Link>
        </div>

        {/* Mobile Navigation Interface Controller */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl text-neutral-900 focus:outline-none p-1"
          aria-label="Toggle Menu Navigation"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Drawer Backdrop Layer */}
      <div
        className={`fixed inset-0 top-16.25 bg-white z-40 transition-all duration-300 md:hidden flex flex-col p-6 space-y-6 border-t border-neutral-100 ${
          isOpen
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-full pointer-events-none"
        }`}
      >
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            onClick={() => setIsOpen(false)}
            className="text-xl font-bold text-neutral-900 tracking-tight"
          >
            {item.label}
          </Link>
        ))}
        <Link
          href="/#audit-funnel"
          onClick={() => setIsOpen(false)}
          className="w-full text-center flex items-center justify-center gap-2 bg-emerald-500 text-neutral-900 font-bold py-4 rounded-xl text-sm"
        >
          Claim Strategy Audit <FiArrowUpRight />
        </Link>
      </div>
    </nav>
  );
}
