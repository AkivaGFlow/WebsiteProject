import { Hero } from "@/components/sections/Hero";
import { SocialProofBar } from "@/components/sections/SocialProofBar";
import { ValueProps } from "@/components/sections/ValueProps";

export default function Home() {
  return (
    <main>
      <Hero />
      <SocialProofBar />
      <ValueProps />
    </main>
  );
}
