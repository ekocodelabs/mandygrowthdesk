"use client";

import React, { useState } from "react";
import { FiArrowRight, FiArrowLeft, FiSend } from "react-icons/fi";

// 1. Strict TypeScript Data Contracts for strict compilation safety
interface LeadFormData {
  fullName: string;
  companyName: string;
  currentRevenue: string;
  primaryBottleneck: string;
  marketingBudget: string;
}

export default function MultiLeadFormLayout() {
  // Replace this with your exact international format WhatsApp number (no spaces or '+' sign)
  const WHATSAPP_NUMBER = "2348185350499";

  // 2. State management structures for modern step progression tracking
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [formData, setFormData] = useState<LeadFormData>({
    fullName: "",
    companyName: "",
    currentRevenue: "",
    primaryBottleneck: "",
    marketingBudget: "",
  });

  const totalSteps = 3;

  // 3. Form Mutation Handlers
  const updateField = (field: keyof LeadFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep < totalSteps) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  // 4. Form Submission Execution Engine - Formats payload and securely redirects to WhatsApp
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Clean structural template formatting for the final WhatsApp message payload
    const messageTemplate = `🚀 *New High-Ticket Growth Lead* 🚀

*Contact:* ${formData.fullName}
*Company:* ${formData.companyName}
*Current Monthly Revenue:* ${formData.currentRevenue}
*Primary Bottleneck:* ${formData.primaryBottleneck}
*Target Monthly Ad Budget:* ${formData.marketingBudget}

_Sent via Growth Marketer Portal Pipeline._`;

    const encodedMessage = encodeURIComponent(messageTemplate);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    // Open WhatsApp portal securely in a new context browser layer
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  // Helper validation logic checking active field conditions to toggle CTA disabled status cleanly
  const isStepValid = () => {
    if (currentStep === 1)
      return (
        formData.fullName.trim() !== "" && formData.companyName.trim() !== ""
      );
    if (currentStep === 2)
      return (
        formData.currentRevenue !== "" && formData.primaryBottleneck !== ""
      );
    if (currentStep === 3) return formData.marketingBudget !== "";
    return false;
  };
  return (
    <section
      id="audit-funnel"
      className="w-full py-24 bg-white text-neutral-900 px-4 md:px-8"
    >
      <div className="max-w-xl mx-auto bg-neutral-50 border border-neutral-200/80 p-8 md:p-12 rounded-3xl shadow-xl relative overflow-hidden">
        {/* Visual Progress Architecture Component Line */}
        <div className="absolute top-0 left-0 w-full bg-neutral-200 h-1.5">
          <div
            className="bg-emerald-500 h-1.5 transition-all duration-500 ease-out"
            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
          />
        </div>

        <div className="mb-8 flex justify-between items-center">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">
            Step {currentStep} of {totalSteps}
          </span>
          <span className="text-xs text-neutral-400 font-medium">
            Direct Routing to Strategy Desk
          </span>
        </div>

        {/* Dynamic Multi-Step Portal Container */}
        <form
          onSubmit={currentStep === totalSteps ? handleSubmit : handleNext}
          className="space-y-6"
        >
          {/* STEP 1: Core Biometrics */}
          {currentStep === 1 && (
            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <div>
                <h3 className="text-2xl font-black text-neutral-900 tracking-tight">
                  Let's audit your trajectory.
                </h3>
                <p className="text-sm text-neutral-500 mt-1">
                  Who is speaking, and what is your brand infrastructure name?
                </p>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-wider text-neutral-700">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  value={formData.fullName}
                  onChange={(e) => updateField("fullName", e.target.value)}
                  className="w-full px-4 py-3 bg-white border border-neutral-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-400/20 rounded-xl outline-none transition-all text-sm"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-wider text-neutral-700">
                  Company Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Acme Metrics Inc."
                  value={formData.companyName}
                  onChange={(e) => updateField("companyName", e.target.value)}
                  className="w-full px-4 py-3 bg-white border border-neutral-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-400/20 rounded-xl outline-none transition-all text-sm"
                />
              </div>
            </div>
          )}

          {/* STEP 2: Qualification Metrics */}
          {currentStep === 2 && (
            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <div>
                <h3 className="text-2xl font-black text-neutral-900 tracking-tight">
                  Current Operational Status.
                </h3>
                <p className="text-sm text-neutral-500 mt-1">
                  Where are you stuck right now?
                </p>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-wider text-neutral-700">
                  Current Monthly Revenue
                </label>
                <select
                  value={formData.currentRevenue}
                  onChange={(e) =>
                    updateField("currentRevenue", e.target.value)
                  }
                  className="w-full px-4 py-3 bg-white border border-neutral-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-400/20 rounded-xl outline-none transition-all text-sm cursor-pointer"
                >
                  <option value="">Select Scale Range...</option>
                  <option value="Under \$10k/mo">Under \$10k/mo</option>
                  <option value="\$10k - \$50k/mo">\$10k - \$50k/mo</option>
                  <option value="\$50k - \$200k/mo">\$50k - \$200k/mo</option>
                  <option value="\$200k+/mo">\$200k+/mo</option>
                </select>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-wider text-neutral-700">
                  Primary Growth Bottleneck
                </label>
                <select
                  value={formData.primaryBottleneck}
                  onChange={(e) =>
                    updateField("primaryBottleneck", e.target.value)
                  }
                  className="w-full px-4 py-3 bg-white border border-neutral-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-400/20 rounded-xl outline-none transition-all text-sm cursor-pointer"
                >
                  <option value="">Select Biggest Issue...</option>
                  <option value="Low website conversion rate (CRO)">
                    Low website conversion rate (CRO)
                  </option>
                  <option value="Unprofitable paid acquisition channels">
                    Unprofitable paid acquisition channels
                  </option>
                  <option value="Stagnant customer lifetime value (LTV)">
                    Stagnant customer lifetime value (LTV)
                  </option>
                  <option value="Inefficient pipeline funnel architecture">
                    Inefficient pipeline funnel architecture
                  </option>
                </select>
              </div>
            </div>
          )}

          {/* STEP 3: Budget Intent Selection Layout */}
          {currentStep === 3 && (
            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <div>
                <h3 className="text-2xl font-black text-neutral-900 tracking-tight">
                  Scale Capital Allocation.
                </h3>
                <p className="text-sm text-neutral-500 mt-1">
                  What scale of asset allocation can you deploy for paid
                  acquisitions?
                </p>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-neutral-700 block mb-1">
                  Target Monthly Marketing Budget
                </label>
                {[
                  "Less than \$2,500 /mo",
                  "\$2,500 - \$10,000 /mo",
                  "\$10,000 - \$30,000 /mo",
                  "\$30,000+ /mo",
                ].map((budgetOption) => (
                  <label
                    key={budgetOption}
                    className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-all ${
                      formData.marketingBudget === budgetOption
                        ? "border-emerald-500 bg-emerald-50/50 text-neutral-900 font-semibold"
                        : "border-neutral-200 bg-white text-neutral-600 hover:bg-neutral-100/50"
                    }`}
                  >
                    <input
                      type="radio"
                      name="marketingBudget"
                      value={budgetOption}
                      checked={formData.marketingBudget === budgetOption}
                      onChange={() =>
                        updateField("marketingBudget", budgetOption)
                      }
                      className="accent-emerald-500 w-4 h-4"
                    />
                    <span className="text-sm">{budgetOption}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* Form Navigation Controls Frame */}
          <div className="pt-6 border-t border-neutral-200 flex justify-between gap-4">
            {currentStep > 1 ? (
              <button
                type="button"
                onClick={handlePrev}
                className="flex items-center gap-2 px-4 py-2 border border-neutral-300 text-neutral-600 hover:bg-neutral-100 text-sm font-semibold rounded-xl transition-all"
              >
                <FiArrowLeft /> Back
              </button>
            ) : (
              <div /> // Strategic flex structural spacing block
            )}

            <button
              type="submit"
              disabled={!isStepValid()}
              className={`flex items-center gap-2 px-6 py-3 font-bold text-sm rounded-xl transition-all shadow-md active:scale-95 ${
                isStepValid()
                  ? "bg-emerald-500 hover:bg-emerald-400 text-neutral-900"
                  : "bg-neutral-200 text-neutral-400 cursor-not-allowed shadow-none"
              }`}
            >
              {currentStep === totalSteps ? (
                <>
                  Lock in Blueprint Strategy <FiSend />
                </>
              ) : (
                <>
                  Continue <FiArrowRight />
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
