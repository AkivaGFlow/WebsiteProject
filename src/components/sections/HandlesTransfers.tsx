import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";

function CircleCheckIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="flex-shrink-0"
    >
      <circle cx="12" cy="12" r="10" stroke="#1B6B4A" strokeWidth="2" />
      <path
        d="m8 12 2.5 2.5L16 9"
        stroke="#1B6B4A"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="flex-shrink-0"
    >
      <circle cx="12" cy="12" r="10" stroke="#5A6070" strokeWidth="2" />
      <path
        d="M10 8l4 4-4 4"
        stroke="#5A6070"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const handlesItems = [
  "Scheduling, rescheduling, cancellations",
  "Office hours, location, directions",
  "Provider availability and visit types",
  "Appointment prep instructions",
  "Insurance and new patient intake questions",
  "General office FAQs",
];

const transfersItems = [
  "Symptoms or urgent clinical issues",
  "Prescription refills",
  "Lab results and test questions",
  "Billing and payment disputes",
  "Anything the agent isn\u2019t trained on",
  "Any call the patient requests a human",
];

export function HandlesTransfers() {
  return (
    <SectionWrapper background="gray" id="handles-transfers">
      <SectionHeader title="What it handles vs. what it transfers" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
        {/* Handles column */}
        <Card borderColor="green">
          <div className="flex items-center gap-[10px] mb-[20px]">
            <CircleCheckIcon />
            <h3 className="text-[18px] font-semibold text-[#1A1A2E]">
              What FlowHealth handles
            </h3>
          </div>
          <ul className="flex flex-col gap-[12px]">
            {handlesItems.map((item) => (
              <li key={item} className="flex items-start gap-[10px]">
                <span className="mt-[8px] block h-[6px] w-[6px] flex-shrink-0 rounded-full bg-[#1B6B4A]" />
                <span className="text-[16px] text-[#4A4A68]">{item}</span>
              </li>
            ))}
          </ul>
        </Card>

        {/* Transfers column */}
        <Card borderColor="gray">
          <div className="flex items-center gap-[10px] mb-[20px]">
            <ArrowRightIcon />
            <h3 className="text-[18px] font-semibold text-[#1A1A2E]">
              What gets transferred to your team
            </h3>
          </div>
          <ul className="flex flex-col gap-[12px]">
            {transfersItems.map((item) => (
              <li key={item} className="flex items-start gap-[10px]">
                <span className="mt-[8px] block h-[6px] w-[6px] flex-shrink-0 rounded-full bg-[#5A6070]" />
                <span className="text-[16px] text-[#4A4A68]">{item}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </SectionWrapper>
  );
}
