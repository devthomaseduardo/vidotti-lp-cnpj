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
