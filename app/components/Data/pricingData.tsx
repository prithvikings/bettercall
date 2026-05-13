import {
  MessageCircleMore,
  SettingsIcon,
  Sparkles,
  LayoutDashboard,
} from "lucide-react";

export const pricingTiers = [
  {
    name: "Starter",
    description: "Shared business communication for growing teams.",
    monthlyPrice: "24",
    yearlyPrice: "19",
    positioning: "Replace personal numbers with business communication.",
    buttonText: "Start Free Trial",
    buttonVariant: "secondary",
    features: [
      "Shared business number",
      "Team call handling",
      "WhatsApp inbox",
      "Notes & reminders",
      "Call routing",
      "Basic follow-ups",
    ],
  },
  {
    name: "Growth",
    badge: "Most Popular",
    description: "Organize customer communication across your entire team.",
    monthlyPrice: "59",
    yearlyPrice: "49",
    positioning: "Keep every customer conversation organized and actionable.",
    buttonText: "Scale Your Team",
    buttonVariant: "primary",
    features: [
      "Everything in Starter",
      "Lead management",
      "Shared CRM",
      "Team collaboration",
      "Workflow automations",
      "Role permissions",
      "Customer tracking",
    ],
  },
  {
    name: "AI Workforce",
    description:
      "AI employees that answer, qualify, follow up, and operate 24/7.",
    monthlyPrice: "119",
    yearlyPrice: "99",
    positioning: "Your AI team replies to customers around the clock.",
    buttonText: "Deploy AI Employees",
    buttonVariant: "secondary",
    features: [
      "Everything in Growth",
      "AI Receptionist",
      "AI Sales Agent",
      "AI Follow-ups",
      "AI Review Assistant",
      "AI Workflow Automation",
      "Smart lead qualification",
    ],
  },
];

export const addOns = [
  { icon: MessageCircleMore, label: "WhatsApp API" },
  { icon: SettingsIcon, label: "Custom automations" },
  { icon: Sparkles, label: "AI voice agents" },
  { icon: LayoutDashboard, label: "CRM integrations" },
];
