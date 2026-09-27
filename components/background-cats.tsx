"use client";

// Cute cat doodles scattered in the page background.
// Each cat is a simple SVG silhouette in a different pose.

function SittingCat({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 100" fill="currentColor" className={className}>
      {/* Ears */}
      <polygon points="20,30 28,10 36,28" />
      <polygon points="44,28 52,10 60,30" />
      {/* Head */}
      <ellipse cx="40" cy="36" rx="18" ry="14" />
      {/* Body */}
      <ellipse cx="40" cy="68" rx="16" ry="22" />
      {/* Tail */}
      <path d="M56,72 C68,70 72,55 65,48" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
      {/* Eyes */}
      <ellipse cx="34" cy="34" rx="2" ry="2.5" fill="var(--color-background)" />
      <ellipse cx="46" cy="34" rx="2" ry="2.5" fill="var(--color-background)" />
      {/* Paws */}
      <ellipse cx="32" cy="88" rx="6" ry="4" />
      <ellipse cx="48" cy="88" rx="6" ry="4" />
    </svg>
  );
}

function SleepingCat({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 60" fill="currentColor" className={className}>
      {/* Body - loaf shape */}
      <ellipse cx="60" cy="40" rx="40" ry="18" />
      {/* Head */}
      <ellipse cx="25" cy="30" rx="14" ry="12" />
      {/* Ears */}
      <polygon points="15,22 20,10 26,20" />
      <polygon points="26,20 32,10 36,22" />
      {/* Closed eyes */}
      <path d="M18,29 Q22,26 26,29" stroke="var(--color-background)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      {/* Tail curled around */}
      <path d="M98,35 C110,28 108,48 95,50 C85,52 82,45 88,42" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
      {/* Zzz */}
      <text x="38" y="16" fill="currentColor" fontSize="9" fontFamily="monospace" fontWeight="bold">z</text>
      <text x="45" y="10" fill="currentColor" fontSize="7" fontFamily="monospace" fontWeight="bold" opacity="0.6">z</text>
    </svg>
  );
}

function PlayfulCat({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 90 100" fill="currentColor" className={className}>
      {/* Ears */}
      <polygon points="22,30 30,12 38,28" />
      <polygon points="46,28 54,12 62,30" />
      {/* Head */}
      <ellipse cx="42" cy="36" rx="17" ry="13" />
      {/* Body - stretched upward */}
      <ellipse cx="42" cy="64" rx="14" ry="20" />
      {/* Eyes - wide */}
      <circle cx="36" cy="34" r="3" fill="var(--color-background)" />
      <circle cx="48" cy="34" r="3" fill="var(--color-background)" />
      <circle cx="36" cy="35" r="1.5" fill="var(--color-accent)" />
      <circle cx="48" cy="35" r="1.5" fill="var(--color-accent)" />
      {/* Paw reaching up */}
      <path d="M58,55 C65,48 70,42 68,38" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
      {/* Other paw */}
      <path d="M26,58 C18,52 14,46 16,42" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
      {/* Tail */}
      <path d="M52,80 C62,85 70,78 65,70" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
      {/* Paws */}
      <ellipse cx="36" cy="84" rx="5" ry="3.5" />
      <ellipse cx="50" cy="84" rx="5" ry="3.5" />
    </svg>
  );
}

function StretchingCat({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 130 70" fill="currentColor" className={className}>
      {/* Head low */}
      <ellipse cx="22" cy="46" rx="13" ry="11" />
      {/* Ears */}
      <polygon points="12,38 16,26 22,36" />
      <polygon points="22,36 28,26 32,38" />
      {/* Eyes - happy squint */}
      <path d="M16,44 Q19,41 22,44" stroke="var(--color-background)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      {/* Body - arched back */}
      <path d="M34,42 C50,15 80,15 100,40" stroke="currentColor" strokeWidth="16" fill="none" strokeLinecap="round" />
      {/* Butt / back legs */}
      <ellipse cx="105" cy="45" rx="12" ry="14" />
      {/* Front paws stretched out */}
      <path d="M30,50 L12,58" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
      <path d="M32,52 L18,62" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
      {/* Back paws */}
      <ellipse cx="100" cy="58" rx="5" ry="3.5" />
      <ellipse cx="112" cy="56" rx="5" ry="3.5" />
      {/* Tail up */}
      <path d="M116,38 C125,25 128,18 122,12" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
    </svg>
  );
}

function PawPrint({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 44" fill="currentColor" className={className}>
      {/* Main pad */}
      <ellipse cx="20" cy="30" rx="10" ry="9" />
      {/* Toe beans */}
      <ellipse cx="10" cy="16" rx="5" ry="6" />
      <ellipse cx="20" cy="12" rx="5" ry="6" />
      <ellipse cx="30" cy="16" rx="5" ry="6" />
    </svg>
  );
}

const cats = [
  // Top area
  { Cat: SittingCat, style: { top: "8%", left: "3%" }, size: "w-12 md:w-16", rotate: "rotate-[-8deg]" },
  { Cat: PawPrint, style: { top: "5%", right: "8%" }, size: "w-6 md:w-8", rotate: "rotate-[20deg]" },
  { Cat: PawPrint, style: { top: "9%", right: "12%" }, size: "w-5 md:w-6", rotate: "rotate-[35deg]" },

  // Upper-mid
  { Cat: SleepingCat, style: { top: "22%", right: "2%" }, size: "w-16 md:w-20", rotate: "rotate-[5deg]" },
  { Cat: PawPrint, style: { top: "28%", left: "5%" }, size: "w-5 md:w-7", rotate: "rotate-[-15deg]" },

  // Mid
  { Cat: PlayfulCat, style: { top: "42%", left: "1%" }, size: "w-10 md:w-14", rotate: "rotate-[6deg]" },
  { Cat: PawPrint, style: { top: "48%", right: "4%" }, size: "w-5 md:w-7", rotate: "rotate-[25deg]" },
  { Cat: PawPrint, style: { top: "52%", right: "7%" }, size: "w-4 md:w-5", rotate: "rotate-[40deg]" },

  // Lower-mid
  { Cat: StretchingCat, style: { top: "65%", right: "1%" }, size: "w-16 md:w-22", rotate: "rotate-[-3deg]" },
  { Cat: PawPrint, style: { top: "62%", left: "4%" }, size: "w-5 md:w-6", rotate: "rotate-[10deg]" },

  // Bottom
  { Cat: SittingCat, style: { top: "82%", right: "5%" }, size: "w-10 md:w-14", rotate: "rotate-[12deg]" },
  { Cat: SleepingCat, style: { top: "88%", left: "2%" }, size: "w-14 md:w-18", rotate: "rotate-[-4deg]" },
  { Cat: PawPrint, style: { top: "78%", left: "8%" }, size: "w-4 md:w-6", rotate: "rotate-[-20deg]" },
];

export function BackgroundCats() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden text-accent opacity-[0.15] dark:opacity-[0.12]">
      {cats.map(({ Cat, style, size, rotate }, i) => (
        <div
          key={i}
          className={`absolute ${size} ${rotate}`}
          style={style}
        >
          <Cat className="w-full h-auto" />
        </div>
      ))}
    </div>
  );
}
