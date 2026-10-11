"use client";

import React from "react";
import Image from "next/image";
import {
  FaChartPie,
  FaFunnelDollar,
  FaBullseye,
  FaAward,
  FaUsers,
  FaArrowRight,
} from "react-icons/fa";
import { HiCheckBadge } from "react-icons/hi2";

/**
 * About Section Component for Growth Marketer Landing Page
 *
 * SEO Focus:
 * Main Keyword: "Full-funnel growth architecture & data-driven acquisition consultant"
 * Palette: Light Green Neon (#34D399 / #A3E635), White, Neutral Dark Elements.
 */

export default function AboutLayout() {
  return (
    <section
      id="about"
      className="relative w-full overflow-hidden bg-neutral-50 py-20 lg:py-32"
    >
      {/* Background Decorator Elements */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 -left-32 h-112.5 w-112.5 rounded-full bg-emerald-400/10 blur-[130px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 h-100 w-100 rounded-full bg-lime-300/10 blur-[120px]"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* ==================== LEFT COLUMN: VERTICAL IMAGE & FLOATING STATS ==================== */}
          <div className="relative order-2 lg:order-1 lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-none">
              {/* Outer Decorative Ring/Frame with Accent Glow */}
              <div className="absolute -inset-2 rounded-3xl bg-linear-to-tr from-emerald-500 via-emerald-300 to-lime-400 opacity-30 blur-lg transition duration-500 group-hover:opacity-50" />

              {/* Main Vertical Image Container */}
              <div className="relative aspect-4/5 w-full overflow-hidden rounded-2xl bg-neutral-900 shadow-2xl ring-1 ring-neutral-900/10">
                <Image
                  src="/assets/growthabout.jpg"
                  alt="Senior Growth Marketer analyzing growth architecture and customer acquisition funnels"
                  fill
                  sizes="(max-width: 1024px) 90vw, 40vw"
                  priority={false}
                  className="object-cover object-center transition-transform duration-700 hover:scale-105"
                />

                {/* Subtle Image Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-neutral-950/60 via-transparent to-transparent" />
              </div>

              {/* Floating Stat Card 1: Top Right */}
              <div className="absolute -top-6 -right-4 sm:-right-6 z-10 rounded-2xl border border-emerald-300/40 bg-white/95 p-4 shadow-xl backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500 text-slate-950 shadow-md">
                    <FaAward className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-2xl font-extrabold text-neutral-900">
                      3+ Yrs
                    </p>
                    <p className="text-xs font-semibold text-neutral-500">
                      Scaling Strategy Experience
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Stat Card 2: Bottom Left */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 z-10 max-w-60 sm:max-w-65 rounded-2xl border border-neutral-800 bg-neutral-950/90 p-4 shadow-2xl backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-400">
                    <FaFunnelDollar className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                      Unit Economics
                    </p>
                    <p className="text-sm font-medium text-neutral-200">
                      Focused on High LTV & Low CAC
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ==================== RIGHT COLUMN: CONTENT & VALUE PROP ==================== */}
          <div className="order-1 lg:order-2 lg:col-span-7 flex flex-col items-start">
            {/* Tagline Badge */}
            {/* <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300 bg-emerald-100/60 px-4 py-1.5 text-xs sm:text-sm font-bold text-emerald-900 shadow-sm">
              <HiCheckBadge className="h-5 w-5 text-emerald-600" />
              <span>Full-Funnel Growth Architecture</span>
            </div> */}

            {/* Main Headline */}
            <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl md:text-5xl leading-[1.15]">
              Engineering Growth Beyond Vanity Metrics. I Build{" "}
              <span className="text-emerald-600 underline decoration-emerald-400 decoration-wavy underline-offset-8">
                Scalable Engines.
              </span>
            </h2>

            {/* Paragraph Text with Keyword Enrichment */}
            <p className="mt-6 text-base sm:text-lg text-neutral-600 leading-relaxed">
              I am Amanda a senior{" "}
              <strong className="font-semibold text-neutral-900">
                growth marketer and acquisition strategist
              </strong>{" "}
              who connects customer behaviour, marketing strategy, and execution
              to help businesses uncover these opportunities and turn them into
              measurable results.
            </p>

            <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed">
              Instead of relying solely on guesswork or bloated ad budgets, I
              combine rigorous data analytics, rapid experiment testing, and
              retention engineering to craft customized{" "}
              <strong className="font-semibold text-neutral-900">
                B2B SaaS and Ecommerce growth frameworks
              </strong>
              .
            </p>

            {/* Feature Cards Grid */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              {/* Pillar 1 */}
              <div className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm transition hover:border-emerald-400 hover:shadow-md">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">
                  <FaChartPie className="h-5 w-5" />
                </div>
                <h3 className="mt-3 text-lg font-bold text-neutral-900">
                  Data-Driven CAC Reduction
                </h3>
                <p className="mt-1 text-sm text-neutral-600">
                  Optimizing conversion paths and ad creative iterations to
                  maximize return on ad spend (ROAS).
                </p>
              </div>

              {/* Pillar 2 */}
              <div className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm transition hover:border-emerald-400 hover:shadow-md">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">
                  <FaBullseye className="h-5 w-5" />
                </div>
                <h3 className="mt-3 text-lg font-bold text-neutral-900">
                  Retention & Viral Loops
                </h3>
                <p className="mt-1 text-sm text-neutral-600">
                  Designing onboarding flows and lifecycle email sequences that
                  multiply Customer Lifetime Value (LTV).
                </p>
              </div>
            </div>

            {/* Bottom Callout / CTA Link */}
            <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-3 rounded-xl bg-emerald-500 px-7 py-4 text-base font-bold text-slate-950 shadow-lg shadow-emerald-500/20 transition-all duration-300 hover:bg-emerald-400 hover:shadow-emerald-500/35 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
              >
                <span>Explore Growth Services</span>
                <FaArrowRight className="h-4 w-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-neutral-300 bg-white px-7 py-4 text-base font-semibold text-neutral-800 shadow-sm transition hover:bg-neutral-100 focus:outline-none"
              >
                <FaUsers className="h-4 w-4 text-emerald-600" />
                <span>Schedule Strategy Call</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
