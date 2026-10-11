"use client";

import React from "react";
import Image from "next/image";
import {
  FiTrendingUp,
  FiSearch,
  FiInstagram,
  FiMail,
  FiCheckCircle,
} from "react-icons/fi";

interface StatItem {
  metric: string;
  headline: string;
  context: string;
  icon: React.ReactNode;
}

export default function GrowthContentLayout() {
  // 1. Maintain semantic isolation of real performance milestones with custom gold aesthetics
  const PERFORMANCE_DATA: StatItem[] = [
    {
      metric: "$54K+",
      headline: "Edutech Bootcamp Scaled",
      context:
        "Generated from targeted marketing campaigns supporting bootcamp attendees, with premium tickets priced at $200 each.",
      icon: <FiCheckCircle className="text-amber-400" />,
    },
    {
      metric: "$17.9K+",
      headline: "Email Channel Acceleration",
      context:
        "Direct revenue generated strictly through high-converting lifecycle email marketing frameworks in under one single month.",
      icon: <FiMail className="text-amber-400" />,
    },
    {
      metric: "90%",
      headline: "Search Engine Prominence",
      context:
        "Of high-priority commercial assets ranking firmly at #1 on Google's first page and organic AI overviews.",
      icon: <FiSearch className="text-amber-400" />,
    },
    {
      metric: "90%+",
      headline: "Organic Pipeline Optimization",
      context:
        "Substantial increase in overall organic search clicks, scaling rapidly from a baseline of 53,600 straight to 102,000.",
      icon: <FiTrendingUp className="text-amber-400" />,
    },
    {
      metric: "3M+",
      headline: "Social Impression Footprint",
      context:
        "Instagram views generated during a structured edutech scale campaign, paired with significant target audience engagement metrics.",
      icon: <FiInstagram className="text-amber-400" />,
    },
  ];

  return (
    <section className="w-full py-32 bg-neutral-950 text-white px-4 md:px-8 border-t border-neutral-900 selection:bg-emerald-400 selection:text-black">
      <div className="max-w-7xl mx-auto">
        {/* Editorial Content Header Block */}
        <div className="mb-20">
          <div className="mb-16 max-w-3xl space-y-5">
            {/* <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-amber-400 bg-amber-400/5 border border-amber-400/20 px-4 py-1.5 rounded-full inline-block">
              Operational Proof
            </span> */}
            <h2 className="text-4xl md:text-6xl font-black tracking-tight text-emerald-400 font-sans leading-none">
              Growth looks different <br className="hidden md:inline" /> for
              every business.
            </h2>
            <p className="text-neutral-400 text-base md:text-lg leading-relaxed max-w-2xl font-light">
              These milestones are exact proof of what occurs when data-driven
              marketing systems securely connect the right infrastructure
              opportunities with elite execution frameworks.
            </p>
          </div>

          {/* Luxury Multi-Image Asymmetrical Structural Layout Matrix */}
          <div className="grid grid-cols-1 lg:grid-cols-[0.7fr_1.3fr] gap-8 items-stretch mb-24">
            {/* Asset 1: Vertical Portrait Anchor Frame */}
            <div className="relative overflow-hidden rounded-[32px] border border-neutral-800/80 bg-neutral-900 shadow-[0_40px_100px_rgba(0,0,0,0.6)] h-120 lg:h-130 group">
              <Image
                src="/assets/bannerphoto.jpeg"
                alt="Luxury growth strategy portrait"
                fill
                priority
                className="object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out"
                sizes="(max-width: 1024px) 100vw, 35vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-neutral-950 via-neutral-950/20 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-neutral-950/80 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.22em] text-emerald-300 backdrop-blur-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Growth systems
                </div>
              </div>
            </div>

            {/* Asset 2: Confined Horizontal Landscape Premium Block */}
            <div className="relative overflow-hidden rounded-[32px] border border-neutral-800/80 bg-neutral-900 shadow-[0_40px_100px_rgba(0,0,0,0.6)] h-65 md:h-80 lg:h-105 group">
              <Image
                src="/assets/cpphoto.jpeg"
                alt="High-end digital marketing campaign visuals"
                fill
                priority
                className="object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out"
                sizes="(max-width: 1024px) 100vw, 65vw"
              />
              <div className="absolute inset-0 bg-linear-to-r from-neutral-950/80 via-neutral-950/30 to-transparent max-md:bg-linear-to-t max-md:from-neutral-950/90" />

              <div className="absolute inset-x-0 bottom-0 p-6 md:p-10 flex items-end justify-start">
                <div className="max-w-md rounded-2xl border border-white/10 bg-neutral-950/10 p-6 md:p-8 backdrop-blur-xl shadow-2xl">
                  <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-emerald-400">
                    Premium performance
                  </div>
                  <div className="mt-3 text-xl md:text-3xl font-black text-white tracking-tight leading-tight">
                    Built to turn attention into dependable revenue.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Metric Grid Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PERFORMANCE_DATA.map((item, idx) => (
            <div
              key={idx}
              className="bg-neutral-900/50 border border-neutral-900 p-8 rounded-[2rem] flex flex-col justify-between space-y-8 hover:border-emerald-400/30 hover:bg-neutral-900 transition-all duration-500 group relative before:absolute before:inset-0 before:rounded-[2rem] before:bg-linear-to-b before:from-white/5 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity before:pointer-events-none"
            >
              <div className="space-y-5 relative z-10">
                <div className="flex items-center justify-between">
                  <div className="text-5xl font-black text-emerald-400 font-mono tracking-tight group-hover:translate-x-1 transition-transform duration-300 origin-left">
                    {item.metric}
                  </div>
                  <div className="p-3 bg-neutral-950 rounded-2xl text-xl border border-neutral-800 text-emerald-400">
                    {item.icon}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-neutral-100 tracking-tight">
                  {item.headline}
                </h3>
              </div>

              <p className="text-sm text-neutral-400 leading-relaxed font-light relative z-10">
                {item.context}
              </p>
            </div>
          ))}

          {/* Luxury Handshake Block */}
          <div className="bg-linear-to-br from-emerald-400 via-emerald-500 to-emerald-600 text-neutral-950 p-8 rounded-[2rem] flex flex-col justify-between space-y-12 shadow-xl shadow-emerald-500/5 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-black tracking-tight leading-none text-neutral-950">
                Curious what opportunities exist in your business?
              </h3>
              <p className="text-xs font-medium opacity-80 leading-relaxed max-w-xs">
                Let's run a full structural audit on your current operational
                funnel to locate hidden customer acquisition blockages.
              </p>
            </div>

            <a
              href="#audit-funnel"
              className="w-full text-center bg-neutral-950 text-white font-bold py-4 px-6 rounded-xl text-xs uppercase tracking-[0.2em] hover:bg-neutral-900 transition-colors shadow-xl block"
            >
              Find Out Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
