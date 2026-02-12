export function CallPreviewModule() {
  return (
    <div className="bg-white border border-[#E2E4E9] rounded-[8px] p-[32px] shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
      {/* Title */}
      <p className="text-[16px] font-semibold text-[#1A1A2E] mb-[16px]">
        Hear what patients hear
      </p>

      {/* Audio player placeholder */}
      <div className="flex items-center gap-[12px] mb-[24px]">
        {/* Play button */}
        <button
          type="button"
          aria-label="Play sample call"
          className="flex-shrink-0 w-[48px] h-[48px] min-h-[48px] rounded-full bg-[#1B6B4A] flex items-center justify-center cursor-pointer"
        >
          <svg
            width="18"
            height="20"
            viewBox="0 0 18 20"
            fill="none"
            aria-hidden="true"
          >
            <path d="M0 0L18 10L0 20V0Z" fill="white" />
          </svg>
        </button>

        {/* Progress bar + time */}
        <div className="flex-1 flex flex-col gap-[6px]">
          <div className="h-[4px] rounded-full bg-[#E2E4E9] overflow-hidden">
            <div className="h-full w-0 rounded-full bg-[#1B6B4A]" />
          </div>
          <span className="text-[14px] text-[#6B6B82]">0:00 / 0:54</span>
        </div>
      </div>

      {/* Transcript preview */}
      <div className="border border-[#E2E4E9] rounded-[6px] bg-[#F8F9FA] p-[16px] mb-[24px]">
        <div className="flex flex-col gap-[12px]">
          <div>
            <span className="text-[14px] font-semibold text-[#4A4A68]">
              Patient:{" "}
            </span>
            <span className="text-[14px] text-[#4A4A68]">
              &ldquo;I need to schedule a follow-up with Dr. Johnson.&rdquo;
            </span>
          </div>
          <div>
            <span className="text-[14px] font-semibold text-[#1B6B4A]">
              FlowHealth:{" "}
            </span>
            <span className="text-[14px] text-[#4A4A68]">
              &ldquo;Of course. What type of visit is this for?&rdquo;
            </span>
          </div>
          <div>
            <span className="text-[14px] font-semibold text-[#4A4A68]">
              Patient:{" "}
            </span>
            <span className="text-[14px] text-[#4A4A68]">
              &ldquo;Just a regular check-up.&rdquo;
            </span>
          </div>
          <div>
            <span className="text-[14px] font-semibold text-[#1B6B4A]">
              FlowHealth:{" "}
            </span>
            <span className="text-[14px] text-[#4A4A68]">
              &ldquo;I have Thursday at 2pm or Friday at 10am. Which works
              better?&rdquo;
            </span>
          </div>
        </div>

        <a
          href="#patient-experience"
          className="inline-block mt-[12px] text-[14px] text-[#1B6B4A] hover:underline"
        >
          View full transcript
        </a>
      </div>

      {/* Safety bullets */}
      <div className="flex flex-col gap-[8px]">
        <div className="flex items-start gap-[8px]">
          <span className="text-[#1B6B4A] text-[14px] leading-[1.5]">✓</span>
          <span className="text-[14px] text-[#4A4A68] leading-[1.5]">
            Handles scheduling + office FAQs only
          </span>
        </div>
        <div className="flex items-start gap-[8px]">
          <span className="text-[#1B6B4A] text-[14px] leading-[1.5]">✓</span>
          <span className="text-[14px] text-[#4A4A68] leading-[1.5]">
            Clinical, billing, and refills → transferred to your team
          </span>
        </div>
        <div className="flex items-start gap-[8px]">
          <span className="text-[#1B6B4A] text-[14px] leading-[1.5]">✓</span>
          <span className="text-[14px] text-[#4A4A68] leading-[1.5]">
            Every call logged with full transcript
          </span>
        </div>
      </div>
    </div>
  );
}
