import { Hero } from "@/components/sections/Hero";
import { SocialProofBar } from "@/components/sections/SocialProofBar";
import { ValueProps } from "@/components/sections/ValueProps";
import { HandlesTransfers } from "@/components/sections/HandlesTransfers";
import { ProblemAgitation } from "@/components/sections/ProblemAgitation";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { WhoItsFor } from "@/components/sections/WhoItsFor";
import { PatientExperience } from "@/components/sections/PatientExperience";
import { ProofSection } from "@/components/sections/ProofSection";
import { Pricing } from "@/components/sections/Pricing";

export default function Home() {
  return (
    <main>
      <Hero />
      <SocialProofBar />
      <ValueProps />
      <HandlesTransfers />
      <ProblemAgitation />
      <HowItWorks />
      <WhoItsFor />
      <PatientExperience />
      <ProofSection />
      <Pricing />
    </main>
  );
}
