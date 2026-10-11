import React from "react";
import Image from "next/image";
import { FiArrowUpRight, FiCheckCircle } from "react-icons/fi";

interface CaseStudy {
  slug: string;
  industry: string;
  companyName: string;
  metricHero: string;
  metricLabel: string;
  description: string;
  tags: string[];
  localImagePath: string;
}

// 1. Maintain semantic isolation of hard data models
const CASE_STUDIES_DATA: CaseStudy[] = [
  {
    slug: "saas-funnel-engineering",
    industry: "B2B Enterprise SaaS",
    companyName: "Vektor Analytics",
    metricHero: "+312% ROI",
    metricLabel: "In Bound Pipeline Value",
    description:
      "Re-engineered lead routing architectures and executed performance-driven paid acquisition search strategies targeting high-value C-suite enterprise decisions.",
    tags: ["Paid Acquisition", "Funnel Engineering", "LTV Acceleration"],
    localImagePath: "/assets/growthabout.jpg", // Located in public/case-study-vektor.jpg
  },
  {
    slug: "cro-revenue-acceleration",
    industry: "High-Ticket E-Commerce",
    companyName: "Aura Aesthetics",
    metricHero: "2.1x LTV",
    metricLabel: "Customer Lifetime Value Increase",
    description:
      "Designed multi-tier lifecycle email sequences paired with intent-driven conversion optimization mechanics across core checkout funnels.",
    tags: ["Conversion Rate Optimization", "Growth Marketing"],
    localImagePath: "/assets/growthabout.jpg", // Located in public/case-study-aura.jpg
  },
];

export default function CasestudyLayout() {
  return (
    <section
      id="case-studies"
      className="w-full py-24 bg-neutral-50 border-t border-neutral-100 px-4 md:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Heading Context */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-xs font-bold tracking-widest uppercase text-emerald-600">
              Proven Results
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-neutral-900 tracking-tight mt-2">
              Case studies in performance.
            </h2>
          </div>
          <p className="text-neutral-500 max-w-sm text-sm md:text-base leading-relaxed">
            Real frameworks. Real metrics. Zero vanity metrics. Explore how
            systemic conversion growth scaling transforms operational models.
          </p>
        </div>

        {/* Dynamic Responsive Case Study Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {CASE_STUDIES_DATA.map((study) => (
            <div
              key={study.slug}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-neutral-200/60 flex flex-col group"
            >
              {/* Image Frame Wrapper leveraging Next.js Image Element component optimizations */}
              <div className="relative w-full h-64 md:h-72 bg-neutral-900 overflow-hidden">
                <Image
                  src={study.localImagePath}
                  alt={`${study.companyName} - ${study.industry} Case Study`}
                  fill
                  sizes="(max-width: 768s) 100vw, 50vw"
                  className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700 ease-out"
                  priority={false}
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold tracking-wide text-neutral-800 shadow-sm">
                  {study.industry}
                </div>
              </div>

              {/* Text Description Component Matrix */}
              <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-2xl font-bold text-neutral-900 tracking-tight">
                      {study.companyName}
                    </h3>
                    <div className="text-right">
                      <div className="text-2xl font-black text-neutral-900 font-mono leading-none">
                        {study.metricHero}
                      </div>
                      <div className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider mt-1">
                        {study.metricLabel}
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-neutral-500 leading-relaxed">
                    {study.description}
                  </p>
                </div>

                {/* Sub-tier metadata tracking items */}
                <div className="pt-4 border-t border-neutral-100 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {study.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-semibold text-neutral-600 bg-neutral-100 px-2.5 py-0.5 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button className="text-sm font-bold text-neutral-900 flex items-center gap-1 group-hover:text-emerald-500 transition-colors">
                    View Blueprint
                    <FiArrowUpRight className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
