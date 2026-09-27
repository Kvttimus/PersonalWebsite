export function SunCat({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Ears */}
      <polygon points="14,22 22,8 28,22" fill="currentColor" />
      <polygon points="36,22 42,8 50,22" fill="currentColor" />
      <polygon points="17,20 22,11 26,20" fill="var(--color-background)" />
      <polygon points="38,20 42,11 47,20" fill="var(--color-background)" />

      {/* Face */}
      <ellipse cx="32" cy="34" rx="20" ry="18" fill="currentColor" />

      {/* Eyes - big and open */}
      <ellipse cx="24" cy="31" rx="4" ry="4.5" fill="var(--color-background)" />
      <ellipse cx="40" cy="31" rx="4" ry="4.5" fill="var(--color-background)" />
      <ellipse cx="24" cy="32" rx="2.2" ry="2.5" fill="var(--color-accent)" />
      <ellipse cx="40" cy="32" rx="2.2" ry="2.5" fill="var(--color-accent)" />
      <circle cx="22.5" cy="30.5" r="1" fill="var(--color-background)" />
      <circle cx="38.5" cy="30.5" r="1" fill="var(--color-background)" />

      {/* Nose */}
      <ellipse cx="32" cy="37" rx="1.8" ry="1.2" fill="var(--color-accent)" />

      {/* Mouth */}
      <path d="M32 38.2 C30 40 28.5 39.5 28 39" stroke="var(--color-background)" strokeWidth="0.8" strokeLinecap="round" fill="none" />
      <path d="M32 38.2 C34 40 35.5 39.5 36 39" stroke="var(--color-background)" strokeWidth="0.8" strokeLinecap="round" fill="none" />

      {/* Whiskers */}
      <line x1="6" y1="32" x2="18" y2="34" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      <line x1="6" y1="37" x2="18" y2="37" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      <line x1="46" y1="34" x2="58" y2="32" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      <line x1="46" y1="37" x2="58" y2="37" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />

      {/* Blush */}
      <ellipse cx="21" cy="38" rx="3" ry="1.5" fill="var(--color-accent)" opacity="0.25" />
      <ellipse cx="43" cy="38" rx="3" ry="1.5" fill="var(--color-accent)" opacity="0.25" />
    </svg>
  );
}

export function MoonCat({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Ears */}
      <polygon points="14,22 22,8 28,22" fill="currentColor" />
      <polygon points="36,22 42,8 50,22" fill="currentColor" />
      <polygon points="17,20 22,11 26,20" fill="var(--color-background)" />
      <polygon points="38,20 42,11 47,20" fill="var(--color-background)" />

      {/* Face */}
      <ellipse cx="32" cy="34" rx="20" ry="18" fill="currentColor" />

      {/* Eyes - closed/sleepy (curved lines) */}
      <path d="M20 32 Q24 28 28 32" stroke="var(--color-background)" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path d="M36 32 Q40 28 44 32" stroke="var(--color-background)" strokeWidth="1.8" strokeLinecap="round" fill="none" />

      {/* Nose */}
      <ellipse cx="32" cy="37" rx="1.8" ry="1.2" fill="var(--color-accent)" />

      {/* Mouth - little smile */}
      <path d="M32 38.2 C30 40 28.5 39.5 28 39" stroke="var(--color-background)" strokeWidth="0.8" strokeLinecap="round" fill="none" />
      <path d="M32 38.2 C34 40 35.5 39.5 36 39" stroke="var(--color-background)" strokeWidth="0.8" strokeLinecap="round" fill="none" />

      {/* Whiskers */}
      <line x1="6" y1="32" x2="18" y2="34" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      <line x1="6" y1="37" x2="18" y2="37" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      <line x1="46" y1="34" x2="58" y2="32" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      <line x1="46" y1="37" x2="58" y2="37" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />

      {/* Blush */}
      <ellipse cx="21" cy="38" rx="3" ry="1.5" fill="var(--color-accent)" opacity="0.25" />
      <ellipse cx="43" cy="38" rx="3" ry="1.5" fill="var(--color-accent)" opacity="0.25" />

      {/* Zzz */}
      <text x="48" y="16" fill="var(--color-accent)" fontSize="8" fontWeight="bold" fontFamily="monospace">z</text>
      <text x="53" y="10" fill="var(--color-accent)" fontSize="6" fontWeight="bold" fontFamily="monospace" opacity="0.6">z</text>
    </svg>
  );
}
