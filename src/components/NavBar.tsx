"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { scrollToSection } from "@/lib/scrollToSection";

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [pricingInView, setPricingInView] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 0);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const section = document.getElementById("pricing");
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => setPricingInView(entry.isIntersecting),
      { rootMargin: "-80px 0px 0px 0px", threshold: 0 }
    );
    observer.observe(section);
    return () => observer.disconnect();
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
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("pricing");
            }}
            className={`hidden md:inline-block text-[14px] font-medium ${
              pricingInView
                ? "text-[#1A1A2E] underline underline-offset-4"
                : "text-[#4A4A68]"
            }`}
          >
            Pricing
          </a>

          <div className="hidden md:flex items-center gap-[12px]">
            <Button
              variant="primary"
              size="sm"
              onClick={() => scrollToSection("patient-experience")}
            >
              Hear a Sample Call
            </Button>
            {/* TODO: Replace with calendar booking URL */}
            <Button variant="secondary" size="sm" href="#demo">
              Book a Demo
            </Button>
          </div>

          <div className="md:hidden">
            <Button
              variant="primary"
              size="xs"
              onClick={() => scrollToSection("patient-experience")}
            >
              Hear a Call
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
}
