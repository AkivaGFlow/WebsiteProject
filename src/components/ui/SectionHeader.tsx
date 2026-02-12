interface SectionHeaderProps {
  title: string;
  className?: string;
}

export function SectionHeader({ title, className = "" }: SectionHeaderProps) {
  return (
    <h2
      className={`text-[24px] md:text-[32px] font-semibold leading-[1.25] text-[#1A1A2E] mb-[48px] ${className}`}
    >
      {title}
    </h2>
  );
}
