const NAV_HEIGHT = 64;
const BREATHING_ROOM = 16;
const OFFSET = NAV_HEIGHT + BREATHING_ROOM; // 80px

export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;

  const top = el.getBoundingClientRect().top + window.scrollY - OFFSET;
  window.scrollTo({ top, behavior: "smooth" });
}
