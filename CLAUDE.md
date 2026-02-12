# FlowHealth — Project Context

## What this is
A single-page marketing site for FlowHealth, an AI receptionist for medical practices.
The target buyer is a skeptical medical practice administrator. The site must feel like
a banking interface, not a startup landing page.

## Design Rules
- No animations, parallax, or scroll-triggered reveals
- No gradients, no abstract illustrations, no stock photography
- No auto-play on any media
- No localStorage or sessionStorage — use React state only
- No chatbot widgets
- Minimum text size: 14px everywhere, no exceptions
- Maximum line width for body text: 65 characters (use max-w-prose or max-w-2xl)
- All interactive elements: minimum 48px tap target on mobile

## Color Tokens (use these names, not raw hex)
- primary-text: #1A1A2E (near-black navy, all body/headlines)
- secondary-text: #4A4A68 (subheads, descriptions)
- tertiary-text: #6B6B82 (captions, qualifiers — WCAG AA compliant)
- action-primary: #1B6B4A (deep clinical green, primary buttons)
- action-primary-hover: #155A3E
- bg-default: #FFFFFF (pure white, main sections)
- bg-contrast: #F5F6F8 (cool light gray, alternating sections)
- bg-emphasis: #F0F4F2 (green-tinted gray, agitation/callouts)
- border: #E2E4E9 (cards, tables, dividers)
- status-handled: #1B6B4A (green, same as action-primary)
- status-transferred: #5A6070 (neutral gray)
- trust-badge-bg: #F8F9FA
- dark-bg: #1A1A2E (final CTA section)
- dark-bg-footer: #141428

## Typography (Inter font family only)
- H1: 48-52px desktop / 32px mobile, weight 700, line-height 1.15
- H2: 32px desktop / 24px mobile, weight 600, line-height 1.25
- H3: 20px desktop / 18px mobile, weight 600, line-height 1.3
- Body: 17px desktop / 16px mobile, weight 400, line-height 1.65
- Small: 14px desktop / 14px mobile, weight 400, line-height 1.5
- Buttons: 16px desktop / 15px mobile, weight 600

## Spacing (8px base grid)
- xs: 8px
- sm: 16px
- md: 24px
- lg: 48px
- xl: 80px (desktop section gaps) / 56px (mobile section gaps)
- xxl: 120px (hero padding desktop)

## Grid
- Desktop: max-width 1200px, centered, 24px gutters
- Tablet: 16px gutters
- Mobile: 16px side padding, full-bleed backgrounds