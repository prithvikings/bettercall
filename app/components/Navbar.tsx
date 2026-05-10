"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  interface NavItemProps {
    title: string;
    hasDropdown: boolean;
    children?: React.ReactNode;
  }

  const NavItem = ({ title, hasDropdown, children }: NavItemProps) => {
    return (
      <div
        className="relative py-4"
        onMouseEnter={() => setHoveredItem(title)}
        onMouseLeave={() => setHoveredItem(null)}
      >
        <div className="flex items-center gap-1 cursor-pointer group">
          <p className="text-[13px] transition-colors duration-200 font-medium group-hover:text-blue-600">
            {title}
          </p>

          {hasDropdown && (
            <svg
              className={`w-3 h-3 transition-transform duration-200 text-zinc-400 group-hover:text-blue-600 ${
                hoveredItem === title ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          )}
        </div>

        <AnimatePresence>
          {hoveredItem === title && hasDropdown && (
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.98 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute top-full left-0 pt-2"
            >
              <div className="bg-white border border-blue-200 shadow-xl min-w-[260px] flex flex-col p-2">
                {children}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  interface DropdownLinkProps {
    title: string;
    description: string;
  }

  const DropdownLink = ({ title, description }: DropdownLinkProps) => (
    <div className="flex flex-col p-3 cursor-pointer transition-colors duration-150 hover:bg-zinc-50 border-l-2 border-transparent hover:border-blue-500">
      <span className="text-[13px] font-semibold text-zinc-800">{title}</span>

      <span className="text-[11px] text-zinc-500 mt-0.5">{description}</span>
    </div>
  );

  return (
    <div className="w-full relative z-50">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between border-x border-blue-200 bg-white/70 backdrop-blur-md">
        {/* Logo */}
        <div className="logo cursor-pointer py-4">
          <Image
            src="/logo.avif"
            alt="logo"
            width={150}
            height={50}
            style={{ height: "auto" }}
          />
        </div>

        {/* Navigation */}
        <div className="content hidden md:flex items-center justify-center font-poppins gap-8 text-zinc-600 h-full">
          {/* Product */}
          <NavItem title="Product" hasDropdown={true}>
            <DropdownLink
              title="Business Phone"
              description="Shared calling for teams and businesses."
            />

            <DropdownLink
              title="CRM & Leads"
              description="Manage leads, follow-ups and conversations."
            />

            <DropdownLink
              title="WhatsApp Business"
              description="Shared inbox, campaigns and automation."
            />

            <DropdownLink
              title="Call Management"
              description="IVR, recordings and smart call routing."
            />

            <DropdownLink
              title="Analytics"
              description="Track calls, performance and customer activity."
            />
          </NavItem>

          {/* AI Employees */}
          <NavItem title="AI Employees" hasDropdown={true}>
            <DropdownLink
              title="AI Receptionist"
              description="Answer customer calls instantly with AI."
            />

            <DropdownLink
              title="AI Sales Agent"
              description="Qualify leads and automate follow-ups."
            />

            <DropdownLink
              title="AI Review Assistant"
              description="Reply to Google reviews automatically."
            />

            <DropdownLink
              title="AI Marketing Assistant"
              description="Generate campaigns and marketing content."
            />
          </NavItem>

          {/* Industries */}
          <NavItem title="Industries" hasDropdown={true}>
            <DropdownLink
              title="Real Estate"
              description="Handle property leads and client calls."
            />

            <DropdownLink
              title="Healthcare"
              description="Appointments and patient communication."
            />

            <DropdownLink
              title="Retail & Ecommerce"
              description="Manage orders and customer support."
            />

            <DropdownLink
              title="Education"
              description="Admissions and student engagement."
            />

            <DropdownLink
              title="Agencies"
              description="Centralize client communication."
            />

            <DropdownLink
              title="Hospitality"
              description="Bookings and guest interactions."
            />
          </NavItem>

          {/* Resources */}
          <NavItem title="Resources" hasDropdown={true}>
            <DropdownLink
              title="Customer Stories"
              description="See how businesses grow with Superfone."
            />

            <DropdownLink
              title="Blog"
              description="Insights on AI and business communication."
            />

            <DropdownLink
              title="Help Center"
              description="Setup guides and onboarding resources."
            />

            <DropdownLink
              title="API Documentation"
              description="Developer APIs and integrations."
            />
          </NavItem>

          {/* Pricing */}
          <NavItem title="Pricing" hasDropdown={false} />
        </div>

        {/* Buttons */}
        <div className="font-inter flex items-center gap-3 py-4">
          <button className="px-4 py-2 text-sm font-medium text-zinc-700 border border-zinc-300 bg-white transition-all duration-200 hover:bg-zinc-50 active:scale-[0.98]">
            Sign in
          </button>

          <button className="px-5 py-2 text-sm font-medium text-white bg-blue-600 shadow-sm transition-all duration-200 hover:bg-blue-700 hover:shadow-md active:scale-[0.98]">
            Start Free Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
