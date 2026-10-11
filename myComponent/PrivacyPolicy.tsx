"use client";

import React, { useState } from "react";
import { FiShield, FiFileText, FiLock, FiAlertCircle } from "react-icons/fi";

type ActiveTab = "privacy" | "terms";

export default function PrivacyPolicy() {
  const [activeTab, setActiveTab] = useState<ActiveTab>("privacy");

  return (
    <section
      id="privacy"
      className="w-full py-24 bg-white text-neutral-900 px-4 md:px-8 max-w-7xl mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Interactive Component Sub-Navigation Tab Matrix */}
        <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
          <div>
            <span className="text-xs font-bold tracking-widest uppercase text-emerald-500 bg-emerald-50 px-3 py-1 rounded-full">
              Legal Framework
            </span>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight mt-3 text-neutral-900">
              Compliance & Protocol.
            </h2>
            <p className="text-neutral-500 mt-2 text-sm leading-relaxed">
              Transparent definitions governing your brand infrastructure
              datasets, scaling simulator cookies, and WhatsApp funnel pipeline
              metrics.
            </p>
          </div>

          <div className="flex flex-col gap-2 bg-neutral-50 p-3 rounded-2xl border border-neutral-200/60">
            <button
              onClick={() => setActiveTab("privacy")}
              className={`flex items-center gap-3 w-full px-4 py-3 rounded-xl font-bold text-sm transition-all ${
                activeTab === "privacy"
                  ? "bg-neutral-900 text-white shadow-md"
                  : "text-neutral-600 hover:bg-neutral-200/50 hover:text-neutral-900"
              }`}
            >
              <FiShield className="text-base" /> Privacy Policy
            </button>
            <button
              onClick={() => setActiveTab("terms")}
              className={`flex items-center gap-3 w-full px-4 py-3 rounded-xl font-bold text-sm transition-all ${
                activeTab === "terms"
                  ? "bg-neutral-900 text-white shadow-md"
                  : "text-neutral-600 hover:bg-neutral-200/50 hover:text-neutral-900"
              }`}
            >
              <FiFileText className="text-base" /> Terms of Deployment
            </button>
          </div>
        </div>

        {/* Right Column: High-End Typography Presentation Area */}
        <div className="lg:col-span-8 bg-white border border-neutral-200/80 p-8 md:p-12 rounded-3xl shadow-sm min-h-125">
          {activeTab === "privacy" && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="border-b border-neutral-100 pb-4">
                <div className="flex items-center gap-2 text-emerald-500 text-sm font-bold uppercase tracking-wider">
                  <FiLock /> Protocol Document
                </div>
                <h3 className="text-2xl font-black text-neutral-900 tracking-tight mt-1">
                  Privacy Policy
                </h3>
                <p className="text-xs text-neutral-400 font-mono mt-1">
                  Last Updated: October 2026
                </p>
              </div>

              <div className="space-y-4 text-sm text-neutral-600 leading-relaxed">
                <h4 className="text-base font-bold text-neutral-900">
                  1. Data Capture & Acquisition Funnels
                </h4>
                <p>
                  We securely capture your operational scale metrics, full name,
                  and business identity exclusively via our custom input nodes.
                  These elements populate structured pipeline templates
                  delivered voluntarily over external encrypted communication
                  architectures.
                </p>

                <h4 className="text-base font-bold text-neutral-900">
                  2. Pixel Trackers & Simulation Cookie Metrics
                </h4>
                <p>
                  This portal deploys localized browser state memory components
                  to handle the Interactive ROI Growth Simulator computations
                  seamlessly. We do not transmit simulation telemetry assets or
                  business numbers to external central data pools without direct
                  explicit consent configurations.
                </p>

                <h4 className="text-base font-bold text-neutral-900">
                  3. Direct Messaging Integration Disclosures
                </h4>
                <p>
                  When opting to launch data packets using our strategic
                  conversion actions, you acknowledge payloads explicitly leave
                  this client application wrapper to format native messaging
                  sequences within the external secure ecosystem parameters of
                  the WhatsApp communications tool.
                </p>
              </div>
            </div>
          )}

          {activeTab === "terms" && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="border-b border-neutral-100 pb-4">
                <div className="flex items-center gap-2 text-emerald-500 text-sm font-bold uppercase tracking-wider">
                  <FiAlertCircle /> Agreement Framework
                </div>
                <h3 className="text-2xl font-black text-neutral-900 tracking-tight mt-1">
                  Terms of Deployment
                </h3>
                <p className="text-xs text-neutral-400 font-mono mt-1">
                  Last Updated: October 2026
                </p>
              </div>

              <div className="space-y-4 text-sm text-neutral-600 leading-relaxed">
                <h4 className="text-base font-bold text-neutral-900">
                  1. Revenue Simulation Disclaimers
                </h4>
                <p>
                  Mathematical models rendered by the Interactive ROI Calculator
                  present computational projections under optimized
                  environments. They do not represent exact contractual
                  guarantees or rigid revenue commitments. Actual conversion
                  yields remain dependent on macro-market conditions, localized
                  brand authority, and strategic execution velocity.
                </p>

                <h4 className="text-base font-bold text-neutral-900">
                  2. High-Ticket Strategic Delivery Limits
                </h4>
                <p>
                  Submitting qualified funnel optimization assets does not
                  establish an immediate agency partnership framework. Growth
                  acceleration audits and fractional operations remain fully
                  subjective to approval matrixes verified manually
                  post-handshake.
                </p>

                <h4 className="text-base font-bold text-neutral-900">
                  3. Proprietary Design Ecosystem Rights
                </h4>
                <p>
                  All structural design elements, performance copy components,
                  custom tracking matrices, and layout frameworks embedded on
                  this web application belong exclusively to the Growth Marketer
                  operational entity and cannot be cloned or distributed under
                  any alternative commercial brand identity.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
