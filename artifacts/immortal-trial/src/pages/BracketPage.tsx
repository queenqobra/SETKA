import bgImg from "@assets/1background_1774702840993.png";

// ===== НАЗВАНИЯ КОМАНД — меняй здесь =====
const UPPER_TEAMS: string[] = [
  "Rakuzan", "SLAWAIZM", "Gods Only", "Turbo Warriors",
  "ADP Team", "Nexus Team", "Wirtus-Pro", "genzero-",
  "Genialnost", "kik069", "wet womens", "Keijo Team",
  "Buriza Team", "SBK_1337", "NOVA GAMING", "Team Spilis",
  "PSIXDISPANCER", "DF RISING", "Glory era", "Bichki Team",
  "kyoto team", "Fallen Angels", "SoundCloud", "Lopata",
  "Snowfall", "TBD", "TBD", "TBD",
  "TBD", "TBD", "TBD", "TBD",
];

// Нижняя сетка — 16 пар (лузеры vs победители)
const LOWER_TEAMS: string[] = [
  "LOSER A", "LOSER B", "LOSER C", "LOSER D",
  "LOSER E", "LOSER F", "LOSER G", "LOSER H",
  "LOSER I", "LOSER J", "LOSER K", "LOSER L",
  "LOSER M", "LOSER N", "LOSER O", "LOSER P",
];

// ============ КОНСТАНТЫ ============
const H = 16;   // высота ячейки
const GAP = 4;  // промежуток между ячейками одного матча
const SLOT = H + GAP; // 20px на слот
const COL_W = 145; // ширина между колонками

// Вычислить центр ячейки (round, index) по y
function cellCenterY(round: number, idx: number): number {
  const step = SLOT * Math.pow(2, round);
  const offset = (step - H) / 2;
  return idx * step + offset + H / 2;
}

function cellTopY(round: number, idx: number): number {
  return cellCenterY(round, idx) - H / 2;
}

const UPPER_ROUNDS = 6; // 32→16→8→4→2→1
const UPPER_COUNTS = [32, 16, 8, 4, 2, 1];
const UPPER_TOTAL_H = SLOT * 32; // 640px
const UPPER_TOTAL_W = COL_W * UPPER_ROUNDS + 130; // +130 for last cell

// SVG lines for upper bracket
function UpperBracketSVG() {
  const lines: React.ReactNode[] = [];
  for (let round = 0; round < UPPER_ROUNDS - 1; round++) {
    const count = UPPER_COUNTS[round];
    const cx = round * COL_W + 130; // right edge of current col
    const nx = (round + 1) * COL_W; // left edge of next col

    for (let i = 0; i < count; i += 2) {
      const cy1 = cellCenterY(round, i);
      const cy2 = cellCenterY(round, i + 1);
      const midY = (cy1 + cy2) / 2;
      const midX = cx + (nx - cx) / 2;
      const nextY = cellCenterY(round + 1, i / 2);

      lines.push(
        <g key={`u-${round}-${i}`} stroke="rgba(255,255,255,0.25)" strokeWidth="1" fill="none">
          {/* right of cell 1 → mid vertical */}
          <polyline points={`${cx},${cy1} ${midX},${cy1} ${midX},${cy2} ${cx},${cy2}`} />
          {/* mid → left of next cell */}
          <line x1={midX} y1={midY} x2={nx} y2={nextY} />
        </g>
      );
    }
  }
  return (
    <svg
      className="absolute inset-0 pointer-events-none"
      width={UPPER_TOTAL_W}
      height={UPPER_TOTAL_H}
    >
      {lines}
    </svg>
  );
}

// SVG lines for lower bracket
const LOWER_SLOT = 28;
const LOWER_H = 16;
const LOWER_COUNTS = [16, 8, 4, 2, 1];
const LOWER_TOTAL_H = LOWER_SLOT * 16;
const LOWER_TOTAL_W = COL_W * 5 + 130;

function lowerCenterY(round: number, idx: number): number {
  const step = LOWER_SLOT * Math.pow(2, round);
  const offset = (step - LOWER_H) / 2;
  return idx * step + offset + LOWER_H / 2;
}

function LowerBracketSVG() {
  const lines: React.ReactNode[] = [];
  for (let round = 0; round < LOWER_COUNTS.length - 1; round++) {
    const count = LOWER_COUNTS[round];
    const cx = round * COL_W + 130;
    const nx = (round + 1) * COL_W;

    for (let i = 0; i < count; i += 2) {
      const cy1 = lowerCenterY(round, i);
      const cy2 = lowerCenterY(round, i + 1);
      const midY = (cy1 + cy2) / 2;
      const midX = cx + (nx - cx) / 2;
      const nextY = lowerCenterY(round + 1, i / 2);

      lines.push(
        <g key={`l-${round}-${i}`} stroke="rgba(220,38,38,0.35)" strokeWidth="1" fill="none">
          <polyline points={`${cx},${cy1} ${midX},${cy1} ${midX},${cy2} ${cx},${cy2}`} />
          <line x1={midX} y1={midY} x2={nx} y2={nextY} />
        </g>
      );
    }
  }
  return (
    <svg
      className="absolute inset-0 pointer-events-none"
      width={LOWER_TOTAL_W}
      height={LOWER_TOTAL_H}
    >
      {lines}
    </svg>
  );
}

// Верхняя сетка
function UpperBracket() {
  return (
    <div className="relative" style={{ width: UPPER_TOTAL_W, height: UPPER_TOTAL_H }}>
      <UpperBracketSVG />
      {UPPER_COUNTS.map((count, round) => (
        <div key={round} className="absolute top-0" style={{ left: round * COL_W }}>
          {Array.from({ length: count }).map((_, i) => {
            const team = round === 0 ? (UPPER_TEAMS[i] || "") : "";
            const top = cellTopY(round, i);
            return (
              <div
                key={i}
                className="absolute flex items-center px-2 rounded-sm"
                style={{
                  top,
                  left: 0,
                  width: 128,
                  height: H,
                  background: "rgba(255,255,255,0.92)",
                  boxShadow: "0 0 6px rgba(255,255,255,0.3)",
                }}
              >
                <span className="text-black font-bold truncate" style={{ fontSize: 9, letterSpacing: "0.5px" }}>
                  {team || (round > 0 ? "" : "")}
                </span>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}

// Нижняя сетка
function LowerBracket() {
  return (
    <div className="relative" style={{ width: LOWER_TOTAL_W, height: LOWER_TOTAL_H }}>
      <LowerBracketSVG />
      {LOWER_COUNTS.map((count, round) => (
        <div key={round} className="absolute top-0" style={{ left: round * COL_W }}>
          {Array.from({ length: count }).map((_, i) => {
            const team = round === 0 ? (LOWER_TEAMS[i] || "") : "";
            const top = lowerCenterY(round, i) - LOWER_H / 2;
            return (
              <div
                key={i}
                className="absolute flex items-center px-2 rounded-sm"
                style={{
                  top,
                  left: 0,
                  width: 128,
                  height: LOWER_H,
                  background: "rgba(153,27,27,0.9)",
                  boxShadow: "0 0 6px rgba(220,38,38,0.4)",
                  borderLeft: "2px solid rgba(239,68,68,0.7)",
                }}
              >
                <span className="text-white font-bold truncate" style={{ fontSize: 9, letterSpacing: "0.5px" }}>
                  {team}
                </span>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}

export function BracketPage({ onBack }: { onBack: () => void }) {
  return (
    <div className="relative bg-black" style={{ minHeight: "100vh", overflow: "auto" }}>
      {/* Фон */}
      <img
        src={bgImg}
        className="fixed top-0 left-0 w-full h-full object-cover z-0 pointer-events-none opacity-25"
        style={{ filter: "grayscale(30%)" }}
      />

      <div className="relative z-10" style={{ padding: "20px 32px 40px" }}>
        {/* Верхняя сетка */}
        <div className="mb-2">
          <div
            className="text-white font-bold mb-3"
            style={{ fontSize: 11, letterSpacing: "3px", fontFamily: "monospace", borderBottom: "1px solid rgba(255,255,255,0.12)", paddingBottom: 6 }}
          >
            ВЕРХНЯЯ СЕТКА
          </div>
          {/* Round labels */}
          <div className="flex mb-1" style={{ gap: 0 }}>
            {["РАУ 1 (32)", "РАУ 2 (16)", "РАУ 3 (8)", "РАУ 4 (4)", "ПОЛУ (2)", "ПОБЕДИТЕЛЬ"].map((label, i) => (
              <div
                key={i}
                className="text-white/40 font-bold"
                style={{ width: i < 5 ? COL_W : 130, fontSize: 8, letterSpacing: "1.5px", fontFamily: "monospace" }}
              >
                {label}
              </div>
            ))}
          </div>
          <div style={{ overflowX: "auto" }}>
            <UpperBracket />
          </div>
        </div>

        {/* Нижняя сетка */}
        <div style={{ marginTop: 28 }}>
          <div
            className="font-bold mb-3"
            style={{ fontSize: 11, letterSpacing: "3px", fontFamily: "monospace", borderBottom: "1px solid rgba(220,38,38,0.3)", paddingBottom: 6, color: "rgba(239,68,68,0.9)" }}
          >
            НИЖНЯЯ СЕТКА
          </div>
          <div className="flex mb-1" style={{ gap: 0 }}>
            {["НИЗ РАУ 1 (16)", "НИЗ РАУ 2 (8)", "НИЗ РАУ 3 (4)", "НИЗ РАУ 4 (2)", "ФИНАЛ НИЗ"].map((label, i) => (
              <div
                key={i}
                className="font-bold"
                style={{ width: i < 4 ? COL_W : 130, fontSize: 8, letterSpacing: "1.5px", fontFamily: "monospace", color: "rgba(239,68,68,0.5)" }}
              >
                {label}
              </div>
            ))}
          </div>
          <div style={{ overflowX: "auto" }}>
            <LowerBracket />
          </div>
        </div>
      </div>
    </div>
  );
}
