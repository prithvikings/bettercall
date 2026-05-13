import React from "react";

export const industriesData = [
  {
    id: "real-estate",
    title: "Real Estate",
    shortDesc:
      "Convert property inquiries into booked site visits automatically.",
    longDesc:
      "Capture leads from calls, ads, and WhatsApp. Instantly assign brokers, automate follow-ups, and keep every conversation organized.",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
        <polyline points="9 22 9 12 15 12 15 22"></polyline>
      </svg>
    ),
    visuals: {
      taskTitle: "Assign Broker",
      taskDesc: "Route new lead from MagicBricks to nearest available agent.",
      int1: "MagicBricks",
      int2: "WhatsApp",
    },
  },
  {
    id: "clinics",
    title: "Clinics",
    shortDesc: "Never miss a patient inquiry or appointment again.",
    longDesc:
      "Handle appointment calls, reminders, follow-ups, and patient communication from one shared business system.",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
      </svg>
    ),
    visuals: {
      taskTitle: "Confirm Appointment",
      taskDesc: "Send automated WhatsApp reminder for Dental Checkup at 4 PM.",
      int1: "Practo",
      int2: "Calendar",
    },
  },
  {
    id: "education",
    title: "Education",
    shortDesc: "Turn student inquiries into admissions faster.",
    longDesc:
      "Track counseling calls, automate follow-ups, and help admission teams respond before leads go cold.",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
      </svg>
    ),
    visuals: {
      taskTitle: "Send Brochure",
      taskDesc: "Trigger automated email with B.Tech CSE course details.",
      int1: "FB Ads",
      int2: "Gmail",
    },
  },
  {
    id: "d2c",
    title: "D2C & Ecommerce",
    shortDesc: "Manage customer conversations without losing sales.",
    longDesc:
      "Centralize WhatsApp chats, support calls, order inquiries, and follow-ups across your entire team.",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="9" cy="21" r="1"></circle>
        <circle cx="20" cy="21" r="1"></circle>
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
      </svg>
    ),
    visuals: {
      taskTitle: "Cart Recovery",
      taskDesc: "Follow up on abandoned cart #8921 with a 10% discount code.",
      int1: "Shopify",
      int2: "Stripe",
    },
  },
  {
    id: "agencies",
    title: "Agencies",
    shortDesc: "Keep every client conversation organized across your team.",
    longDesc:
      "Track calls, assign leads, manage follow-ups, and maintain visibility across all client interactions.",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    ),
    visuals: {
      taskTitle: "Client Onboarding",
      taskDesc: "Create dedicated Slack channel and Jira epic for New Client.",
      int1: "Slack",
      int2: "Jira",
    },
  },
  {
    id: "retail",
    title: "Retail",
    shortDesc: "Handle customer calls and store inquiries at scale.",
    longDesc:
      "Route calls to the right staff, respond faster on WhatsApp, and keep customer interactions centralized.",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
        <path d="M9 22V12h6v10"></path>
      </svg>
    ),
    visuals: {
      taskTitle: "Inventory Check",
      taskDesc: "Confirm stock availability for SKU-902 to customer inquiry.",
      int1: "POS Sys",
      int2: "WhatsApp",
    },
  },
];
