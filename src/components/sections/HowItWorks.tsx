import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";

function LockIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
      className="flex-shrink-0"
    >
      <rect
        x="3"
        y="6"
        width="8"
        height="6"
        rx="1"
        stroke="#1B6B4A"
        strokeWidth="1.5"
      />
      <path
        d="M5 6V4a2 2 0 1 1 4 0v2"
        stroke="#1B6B4A"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

const steps = [
  {
    number: 1,
    title: "We learn your practice",
    body: "One onboarding call. We learn your providers, visit types, scheduling rules, insurance requirements, office protocols, and the things that only your best front desk person knows. We also learn what should never be handled by the agent \u2014 so it knows when to transfer.",
    control: "You define the boundaries",
    highlight: false,
  },
  {
    number: 2,
    title: "We build your agent",
    body: "We configure an AI receptionist trained specifically on your practice. Not a generic script. An agent that knows Dr.\u00A0Smith sees new patients on Tuesdays, that your cancellation policy is 24\u00A0hours, and that cataract consults require a referral. It schedules directly inside your EMR.",
    control: "Built on your rules, not generic scripts",
    highlight: false,
  },
  {
    number: 3,
    title: "You test it",
    body: "Before anything goes live, you call the agent yourself. Ask it your hardest questions. Try to trip it up. See how it handles the scenarios your front desk struggles with. If something isn\u2019t right, we adjust it until it is.",
    control: "You test and approve before go-live",
    highlight: true,
  },
  {
    number: 4,
    title: "Patients start calling",
    body: "Calls route to FlowHealth. Patients get immediate answers and scheduled appointments. Complex or clinical calls get transferred to the right staff member. You see every call, every transcript, and every appointment in real time. Nothing happens that you can\u2019t review.",
    control: "You review every transcript and appointment",
    highlight: false,
  },
];

const sidebarItems = [
  { icon: "\uD83D\uDCCB", label: "Call logs" },
  { icon: "\uD83D\uDCDD", label: "Full transcripts" },
  { icon: "\uD83D\uDCC5", label: "Appointments in EMR" },
  { icon: "\uD83D\uDD00", label: "Transfers flagged" },
];

function StepContent({
  step,
}: {
  step: (typeof steps)[number];
}) {
  const inner = (
    <>
      <h3 className="text-[20px] font-semibold text-[#1A1A2E]">
        {step.title}
      </h3>
      <p className="text-[16px] text-[#4A4A68] leading-[1.6] mt-[8px]">
        {step.body}
      </p>
      <div className="flex items-center gap-[6px] mt-[8px]">
        <LockIcon />
        <span className="text-[14px] font-medium text-[#1B6B4A]">
          {step.control}
        </span>
      </div>
      {step.highlight && (
        <span className="inline-block mt-[12px] text-[13px] font-semibold text-[#1B6B4A] bg-white border border-[#1B6B4A] rounded-[4px] px-[12px] py-[4px]">
          Nothing goes live until you approve it
        </span>
      )}
    </>
  );

  if (step.highlight) {
    return (
      <div className="bg-[#F0F4F2] p-[16px] rounded-[8px]">{inner}</div>
    );
  }

  return inner;
}

export function HowItWorks() {
  return (
    <SectionWrapper background="white" id="how-it-works">
      <SectionHeader title="Live in about 4 weeks. No IT department required." />

      <div className="flex gap-[48px]">
        {/* Timeline column */}
        <div className="flex-1">
          {steps.map((step, i) => (
            <div key={step.number} className="flex gap-[16px] md:gap-[20px]">
              {/* Circle + connecting line */}
              <div className="flex flex-col items-center">
                <div className="w-[32px] h-[32px] md:w-[40px] md:h-[40px] rounded-full bg-[#1B6B4A] flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-semibold text-[14px] md:text-[16px]">
                    {step.number}
                  </span>
                </div>
                {i < steps.length - 1 && (
                  <div className="w-[2px] flex-1 bg-[#E2E4E9]" />
                )}
              </div>

              {/* Content */}
              <div className={i < steps.length - 1 ? "pb-[32px]" : ""}>
                <StepContent step={step} />
              </div>
            </div>
          ))}

          {/* "What you see" panel — mobile only */}
          <div className="md:hidden mt-[32px] border border-[#E2E4E9] rounded-[8px] bg-white p-[20px]">
            <p className="text-[14px] font-semibold text-[#1A1A2E] mb-[12px]">
              What you see
            </p>
            <div className="grid grid-cols-2 gap-[12px]">
              {sidebarItems.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-[8px] text-[14px] text-[#4A4A68]"
                >
                  <span aria-hidden="true">{item.icon}</span>
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* "What you see" panel — desktop sidebar */}
        <div className="hidden md:block w-[220px] flex-shrink-0">
          <div className="sticky top-[88px] border border-[#E2E4E9] rounded-[8px] bg-white p-[20px]">
            <p className="text-[14px] font-semibold text-[#1A1A2E] mb-[12px]">
              What you see
            </p>
            <div className="flex flex-col gap-[10px]">
              {sidebarItems.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-[8px] text-[14px] text-[#4A4A68]"
                >
                  <span aria-hidden="true">{item.icon}</span>
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-[48px]">
        {/* TODO: Replace with calendar booking URL */}
        <Button variant="primary" href="#demo">
          Book a demo to hear your practice&apos;s version
        </Button>
        <p className="text-[14px] text-[#6B6B82] mt-[12px]">
          15 minutes &middot; practice-specific demo &middot; you test it
          yourself
        </p>
      </div>
    </SectionWrapper>
  );
}
