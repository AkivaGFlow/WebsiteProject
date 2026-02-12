"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 0);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-[64px] bg-white border-b border-[#E2E4E9]${
        scrolled ? " shadow-[0_1px_3px_rgba(0,0,0,0.06)]" : ""
      }`}
    >
      <nav className="mx-auto max-w-[1200px] h-full flex items-center justify-between px-[16px] md:px-[24px]">
        <a href="/" className="text-[20px] font-bold text-[#1A1A2E]">
          FlowHealth
        </a>

        <div className="flex items-center gap-[24px]">
          <a
            href="#pricing"
            className="hidden md:inline-block text-[14px] font-medium text-[#4A4A68]"
          >
            Pricing
          </a>

          <div className="hidden md:flex items-center gap-[12px]">
            <Button variant="primary" size="sm">
              Hear a Sample Call
            </Button>
            <Button variant="secondary" size="sm">
              Book a Demo
            </Button>
          </div>

          <div className="md:hidden">
            <Button variant="primary" size="xs">
              Hear a Call
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
}
