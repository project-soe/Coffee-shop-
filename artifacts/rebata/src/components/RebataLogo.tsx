interface RebataLogoProps {
  className?: string;
  size?: number;
}

export function RebataLogo({ className = "", size = 48 }: RebataLogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        viewBox="0 0 64 64"
        width={size}
        height={size}
        stroke="#C5A059"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="32" cy="32" r="30" strokeDasharray="1 1" strokeWidth="1.5" />
        <path
          d="M44,20 C38,14 30,16 24,22 C18,28 16,36 22,42 C28,48 36,46 42,40 C48,34 50,26 44,20 Z"
          strokeWidth="2.5"
        />
        <path
          d="M23,41 C27,38 30,32 32,32 C34,30 37,22 41,21"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
      <div className="flex flex-col leading-none">
        <span
          className="font-serif font-bold text-[#C5A059] tracking-[0.25em] text-xl"
        >
          REBATA
        </span>
        <span className="text-[0.6rem] tracking-[0.45em] font-light text-foreground/60 mt-0.5">
          KOPI MURNI
        </span>
      </div>
    </div>
  );
}
