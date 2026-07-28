export function BrandCurves({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 800 800"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M60 700 C 140 300, 420 140, 760 260"
        stroke="#1F2344"
        strokeOpacity="0.05"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M40 740 C 160 340, 460 180, 780 320"
        stroke="#1F2344"
        strokeOpacity="0.07"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path
        d="M100 760 C 220 400, 520 250, 790 400"
        stroke="#C7C7C7"
        strokeOpacity="0.4"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path
        d="M180 780 C 300 480, 570 360, 795 490"
        stroke="#D71920"
        strokeOpacity="0.10"
        strokeWidth="1"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Wide translucent arc echoing the logo swoosh. */
export function BrandArcSoft({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 1200 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M-40 560 C 220 140, 760 60, 1240 220"
        stroke="#1F2344"
        strokeOpacity="0.045"
        strokeWidth="120"
        strokeLinecap="round"
      />
      <path
        d="M-20 520 C 240 130, 780 50, 1220 200"
        stroke="#1F2344"
        strokeOpacity="0.08"
        strokeWidth="1"
      />
    </svg>
  );
}

/** Light-on-dark variant for navy bands. */
export function BrandCurvesLight({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 1200 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M-60 520 C 220 120, 760 40, 1260 200"
        stroke="#FFFFFF"
        strokeOpacity="0.05"
        strokeWidth="140"
        strokeLinecap="round"
      />
      <path
        d="M-40 480 C 240 110, 780 30, 1240 180"
        stroke="#FFFFFF"
        strokeOpacity="0.12"
        strokeWidth="1"
      />
      <path
        d="M-40 560 C 260 180, 800 90, 1240 250"
        stroke="#D71920"
        strokeOpacity="0.30"
        strokeWidth="1"
      />
    </svg>
  );
}
