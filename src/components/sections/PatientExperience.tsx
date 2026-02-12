"use client";

import { useState, useCallback } from "react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AudioPlayer } from "@/components/AudioPlayer";

const transcriptLines = [
  {
    speaker: "FlowHealth" as const,
    text: "Hi, thank you for calling Lakewood Eye Associates. How can I help you today?",
  },
  {
    speaker: "Patient" as const,
    text: "Hi, I need to schedule a follow-up with Dr. Johnson.",
  },
  {
    speaker: "FlowHealth" as const,
    text: "Of course. What type of visit is this for?",
  },
  {
    speaker: "Patient" as const,
    text: "Just a post-op check. I had cataract surgery two weeks ago.",
  },
  {
    speaker: "FlowHealth" as const,
    text: "Got it — a post-operative follow-up with Dr. Johnson. Can I confirm your date of birth?",
  },
  {
    speaker: "Patient" as const,
    text: "March 15th, 1958.",
  },
  {
    speaker: "FlowHealth" as const,
    text: "Thank you. I have a few openings this week. Would Thursday at 2:00 PM or Friday at 10:00 AM work better?",
  },
  {
    speaker: "Patient" as const,
    text: "Thursday works.",
  },
  {
    speaker: "FlowHealth" as const,
    text: "You\u2019re all set for Thursday at 2:00 PM with Dr. Johnson. You\u2019ll get a confirmation text shortly. Is there anything else I can help with?",
  },
  {
    speaker: "Patient" as const,
    text: "Nope, that\u2019s it. Thank you.",
  },
];

const VISIBLE_LINES = 8;

function TranscriptModule() {
  const [expanded, setExpanded] = useState(false);

  const visibleLines = expanded
    ? transcriptLines
    : transcriptLines.slice(0, VISIBLE_LINES);

  return (
    <div className="bg-[#F8F9FA] border border-[#E2E4E9] rounded-[6px] p-[16px]">
      <div className="flex flex-col gap-[10px]">
        {visibleLines.map((line, i) => {
          const isFlowHealth = line.speaker === "FlowHealth";
          return (
            <div
              key={i}
              className={`border-l-[2px] pl-[12px] ${
                isFlowHealth ? "border-l-[#1B6B4A]" : "border-l-[#6B6B82]"
              }`}
            >
              <span
                className={`text-[14px] font-semibold ${
                  isFlowHealth ? "text-[#1B6B4A]" : "text-[#4A4A68]"
                }`}
              >
                {line.speaker}:{" "}
              </span>
              <span className="text-[14px] text-[#4A4A68]">
                &ldquo;{line.text}&rdquo;
              </span>
            </div>
          );
        })}
      </div>

      {transcriptLines.length > VISIBLE_LINES && (
        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          className="mt-[12px] text-[14px] text-[#1B6B4A] hover:underline cursor-pointer bg-transparent border-none p-0"
        >
          {expanded ? "Collapse transcript" : "Expand full transcript"}
        </button>
      )}
    </div>
  );
}

export function PatientExperience() {
  const [listenComplete, setListenComplete] = useState(false);

  const handleProgress = useCallback(() => {
    setListenComplete(true);
  }, []);

  return (
    <SectionWrapper
      background="white"
      id="patient-experience"
      className="pt-[64px] pb-[64px] md:pt-[96px] md:pb-[96px]"
    >
      <SectionHeader title="What patients actually hear" />

      <div className="flex flex-col md:flex-row gap-[48px]">
        {/* Right column — Audio module (mobile first) */}
        <div className="md:hidden">
          <AudioTranscriptModule
            onProgress={handleProgress}
            listenComplete={listenComplete}
          />
        </div>

        {/* Left column — Narrative */}
        <div className="md:w-[45%] md:flex-shrink-0">
          <div className="flex flex-col gap-[20px]">
            <p className="text-[17px] text-[#4A4A68] leading-[1.65] max-w-[65ch]">
              A patient calls your office. The phone is answered before the
              second ring.
            </p>
            <p className="text-[17px] text-[#4A4A68] leading-[1.65] italic max-w-[65ch]">
              &ldquo;Hi, thank you for calling Lakewood Eye Associates. How can
              I help you today?&rdquo;
            </p>
            <p className="text-[17px] text-[#4A4A68] leading-[1.65] max-w-[65ch]">
              The patient says they need to schedule a follow-up with
              Dr.&nbsp;Johnson. The agent asks the right questions: what type of
              visit, confirms insurance, finds available times, and books the
              appointment. The patient gets a confirmation. The appointment
              appears in your EMR.
            </p>
            <p className="text-[17px] text-[#4A4A68] leading-[1.65] font-semibold max-w-[65ch]">
              Total call time: under two minutes. No hold. No transfer. No
              callback required.
            </p>
          </div>
        </div>

        {/* Right column — Audio module (desktop) */}
        <div className="hidden md:block md:w-[55%]">
          <AudioTranscriptModule
            onProgress={handleProgress}
            listenComplete={listenComplete}
          />
        </div>
      </div>

      {/* Pull quote */}
      <div className="mt-[48px] text-center">
        <p className="text-[22px] font-semibold text-[#1A1A2E] leading-[1.35] max-w-[720px] mx-auto">
          &ldquo;Practice administrators tell us most patients don&rsquo;t
          realize they&rsquo;re not talking to staff. They just know someone
          picked up and helped them.&rdquo;
        </p>
      </div>
    </SectionWrapper>
  );
}

function AudioTranscriptModule({
  onProgress,
  listenComplete,
}: {
  onProgress: (status: "complete") => void;
  listenComplete: boolean;
}) {
  return (
    <div className="bg-white border border-[#E2E4E9] rounded-[8px] p-[32px]">
      {/* Audio player */}
      <p className="text-[16px] font-semibold text-[#1A1A2E] mb-[16px]">
        Hear a real 60-second call
      </p>

      <AudioPlayer onProgress={onProgress} />

      {/* Completion CTA */}
      <div
        className={`overflow-hidden transition-opacity duration-500 ${
          listenComplete ? "opacity-100 mt-[12px]" : "opacity-0 h-0"
        }`}
      >
        {/* TODO: Replace with calendar booking URL */}
        <a
          href="#demo"
          className="text-[14px] font-medium text-[#1B6B4A] hover:underline"
        >
          Want to hear one built for your practice? &rarr; Book a Demo
        </a>
      </div>

      {/* Transcript */}
      <div className="mt-[16px]">
        <TranscriptModule />
      </div>

      {/* Confidence chips */}
      <div className="flex flex-wrap gap-[8px] mt-[16px]">
        <span className="text-[13px] font-medium text-[#1B6B4A] bg-[#F0F4F2] rounded-full px-[12px] py-[6px]">
          ✓ Answered before 2nd ring
        </span>
        <span className="text-[13px] font-medium text-[#1B6B4A] bg-[#F0F4F2] rounded-full px-[12px] py-[6px]">
          ✓ Booked directly in EMR
        </span>
        <span className="text-[13px] font-medium text-[#1B6B4A] bg-[#F0F4F2] rounded-full px-[12px] py-[6px]">
          ✓ Transferred when needed
        </span>
      </div>
    </div>
  );
}
