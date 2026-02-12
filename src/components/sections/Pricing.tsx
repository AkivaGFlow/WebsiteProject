import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";

function GreenCheck() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className="flex-shrink-0 mt-[3px]"
    >
      <path
        d="M3.5 8.5L6.5 11.5L12.5 4.5"
        stroke="#1B6B4A"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// TODO: Verify these calculations with current pricing
const exampleScenarios = [
  {
    label: "400 calls/mo, 55% resolved",
    cost: "\u2248 $1,885/mo",
  },
  {
    label: "800 calls/mo, 60% resolved",
    cost: "\u2248 $2,340/mo",
  },
];

const noLines = [
  "No per-minute billing",
  "No hidden fees",
  "No long-term contract required",
];

export function Pricing() {
  return (
    <SectionWrapper background="white" id="pricing">
      <SectionHeader title="Simple pricing. No per-minute billing." />

      <div className="max-w-[640px] mx-auto bg-white border border-[#E2E4E9] rounded-[8px] p-[32px] md:p-[48px] shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
        {/* Price line */}
        <p className="text-[22px] md:text-[28px] font-bold text-[#1A1A2E] text-center mb-[24px]">
          $1,500/month base + $1.75 per resolved call
        </p>

        {/* Divider */}
        <div className="h-[1px] bg-[#E2E4E9]" />

        {/* Resolved definition */}
        <div className="mt-[24px] bg-[#F0F4F2] rounded-[6px] p-[16px]">
          <p className="text-[16px] text-[#1A1A2E] leading-[1.6]">
            What &ldquo;resolved&rdquo; means: the agent handled the call
            without requiring staff time. If a call gets transferred to your
            team, you&rsquo;re not charged for it.
          </p>
        </div>

        {/* No lines */}
        <div className="flex flex-col gap-[8px] mt-[24px]">
          {noLines.map((line) => (
            <div key={line} className="flex items-start gap-[10px]">
              <GreenCheck />
              <span className="text-[16px] text-[#4A4A68]">{line}</span>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-[1px] bg-[#E2E4E9] mt-[24px]" />

        {/* Example scenarios */}
        <div className="mt-[24px]">
          <p className="text-[14px] font-semibold text-[#6B6B82] mb-[12px]">
            Example costs
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[12px]">
            {exampleScenarios.map((scenario) => (
              <div
                key={scenario.label}
                className="border border-[#E2E4E9] rounded-[6px] p-[16px]"
              >
                <p className="text-[14px] text-[#6B6B82] mb-[6px]">
                  {scenario.label}
                </p>
                <p className="text-[16px] font-semibold text-[#1A1A2E]">
                  {scenario.cost}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-[32px] text-center">
          <Button variant="primary">Book a Demo</Button>
          <p className="text-[14px] text-[#6B6B82] mt-[12px]">
            15 minutes &middot; practice-specific demo &middot; you test it
            yourself
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
