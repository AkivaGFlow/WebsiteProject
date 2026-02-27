const emrNames = [
  "athenahealth",
  "Nextech",
  "Azalea Health",
  "DrChrono",
  "Epic",
  "Tebra",
];

export function SocialProofBar() {
  return (
    <div className="w-full bg-[#F8F9FA] border-t border-b border-[#E2E4E9] py-[16px] md:py-[20px]">
      <div className="mx-auto max-w-[1200px] px-[16px] md:px-[24px]">
        <p className="text-[14px] font-medium text-[#6B6B82] text-center mb-[12px]">
          Integrated with:
        </p>
        <div className="flex flex-wrap items-center justify-center gap-[16px] md:gap-[24px]">
          {emrNames.map((name) => (
            <span
              key={name}
              className="text-[15px] font-semibold text-[#4A4A68] tracking-tight"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
