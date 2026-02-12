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

function ClipboardIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className="flex-shrink-0"
    >
      <rect
        x="4"
        y="2"
        width="8"
        height="3"
        rx="1"
        stroke="#4A4A68"
        strokeWidth="1.5"
      />
      <rect
        x="2"
        y="4"
        width="12"
        height="10"
        rx="1.5"
        stroke="#4A4A68"
        strokeWidth="1.5"
      />
      <path
        d="M5 8.5h6M5 11h4"
        stroke="#4A4A68"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

const logRows = [
  {
    time: "9:12a",
    intent: "Schedule follow-up",
    outcome: "\u2713 Booked",
    outcomeType: "green" as const,
  },
  {
    time: "9:34a",
    intent: "Prescription refill",
    outcome: "\u2192 Transferred",
    outcomeType: "gray" as const,
  },
  {
    time: "9:41a",
    intent: "Cancel appointment",
    outcome: "\u2713 Handled",
    outcomeType: "green" as const,
  },
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

      {/* Call Log Preview */}
      <div className="mt-[32px] bg-white border border-[#E2E4E9] rounded-[8px] p-[24px]">
        <div className="flex items-center gap-[8px] mb-[16px]">
          <ClipboardIcon />
          <p className="text-[15px] font-semibold text-[#1A1A2E]">
            Every call is logged. Here&apos;s what you see.
          </p>
        </div>

        {/* Desktop table */}
        <div className="hidden md:block">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#E2E4E9]">
                <th className="text-left text-[13px] font-semibold text-[#6B6B82] uppercase tracking-wide pb-[10px]">
                  Time
                </th>
                <th className="text-left text-[13px] font-semibold text-[#6B6B82] uppercase tracking-wide pb-[10px]">
                  Caller Intent
                </th>
                <th className="text-left text-[13px] font-semibold text-[#6B6B82] uppercase tracking-wide pb-[10px]">
                  Outcome
                </th>
                <th className="pb-[10px]" />
              </tr>
            </thead>
            <tbody>
              {logRows.map((row, i) => (
                <tr
                  key={row.time}
                  className={`hover:bg-[#F5F6F8] ${i % 2 === 1 ? "bg-[#F8F9FA]" : ""}`}
                >
                  <td className="py-[12px] text-[14px] text-[#4A4A68]">
                    {row.time}
                  </td>
                  <td className="py-[12px] text-[14px] text-[#4A4A68]">
                    {row.intent}
                  </td>
                  <td className="py-[12px]">
                    <span
                      className={`inline-block text-[12px] font-semibold rounded-[4px] px-[8px] py-[4px] ${
                        row.outcomeType === "green"
                          ? "text-[#1B6B4A] bg-[#F0F4F2]"
                          : "text-[#5A6070] bg-[#F5F6F8]"
                      }`}
                    >
                      {row.outcome}
                    </span>
                  </td>
                  <td className="py-[12px] text-right">
                    <a
                      href="#patient-experience"
                      className="text-[14px] text-[#1B6B4A] hover:underline"
                    >
                      View transcript
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile card layout */}
        <div className="md:hidden flex flex-col gap-[12px]">
          {logRows.map((row) => (
            <div
              key={row.time}
              className="border border-[#E2E4E9] rounded-[6px] p-[12px] bg-[#F8F9FA]"
            >
              <div className="flex items-center justify-between mb-[6px]">
                <span className="text-[14px] text-[#6B6B82]">{row.time}</span>
                <span
                  className={`inline-block text-[12px] font-semibold rounded-[4px] px-[8px] py-[4px] ${
                    row.outcomeType === "green"
                      ? "text-[#1B6B4A] bg-[#F0F4F2]"
                      : "text-[#5A6070] bg-[#F5F6F8]"
                  }`}
                >
                  {row.outcome}
                </span>
              </div>
              <p className="text-[14px] text-[#4A4A68] mb-[6px]">
                {row.intent}
              </p>
              <a
                href="#patient-experience"
                className="text-[14px] text-[#1B6B4A] hover:underline"
              >
                View transcript
              </a>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
