"use client";

import { useState } from "react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

const emrOptions = [
  "",
  "Nextech",
  "Nexgen",
  "Azalea",
  "athenahealth",
  "ModMed",
  "DrChrono",
  "Tebra",
  "Epic",
  "Cerner",
  "Greenway",
  "Other",
];

export function DemoForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [practiceName, setPracticeName] = useState("");
  const [phone, setPhone] = useState("");
  const [practiceWebsite, setPracticeWebsite] = useState("");
  const [emr, setEmr] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <SectionWrapper background="gray" id="demo">
        <div className="max-w-[560px] mx-auto text-center">
          <h2 className="text-[24px] md:text-[32px] font-semibold leading-[1.25] text-[#1A1A2E] mb-[16px]">
            Thank you
          </h2>
          <p className="text-[17px] text-[#4A4A68] leading-[1.65]">
            We&rsquo;ll be in touch within one business day to schedule your
            demo.
          </p>
        </div>
      </SectionWrapper>
    );
  }

  return (
    <SectionWrapper background="gray" id="demo">
      <div className="max-w-[560px] mx-auto">
        <h2 className="text-[24px] md:text-[32px] font-semibold leading-[1.25] text-[#1A1A2E] mb-[16px] text-center">
          Speak to Emma
        </h2>
        <p className="text-[17px] text-[#4A4A68] leading-[1.65] text-center mb-[48px]">
          15 minutes &middot; practice-specific demo &middot; you test it
          yourself
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-[20px]">
          {/* Name */}
          <div>
            <label
              htmlFor="demo-name"
              className="block text-[14px] font-medium text-[#1A1A2E] mb-[6px]"
            >
              Full Name <span className="text-[#B91C1C]">*</span>
            </label>
            <input
              id="demo-name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full h-[48px] px-[16px] text-[16px] text-[#1A1A2E] bg-white border border-[#E2E4E9] rounded-[6px] outline-none focus:border-[#1B6B4A] focus:ring-1 focus:ring-[#1B6B4A]"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="demo-email"
              className="block text-[14px] font-medium text-[#1A1A2E] mb-[6px]"
            >
              Email <span className="text-[#B91C1C]">*</span>
            </label>
            <input
              id="demo-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-[48px] px-[16px] text-[16px] text-[#1A1A2E] bg-white border border-[#E2E4E9] rounded-[6px] outline-none focus:border-[#1B6B4A] focus:ring-1 focus:ring-[#1B6B4A]"
            />
          </div>

          {/* Phone */}
          <div>
            <label
              htmlFor="demo-phone"
              className="block text-[14px] font-medium text-[#1A1A2E] mb-[6px]"
            >
              Phone <span className="text-[#B91C1C]">*</span>
            </label>
            <input
              id="demo-phone"
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full h-[48px] px-[16px] text-[16px] text-[#1A1A2E] bg-white border border-[#E2E4E9] rounded-[6px] outline-none focus:border-[#1B6B4A] focus:ring-1 focus:ring-[#1B6B4A]"
            />
          </div>

          {/* Practice Name */}
          <div>
            <label
              htmlFor="demo-practice"
              className="block text-[14px] font-medium text-[#1A1A2E] mb-[6px]"
            >
              Practice Name <span className="text-[#B91C1C]">*</span>
            </label>
            <input
              id="demo-practice"
              type="text"
              required
              value={practiceName}
              onChange={(e) => setPracticeName(e.target.value)}
              className="w-full h-[48px] px-[16px] text-[16px] text-[#1A1A2E] bg-white border border-[#E2E4E9] rounded-[6px] outline-none focus:border-[#1B6B4A] focus:ring-1 focus:ring-[#1B6B4A]"
            />
          </div>

          {/* Practice Website */}
          <div>
            <label
              htmlFor="demo-website"
              className="block text-[14px] font-medium text-[#1A1A2E] mb-[6px]"
            >
              Practice Website <span className="text-[#B91C1C]">*</span>
            </label>
            <input
              id="demo-website"
              type="url"
              required
              placeholder="https://"
              value={practiceWebsite}
              onChange={(e) => setPracticeWebsite(e.target.value)}
              className="w-full h-[48px] px-[16px] text-[16px] text-[#1A1A2E] bg-white border border-[#E2E4E9] rounded-[6px] outline-none focus:border-[#1B6B4A] focus:ring-1 focus:ring-[#1B6B4A] placeholder:text-[#6B6B82]"
            />
          </div>

          {/* EMR */}
          <div>
            <label
              htmlFor="demo-emr"
              className="block text-[14px] font-medium text-[#1A1A2E] mb-[6px]"
            >
              EMR
            </label>
            <select
              id="demo-emr"
              value={emr}
              onChange={(e) => setEmr(e.target.value)}
              className="w-full h-[48px] px-[16px] text-[16px] text-[#1A1A2E] bg-white border border-[#E2E4E9] rounded-[6px] outline-none focus:border-[#1B6B4A] focus:ring-1 focus:ring-[#1B6B4A] appearance-none cursor-pointer"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%234A4A68' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' fill='none'/%3E%3C/svg%3E\")",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 16px center",
              }}
            >
              <option value="">Select your EMR</option>
              {emrOptions
                .filter((o) => o !== "")
                .map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
            </select>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full h-[48px] min-h-[48px] bg-[#1B6B4A] text-white text-[16px] font-semibold rounded-[6px] cursor-pointer hover:bg-[#155A3E] mt-[8px]"
          >
            Book a Demo
          </button>
        </form>
      </div>
    </SectionWrapper>
  );
}
