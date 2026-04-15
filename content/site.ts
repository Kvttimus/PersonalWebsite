// Single source of truth for site-wide config.
// Edit this file to change your name, tagline, intro, socials, and the rotating hero words.

export const site = {
  name: "Amanda",
  fullName: "Amanda", // shown in hero, e.g. "hi, i'm amanda"
  tagline: "student. builder. curious human.",
  description: "Amanda's personal site.",
  url: "https://your-domain.com", // update when you pick a domain

  // Shown on the /contact page and in metadata
  email: "your-email@example.com",

  // Words that cycle in the hero after "i'm a..."
  rotatingWords: ["student", "builder", "artist", "writer", "traveler"],

  // Short intro paragraph under the hero on the home page
  heroIntro:
    "Write a 1–2 sentence introduction here — who you are, what you care about, what this site is.",

  // Longer intro shown on /about
  aboutShort:
    "Write 3–5 sentences about yourself, your interests, what you're working on, and whatever else you want the reader to know. This is your space — no need to be formal.",

  // Links shown on /contact (and in the footer)
  socials: [
    { label: "GitHub", href: "https://github.com/your-username", handle: "@your-username" },
    { label: "LinkedIn", href: "https://linkedin.com/in/your-profile", handle: "your-profile" },
    { label: "Instagram", href: "https://instagram.com/your-handle", handle: "@your-handle" },
    { label: "Email", href: "mailto:your-email@example.com", handle: "your-email@example.com" },
  ],

  // Top nav order. Hide an item by removing it from this array.
  nav: [
    { label: "home", href: "/" },
    { label: "about", href: "/about" },
    { label: "projects", href: "/projects" },
    { label: "experience", href: "/experience" },
    { label: "resume", href: "/resume" },
    { label: "fun", href: "/fun" },
    { label: "contact", href: "/contact" },
  ],
} as const;

export type SiteConfig = typeof site;
