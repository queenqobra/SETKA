// ===== НАЗВАНИЯ КОМАНД — ВЕРХНЯЯ СЕТКА =====
// Просто меняй имена здесь чтобы обновить сетку
const UPPER_BRACKET_TEAMS: string[] = [
  "Rakuzan",
  "SLAWAIZM",
  "Gods Only",
  "Turbo Warriors",
  "ADP Team",
  "Nexus Team",
  "Wirtus-Pro",
  "genzero-",
  "Genialnost Team",
  "kik069",
  "wet womens",
  "Keijo Team",
  "Buriza Team",
  "SBK_1337 Team",
  "NOVA GAMING",
  "Team Spilis",
  "PSIXDISPANCER",
  "DF RISING",
  "Glory era",
  "Bichki Team",
  "kyoto team",
  "Fallen Angels",
  "SoundCloud Team",
  "Lopata",
  "Snowfall",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
];

// ===== НАЗВАНИЯ КОМАНД — НИЖНЯЯ СЕТКА (раунды) =====
// Здесь можно менять названия для нижней сетки
const LOWER_ROUND1_LEFT: string[] = Array.from({ length: 16 }, (_, i) => `LOSER OF ${String.fromCharCode(65 + i)}`);
const LOWER_ROUND1_RIGHT: string[] = Array.from({ length: 16 }, (_, i) => `WINNER OF W${i + 1}`);
const LOWER_ROUND2: string[] = Array.from({ length: 8 }, (_, i) => `WINNER OF V${i + 1}`);
const LOWER_ROUND3: string[] = Array.from({ length: 4 }, (_, i) => `WINNER OF T${i + 1}`);
const LOWER_ROUND4: string[] = Array.from({ length: 2 }, (_, i) => `WINNER OF R${i + 1}`);

function TeamCell({ name, isRed = false }: { name: string; isRed?: boolean }) {
  if (isRed) {
    return (
      <div className="w-[155px] h-[22px] flex items-center px-3 rounded-full text-[9px] bg-red-700 text-white font-mono tracking-wide shadow-[0_0_8px_rgba(255,0,0,0.5)]">
        {name}
      </div>
    );
  }
  return (
    <div className="w-[140px] h-[22px] flex items-center px-3 rounded-full text-[9px] bg-white text-black font-mono tracking-wide shadow-[0_0_8px_rgba(255,255,255,0.4)]">
      {name}
    </div>
  );
}

function UpperBracket() {
  return (
    <div className="relative" style={{ width: "1100px", height: "820px" }}>
      {/* Round of 32 */}
      <div className="absolute left-0 top-[20px] flex flex-col gap-[7px]">
        <div className="text-white/40 text-[8px] mb-1 font-mono tracking-widest">РАУ 1 (32)</div>
        {UPPER_BRACKET_TEAMS.map((team, i) => (
          <TeamCell key={i} name={team} />
        ))}
      </div>

      {/* Round of 16 */}
      <div className="absolute left-[165px] top-[45px] flex flex-col gap-[24px]">
        <div className="text-white/40 text-[8px] mb-1 font-mono tracking-widest">РАУ 2 (16)</div>
        {Array.from({ length: 16 }).map((_, i) => (
          <div key={i} className="w-[140px] h-[22px] rounded-full bg-white/15 border border-white/20" />
        ))}
      </div>

      {/* Quarter-finals (8) */}
      <div className="absolute left-[330px] top-[80px] flex flex-col gap-[58px]">
        <div className="text-white/40 text-[8px] mb-1 font-mono tracking-widest">РАУ 3 (8)</div>
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="w-[140px] h-[22px] rounded-full bg-white/15 border border-white/20" />
        ))}
      </div>

      {/* Semi (4) */}
      <div className="absolute left-[495px] top-[120px] flex flex-col gap-[122px]">
        <div className="text-white/40 text-[8px] mb-1 font-mono tracking-widest">РАУ 4 (4)</div>
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="w-[140px] h-[22px] rounded-full bg-white/15 border border-white/20" />
        ))}
      </div>

      {/* Final (2) */}
      <div className="absolute left-[660px] top-[200px] flex flex-col gap-[240px]">
        <div className="text-white/40 text-[8px] mb-1 font-mono tracking-widest">ФИНАЛ (2)</div>
        {Array.from({ length: 2 }).map((_, i) => (
          <div key={i} className="w-[140px] h-[22px] rounded-full bg-white/20 border border-white/30" />
        ))}
      </div>

      {/* Winner (1) */}
      <div className="absolute left-[825px] top-[320px]">
        <div className="text-white/40 text-[8px] mb-1 font-mono tracking-widest">ПОБЕДИТЕЛЬ</div>
        <div className="w-[140px] h-[22px] rounded-full bg-white/30 border border-white/40" />
      </div>
    </div>
  );
}

function LowerBracket() {
  return (
    <div className="relative" style={{ width: "1100px", height: "420px" }}>
      {/* Round 1 — left col (16 losers) */}
      <div className="absolute left-0 top-0 flex flex-col gap-[5px]">
        <div className="text-white/40 text-[8px] mb-1 font-mono tracking-widest">ВЫЛЕТЕВШИЕ</div>
        {LOWER_ROUND1_LEFT.map((name, i) => (
          <TeamCell key={i} name={name} isRed />
        ))}
      </div>

      {/* Round 1 — right col (16 winners) */}
      <div className="absolute left-[170px] top-0 flex flex-col gap-[5px]">
        <div className="text-white/40 text-[8px] mb-1 font-mono tracking-widest">ПОБЕДИТЕЛИ</div>
        {LOWER_ROUND1_RIGHT.map((name, i) => (
          <TeamCell key={i} name={name} isRed />
        ))}
      </div>

      {/* Round 2 (8) */}
      <div className="absolute left-[340px] top-[12px] flex flex-col gap-[14px]">
        <div className="text-white/40 text-[8px] mb-1 font-mono tracking-widest">РАУ 2 (8)</div>
        {LOWER_ROUND2.map((name, i) => (
          <TeamCell key={i} name={name} isRed />
        ))}
      </div>

      {/* Round 3 (4) */}
      <div className="absolute left-[510px] top-[30px] flex flex-col gap-[30px]">
        <div className="text-white/40 text-[8px] mb-1 font-mono tracking-widest">РАУ 3 (4)</div>
        {LOWER_ROUND3.map((name, i) => (
          <TeamCell key={i} name={name} isRed />
        ))}
      </div>

      {/* Round 4 (2) */}
      <div className="absolute left-[680px] top-[60px] flex flex-col gap-[60px]">
        <div className="text-white/40 text-[8px] mb-1 font-mono tracking-widest">РАУ 4 (2)</div>
        {LOWER_ROUND4.map((name, i) => (
          <TeamCell key={i} name={name} isRed />
        ))}
      </div>

      {/* Loser final (1) */}
      <div className="absolute left-[850px] top-[90px]">
        <div className="text-white/40 text-[8px] mb-1 font-mono tracking-widest">ФИНАЛ НИЗ</div>
        <div className="w-[155px] h-[22px] rounded-full bg-red-700/40 border border-red-500/40" />
      </div>
    </div>
  );
}

export function BracketPage({ onBack }: { onBack: () => void }) {
  return (
    <div
      className="relative w-full h-screen overflow-hidden bg-black"
      style={{ minWidth: "1200px" }}
    >
      <img
        src="/1background.png"
        className="absolute top-0 left-0 w-full h-full object-cover z-0 pointer-events-none opacity-30"
      />

      <div className="relative z-10 flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-3 border-b border-white/10">
          <button
            onClick={onBack}
            className="text-white/50 text-[12px] tracking-[2px] font-mono hover:text-white transition-colors"
          >
            ← ГЛАВНАЯ
          </button>
          <span className="text-white/30 text-[11px] tracking-[3px] font-mono">ТУРНИРНАЯ СЕТКА</span>
          <div className="w-[80px]" />
        </div>

        {/* Content — верхняя и нижняя сетки */}
        <div className="flex-1 overflow-auto px-8 py-4">
          {/* Upper bracket */}
          <div className="mb-8">
            <div className="text-white text-[11px] tracking-[3px] font-mono mb-3 border-b border-white/10 pb-2">
              ВЕРХНЯЯ СЕТКА
            </div>
            <UpperBracket />
          </div>

          {/* Lower bracket */}
          <div>
            <div className="text-white text-[11px] tracking-[3px] font-mono mb-3 border-b border-red-500/30 pb-2">
              НИЖНЯЯ СЕТКА
            </div>
            <LowerBracket />
          </div>
        </div>
      </div>
    </div>
  );
}
