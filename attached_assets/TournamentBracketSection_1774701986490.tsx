import { useState } from "react";

export const TournamentBracketSection = () => {
  const [tab, setTab] = useState("upper");
  const [finalData, setFinalData] = useState({
  team1: "",
  team2: "",
  score: "0 : 0",
});
const isFinalReady = finalData.team1 && finalData.team2;
const isLoser = (team: string) => team?.includes("LOSER");
const [input, setInput] = useState("");



  return (
    <section className="relative w-full min-h-[1400px] overflow-hidden">

      {/* ☁️ ОБЛАКА */}
      <img
        src="/clouds.webp"
        className="absolute bottom-0 w-full z-[1] pointer-events-none"
      />

      {/* 🌫 ГРАДИЕНТЫ */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-[2]" />
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-black via-black/90 to-transparent z-[2]" />

      {/* 🌙 ЛУНА */}
      <img
        src="/moon.png"
        className="absolute bottom-[-300px] left-1/2 -translate-x-1/2 w-[700px] z-[3]"
        style={{ filter: "blur(1px) drop-shadow(0 0 80px red)" }}
      />

      {/* ================= СЕТКА ================= */}
      <div className="relative z-[10] w-full flex justify-center pt-[120px]">

        <div className="relative w-[1400px] max-w-[95%]">

          {/* 🖼 РАМКА */}
          <img id='grid'
            src="/grid.png"
            className="w-full pointer-events-none select-none"
          />

          {/* 🔘 КНОПКИ */}
          <div className="absolute top-[20px] left-1/2 -translate-x-1/2 flex gap-6 z-[50] pointer-events-auto">

            {["upper", "lower", "final"].map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`
                  px-5 py-2
                  text-[12px]
                  font-orbitron
                  tracking-[2px]
                  rounded-md
                  transition
                  ${
                    tab === t
                      ? "text-white shadow-[0_0_10px_white]"
                      : "text-gray-500 hover:text-white"
                  }
                `}
              >
                {t === "upper" ? "ВЕРХ" : t === "lower" ? "НИЗ" : "ФИНАЛ"}
              </button>
            ))}

          </div>

          {/* 🔍 SCALE WRAPPER */}
          <div className="absolute inset-0 flex justify-center overflow-auto">

            <div className="origin-top scale-[0.75] sm:scale-[0.9] md:scale-[1]">

              {/* ===== ВЕРХНЯЯ СЕТКА ===== */}
              {tab === "upper" && (
                <div className="relative w-[1200px] h-[700px]">

                  {/* 32 */}
                  <div className="absolute left-[120px] top-[100px] flex flex-col gap-[8px]">
                    {[
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
  "", "", "", "", "", "", ""
].map((team, i) => (
  <div
    key={i}
    className="w-[150px] h-[24px] flex items-center px-3 rounded-full text-[10px]
    bg-white text-black shadow-[0_0_10px_white] font-orbitron"
  >
    {team}
  </div>
))}
                  </div>

                  {/* 16 */}
                  <div className="absolute left-[320px] top-[140px] flex flex-col gap-[24px]">
                    {[...Array(16)].map((_, i) => (
                      <div
                        key={i}
                        className="w-[150px] h-[24px] rounded-full bg-white"
                      />
                    ))}
                  </div>

                  {/* 8 */}
                  <div className="absolute left-[520px] top-[200px] flex flex-col gap-[60px]">
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="w-[150px] h-[24px] rounded-full bg-white"
                      />
                    ))}
                  </div>

                  {/* 4 */}
                  <div className="absolute left-[720px] top-[260px] flex flex-col gap-[120px]">
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={i}
                        className="w-[150px] h-[24px] rounded-full bg-white"
                      />
                    ))}
                  </div>

                  {/* 2 */}
                  <div className="absolute left-[920px] top-[320px] flex flex-col gap-[180px]">
                    {[...Array(2)].map((_, i) => (
                      <div
                        key={i}
                        className="w-[150px] h-[24px] rounded-full bg-white"
                      />
                    ))}
                  </div>

                </div>
              )}

              {/* ===== НИЖНЯЯ СЕТКА ===== */}
             {tab === "lower" && (
  <div  className="relative w-[1200px] h-[900px] scale-[0.9] -translate-x-[80px]">

    {/* ===== 16 + 16 ===== */}
    <div
     className="absolute right-[900px] top-[160px] flex gap-[20px]">

      {/* левая колонка */}
      <div className="flex flex-col gap-[10px]">
        {[...Array(16)].map((_, i) => (
          <div
            key={i}
            className="w-[170px] h-[26px] flex items-center px-4 rounded-full
            bg-red-600 text-white text-[11px] font-orbitron shadow-[0_0_12px_red]"
          >
            LOSER OF {String.fromCharCode(65 + i)}
          </div>
        ))}
      </div>

      {/* правая колонка */}
      <div className="flex flex-col gap-[10px]">
        {[...Array(16)].map((_, i) => (
          <div
            key={i}
            className="w-[170px] h-[26px] flex items-center px-4 rounded-full
            bg-red-600 text-white text-[11px] font-orbitron shadow-[0_0_12px_red]"
          >
            WINNER OF W{i + 1}
          </div>
        ))}
      </div>

    </div>

    {/* ===== 8 + 8 ===== */}
    <div className="absolute left-[320px] top-[300px] flex gap-[20px]">
      {[...Array(2)].map((_, col) => (
        <div key={col} className="flex flex-col gap-[15px]">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="w-[170px] h-[26px] flex items-center px-4 rounded-full
              bg-red-600 text-white text-[11px] font-orbitron shadow-[0_0_12px_red]"
            >
              WINNER OF V{i + 1}
            </div>
          ))}
        </div>
      ))}
    </div>

    {/* ===== 4 + 4 ===== */}
    <div className="absolute left-[700px] top-[390px] flex gap-[20px]">
      {[...Array(2)].map((_, col) => (
        <div key={col} className="flex flex-col gap-[10px]">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="w-[170px] h-[26px] flex items-center px-4 rounded-full
              bg-red-600 text-white text-[11px] font-orbitron shadow-[0_0_12px_red]"
            >
              WINNER OF T{i + 1}
            </div>
          ))}
        </div>
      ))}
    </div>

    {/* ===== 2 + 2 ===== */}
    <div className="absolute left-[1100px] top-[420px] flex gap-[20px]">
      {[...Array(2)].map((_, col) => (
        <div key={col} className="flex flex-col gap-[20px]">
          {[...Array(2)].map((_, i) => (
            <div
              key={i}
              className="w-[170px] h-[26px] flex items-center px-4 rounded-full
              bg-red-600 text-white text-[11px] font-orbitron shadow-[0_0_12px_red]"
            >
              WINNER OF R{i + 1}
            </div>
          ))}
        </div>
      ))}
    </div>

  </div>
)}

              {/* ===== ФИНАЛ ===== */}
              {tab === "final" && (
  <div className="relative w-[1200px] h-[900px] flex flex-col items-center justify-start pt-[300px]">

    {/* TEAM 1 */}
    <div className={`
      w-[360px] h-[60px]
      flex items-center px-6
      rounded-full
      bg-gradient-to-b from-[#5a5a5a] to-black
      text-white font-orbitron tracking-[2px]
      transition duration-500
      ${isFinalReady ? "opacity-100" : "opacity-30"}
      shadow-[0_0_30px_white]
    `}>
      {finalData.team1 || "TEAM"}
    </div>

    {/* СЧЁТ */}
    <div className={`
      text-white text-[120px]
      font-orbitron
      transition duration-500
      ${isFinalReady ? "opacity-100" : "opacity-20"}
      drop-shadow-[0_0_40px_white]
      z-[2]
    `}>
      {finalData.score}
    </div>

    {/* TEAM 2 */}
    <div className={`
      w-[360px] h-[60px]
      flex items-center px-6
      rounded-full
      bg-gradient-to-b from-[#5a5a5a] to-black
      text-white font-orbitron tracking-[2px]
      transition duration-500
      ${isFinalReady ? "opacity-100" : "opacity-30"}
      shadow-[0_0_30px_white]
    `}>
      {finalData.team2 || "TEAM"}
    </div>

    {/* 🩸 ИКОНКА */}
    <img
      src="/winpic.png"
      className={`
        absolute
        w-[320px]
        pointer-events-none
        transition-all duration-700
        ${isFinalReady
          ? "bottom-[40px] opacity-80"
          : "top-[50%] -translate-y-1/2 opacity-100 scale-[1.1]"
        }
      `}
      style={{ filter: "drop-shadow(0 0 80px red)" }}
    />

  </div>
)}
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};