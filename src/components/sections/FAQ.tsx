"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { scrollToSection } from "@/lib/scrollToSection";

interface FAQItem {
  question: string;
  answer: string;
  proofHook?: { text: string; href: string };
}

const faqItems: FAQItem[] = [
  {
    question: "Our practice is too complicated for this.",
    answer:
      "Most practices are. The question isn\u2019t complexity \u2014 it\u2019s where the boundaries are. FlowHealth handles office questions and scheduling, and transfers clinical, billing, refills, and labs to your staff. That keeps complexity where it belongs: with your team. Before going live, we map your specific rules and you test the agent yourself until it\u2019s right.",
    proofHook: { text: "See the onboarding steps", href: "#how-it-works" },
  },
  {
    question: "Patients will hate talking to AI.",
    answer:
      "Patients hate being on hold. They hate leaving voicemails that don\u2019t get returned. They hate calling back three times to schedule an appointment. What patients want is to call, get an answer, and get on with their day. When callers get help immediately instead of voicemail and phone tag, complaints drop. The demo is designed so you can hear exactly how it responds.",
    proofHook: {
      text: "Hear how a real call sounds",
      href: "#patient-experience",
    },
  },
  {
    question: "We provide concierge care. This feels impersonal.",
    answer:
      "Concierge care starts with access. What\u2019s less personal \u2014 a two-minute conversation where the patient gets exactly what they need, or a four-minute hold followed by a rushed interaction because your front desk is overwhelmed? FlowHealth handles the repetitive calls so your team can deliver the high-touch experience on the ones that matter.",
  },
  {
    question: "Will my staff feel replaced?",
    answer:
      "Your staff is drowning, not being replaced. FlowHealth takes the endless repeat calls off their plate so they can focus on in-office patients and the situations that need a human. When it\u2019s framed as relief instead of replacement, it usually lands differently. Every practice administrator we\u2019ve worked with says the same thing: staff morale went up.",
  },
  {
    question: "I don\u2019t trust automation with patients.",
    answer:
      "You shouldn\u2019t \u2014 unless it has hard limits. FlowHealth never gives medical advice and doesn\u2019t handle clinical decisions. Out-of-scope calls are transferred to your team. You see every transcript. Nothing happens that you can\u2019t review.",
    proofHook: {
      text: "See a sample call transcript",
      href: "#patient-experience",
    },
  },
  {
    question: "What if it gives wrong information?",
    answer:
      "FlowHealth stays within approved practice information that your team provides. If a question falls outside of what it\u2019s been trained on, the agent tells the patient it will connect them with your office. Every call is logged with a full transcript so you always know exactly what was said.",
    proofHook: {
      text: "See what the call log looks like",
      href: "#handles-transfers",
    },
  },
  {
    question: "Is this just another answering service?",
    answer:
      "Answering services take messages. FlowHealth schedules appointments inside your EMR. That\u2019s the difference. It\u2019s not reading a script and writing a sticky note \u2014 it\u2019s booking a visit with the right provider, for the right visit type, at the right time, in your scheduling system.",
  },
  {
    question: "How do you charge?",
    answer:
      "$1,500/month base + $1.75 per resolved call. \u201CResolved\u201D means the agent handled it without requiring staff time. Calls that transfer to your team aren\u2019t charged. No per-minute billing. No long-term contract.",
  },
  {
    question: "How fast can we be live?",
    answer:
      "About 4 weeks from kickoff. We need one onboarding call to learn your scheduling rules, providers, and preferences. We handle the build and QA from there. No IT department required. No software to install.",
  },
  {
    question: "What EMR systems does it work with?",
    answer:
      "FlowHealth schedules directly inside athenahealth, Nextech, Azalea Health, and DrChrono. Appointments are booked, rescheduled, and cancelled in your EMR in real time. No manual entry. No duplicate records.",
  },
];

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className={`flex-shrink-0 transition-transform duration-200 ease-in-out ${open ? "rotate-180" : ""}`}
    >
      <path
        d="M4 6L8 10L12 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function AccordionItem({
  item,
  isOpen,
  isVisited,
  onToggle,
}: {
  item: FAQItem;
  isOpen: boolean;
  isVisited: boolean;
  onToggle: () => void;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState(0);

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setMaxHeight(contentRef.current.scrollHeight);
    } else {
      setMaxHeight(0);
    }
  }, [isOpen]);

  const handleProofClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      scrollToSection(href.replace("#", ""));
    },
    []
  );

  const questionColor =
    !isOpen && isVisited ? "text-[#6B6B82]" : "text-[#1A1A2E]";

  return (
    <div className="border-b border-[#E2E4E9]">
      <button
        type="button"
        onClick={onToggle}
        className={`w-full flex items-center justify-between gap-[16px] py-[16px] min-h-[48px] text-left cursor-pointer bg-transparent border-none ${questionColor}`}
      >
        <span className="text-[17px] font-semibold leading-[1.35]">
          {item.question}
        </span>
        <Chevron open={isOpen} />
      </button>

      <div
        ref={contentRef}
        className="overflow-hidden transition-[max-height] duration-200 ease-in-out"
        style={{ maxHeight: `${maxHeight}px` }}
      >
        <div className="pb-[16px] pt-[8px]">
          <p className="text-[16px] text-[#4A4A68] leading-[1.65]">
            {item.answer}
          </p>
          {item.proofHook && (
            <a
              href={item.proofHook.href}
              onClick={(e) => handleProofClick(e, item.proofHook!.href)}
              className="inline-block mt-[12px] text-[14px] font-medium text-[#1B6B4A] hover:underline"
            >
              {item.proofHook.text} &rarr;
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export function FAQ() {
  const [openIndices, setOpenIndices] = useState<Set<number>>(new Set());
  const [visitedIndices, setVisitedIndices] = useState<Set<number>>(new Set());
  const [showAll, setShowAll] = useState(false);

  const toggle = useCallback((index: number) => {
    setOpenIndices((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
        setVisitedIndices((v) => new Set(v).add(index));
      } else {
        next.add(index);
      }
      return next;
    });
  }, []);

  const visibleItems = showAll ? faqItems : faqItems.slice(0, 5);

  return (
    <SectionWrapper background="gray" id="faq">
      <SectionHeader title="Common questions from practice administrators" />

      <div className="max-w-[760px] mx-auto">
        {visibleItems.map((item, i) => (
          <AccordionItem
            key={i}
            item={item}
            isOpen={openIndices.has(i)}
            isVisited={visitedIndices.has(i)}
            onToggle={() => toggle(i)}
          />
        ))}

        {!showAll && (
          <button
            type="button"
            onClick={() => setShowAll(true)}
            className="mt-[16px] text-[14px] text-[#1B6B4A] hover:underline cursor-pointer bg-transparent border-none p-0"
          >
            Show more questions
          </button>
        )}
      </div>
    </SectionWrapper>
  );
}
