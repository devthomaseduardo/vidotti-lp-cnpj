/**
 * Ilustrações das etapas de "Como funciona": traço fino em branco translúcido,
 * com um único destaque no vermelho da marca. Decorativas (aria-hidden).
 */
const line = "rgba(255,255,255,0.32)";
const soft = "rgba(255,255,255,0.08)";
const red = "var(--brand-red)";

type Props = { className?: string };

/** 01: Diagnóstico: conversa + ficha sendo preenchida. */
function Diagnostic({ className }: Props) {
  return (
    <svg viewBox="0 0 160 110" className={className} fill="none" aria-hidden="true">
      <rect x="62" y="14" width="64" height="84" rx="8" fill={soft} stroke={line} />
      <rect x="82" y="8" width="24" height="10" rx="3" fill="#11152b" stroke={line} />
      {[34, 50, 66, 82].map((y, i) => (
        <g key={y}>
          <rect x="72" y={y - 4} width="8" height="8" rx="2" stroke={i < 2 ? red : line} />
          {i < 2 && <path d={`M73.5 ${y} l2 2 3.5-4`} stroke={red} strokeWidth="1.6" />}
          <path
            d={`M86 ${y} h${i % 2 ? 22 : 30}`}
            stroke={line}
            strokeWidth="2"
            strokeLinecap="round"
          />
        </g>
      ))}
      <path
        d="M14 30 h40 a6 6 0 0 1 6 6 v18 a6 6 0 0 1-6 6 H30 l-8 8 v-8 h-8 a6 6 0 0 1-6-6 V36 a6 6 0 0 1 6-6z"
        fill="#11152b"
        stroke={red}
      />
      <circle cx="24" cy="45" r="2.5" fill={red} />
      <circle cx="34" cy="45" r="2.5" fill={red} />
      <circle cx="44" cy="45" r="2.5" fill={red} />
    </svg>
  );
}

/** 02: Enquadramento: balança entre dois regimes. */
function Tax({ className }: Props) {
  return (
    <svg viewBox="0 0 160 110" className={className} fill="none" aria-hidden="true">
      <path d="M80 18 v74 M58 92 h44" stroke={line} strokeWidth="2" strokeLinecap="round" />
      <circle cx="80" cy="16" r="4" fill={red} />
      <path d="M36 30 L124 22" stroke={line} strokeWidth="2" strokeLinecap="round" />
      <path d="M36 30 L22 58 M36 30 L50 58 M124 22 L110 50 M124 22 L138 50" stroke={line} />
      <path d="M18 58 a18 8 0 0 0 36 0z" fill={soft} stroke={line} />
      <path d="M106 50 a18 8 0 0 0 36 0z" fill="rgba(215,25,32,0.12)" stroke={red} />
      <text
        x="36"
        y="84"
        textAnchor="middle"
        fontSize="11"
        fill="rgba(255,255,255,0.55)"
        fontFamily="inherit"
      >
        MEI
      </text>
      <text
        x="124"
        y="76"
        textAnchor="middle"
        fontSize="11"
        fill={red}
        fontFamily="inherit"
        fontWeight="600"
      >
        ME
      </text>
    </svg>
  );
}

/** 03: Documentos: papéis empilhados com carimbo de aprovado. */
function Documents({ className }: Props) {
  return (
    <svg viewBox="0 0 160 110" className={className} fill="none" aria-hidden="true">
      <rect
        x="40"
        y="22"
        width="58"
        height="76"
        rx="6"
        fill={soft}
        stroke={line}
        transform="rotate(-8 69 60)"
      />
      <rect x="56" y="14" width="58" height="76" rx="6" fill="#11152b" stroke={line} />
      <path
        d="M66 30 h30 M66 40 h38 M66 50 h24 M66 60 h34"
        stroke={line}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <text
        x="66"
        y="80"
        fontSize="9"
        fill="rgba(255,255,255,0.55)"
        fontFamily="inherit"
        letterSpacing="1"
      >
        CNPJ
      </text>
      <circle cx="116" cy="78" r="17" fill="#11152b" stroke={red} strokeWidth="1.5" />
      <circle cx="116" cy="78" r="12" stroke={red} strokeDasharray="3 3" />
      <path
        d="M109 78 l5 5 9-10"
        stroke={red}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** 04: Operação: calendário de guias + gráfico em ordem. */
function Operation({ className }: Props) {
  return (
    <svg viewBox="0 0 160 110" className={className} fill="none" aria-hidden="true">
      <rect x="16" y="20" width="62" height="70" rx="6" fill={soft} stroke={line} />
      <path
        d="M16 36 h62 M30 14 v12 M64 14 v12"
        stroke={line}
        strokeWidth="2"
        strokeLinecap="round"
      />
      {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => {
        const x = 26 + (i % 3) * 16;
        const y = 46 + Math.floor(i / 3) * 14;
        return i === 4 ? (
          <circle key={i} cx={x + 4} cy={y + 4} r="6" fill={red} />
        ) : (
          <rect key={i} x={x} y={y} width="8" height="8" rx="2" stroke={line} />
        );
      })}
      <path d="M92 90 h54" stroke={line} strokeWidth="2" strokeLinecap="round" />
      {[
        [96, 30],
        [110, 44],
        [124, 36],
        [138, 56],
      ].map(([x, h], i) => (
        <rect
          key={x}
          x={x}
          y={90 - h}
          width="9"
          height={h}
          rx="2"
          fill={i === 3 ? red : soft}
          stroke={i === 3 ? red : line}
        />
      ))}
    </svg>
  );
}

const illustrations = [Diagnostic, Tax, Documents, Operation];

export function StepIllustration({ index, className }: Props & { index: number }) {
  const Illustration = illustrations[index] ?? Diagnostic;
  return <Illustration className={className} />;
}
