"use client";

import React, { useState, useEffect } from "react";
import {
  FiTrendingUp,
  FiDollarSign,
  FiPercent,
  FiArrowRight,
} from "react-icons/fi";

// Define strict TypeScript contracts for component state
interface MarketingMetrics {
  currentTraffic: number;
  conversionRate: number; // Stored as percentage (e.g., 2 for 2%)
  avgOrderValue: number;
}

export default function GrowthCalculator() {
  // 1. Component State using clean, modern architecture
  const [metrics, setMetrics] = useState<MarketingMetrics>({
    currentTraffic: 25000,
    conversionRate: 1.5,
    avgOrderValue: 120,
  });

  const [simulatedRevenue, setSimulatedRevenue] = useState<number>(0);
  const [currentRevenue, setCurrentRevenue] = useState<number>(0);
  const [liftAmount, setLiftAmount] = useState<number>(0);

  // 2. Pure business logic executed reactively whenever inputs change
  useEffect(() => {
    const currentConvFraction = metrics.conversionRate / 100;
    const computedCurrentRev =
      metrics.currentTraffic * currentConvFraction * metrics.avgOrderValue;

    // Growth Simulator assumption: Expert CRO increases performance by a conservative +1.2% absolute metric
    const targetConvFraction = (metrics.conversionRate + 1.2) / 100;
    // Traffic optimization usually yields ~25% higher-intent pipeline growth
    const targetTraffic = metrics.currentTraffic * 1.25;

    const computedSimulatedRev =
      targetTraffic * targetConvFraction * metrics.avgOrderValue;

    setCurrentRevenue(Math.round(computedCurrentRev));
    setSimulatedRevenue(Math.round(computedSimulatedRev));
    setLiftAmount(Math.round(computedSimulatedRev - computedCurrentRev));
  }, [metrics]);

  return (
    <section
      id="simulator"
      className="w-full py-24 bg-white text-neutral-900 px-4 md:px-8 max-w-7xl mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Context Strategy Header & Interactive Controls */}
        <div className="lg:col-span-5 space-y-8">
          <div>
            <span className="text-xs font-bold tracking-widest uppercase text-amber-500 bg-amber-50 px-3 py-1 rounded-full">
              Growth Simulator
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mt-3 text-neutral-900">
              Quantify your{" "}
              <span className="underline decoration-amber-400 decoration-wavy">
                untapped
              </span>{" "}
              pipeline.
            </h2>
            <p className="text-neutral-500 mt-4 text-base leading-relaxed">
              Adjust your baseline performance numbers to simulate how systemic
              funnel optimization and high-intent traffic acquisition translate
              directly into compound revenue.
            </p>
          </div>

          <div className="space-y-6 bg-neutral-50 p-6 rounded-2xl border border-neutral-100">
            {/* Control: Monthly Traffic */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm font-semibold">
                <label className="text-neutral-700">Monthly Traffic</label>
                <span className="text-amber-600 font-mono">
                  {metrics.currentTraffic.toLocaleString()} visitors
                </span>
              </div>
              <input
                type="range"
                min="5000"
                max="200000"
                step="5000"
                value={metrics.currentTraffic}
                onChange={(e) =>
                  setMetrics({
                    ...metrics,
                    currentTraffic: Number(e.target.value),
                  })
                }
                className="w-full accent-amber-500 h-2 bg-neutral-200 rounded-lg cursor-pointer"
              />
            </div>

            {/* Control: Conversion Rate */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm font-semibold">
                <label className="text-neutral-700">Conversion Rate</label>
                <span className="text-amber-600 font-mono">
                  {metrics.conversionRate}%
                </span>
              </div>
              <input
                type="range"
                min="0.1"
                max="10"
                step="0.1"
                value={metrics.conversionRate}
                onChange={(e) =>
                  setMetrics({
                    ...metrics,
                    conversionRate: Number(e.target.value),
                  })
                }
                className="w-full accent-amber-500 h-2 bg-neutral-200 rounded-lg cursor-pointer"
              />
            </div>

            {/* Control: Average Order Value */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm font-semibold">
                <label className="text-neutral-700">
                  Average Order Value / ACV
                </label>
                <span className="text-amber-600 font-mono">
                  ${metrics.avgOrderValue}
                </span>
              </div>
              <input
                type="range"
                min="20"
                max="1000"
                step="10"
                value={metrics.avgOrderValue}
                onChange={(e) =>
                  setMetrics({
                    ...metrics,
                    avgOrderValue: Number(e.target.value),
                  })
                }
                className="w-full accent-amber-500 h-2 bg-neutral-200 rounded-lg cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* Right Column: Premium High-End Results Presentation Matrix */}
        <div className="lg:col-span-7 bg-neutral-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden group border border-neutral-800">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl pointer-events-none transition-transform group-hover:scale-125 duration-700" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
            <div className="p-6 bg-neutral-800/40 rounded-2xl border border-neutral-800">
              <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400 flex items-center gap-2">
                Current Projected Runway
              </p>
              <p className="text-3xl font-bold font-mono mt-2 text-neutral-200">
                ${currentRevenue.toLocaleString()}{" "}
                <span className="text-sm font-normal text-neutral-500">
                  /mo
                </span>
              </p>
            </div>

            <div className="p-6 bg-neutral-800/40 rounded-2xl border border-neutral-800">
              <p className="text-xs font-semibold uppercase tracking-wider text-amber-400 flex items-center gap-2">
                <FiTrendingUp /> Optimized Target Runway
              </p>
              <p className="text-3xl font-bold font-mono mt-2 text-white">
                ${simulatedRevenue.toLocaleString()}{" "}
                <span className="text-sm font-normal text-neutral-400">
                  /mo
                </span>
              </p>
            </div>
          </div>

          {/* Core Visual Anchor: Net Scale Lift */}
          <div className="mt-8 pt-8 border-t border-neutral-800 relative z-10">
            <p className="text-sm font-medium text-neutral-400 uppercase tracking-widest">
              Net Monthly Revenue Lift
            </p>
            <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 mt-2">
              <h3 className="text-5xl md:text-6xl font-black text-amber-400 font-mono tracking-tight drop-shadow-md">
                +${liftAmount.toLocaleString()}
              </h3>
              <button className="flex items-center gap-2 bg-amber-400 text-black px-6 py-3 rounded-full font-bold text-sm tracking-wide shadow-lg hover:bg-amber-300 transition-all active:scale-95 group/btn">
                Capture This Growth
                <FiArrowRight className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
