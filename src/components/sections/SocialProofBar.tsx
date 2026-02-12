// TODO: Replace placeholder stats with verified numbers before launch

export function SocialProofBar() {
  return (
    <div className="w-full bg-[#F8F9FA] border-t border-b border-[#E2E4E9] py-[12px] md:py-[16px]">
      <div className="mx-auto max-w-[1200px] px-[16px] md:px-[24px]">
        <div className="flex flex-col md:flex-row items-center justify-center gap-[12px] md:gap-0">
          {/* Item 1 */}
          <p className="text-[15px] font-medium text-[#4A4A68] text-center">
            <span className="font-semibold">12,400+</span> patient calls
            handled since{" "}
            <span className="font-semibold">October 2025</span>
          </p>

          {/* Divider */}
          <div
            className="hidden md:block w-[1px] h-[20px] bg-[#E2E4E9] mx-[24px]"
            aria-hidden="true"
          />

          {/* Item 2 */}
          <p className="text-[15px] font-medium text-[#4A4A68] text-center">
            Schedules directly inside{" "}
            <span className="font-semibold">
              athenahealth, Nextech, Azalea Health, DrChrono
            </span>
          </p>

          {/* Divider */}
          <div
            className="hidden md:block w-[1px] h-[20px] bg-[#E2E4E9] mx-[24px]"
            aria-hidden="true"
          />

          {/* Item 3 */}
          <p className="text-[15px] font-medium text-[#4A4A68] text-center">
            Live in <span className="font-semibold">~4 weeks</span>
          </p>
        </div>
      </div>
    </div>
  );
}
