"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function FooterLayout() {
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="w-full bg-white text-neutral-900 border-t border-neutral-100 py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Footprint Corporate Branding Block */}
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-amber-500" />
          <span className="font-extrabold text-sm tracking-widest text-neutral-900 uppercase">
            Growth.Desk
          </span>
        </div>

        {/* Secondary Compliance and Strategy Sub-Links */}
        <div className="flex items-center gap-6 text-xs text-neutral-400 font-medium">
          <Link
            href="/privacy"
            className="hover:text-neutral-900 transition-colors"
          >
            Privacy Policy | Terms of Deployment
          </Link>
        </div>

        {/* Timestamp Metric Block */}
        <div className="text-xs text-neutral-400 font-mono">
          © {currentYear ?? ""} — Data-Driven Scale. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
