function HIPAABadge() {
  return (
    <svg
      width="auto"
      height="24"
      viewBox="0 0 90 24"
      fill="none"
      aria-label="HIPAA Compliant"
      role="img"
    >
      <rect
        x="0.5"
        y="0.5"
        width="89"
        height="23"
        rx="3.5"
        stroke="#6B6B82"
        strokeOpacity="0.4"
      />
      <path
        d="M10 7v10M10 12h5M15 7v10"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <text
        x="22"
        y="16"
        fill="white"
        fontSize="10"
        fontFamily="Inter, sans-serif"
        fontWeight="500"
      >
        HIPAA
      </text>
    </svg>
  );
}

function SOC2Badge() {
  return (
    <svg
      width="auto"
      height="24"
      viewBox="0 0 80 24"
      fill="none"
      aria-label="SOC 2 Certified"
      role="img"
    >
      <rect
        x="0.5"
        y="0.5"
        width="79"
        height="23"
        rx="3.5"
        stroke="#6B6B82"
        strokeOpacity="0.4"
      />
      <path
        d="M12 8a4 4 0 0 0 0 8M12 8a4 4 0 0 1 0 8"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <text
        x="22"
        y="16"
        fill="white"
        fontSize="10"
        fontFamily="Inter, sans-serif"
        fontWeight="500"
      >
        SOC 2
      </text>
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#141428] py-[48px]">
      <div className="mx-auto max-w-[1200px] px-[24px]">
        <div className="flex flex-col items-center gap-[12px] md:flex-row md:justify-between md:items-center">
          {/* Wordmark */}
          <span className="text-[16px] font-semibold text-white">
            FlowHealth
          </span>

          {/* Contact */}
          <p className="text-[14px] text-[#8888A0] text-center">
            Questions? team@flowhealth.com &middot; (555) 000-0000
          </p>

          {/* Badges */}
          <div className="flex items-center gap-[12px]">
            <HIPAABadge />
            <SOC2Badge />
          </div>
        </div>

        {/* Copyright */}
        <p className="text-[14px] text-[#8888A0] text-center mt-[24px] md:mt-[16px]">
          &copy; 2026 FlowHealth. All rights reserved. &middot; Privacy Policy
        </p>
      </div>
    </footer>
  );
}
