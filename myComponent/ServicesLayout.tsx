"use client";

import React, { useState, useRef } from "react";
import {
  FaPlay,
  FaPause,
  FaChartLine,
  FaFunnelDollar,
  FaBullseye,
  FaSync,
  FaArrowRight,
  FaCheck,
} from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";

/**
 * Service & Growth Engine Framework Component
 * SEO Focus: "Full-funnel growth engine architecture" & "Paid acquisition scaling"
 * Theme: Light Green Neon (#34D399 / #A3E635), Crisp Whites, Dark Charcoal accents.
 */

interface ServicePillar {
  id: string;
  title: string;
  badge: string;
  description: string;
  deliverables: string[];
  icon: React.ElementType;
}

const servicesData: ServicePillar[] = [
  {
    id: "01",
    title: "Paid Acquisition & Scaling",
    badge: "Top of Funnel",
    description:
      "Architecting multi-channel paid ad campaigns across Meta, Google, LinkedIn, and TikTok to scale customer acquisition with positive unit economics.",
    deliverables: [
      "Omnichannel Ad Strategy",
      "Creative Testing Framework",
      "CAC Optimization",
    ],
    icon: FaFunnelDollar,
  },
  {
    id: "02",
    title: "Conversion Rate Optimization (CRO)",
    badge: "Middle of Funnel",
    description:
      "Transforming passive clicks into revenue with high-converting landing page optimization, aggressive A/B testing, and frictionless UX design.",
    deliverables: [
      "Landing Page Audits",
      "Multivariate Testing",
      "Checkout Friction Elimination",
    ],
    icon: FaBullseye,
  },
  {
    id: "03",
    title: "Retention & Lifecycle Engineering",
    badge: "Bottom of Funnel",
    description:
      "Maximizing Customer Lifetime Value (LTV) through hyper-segmented email flows, SMS retention sequences, and viral customer referral loops.",
    deliverables: [
      "Klaviyo / Customer.io Setup",
      "Churn Reduction Sequences",
      "VIP Referral Programs",
    ],
    icon: FaSync,
  },
  {
    id: "04",
    title: "Data Attribution & Analytics",
    badge: "Core Infrastructure",
    description:
      "Building clear multi-touch attribution dashboards so you know down to the exact dollar which campaign drives measurable revenue.",
    deliverables: [
      "GA4 & Server-Side Pixel Setup",
      "LTV/CAC Cohort Dashboards",
      "Mixpanel / Segment Tracking",
    ],
    icon: FaChartLine,
  },
];

export default function ServicesLayout() {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<string>("01");
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleVideoPlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section
      id="services"
      className="relative w-full bg-white py-20 lg:py-32 overflow-hidden"
    >
      {/* Background Glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 right-0 h-125 w-125 rounded-full bg-emerald-400/10 blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 h-112.5 w-112.5 rounded-full bg-lime-300/10 blur-[130px]"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          {/* <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300 bg-emerald-50 px-4 py-1.5 text-xs sm:text-sm font-bold text-emerald-900 shadow-sm">
            <HiSparkles className="h-4 w-4 text-emerald-600" />
            <span>Tested & Proven Playbook</span>
          </div> */}

          <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl md:text-5xl leading-tight">
            The Full-Funnel{" "}
            <span className="text-emerald-600 underline decoration-emerald-400 decoration-wavy underline-offset-8">
              Growth Engine
            </span>{" "}
            Framework
          </h2>

          <p className="mt-4 text-base sm:text-lg text-neutral-600">
            A battle-tested methodology engineered to systematically lower
            customer acquisition costs (CAC) while scaling revenue.
          </p>
        </div>

        {/* Main Grid: Services on Left, Vertical Video Reel on Right */}
        <div className="mt-16 grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-8">
          {/* ==================== LEFT COLUMN: SERVICES LIST ==================== */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {servicesData.map((service) => {
              const Icon = service.icon;
              const isActive = activeTab === service.id;

              return (
                <div
                  key={service.id}
                  onClick={() => setActiveTab(service.id)}
                  className={`group relative cursor-pointer rounded-2xl border p-6 transition-all duration-300 ${
                    isActive
                      ? "border-emerald-400 bg-emerald-50/40 shadow-xl shadow-emerald-500/5 ring-1 ring-emerald-400/50"
                      : "border-neutral-200 bg-white hover:border-neutral-300 hover:bg-neutral-50/60"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-4">
                      {/* Icon Badge */}
                      <div
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-colors ${
                          isActive
                            ? "bg-emerald-500 text-slate-950 shadow-md"
                            : "bg-neutral-100 text-neutral-700 group-hover:bg-emerald-100 group-hover:text-emerald-800"
                        }`}
                      >
                        <Icon className="h-6 w-6" />
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-black text-emerald-600">
                            {service.id}
                          </span>
                          <span className="rounded-md bg-neutral-100 px-2 py-0.5 text-[10px] font-bold text-neutral-600 uppercase tracking-wider">
                            {service.badge}
                          </span>
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-neutral-900 mt-0.5">
                          {service.title}
                        </h3>
                      </div>
                    </div>

                    <FaArrowRight
                      className={`h-4 w-4 transition-transform duration-300 ${
                        isActive
                          ? "text-emerald-600 translate-x-1"
                          : "text-neutral-400 group-hover:translate-x-0.5"
                      }`}
                    />
                  </div>

                  {/* Expanded Content View when active */}
                  <div
                    className={`mt-4 pt-4 border-t border-neutral-200/60 transition-all duration-300 ${
                      isActive
                        ? "block opacity-100"
                        : "hidden sm:block opacity-80"
                    }`}
                  >
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Deliverables Checklist */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {service.deliverables.map((item, idx) => (
                        <div
                          key={idx}
                          className="inline-flex items-center gap-1.5 rounded-lg bg-white px-3 py-1.5 text-xs font-semibold text-neutral-800 border border-neutral-200 shadow-2xs"
                        >
                          <FaCheck className="h-3 w-3 text-emerald-500" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ==================== RIGHT COLUMN: VERTICAL FRAMEWORK VIDEO ==================== */}
          <div className="lg:col-span-5 flex justify-center lg:sticky lg:top-28">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Outer Glowing Accent ring */}
              <div className="absolute -inset-1.5 rounded-3xl bg-linear-to-b from-emerald-400 via-emerald-500 to-lime-500 opacity-20 blur-xl" />

              {/* Main Vertical Video Container */}
              <div className="relative aspect-9/16 w-full overflow-hidden rounded-3xl bg-neutral-950 shadow-2xl ring-1 ring-neutral-900/10">
                <video
                  ref={videoRef}
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster="/assets/growthabout.jpg"
                  className="h-full w-full object-cover opacity-90 transition-opacity hover:opacity-100"
                >
                  <source src="/assets/growthservices.mp4" type="video/mp4" />
                  Your browser does not support video playback.
                </video>

                {/* Gradient Shadow Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-neutral-950/85 via-black/20 to-neutral-950/40" />

                {/* Floating Play/Pause Controls */}
                <button
                  onClick={toggleVideoPlay}
                  aria-label={
                    isPlaying ? "Pause Framework Video" : "Play Framework Video"
                  }
                  className="absolute top-4 right-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-neutral-900/70 text-white backdrop-blur-md transition hover:bg-emerald-500 hover:text-slate-950"
                >
                  {isPlaying ? (
                    <FaPause className="h-4 w-4" />
                  ) : (
                    <FaPlay className="h-4 w-4 ml-0.5" />
                  )}
                </button>

                {/* Top Badge Overlay */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/90 px-3 py-1 text-xs font-bold text-slate-950 backdrop-blur-md shadow-md">
                    <HiSparkles className="h-3.5 w-3.5" />
                    <span>Framework Walkthrough</span>
                  </span>
                </div>

                {/* Bottom Overlay Info Banner */}
                <div className="absolute bottom-5 left-5 right-5 z-10">
                  <div className="rounded-2xl border border-white/10 bg-neutral-900/90 p-4 shadow-2xl backdrop-blur-md">
                    <p className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                      Execution Blueprint
                    </p>
                    <p className="mt-1 text-sm font-bold text-white leading-snug">
                      Watch how we scale funnels from $10k/mo to $250k+/mo ad
                      spend
                    </p>

                    <a
                      href="/#contact"
                      className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-emerald-500 py-2.5 text-xs font-extrabold text-slate-950 transition hover:bg-emerald-400"
                    >
                      <span>Deploy This Framework</span>
                      <FaArrowRight className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
