# Hazard Hunt — Marketing Website

The public website for **Hazard Hunt**, a browser-based 360° hazard perception trainer for warehouse safety compliance, built by the **Macro Thinker** team as part of the CET257 Enterprise Project.

The site is a plain static site: HTML, CSS and vanilla JavaScript. No frameworks, no build step, no npm packages.

## Pages

| File | Page | What it covers |
|------|------|----------------|
| `index.html` | Home | Hero, the problem with sign-in sheets, how it works, VR headset vs browser comparison, closing CTA |
| `about.html` | About | Who we are, the team, why hazard perception was the gap |
| `demo.html` | Demo | Five-step trainee journey, video walkthrough placeholder, trainee / supervisor / admin roles |
| `contact.html` | Contact | Demo request form and contact details |

Shared files:

- `styles.css` — all styles, commented by section (tokens, header, hero, cards, forms, footer, breakpoints)
- `script.js` — mobile nav toggle and client-side validation for the contact form

## Project structure

```
.
├── index.html
├── about.html
├── demo.html
├── contact.html
├── styles.css
├── script.js
└── README.md
```

## Design reference

| Token | Value | Use |
|-------|-------|-----|
| Macro Teal | `#0D5760` | Primary colour, headings, CTA bands |
| Deep Teal | `#0A3236` | Page heroes and footer |
| Hazard Amber | `#E8A33D` | Buttons and small highlights only |
| Paper Grey | `#F4F6F6` | Alternating section backgrounds |
| Ink | `#1B1F1F` | Body text |

- Headings: [Poppins](https://fonts.google.com/specimen/Poppins) (SemiBold/Bold) via Google Fonts, with a system sans-serif fallback
- Body: system sans-serif stack (`system-ui`, Segoe UI, Calibri)
- Breakpoints: layouts stack at 1024px, 860px and 768px; the nav collapses to a hamburger at 768px and below

## Accessibility and SEO

- Semantic HTML5 landmarks (`header`, `nav`, `main`, `section`, `footer`)
- Labelled form fields, visible keyboard focus, `aria-current` on the active nav link
- Reduced-motion preference respected
- Unique `<title>` and meta description on every page



## Team

| Name | Role |
|------|------|
| Himanshu Bhusal | Project Management & Documentation |
| Prabin Upadhayay | Back-end Engineering & Quality Assurance |
| Aadarsh K.C. | Front-end & Interaction Design |
| Shishir Pandey | Presentation & Client Relations |

## Licence

Student enterprise project (CET257). All rights reserved by the Macro Thinker team unless a licence is added.
