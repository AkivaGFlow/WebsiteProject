interface ButtonProps {
  children: React.ReactNode;
  variant: "primary" | "secondary";
  href?: string;
  className?: string;
  onClick?: () => void;
}

export function Button({
  children,
  variant,
  href,
  className = "",
  onClick,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center h-[48px] min-h-[48px] px-[32px] rounded-[6px] font-semibold text-[16px] cursor-pointer";

  const variants = {
    primary: "bg-[#1B6B4A] text-white hover:bg-[#155A3E]",
    secondary:
      "bg-transparent border border-[#1B6B4A] text-[#1B6B4A] hover:bg-[#1B6B4A] hover:text-white",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
