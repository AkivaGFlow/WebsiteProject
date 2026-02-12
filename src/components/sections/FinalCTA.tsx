import { SectionWrapper } from "@/components/ui/SectionWrapper";

export function FinalCTA() {
  return (
    <SectionWrapper
      background="dark"
      id="final-cta"
      className="pt-[64px] pb-[64px] md:pt-[96px] md:pb-[96px]"
    >
      <div className="max-w-[600px] mx-auto text-center">
        <h2 className="text-[24px] md:text-[32px] font-semibold leading-[1.25] text-white">
          See how it handles your calls.
        </h2>

        <p className="text-[17px] text-[#B8B8CC] leading-[1.65] mt-[24px]">
          We&rsquo;ll build a demo agent trained on your practice &mdash; your
          providers, your scheduling rules, your visit types. Call it. Test it.
          Try to trip it up. If it can&rsquo;t handle your practice,
          you&rsquo;ll know in five minutes.
        </p>

        <p className="text-[14px] text-[#8888A0] mt-[12px]">
          15 minutes &middot; practice-specific demo &middot; you test it
          yourself
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-[16px] mt-[32px]">
          {/* TODO: Replace with calendar booking URL */}
          <a
            href="#demo"
            className="w-full md:w-auto inline-flex items-center justify-center h-[48px] min-h-[48px] px-[32px] rounded-[6px] text-[16px] font-semibold bg-white text-[#1B6B4A] hover:bg-[#F0F4F2] cursor-pointer"
          >
            Book a Demo
          </a>
          <a
            href="#patient-experience"
            className="w-full md:w-auto inline-flex items-center justify-center h-[48px] min-h-[48px] px-[32px] rounded-[6px] text-[16px] font-semibold bg-transparent border border-white text-white hover:bg-[rgba(255,255,255,0.1)] cursor-pointer"
          >
            Hear a Sample Call
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
}
