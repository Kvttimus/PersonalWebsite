// Single source of truth for site-wide config.
// Edit this file to change my name, tagline, intro, socials, and the rotating hero words.

export const site = {
  name: "Amanda",
  fullName: "Amanda", // shown in hero, e.g. "hi, i'm amanda"
  tagline: "student. engineer. caffeine addict.",
  description: "Amanda's personal website.",
  url: "https://your-domain.com", // update when I pick a domain

  // Words that cycle in the hero after "i'm a..."
  rotatingWords: ["highschool student", "software engineer", "caffeine addict", "artist"],

  // Text shown after the rotating word, e.g. "i'm a [word] who loves to create"
  heroSuffix: "from seattle. i'm 16 and i currently attend The Bear Creek School.",

  // Short intro paragraph under the hero on the home page
  heroIntro:
    "Write a 1–2 sentence introduction here — who I am, what I care about, what this site is.",

  // Longer intro shown on /about
  aboutShort:
    "Write 3–5 sentences about myself, my interests, what I'm working on, and whatever else I want the reader to know. This is my space — no need to be formal.",

  // Links shown on /contact (and in the footer)
  socials: [
    { label: "GitHub", href: "https://github.com/Kvttimus", handle: "@Kvttimus" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/amanda-li-10b6202a5/", handle: "amanda-li-10b6202a5" },
    { label: "Instagram", href: "https://www.instagram.com/amandaaaa.li/", handle: "@amandaaaa.li" },
    { label: "Email", href: "mailto:wa.amandali@gmail.com", handle: "wa.amandali@gmail.com" },
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
