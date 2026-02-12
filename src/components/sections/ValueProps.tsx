import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";

function PhoneCheckIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M7.2 2.667h5.333l2.667 6.666-3.333 2A16 16 0 0 0 20.667 20l2-3.333 6.666 2.666V24.8a2.667 2.667 0 0 1-2.666 2.533A21.333 21.333 0 0 1 4.667 5.333 2.667 2.667 0 0 1 7.2 2.667Z"
        stroke="#1B6B4A"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="m20 6.667 2.667 2.666L28 4"
        stroke="#1B6B4A"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CalendarPlusIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="4"
        y="5.333"
        width="24"
        height="22.667"
        rx="2.667"
        stroke="#1B6B4A"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.333 2.667V8M10.667 2.667V8M4 13.333h24M16 18.667v5.333M13.333 21.333h5.334"
        stroke="#1B6B4A"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ShieldCheckIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M16 29.333s10.667-5.333 10.667-13.333V6.667L16 2.667 5.333 6.667V16c0 8 10.667 13.333 10.667 13.333Z"
        stroke="#1B6B4A"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="m11.333 16 3.334 3.333L21.333 12"
        stroke="#1B6B4A"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const cards = [
  {
    icon: <PhoneCheckIcon />,
    title: "Always answered",
    body: "No hold music. No voicemail. No \u2018please call back during business hours.\u2019 Every call is answered immediately \u2014 during surges, lunches, call-outs, and after hours. Patients get a real conversation, not a phone tree.",
  },
  {
    icon: <CalendarPlusIcon />,
    title: "Scheduling that actually works",
    body: "Not message-taking. Not \u2018we\u2019ll call you back.\u2019 FlowHealth books, reschedules, and cancels appointments directly inside your EMR, based on your visit types and scheduling rules. The appointment shows up before the patient hangs up.",
  },
  {
    icon: <ShieldCheckIcon />,
    title: "Safe by design",
    body: "It knows what it\u2019s not allowed to do. No medical advice. No clinical decisions. Calls involving symptoms, medications, labs, billing, or refills are routed to the right person on your team. If the agent isn\u2019t sure about something, it transfers the call.",
  },
];

export function ValueProps() {
  return (
    <SectionWrapper background="white" id="value-props">
      <SectionHeader title="What changes on Day 1" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
        {cards.map((card) => (
          <Card key={card.title} borderColor="none">
            {card.icon}
            <h3 className="text-[20px] font-semibold text-[#1A1A2E] mt-[16px]">
              {card.title}
            </h3>
            <p className="text-[16px] text-[#4A4A68] leading-[1.6] mt-[12px]">
              {card.body}
            </p>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
