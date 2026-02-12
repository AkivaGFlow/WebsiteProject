interface CardProps {
  children: React.ReactNode;
  borderColor?: "green" | "gray" | "none";
  className?: string;
}

export function Card({
  children,
  borderColor = "none",
  className = "",
}: CardProps) {
  const base = "bg-white rounded-[8px] p-[32px]";

  const borderVariants = {
    green: "border border-[#E2E4E9] border-l-[3px] border-l-[#1B6B4A]",
    gray: "border border-[#E2E4E9] border-l-[3px] border-l-[#5A6070]",
    none: "border border-[#E2E4E9]",
  };

  return (
    <div className={`${base} ${borderVariants[borderColor]} ${className}`}>
      {children}
    </div>
  );
}
