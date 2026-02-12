import { SectionWrapper } from "@/components/ui/SectionWrapper";

export function ProblemAgitation() {
  return (
    <SectionWrapper
      background="emphasis"
      id="problem"
      className="pt-[64px] pb-[64px] md:pt-[96px] md:pb-[96px]"
    >
      <div className="mx-auto max-w-[680px]">
        <h2 className="text-[24px] md:text-[32px] font-semibold leading-[1.25] text-[#1A1A2E] mb-[32px]">
          You didn&apos;t sign up to manage phone coverage.
        </h2>

        <p className="text-[17px] text-[#1A1A2E] leading-[1.7] mb-[24px] md:mb-[28px]">
          You run a medical practice. But most days, it feels like you&apos;re
          running a call center.
        </p>

        <p className="text-[17px] text-[#1A1A2E] leading-[1.7] mb-[24px] md:mb-[28px]">
          The front desk is buried. Lines are ringing. Someone called out sick
          and now two people are doing the work of four. By 10am, you&apos;re
          already behind.
        </p>

        <p className="text-[17px] text-[#1A1A2E] leading-[1.7] mb-[24px] md:mb-[28px]">
          Voicemails pile up. Patients leave messages that don&apos;t get
          returned until tomorrow. Some don&apos;t get returned at all. A few
          just book somewhere else.
        </p>

        <p className="text-[17px] text-[#1A1A2E] leading-[1.7] mb-[24px] md:mb-[28px]">
          You&apos;ve tried hiring. Training takes months. Turnover takes it
          away. You&apos;ve looked at answering services, but they can&apos;t
          schedule and they charge by the minute. You&apos;ve considered phone
          trees, but your patients deserve better than &lsquo;press 1 for
          scheduling.&rsquo;
        </p>

        <p className="text-[17px] text-[#1A1A2E] leading-[1.7] mb-[24px] md:mb-[28px]">
          Calls pile up. Voicemails pile up. Phone tag piles up. In-office
          patients get ignored while staff tries to keep up with the phones.
        </p>

        <blockquote className="border-l-[3px] border-l-[#1B6B4A] pl-[24px] mt-[40px] mb-[40px]">
          <p className="text-[22px] font-semibold text-[#1A1A2E] leading-[1.4]">
            And when access feels broken, it lands on you. Not the phone system.
            Not &lsquo;staffing challenges.&rsquo; You.
          </p>
        </blockquote>

        <p className="text-[18px] font-medium text-[#1B6B4A]">
          FlowHealth makes &lsquo;someone answers&rsquo; the default, not the
          hope.
        </p>
      </div>
    </SectionWrapper>
  );
}
