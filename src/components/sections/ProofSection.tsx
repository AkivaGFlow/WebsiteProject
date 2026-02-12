import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";

// TODO: Uncomment case study card and remove fallback when verified metrics are available

// function CaseStudyCard() {
//   return (
//     <div className="bg-white border border-[#E2E4E9] rounded-[8px] p-[32px] max-w-[700px] mx-auto">
//       <p className="text-[16px] font-semibold text-[#1A1A2E] mb-[24px]">
//         [Specialty] Practice &mdash; [X] providers, [X] locations
//       </p>
//
//       <div className="grid grid-cols-2 gap-[24px]">
//         <div className="bg-[#F8F9FA] border border-[#E2E4E9] rounded-[8px] p-[20px] text-center">
//           <p className="text-[13px] font-semibold text-[#6B6B82] uppercase tracking-wide mb-[8px]">
//             Before
//           </p>
//           <p className="text-[36px] font-bold text-[#1A1A2E] leading-[1.1]">
//             47%
//           </p>
//           <p className="text-[14px] text-[#4A4A68] mt-[4px]">missed calls</p>
//         </div>
//         <div className="bg-[#F8F9FA] border border-[#E2E4E9] rounded-[8px] p-[20px] text-center">
//           <p className="text-[13px] font-semibold text-[#6B6B82] uppercase tracking-wide mb-[8px]">
//             After
//           </p>
//           <p className="text-[36px] font-bold text-[#1B6B4A] leading-[1.1]">
//             3%
//           </p>
//           <p className="text-[14px] text-[#4A4A68] mt-[4px]">missed calls</p>
//         </div>
//       </div>
//
//       <p className="text-[16px] text-[#4A4A68] mt-[24px]">
//         What changed: FlowHealth answered every call during business hours,
//         scheduled directly in the EMR, and transferred clinical calls to the
//         right staff member.
//       </p>
//
//       <p className="text-[16px] text-[#4A4A68] italic mt-[16px]">
//         &ldquo;We stopped losing patients to voicemail. That&rsquo;s the whole
//         story.&rdquo;
//       </p>
//       <p className="text-[14px] text-[#6B6B82] mt-[4px]">
//         &mdash; Practice Administrator
//       </p>
//     </div>
//   );
// }

export function ProofSection() {
  return (
    <SectionWrapper background="gray" id="proof">
      <SectionHeader title="Built for medical practices. Measured by them." />

      {/* Fallback state — pre-launch / no verified metrics yet */}
      <div className="max-w-[600px] mx-auto text-center">
        <p className="text-[17px] text-[#4A4A68] leading-[1.65]">
          Currently live with ophthalmology and dermatology practices. Ask us
          for references.
        </p>

        <div className="mt-[24px]">
          <Button variant="primary">Book a Demo</Button>
          <p className="text-[14px] text-[#6B6B82] mt-[12px]">
            15 minutes &middot; practice-specific demo &middot; you test it
            yourself
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
