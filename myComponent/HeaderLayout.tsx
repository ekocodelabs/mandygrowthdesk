import Image from "next/image";
import {
  FaArrowRight,
  FaChartLine,
  FaRocket,
  FaCheckCircle,
} from "react-icons/fa";

/**
 * SEO & Copy Context:
 * Main Longtail Keyword: "Data-driven growth marketing consultant for scaling B2B & SaaS brands"
 * Secondary Longtail Keywords: "Full-funnel customer acquisition strategy", "Predictable revenue scaling framework"
 */

export default function HeaderLayout() {
  return (
    <section className="relative w-full overflow-hidden bg-white pt-24 pb-16 lg:pt-32 lg:pb-28">
      {/* Background Decorative Ambient Glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -left-40 h-125 w-125 rounded-full bg-emerald-400/15 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 -right-40 h-150 w-150 rounded-full bg-lime-300/10 blur-[150px]"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* ==================== LEFT COLUMN: HEADINGS & CTA ==================== */}
          <div className="flex flex-col items-start lg:col-span-7">
            {/* Top Eyebrow / Tagline Badge */}
            {/* <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300 bg-emerald-50/80 px-4 py-1.5 text-xs sm:text-sm font-semibold text-emerald-900 shadow-sm backdrop-blur-md">
              <HiSparkles className="h-4 w-4 text-emerald-600 animate-pulse" />
              <span>Full-Funnel Customer Acquisition Strategy</span>
            </div> */}

            {/* Main Headline with Highlighted SEO Terms */}
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-neutral-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl leading-[1.12]">
              Turn Paid Ads & Organic Traffic Into{" "}
              <span className="relative inline-block text-emerald-600">
                Predictable Revenue
                <svg
                  className="absolute left-0 -bottom-2 w-full h-3 text-emerald-400/60"
                  viewBox="0 0 100 20"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,15 Q50,0 100,15"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="6"
                  />
                </svg>
              </span>
            </h1>

            {/* Sub-heading with long-tail keyword integrations */}
            <p className="mt-6 text-lg sm:text-xl text-neutral-600 leading-relaxed max-w-2xl">
              I help businesses{" "}
              <strong className="font-semibold text-neutral-900">
                find ways to attract customers,
              </strong>{" "}
              increase revenue, and grow.
            </p>

            {/* Key Value Proposition Bullet Checklist */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-medium text-neutral-700">
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-emerald-500 h-4 w-4 shrink-0" />
                <span>ROAS & Paid Media Optimization</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-emerald-500 h-4 w-4 shrink-0" />
                <span>Conversion Rate Optimization (CRO)</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-emerald-500 h-4 w-4 shrink-0" />
                <span>Viral Retention & Referral Loops</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-emerald-500 h-4 w-4 shrink-0" />
                <span>End-to-End Growth Analytics</span>
              </div>
            </div>

            {/* Primary & Secondary Call to Action (CTA) */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              {/* Primary Action Button */}
              <a
                href="#consultation"
                className="inline-flex items-center justify-center gap-3 rounded-xl bg-emerald-500 px-7 py-4 text-base font-bold text-slate-950 shadow-lg shadow-emerald-500/25 transition-all duration-300 hover:bg-emerald-400 hover:shadow-emerald-500/40 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
              >
                <span>Book a Growth Audit</span>
                <FaArrowRight className="h-4 w-4" />
              </a>

              {/* Secondary Action Button */}
              <a
                href="#case-studies"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-neutral-300 bg-white px-7 py-4 text-base font-semibold text-neutral-800 shadow-sm transition-all duration-200 hover:bg-neutral-50 hover:border-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-400"
              >
                <FaChartLine className="h-4 w-4 text-emerald-600" />
                <span>View Case Studies</span>
              </a>
            </div>

            {/* Micro Social Proof Row */}
            <div className="mt-10 pt-6 border-t border-neutral-100 flex items-center gap-6">
              <div>
                <p className="text-2xl font-black text-neutral-900">$54k+</p>
                <p className="text-xs text-neutral-500 font-medium">
                  Tracked Revenue
                </p>
              </div>
              <div className="h-8 w-px bg-neutral-200" />
              <div>
                <p className="text-2xl font-black text-neutral-900">4.2x</p>
                <p className="text-xs text-neutral-500 font-medium">
                  Avg. Blended ROAS
                </p>
              </div>
              <div className="h-8 w-px bg-neutral-200" />
              <div>
                <p className="text-2xl font-black text-neutral-900">120+</p>
                <p className="text-xs text-neutral-500 font-medium">
                  Funnels Scaled
                </p>
              </div>
            </div>
          </div>

          {/* ==================== RIGHT COLUMN: DUAL VERTICAL MEDIA ==================== */}
          <div className="relative lg:col-span-5 flex justify-center lg:justify-end mt-8 lg:mt-0">
            <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-none grid grid-cols-2 gap-4 items-center">
              {/* --- VERTICAL CARD 1: VIDEO CARD --- */}
              <div className="relative group aspect-9/16 w-full overflow-hidden rounded-2xl bg-neutral-950 shadow-2xl ring-1 ring-neutral-900/10 transition-transform duration-500 hover:-translate-y-1">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster="/assets/growthheaderimage.jpg"
                  className="h-full w-full object-cover opacity-90 transition-opacity group-hover:opacity-100"
                >
                  <source src="/assets/bannervideo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* Dark Gradient Overlay for Copy Contrast */}
                <div className="absolute inset-0 bg-linear-to-t from-neutral-950/80 via-transparent to-black/20" />

                {/* Video Caption Badge Overlay */}
                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <div className="flex items-center gap-1.5 rounded-lg bg-black/60 p-2.5 backdrop-blur-md border border-white/10">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                    </span>
                    <span className="text-xs font-medium text-white truncate">
                      Live Campaign Breakdown
                    </span>
                  </div>
                </div>
              </div>

              {/* --- VERTICAL CARD 2: IMAGE PORTRAIT CARD --- */}
              <div className="relative group aspect-9/16 w-full overflow-hidden rounded-2xl bg-neutral-100 shadow-2xl ring-1 ring-neutral-900/10 mt-8 sm:mt-12 transition-transform duration-500 hover:-translate-y-1">
                {/* Next.js Optimized Image Component */}
                <Image
                  src="/assets/profilephoto.jpeg"
                  alt="Growth marketer profile portrait"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  priority
                  className="object-cover object-top transition-scale duration-700 group-hover:scale-105"
                />

                {/* Soft Subtle Gradient for Image text readability */}
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />

                {/* Floating Metric Badge over Image */}
                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <div className="rounded-xl border border-emerald-400/30 bg-neutral-900/90 p-3 shadow-xl backdrop-blur-md">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-wider text-emerald-400">
                          Scale Result
                        </p>
                        <p className="text-sm font-bold text-white">
                          +312% Growth
                        </p>
                      </div>
                      <div className="rounded-lg bg-emerald-500/20 p-2 text-emerald-400">
                        <FaRocket className="h-4 w-4" />
                      </div>
                    </div>
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
