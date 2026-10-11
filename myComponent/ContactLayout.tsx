"use client";

import React from "react";
import {
  FiMail,
  FiMessageCircle,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
  FiArrowUpRight,
} from "react-icons/fi";

interface ContactChannel {
  name: string;
  label: string;
  value: string;
  href: string;
  icon: React.ReactNode;
  bgClass: string;
}

export default function ContactChannels() {
  // Replace these template values with your actual destination links or handles
  const CONTACT_CHANNELS: ContactChannel[] = [
    {
      name: "Email",
      label: "Direct Inquiries",
      value: "hello@growthdesk.co",
      href: "mailto:hello@growthdesk.co",
      icon: <FiMail className="text-xl" />,
      bgClass: "hover:border-neutral-900",
    },
    {
      name: "WhatsApp",
      label: "Instant Strategy Link",
      value: "+234 818 535 0499",
      href: "https://wa.me/2348185350499",
      icon: <FiMessageCircle className="text-xl text-emerald-600" />,
      bgClass: "hover:border-emerald-500/40 hover:bg-emerald-50/10",
    },
    {
      name: "LinkedIn",
      label: "Professional Network",
      value: "://linkedin.com",
      href: "https://linkedin.com",
      icon: <FiLinkedin className="text-xl text-blue-700" />,
      bgClass: "hover:border-blue-500/40 hover:bg-blue-50/10",
    },
    {
      name: "Instagram",
      label: "Behind the Scenes",
      value: "@growth.marketer",
      href: "https://instagram.com",
      icon: <FiInstagram className="text-xl text-pink-600" />,
      bgClass: "hover:border-pink-500/40 hover:bg-pink-50/10",
    },
    {
      name: "X (Twitter)",
      label: "Growth Frameworks & Thoughts",
      value: "@growth_desk",
      href: "https://x.com",
      icon: <FiTwitter className="text-xl text-neutral-900" />,
      bgClass: "hover:border-neutral-900/40 hover:bg-neutral-50",
    },
  ];

  return (
    <section
      id="contact"
      className="w-full py-24 bg-white text-neutral-900 px-4 md:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Layout Heading Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-bold tracking-widest uppercase text-emerald-600">
              Establish Connection
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-neutral-900 tracking-tight">
              Let's construct your scale blueprint.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:pt-8">
            <p className="text-neutral-500 text-base md:text-lg leading-relaxed max-w-xl">
              Ready to fix leaks in your acquisition funnels or expand customer
              lifetime margins? Choose your preferred secure network route below
              to connect with the strategy desk.
            </p>
          </div>
        </div>

        {/* Channels Grid Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CONTACT_CHANNELS.map((channel) => (
            <a
              key={channel.name}
              href={channel.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`bg-neutral-50 border border-neutral-200/80 p-6 rounded-2xl flex flex-col justify-between h-48 transition-all duration-300 group shadow-sm ${channel.bgClass}`}
            >
              {/* Card Upper Core Tier */}
              <div className="flex justify-between items-start">
                <div className="p-3 bg-white rounded-xl shadow-sm border border-neutral-100">
                  {channel.icon}
                </div>
                <FiArrowUpRight className="text-neutral-300 group-hover:text-emerald-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-xl" />
              </div>

              {/* Card Lower Text Elements Container */}
              <div className="space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 block">
                  {channel.label}
                </span>
                <h3 className="text-lg font-bold text-neutral-900">
                  {channel.name}
                </h3>
                <p className="text-sm font-medium text-neutral-600 truncate font-mono">
                  {channel.value}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
