interface SectionWrapperProps {
  children: React.ReactNode;
  background: "white" | "gray" | "emphasis" | "dark";
  className?: string;
  id?: string;
}

const bgMap = {
  white: "bg-white",
  gray: "bg-[#F5F6F8]",
  emphasis: "bg-[#F0F4F2]",
  dark: "bg-[#1A1A2E] text-white",
};

export function SectionWrapper({
  children,
  background,
  className = "",
  id,
}: SectionWrapperProps) {
  const hasCustomPadding = /p[tby]-/.test(className);
  const padding = hasCustomPadding ? "" : "py-[56px] md:py-[80px]";

  return (
    <section
      id={id}
      className={`${padding} ${bgMap[background]} ${className}`}
    >
      <div className="mx-auto max-w-[1200px] px-[24px]">{children}</div>
    </section>
  );
}
