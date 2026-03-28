import bgImg from "@assets/1background_1774702840993.png";
import ankhImg from "@assets/immortalitylogobtw_1774703914132.png";

// ===== НАЗВАНИЯ КОМАНД — ВЕРХНЯЯ СЕТКА (меняй здесь) =====
const UPPER_TEAMS: string[] = [
  "Rakuzan",       "SLAWAIZM",       "Gods Only",      "Turbo Warriors",
  "ADP Team",      "Nexus Team",     "Wirtus-Pro",     "genzero-",
  "Genialnost",    "kik069",         "wet womens",     "Keijo Team",
  "Buriza Team",   "SBK_1337",       "NOVA GAMING",    "Team Spilis",
  "PSIXDISPANCER", "DF RISING",      "Glory era",      "Bichki Team",
  "kyoto team",    "Fallen Angels",  "SoundCloud",     "Lopata",
  "Snowfall",      "TBD",            "TBD",            "TBD",
  "TBD",           "TBD",            "TBD",            "TBD",
];

// ===== НАЗВАНИЯ КОМАНД — НИЖНЯЯ СЕТКА (16 команд слева) =====
const LOWER_COL0_TEAMS: string[] = [
  "LOSER A", "LOSER B", "LOSER C", "LOSER D",
  "LOSER E", "LOSER F", "LOSER G", "LOSER H",
  "LOSER I", "LOSER J", "LOSER K", "LOSER L",
  "LOSER M", "LOSER N", "LOSER O", "LOSER P",
];
const LOWER_COL1_TEAMS: string[] = Array.from({ length: 16 }, (_, i) => `W${i + 1}`);

// ============ ВЕРХНЯЯ СЕТКА ============
const UH = 14;    // высота ячейки
const UGAP = 4;   // зазор
const USLOT = UH + UGAP; // 18px на слот
const UCOL = 140; // ширина колонки
const UCELL = 124; // ширина ячейки
const UCOUNTS = [32, 16, 8, 4, 2, 1];

function uCenterY(round: number, idx: number) {
  const step = USLOT * Math.pow(2, round);
  return idx * step + step / 2;
}
function uTopY(round: number, idx: number) {
  return uCenterY(round, idx) - UH / 2;
}

const U_TOTAL_H = USLOT * 32; // 576px
const U_TOTAL_W = UCOL * 6 + UCELL;

function UpperBracketSVG() {
  const els: React.ReactNode[] = [];
  for (let r = 0; r < 5; r++) {
    const count = UCOUNTS[r];
    const x1 = r * UCOL + UCELL;      // right edge of current col
    const x2 = (r + 1) * UCOL;        // left edge of next col
    const mx = (x1 + x2) / 2;
    for (let i = 0; i < count; i += 2) {
      const cy1 = uCenterY(r, i);
      const cy2 = uCenterY(r, i + 1);
      const my = (cy1 + cy2) / 2;
      const ny = uCenterY(r + 1, i / 2);
      els.push(
        <g key={`u${r}-${i}`} stroke="rgba(255,255,255,0.22)" strokeWidth="1" fill="none">
          <polyline points={`${x1},${cy1} ${mx},${cy1} ${mx},${cy2} ${x1},${cy2}`} />
          <line x1={mx} y1={my} x2={x2} y2={ny} />
        </g>
      );
    }
  }
  return <svg className="absolute inset-0 pointer-events-none" width={U_TOTAL_W} height={U_TOTAL_H}>{els}</svg>;
}

function UpperBracket() {
  return (
    <div className="relative" style={{ width: U_TOTAL_W, height: U_TOTAL_H }}>
      <UpperBracketSVG />
      {UCOUNTS.map((count, r) => (
        <div key={r} className="absolute top-0" style={{ left: r * UCOL }}>
          {Array.from({ length: count }).map((_, i) => (
            <div
              key={i}
              className="absolute flex items-center px-2 rounded-sm"
              style={{
                top: uTopY(r, i),
                width: UCELL,
                height: UH,
                background: "rgba(255,255,255,0.9)",
                boxShadow: "0 0 5px rgba(255,255,255,0.25)",
              }}
            >
              <span className="text-black font-bold truncate" style={{ fontSize: 8.5, letterSpacing: "0.3px" }}>
                {r === 0 ? UPPER_TEAMS[i] ?? "" : ""}
              </span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

// ============ НИЖНЯЯ СЕТКА  16-16-8-8-4-4-2-2 ============
// Структура: 4 пары колонок (A,B), (C,D), (E,F), (G,H)
// Внутри пары команды играют друг против друга (горизонтальная линия)
// Между парами: победители уходят в следующую пару (bracket-линия)

const LH = 13;    // высота ячейки
const LGAP = 5;   // зазор внутри пары
const LCOL = 130; // ширина колонки
const LCELL = 114; // ширина ячейки

// Уровни пар: 0=16, 1=8, 2=4, 3=2
// Слот на уровне L: LSLOT(0) = LH+LGAP = 18px → 16*18=288px тотал высота
const LSLOT0 = LH + LGAP; // 18px

function lSlot(level: number) { return LSLOT0 * Math.pow(2, level); }

// Центр ячейки: пара P (0-3), колонка внутри пары K (0 or 1), ячейка I
// colIndex = P*2 + K
function lCenterY(level: number, idx: number) {
  const slot = lSlot(level);
  return idx * slot + slot / 2;
}
function lTopY(level: number, idx: number) { return lCenterY(level, idx) - LH / 2; }

// 8 колонок + победитель (ещё одна)
const L_NCOLS = 8;
const L_LEVELS = [0, 0, 1, 1, 2, 2, 3, 3]; // уровень каждой колонки
const L_COUNTS = [16, 16, 8, 8, 4, 4, 2, 2];
const L_TOTAL_H = LSLOT0 * 16; // 288px
const L_TOTAL_W = LCOL * 9 + LCELL; // 9 колонок + ячейка победителя

function LowerBracketSVG() {
  const els: React.ReactNode[] = [];
  // 1) Горизонтальные линии внутри каждой пары (A→B, C→D, E→F, G→H)
  for (let p = 0; p < 4; p++) {
    const level = p;
    const colA = p * 2;
    const colB = p * 2 + 1;
    const count = L_COUNTS[colA];
    const xA = colA * LCOL + LCELL; // правый край A
    const xB = colB * LCOL;         // левый край B
    const mx = (xA + xB) / 2;
    for (let i = 0; i < count; i++) {
      const cy = lCenterY(level, i);
      els.push(
        <line key={`pair-${p}-${i}`}
          x1={xA} y1={cy} x2={xB} y2={cy}
          stroke="rgba(220,38,38,0.35)" strokeWidth="1" />
      );
    }
  }
  // 2) Bracket-линии: B-колонка → следующая A-колонка
  for (let p = 0; p < 3; p++) {
    const fromLevel = p;
    const toLevel = p + 1;
    const fromCol = p * 2 + 1; // B-колонка пары p
    const toCol = (p + 1) * 2; // A-колонка пары p+1
    const count = L_COUNTS[fromCol]; // кол-во в B-колонке
    const x1 = fromCol * LCOL + LCELL; // правый край B
    const x2 = toCol * LCOL;           // левый край A следующей пары
    const mx = (x1 + x2) / 2;
    for (let i = 0; i < count; i += 2) {
      const cy1 = lCenterY(fromLevel, i);
      const cy2 = lCenterY(fromLevel, i + 1);
      const my = (cy1 + cy2) / 2;
      const ny = lCenterY(toLevel, i / 2);
      els.push(
        <g key={`fold-${p}-${i}`} stroke="rgba(220,38,38,0.3)" strokeWidth="1" fill="none">
          <polyline points={`${x1},${cy1} ${mx},${cy1} ${mx},${cy2} ${x1},${cy2}`} />
          <line x1={mx} y1={my} x2={x2} y2={ny} />
        </g>
      );
    }
  }
  // 3) Линия от финальной G/H пары (уровень 3, 2 ячейки в B-col) → победитель
  const finalLevel = 3;
  const finalFromCol = 7;
  const finalToCol = 8;
  const x1f = finalFromCol * LCOL + LCELL;
  const x2f = finalToCol * LCOL;
  const mxf = (x1f + x2f) / 2;
  const cy1f = lCenterY(finalLevel, 0);
  const cy2f = lCenterY(finalLevel, 1);
  const myf = (cy1f + cy2f) / 2;
  const wyf = lCenterY(finalLevel, 0) + (lCenterY(finalLevel, 1) - lCenterY(finalLevel, 0)) / 2;
  els.push(
    <g key="final-winner" stroke="rgba(220,38,38,0.4)" strokeWidth="1" fill="none">
      <polyline points={`${x1f},${cy1f} ${mxf},${cy1f} ${mxf},${cy2f} ${x1f},${cy2f}`} />
      <line x1={mxf} y1={myf} x2={x2f} y2={wyf} />
    </g>
  );

  return (
    <svg className="absolute inset-0 pointer-events-none" width={L_TOTAL_W} height={L_TOTAL_H}>
      {els}
    </svg>
  );
}

function LowerBracket() {
  return (
    <div className="relative" style={{ width: L_TOTAL_W, height: L_TOTAL_H }}>
      <LowerBracketSVG />
      {Array.from({ length: L_NCOLS }).map((_, col) => {
        const level = L_LEVELS[col];
        const count = L_COUNTS[col];
        const isA = col % 2 === 0; // A-колонка (левая в паре)
        return (
          <div key={col} className="absolute top-0" style={{ left: col * LCOL }}>
            {Array.from({ length: count }).map((_, i) => {
              let label = "";
              if (col === 0) label = LOWER_COL0_TEAMS[i] ?? "";
              if (col === 1) label = LOWER_COL1_TEAMS[i] ?? "";
              return (
                <div
                  key={i}
                  className="absolute flex items-center px-2 rounded-sm"
                  style={{
                    top: lTopY(level, i),
                    width: LCELL,
                    height: LH,
                    background: isA ? "rgba(120,20,20,0.88)" : "rgba(153,27,27,0.82)",
                    boxShadow: "0 0 5px rgba(220,38,38,0.3)",
                    borderLeft: isA ? "2px solid rgba(239,68,68,0.6)" : "2px solid rgba(239,68,68,0.35)",
                  }}
                >
                  <span className="text-white font-bold truncate" style={{ fontSize: 8, letterSpacing: "0.3px" }}>
                    {label}
                  </span>
                </div>
              );
            })}
          </div>
        );
      })}
      {/* Ячейка победителя нижней сетки */}
      <div
        className="absolute flex items-center px-2 rounded-sm"
        style={{
          left: 8 * LCOL,
          top: lTopY(3, 0) + (lTopY(3, 1) - lTopY(3, 0)) / 2,
          width: LCELL,
          height: LH,
          background: "rgba(180,30,30,0.9)",
          boxShadow: "0 0 8px rgba(239,68,68,0.5)",
          borderLeft: "2px solid rgba(239,68,68,0.8)",
        }}
      >
        <span className="text-white font-bold truncate" style={{ fontSize: 8 }}></span>
      </div>
    </div>
  );
}

// ============ ГРАНД ФИНАЛ — два победителя ============
function GrandFinal() {
  return (
    <div className="flex flex-col items-center" style={{ marginTop: 36 }}>
      <div
        className="font-bold mb-5"
        style={{
          fontSize: 11, letterSpacing: "5px", fontFamily: "monospace",
          color: "rgba(255,200,100,0.9)",
          borderBottom: "1px solid rgba(255,200,100,0.25)", paddingBottom: 6,
          textAlign: "center", width: 500,
        }}
      >
        ГРАНД ФИНАЛ
      </div>
      <div className="flex items-center justify-center" style={{ gap: 40 }}>
        <WinnerCell label="ПОБЕДИТЕЛЬ ВЕРХНЕЙ СЕТКИ" />
        <div style={{ color: "rgba(255,200,100,0.7)", fontSize: 28, fontFamily: "monospace", fontWeight: 900 }}>
          VS
        </div>
        <WinnerCell label="ПОБЕДИТЕЛЬ НИЖНЕЙ СЕТКИ" />
      </div>
    </div>
  );
}

function WinnerCell({ label }: { label: string }) {
  return (
    <div
      className="relative flex flex-col items-center justify-end rounded"
      style={{
        width: 200,
        height: 200,
        border: "1px solid rgba(255,200,100,0.3)",
        background: "rgba(0,0,0,0.7)",
        boxShadow: "0 0 20px rgba(255,150,50,0.15), inset 0 0 30px rgba(0,0,0,0.5)",
        overflow: "hidden",
      }}
    >
      {/* Логотип анкх как фон ровно по размеру */}
      <img
        src={ankhImg}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "contain",
          opacity: 0.25,
          filter: "grayscale(40%)",
          padding: 16,
        }}
      />
      {/* Текст команды-победителя */}
      <div
        className="relative z-10 w-full text-center"
        style={{
          background: "rgba(0,0,0,0.75)",
          padding: "6px 8px",
          fontSize: 9,
          fontFamily: "monospace",
          letterSpacing: "1.5px",
          color: "rgba(255,200,100,0.8)",
          fontWeight: 700,
        }}
      >
        {label}
      </div>
    </div>
  );
}

// ============ СТРАНИЦА ============
export function BracketPage({ onBack: _ }: { onBack: () => void }) {
  const upperLabels = ["РАУ 1 (32)", "РАУ 2 (16)", "РАУ 3 (8)", "РАУ 4 (4)", "ПОЛУ (2)", "ПОБЕДИТЕЛЬ"];
  const lowerLabels = ["НИЗ 1A (16)", "НИЗ 1B (16)", "НИЗ 2A (8)", "НИЗ 2B (8)", "НИЗ 3A (4)", "НИЗ 3B (4)", "НИЗ 4A (2)", "НИЗ 4B (2)", ""];

  return (
    <div className="relative bg-black" style={{ minHeight: "100vh", overflowX: "auto", overflowY: "auto" }}>
      <img
        src={bgImg}
        className="fixed top-0 left-0 w-full h-full object-cover z-0 pointer-events-none"
        style={{ opacity: 0.22, filter: "grayscale(30%)" }}
      />

      <div className="relative z-10" style={{ padding: "20px 32px 60px", minWidth: 1000 }}>

        {/* ─── ВЕРХНЯЯ СЕТКА ─── */}
        <div className="mb-1">
          <div className="font-bold mb-2" style={{ fontSize: 10, letterSpacing: "3px", fontFamily: "monospace", color: "rgba(255,255,255,0.7)", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: 5 }}>
            ВЕРХНЯЯ СЕТКА
          </div>
          <div className="flex mb-1" style={{ gap: 0 }}>
            {upperLabels.map((lbl, i) => (
              <div key={i} style={{ width: i < 5 ? UCOL : UCELL, fontSize: 7.5, letterSpacing: "1px", fontFamily: "monospace", color: "rgba(255,255,255,0.3)", fontWeight: 700 }}>
                {lbl}
              </div>
            ))}
          </div>
          <div style={{ overflowX: "auto" }}>
            <UpperBracket />
          </div>
        </div>

        {/* ─── НИЖНЯЯ СЕТКА ─── */}
        <div style={{ marginTop: 32 }}>
          <div className="font-bold mb-2" style={{ fontSize: 10, letterSpacing: "3px", fontFamily: "monospace", color: "rgba(239,68,68,0.85)", borderBottom: "1px solid rgba(239,68,68,0.2)", paddingBottom: 5 }}>
            НИЖНЯЯ СЕТКА
          </div>
          <div className="flex mb-1" style={{ gap: 0 }}>
            {lowerLabels.map((lbl, i) => (
              <div key={i} style={{ width: i < 8 ? LCOL : LCELL, fontSize: 7.5, letterSpacing: "1px", fontFamily: "monospace", color: "rgba(239,68,68,0.4)", fontWeight: 700 }}>
                {lbl}
              </div>
            ))}
          </div>
          <div style={{ overflowX: "auto" }}>
            <LowerBracket />
          </div>
        </div>

        {/* ─── ГРАНД ФИНАЛ ─── */}
        <GrandFinal />
      </div>
    </div>
  );
}
