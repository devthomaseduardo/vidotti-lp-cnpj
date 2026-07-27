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
        d="M120 640 C 220 260, 520 180, 720 340"
        stroke="#1F2344"
        strokeOpacity="0.06"
        strokeWidth="80"
        strokeLinecap="round"
      />
      <path
        d="M80 720 C 260 380, 560 260, 780 420"
        stroke="#C7C7C7"
        strokeOpacity="0.35"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M200 700 C 320 480, 580 380, 760 500"
        stroke="#D71920"
        strokeOpacity="0.12"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function BrandArc({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M40 170 C 40 60, 120 20, 180 50"
        stroke="#C7C7C7"
        strokeWidth="22"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M70 150 C 80 80, 130 55, 170 75"
        stroke="#D71920"
        strokeWidth="14"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
