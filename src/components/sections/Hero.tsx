import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <SectionWrapper
      background="white"
      id="hero"
      className="pt-[64px] pb-[48px] md:pt-[120px] md:pb-[80px]"
    >
      <div className="flex flex-col md:flex-row md:items-start gap-[48px]">
        {/* Left column — 55% */}
        <div className="md:w-[55%]">
          <h1 className="text-[32px] md:text-[48px] font-bold leading-[1.15] text-[#1A1A2E] mb-[24px]">
            Stop running a call center inside your clinic.
          </h1>

          <p className="text-[17px] text-[#4A4A68] leading-[1.65] max-w-[540px] mb-[32px]">
            FlowHealth is an AI receptionist trained on your practice — your
            providers, your scheduling rules, your EMR. Patients call, get
            answers, and book appointments. Your team focuses on the patients in
            front of them.
          </p>

          <div className="flex flex-col md:flex-row gap-[12px] md:gap-[16px]">
            <Button variant="primary" className="w-full md:w-auto">
              Hear a real call (60 sec)
            </Button>
            <Button variant="secondary" className="w-full md:w-auto">
              Book a demo
            </Button>
          </div>

          <p className="text-[14px] text-[#6B6B82] leading-[1.5] mt-[16px]">
            Built for 5–20 physician specialty practices with dedicated
            scheduling teams. Live in ~4 weeks.
          </p>
        </div>

        {/* Right column — 45% */}
        <div className="md:w-[45%] min-h-[400px] border-[2px] border-dashed border-[#E2E4E9] rounded-[8px] flex items-center justify-center text-[14px] text-[#6B6B82]">
          Call Experience Preview — built in next step
        </div>
      </div>
    </SectionWrapper>
  );
}
