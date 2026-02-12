import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";

function GreenCheck() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className="flex-shrink-0 mt-[2px]"
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

function GrayDash() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className="flex-shrink-0 mt-[2px]"
    >
      <path
        d="M4 8H12"
        stroke="#6B6B82"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

const builtForItems = [
  "Multi-provider specialty practices (5+ physicians)",
  "Dedicated scheduling or call center team (5+ staff)",
  "High inbound call volume with predictable patterns",
  "Using athenahealth, Nextech, Azalea Health, or DrChrono",
];

const notAFitItems = [
  "Solo practitioners who answer their own phone",
  "Practices where one person handles phones, billing, and clinical support",
  "Practices not on a supported EMR (yet)",
];

export function WhoItsFor() {
  return (
    <SectionWrapper background="gray" id="who-its-for">
      <SectionHeader title="Is FlowHealth right for your practice?" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
        {/* Built for */}
        <Card borderColor="none">
          <div className="flex items-center gap-[8px] mb-[20px]">
            <GreenCheck />
            <span className="text-[18px] font-semibold text-[#1A1A2E]">
              Built for
            </span>
          </div>
          <div className="flex flex-col gap-[12px]">
            {builtForItems.map((item) => (
              <div
                key={item}
                className="flex items-start gap-[10px] text-[16px] text-[#4A4A68]"
              >
                <GreenCheck />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Probably not a fit */}
        <Card borderColor="none">
          <div className="flex items-center gap-[8px] mb-[20px]">
            <GrayDash />
            <span className="text-[18px] font-medium text-[#6B6B82]">
              Probably not a fit
            </span>
          </div>
          <div className="flex flex-col gap-[12px]">
            {notAFitItems.map((item) => (
              <div
                key={item}
                className="flex items-start gap-[10px] text-[16px] text-[#6B6B82]"
              >
                <GrayDash />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </SectionWrapper>
  );
}
