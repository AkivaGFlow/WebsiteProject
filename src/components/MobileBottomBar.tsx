"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { scrollToSection } from "@/lib/scrollToSection";

export function MobileBottomBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setVisible(window.scrollY > 500);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 h-[56px] bg-white border-t border-[#E2E4E9] shadow-[0_-1px_3px_rgba(0,0,0,0.06)] px-[16px] py-[8px] md:hidden">
      <div className="flex h-full items-center gap-[8px]">
        <Button
          variant="primary"
          size="sm"
          className="flex-1"
          onClick={() => scrollToSection("patient-experience")}
        >
          Hear a Call ▶
        </Button>
        {/* TODO: Replace with calendar booking URL */}
        <Button variant="secondary" size="sm" className="flex-1" href="#demo">
          Book a Demo
        </Button>
      </div>
    </div>
  );
}
