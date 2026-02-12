interface ButtonProps {
  children: React.ReactNode;
  variant: "primary" | "secondary";
  size?: "default" | "sm" | "xs";
  href?: string;
  className?: string;
  onClick?: () => void;
}

export function Button({
  children,
  variant,
  size = "default",
  href,
  className = "",
  onClick,
}: ButtonProps) {
  const sizes = {
    default: "h-[48px] min-h-[48px] px-[32px] text-[16px]",
    sm: "h-[40px] min-h-[40px] px-[20px] text-[14px]",
    xs: "h-[36px] min-h-[36px] px-[16px] text-[14px]",
  };

  const base = `inline-flex items-center justify-center rounded-[6px] font-semibold cursor-pointer ${sizes[size]}`;

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
