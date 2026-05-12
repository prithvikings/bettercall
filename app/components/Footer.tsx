"use client";
import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Github01Icon,
  NewTwitterRectangleIcon,
  Linkedin02Icon,
} from "@hugeicons/core-free-icons";

const Footer = () => {
  const footerLinks = {
    product: [
      { name: "Business Phone", href: "#" },
      { name: "CRM & Leads", href: "#" },
      { name: "WhatsApp Business", href: "#" },
      { name: "Call Management", href: "#" },
      { name: "Analytics", href: "#" },
      { name: "Pricing", href: "#" },
    ],
    ai: [
      { name: "AI Receptionist", href: "#" },
      { name: "AI Sales Agent", href: "#" },
      { name: "AI Review Assistant", href: "#" },
      { name: "AI Automations", href: "#" },
    ],
    resources: [
      { name: "Customer Stories", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Help Center", href: "#" },
      { name: "API Documentation", href: "#" },
      { name: "System Status", href: "#" },
    ],
    company: [
      { name: "About Us", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Contact Sales", href: "#" },
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
    ],
  };

  return (
    <footer className="relative w-full bg-white font-inter z-20">
      {/* Top Divider */}
      <div className="h-[1px] w-full bg-zinc-200"></div>

      {/* Main Footer Container */}
      <div className="relative max-w-6xl mx-auto border-x border-blue-200 flex flex-col">
        {/* --- Frame Accents --- */}
        <div className="absolute -top-[2px] -left-[2px] w-4 h-4 border-t-[3px] border-l-[3px] border-blue-500 z-20"></div>
        <div className="absolute -top-[2px] -right-[2px] w-4 h-4 border-t-[3px] border-r-[3px] border-blue-500 z-20"></div>

        {/* Note: I removed the bottom corner accents here to make the footer flush with the bottom of the screen. If you want them back, uncomment below. */}
        {/* <div className="absolute -bottom-[2px] -left-[2px] w-4 h-4 border-b-[3px] border-l-[3px] border-blue-500 z-20"></div> */}
        {/* <div className="absolute -bottom-[2px] -right-[2px] w-4 h-4 border-b-[3px] border-r-[3px] border-blue-500 z-20"></div> */}

        {/* --- Top Section: Links & Info --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-x-8 gap-y-12 px-8 py-16 lg:px-12 lg:py-16">
          {/* Brand Column */}
          <div className="lg:col-span-2 flex flex-col items-start pr-4">
            <div className="mb-6">
              <Image
                src="/logo.avif"
                alt="Superfone Logo"
                width={140}
                height={40}
                style={{ height: "auto" }}
                className="opacity-90"
              />
            </div>
            <p className="text-sm text-zinc-500 leading-relaxed max-w-[280px] font-poppins">
              The unified communication platform for modern teams. Run calls,
              WhatsApp, CRM, and AI agents from one place.
            </p>

            <div className="flex items-center gap-4 mt-8">
              <a
                href="#"
                className="text-zinc-400 hover:text-blue-600 transition-colors"
              >
                <HugeiconsIcon icon={NewTwitterRectangleIcon} size={20} />
              </a>

              <a
                href="#"
                className="text-zinc-400 hover:text-blue-600 transition-colors"
              >
                <HugeiconsIcon icon={Linkedin02Icon} size={20} />
              </a>

              <a
                href="#"
                className="text-zinc-400 hover:text-blue-600 transition-colors"
              >
                <HugeiconsIcon icon={Github01Icon} size={20} />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-mono font-semibold tracking-wider text-zinc-900 uppercase mb-2">
              Product
            </h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="group flex items-center text-sm text-zinc-500 hover:text-blue-600 transition-colors w-fit whitespace-nowrap"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-mono font-semibold tracking-wider text-zinc-900 uppercase mb-2">
              AI Employees
            </h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.ai.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="group flex items-center text-sm text-zinc-500 hover:text-blue-600 transition-colors w-fit whitespace-nowrap"
                  >
                    {link.name}
                    {link.name.includes("Agent") && (
                      <span className="ml-2 px-1.5 py-0.5 rounded-[3px] bg-purple-50 border border-purple-200 text-purple-600 text-[9px] font-bold uppercase tracking-wider">
                        New
                      </span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-mono font-semibold tracking-wider text-zinc-900 uppercase mb-2">
              Resources
            </h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-1 text-sm text-zinc-500 hover:text-blue-600 transition-colors w-fit whitespace-nowrap"
                  >
                    {link.name}
                    {link.name === "API Documentation" && (
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-mono font-semibold tracking-wider text-zinc-900 uppercase mb-2">
              Company
            </h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors w-fit whitespace-nowrap"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* --- Bottom Section: Legal & Status --- */}
        <div className="border-t border-zinc-100 px-8 py-4 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xs text-zinc-500 font-poppins">
            © {new Date().getFullYear()} Superfone Inc. All rights reserved.
          </div>

          {/* System Status Indicator */}
          <div className="flex items-center gap-2 px-3 py-1.5 bg-zinc-50 border border-zinc-200 shadow-sm cursor-pointer hover:bg-zinc-100 transition-colors">
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full bg-green-400 opacity-75 rounded-full"></span>
              <span className="relative inline-flex h-2 w-2 bg-green-500 rounded-full"></span>
            </div>
            <span className="text-[11px] font-mono text-zinc-600 uppercase tracking-wide mt-[1px]">
              All systems operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
