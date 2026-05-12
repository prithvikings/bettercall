import React from "react";

const Faq = () => {
  return (
    <section className="w-full max-w-6xl mx-auto border-x border-zinc-200 bg-zinc-900 text-white">
      <div className="px-8 py-12 lg:px-16 lg:py-16">
        {/* Header */}
        <div className="flex justify-between items-end gap-8 mb-12">
          <div>
            <p className="text-[13px] font-bold uppercase tracking-[0.4em] text-zinc-500 mb-1">
              faq
            </p>
            <h2 className="text-2xl font-semibold tracking-tight text-white lg:text-3xl">
              Frequently asked questions
            </h2>
          </div>
          <button className="rounded-xl px-5 py-2.5 text-center text-xs font-semibold transition duration-150 active:scale-[0.98] bg-zinc-50 text-zinc-900 hidden md:inline-flex">
            Contact Support
          </button>
        </div>

        {/* Accordion Grid (2 Columns on Desktop, 1 on Mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          {/* Question 1 */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between gap-4">
              <p className="text-sm font-bold tracking-tight text-white">
                How long does it take to onboard a new client?
              </p>
              <div className="text-zinc-300">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </div>
            </div>
            <p className="text-xs leading-relaxed text-zinc-500">
              Implementation typically takes 2-3 weeks, depending on your
              technical requirements and data migration needs.
            </p>
            <div className="h-[1px] w-full bg-zinc-800 mt-2"></div>
          </div>

          {/* Question 2 */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between gap-4">
              <p className="text-sm font-bold tracking-tight text-white">
                Is the platform compliant with global privacy laws?
              </p>
              <div className="text-zinc-300">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </div>
            </div>
            <p className="text-xs leading-relaxed text-zinc-500">
              Yes, we are compliant with GDPR, CCPA, and HIPAA standards.
              Security is our top priority.
            </p>
            <div className="h-[1px] w-full bg-zinc-800 mt-2"></div>
          </div>

          {/* Question 3 */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between gap-4">
              <p className="text-sm font-bold tracking-tight text-white">
                Can the AI handle multiple languages simultaneously?
              </p>
              <div className="text-zinc-300">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </div>
            </div>
            <p className="text-xs leading-relaxed text-zinc-500">
              The platform supports 15+ languages with real-time translation
              capabilities.
            </p>
            <div className="h-[1px] w-full bg-zinc-800 mt-2"></div>
          </div>

          {/* Question 4 */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between gap-4">
              <p className="text-sm font-bold tracking-tight text-white">
                What kind of support do you offer post-launch?
              </p>
              <div className="text-zinc-300">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </div>
            </div>
            <p className="text-xs leading-relaxed text-zinc-500">
              We offer 24/7 email support and dedicated account managers for
              enterprise clients.
            </p>
            <div className="h-[1px] w-full bg-zinc-800 mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
