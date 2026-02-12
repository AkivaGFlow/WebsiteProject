import { Button } from "@/components/ui/Button";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";

export default function Home() {
  return (
    <main>
      {/* White section — Buttons */}
      <SectionWrapper background="white">
        <SectionHeader title="Button Components" />
        <div className="flex flex-wrap items-center gap-[16px]">
          <Button variant="primary">Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="primary" href="#cards">
            Primary Link
          </Button>
          <Button variant="secondary" href="#dark">
            Secondary Link
          </Button>
        </div>
      </SectionWrapper>

      {/* Gray section — Cards */}
      <SectionWrapper background="gray" id="cards">
        <SectionHeader title="Card Components" />
        <div className="grid gap-[24px] md:grid-cols-3">
          <Card borderColor="green">
            <p className="text-[17px] leading-[1.65] text-[#1A1A2E]">
              Green left border card — used for handled / positive status.
            </p>
          </Card>
          <Card borderColor="gray">
            <p className="text-[17px] leading-[1.65] text-[#1A1A2E]">
              Gray left border card — used for transferred / neutral status.
            </p>
          </Card>
          <Card borderColor="none">
            <p className="text-[17px] leading-[1.65] text-[#1A1A2E]">
              Standard card with no accent border — default variant.
            </p>
          </Card>
        </div>
      </SectionWrapper>

      {/* Emphasis section */}
      <SectionWrapper background="emphasis">
        <SectionHeader title="Emphasis Background" />
        <Card>
          <p className="text-[17px] leading-[1.65] text-[#1A1A2E]">
            This card sits on the green-tinted emphasis background.
          </p>
        </Card>
      </SectionWrapper>

      {/* Dark section */}
      <SectionWrapper background="dark" id="dark">
        <SectionHeader
          title="Dark Background Section"
          className="text-white"
        />
        <div className="flex flex-wrap items-center gap-[16px]">
          <Button variant="primary">CTA on Dark</Button>
          <Button variant="secondary" className="border-white text-white hover:bg-white hover:text-[#1A1A2E]">
            Outline on Dark
          </Button>
        </div>
      </SectionWrapper>
    </main>
  );
}
