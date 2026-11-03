import React from "react";

interface CtaWaterSplashDesignProps {
  className?: string;
}

export function CtaWaterSplashDesign({ className = "" }: CtaWaterSplashDesignProps) {
  return (
    <div className={`industries-cta-wave-decor ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 380 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMaxYMax meet"
        className="cta-water-splash-svg"
      >
        <defs>
          {/* Ambient depth radial glow */}
          <radialGradient
            id="cta-water-ambient"
            cx="75%"
            cy="80%"
            r="65%"
          >
            <stop offset="0%" stopColor="#1769A6" stopOpacity="0.16" />
            <stop offset="50%" stopColor="#2B82C4" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#B9D9E8" stopOpacity="0" />
          </radialGradient>

          {/* Deep back wave gradient */}
          <linearGradient id="cta-wave-back" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#B9D9E8" stopOpacity="0.28" />
            <stop offset="50%" stopColor="#5EA6DC" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#1769A6" stopOpacity="0.32" />
          </linearGradient>

          {/* Mid fluid wave gradient */}
          <linearGradient id="cta-wave-mid" x1="10%" y1="0%" x2="95%" y2="100%">
            <stop offset="0%" stopColor="#5EA6DC" stopOpacity="0.32" />
            <stop offset="45%" stopColor="#2B82C4" stopOpacity="0.48" />
            <stop offset="100%" stopColor="#1769A6" stopOpacity="0.58" />
          </linearGradient>

          {/* Foreground crest splash gradient */}
          <linearGradient id="cta-wave-front" x1="30%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.85" />
            <stop offset="25%" stopColor="#93C5FD" stopOpacity="0.65" />
            <stop offset="75%" stopColor="#2B82C4" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#1769A6" stopOpacity="0.8" />
          </linearGradient>

          {/* High-contrast water rim shine */}
          <linearGradient id="cta-rim-shine" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.2" />
            <stop offset="40%" stopColor="#FFFFFF" stopOpacity="0.95" />
            <stop offset="75%" stopColor="#7DD3FC" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#1769A6" stopOpacity="0.35" />
          </linearGradient>

          {/* Splash droplet 3D liquid gradient */}
          <radialGradient id="cta-drop-radial" cx="35%" cy="30%" r="65%">
            <stop offset="0%" stopColor="#EAF3F8" stopOpacity="0.95" />
            <stop offset="35%" stopColor="#5EA6DC" stopOpacity="0.85" />
            <stop offset="75%" stopColor="#1769A6" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#0E456E" stopOpacity="0.95" />
          </radialGradient>

          {/* Splash ripple gradient */}
          <linearGradient id="cta-ripple-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7DD3FC" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#1769A6" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#2B82C4" stopOpacity="0.15" />
          </linearGradient>

          {/* Sparkle filter glow */}
          <filter id="cta-sparkle-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="0.8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Ambient backlight */}
        <ellipse cx="290" cy="110" rx="90" ry="30" fill="url(#cta-water-ambient)" />

        {/* Back undulating wave layer */}
        <path
          d="M0 140 Q 80 115, 160 122 T 270 98 Q 325 88, 380 102 L 380 140 Z"
          fill="url(#cta-wave-back)"
        />

        {/* Concentric ripple rings around splash base */}
        <ellipse
          cx="285"
          cy="122"
          rx="58"
          ry="11"
          fill="none"
          stroke="url(#cta-ripple-grad)"
          strokeWidth="1.2"
          strokeDasharray="4 3"
          opacity="0.5"
        />
        <ellipse
          cx="285"
          cy="122"
          rx="36"
          ry="7"
          fill="none"
          stroke="url(#cta-ripple-grad)"
          strokeWidth="1.4"
          opacity="0.7"
        />

        {/* Mid flowing wave layer */}
        <path
          d="M50 140 C 130 140, 165 110, 215 116 C 265 122, 295 86, 335 92 C 358 95, 372 108, 380 114 L 380 140 Z"
          fill="url(#cta-wave-mid)"
        />

        {/* Dynamic primary splash crown & column */}
        <path
          d="M272 126 C 276 102, 273 82, 279 66 C 282 59, 289 59, 291 66 C 295 78, 292 100, 298 122 Z"
          fill="url(#cta-wave-front)"
        />
        {/* Secondary splash jet */}
        <path
          d="M312 118 C 317 96, 324 82, 331 72 C 334 67, 340 69, 339 77 C 336 89, 329 104, 334 122 Z"
          fill="url(#cta-wave-front)"
        />
        {/* Mini leaping curl */}
        <path
          d="M250 126 C 253 112, 258 104, 262 98 C 265 94, 269 96, 268 101 C 266 109, 262 118, 265 126 Z"
          fill="url(#cta-wave-front)"
          opacity="0.8"
        />

        {/* Water wave crest highlight rim */}
        <path
          d="M48 140 C 128 140, 164 110, 214 116 C 264 122, 294 86, 334 92 C 357 95, 371 108, 380 114"
          fill="none"
          stroke="url(#cta-rim-shine)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        {/* Splash crown highlight edge */}
        <path
          d="M276 95 C 278 78, 282 64, 285 61 C 288 64, 290 76, 291 90"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="1.2"
          strokeLinecap="round"
          opacity="0.85"
        />

        {/* Dynamic airborne water droplets */}
        {/* Main lead droplet */}
        <g transform="translate(285, 42)">
          <path
            d="M0 -6 C 3 -2, 5 2, 4 5 C 3 8, -3 8, -4 5 C -5 2, -3 -2, 0 -6 Z"
            fill="url(#cta-drop-radial)"
          />
          <circle cx="-1" cy="2" r="1.2" fill="#FFFFFF" opacity="0.9" />
        </g>

        {/* Droplet 2 (Right splash arc) */}
        <g transform="translate(336, 52)">
          <circle cx="0" cy="0" r="4.2" fill="url(#cta-drop-radial)" />
          <circle cx="-1.2" cy="-1.2" r="1.3" fill="#FFFFFF" opacity="0.95" />
        </g>

        {/* Droplet 3 (High apex center-right) */}
        <g transform="translate(312, 32)">
          <circle cx="0" cy="0" r="3.4" fill="url(#cta-drop-radial)" />
          <circle cx="-1" cy="-1" r="1" fill="#FFFFFF" opacity="0.9" />
        </g>

        {/* Droplet 4 (Left trailing spray) */}
        <g transform="translate(262, 82)">
          <circle cx="0" cy="0" r="3" fill="url(#cta-drop-radial)" />
          <circle cx="-0.8" cy="-0.8" r="0.9" fill="#FFFFFF" opacity="0.85" />
        </g>

        {/* Droplet 5 (Right floating spray) */}
        <g transform="translate(356, 42)">
          <circle cx="0" cy="0" r="3.2" fill="url(#cta-drop-radial)" />
          <circle cx="-0.9" cy="-0.9" r="0.9" fill="#FFFFFF" opacity="0.85" />
        </g>

        {/* Droplet 6 (High right drift) */}
        <g transform="translate(368, 64)">
          <circle cx="0" cy="0" r="2.4" fill="url(#cta-drop-radial)" />
          <circle cx="-0.6" cy="-0.6" r="0.7" fill="#FFFFFF" opacity="0.8" />
        </g>

        {/* Micro spray particles */}
        <circle cx="250" cy="94" r="1.6" fill="#5EA6DC" opacity="0.75" />
        <circle cx="270" cy="54" r="1.8" fill="#5EA6DC" opacity="0.8" />
        <circle cx="300" cy="48" r="2" fill="#2B82C4" opacity="0.75" />
        <circle cx="324" cy="58" r="1.8" fill="#5EA6DC" opacity="0.8" />
        <circle cx="348" cy="74" r="2" fill="#2B82C4" opacity="0.7" />
        <circle cx="330" cy="38" r="1.5" fill="#93C5FD" opacity="0.85" />

        {/* Aquatic glisten / 4-point light sparkles */}
        <g transform="translate(285, 60)" filter="url(#cta-sparkle-glow)">
          <path
            d="M0 -5 Q 0.6 -0.6, 5 0 Q 0.6 0.6, 0 5 Q -0.6 0.6, -5 0 Q -0.6 -0.6, 0 -5 Z"
            fill="#FFFFFF"
            opacity="0.95"
          />
        </g>
        <g transform="translate(333, 70)" filter="url(#cta-sparkle-glow)">
          <path
            d="M0 -3.5 Q 0.5 -0.5, 3.5 0 Q 0.5 0.5, 0 3.5 Q -0.5 0.5, -3.5 0 Q -0.5 -0.5, 0 -3.5 Z"
            fill="#FFFFFF"
            opacity="0.9"
          />
        </g>
      </svg>
    </div>
  );
}
export default CtaWaterSplashDesign;
