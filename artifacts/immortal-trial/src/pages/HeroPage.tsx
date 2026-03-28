export function HeroPage({ onShowBracket }: { onShowBracket: () => void }) {
  return (
    <div
      className="relative w-full h-screen overflow-hidden"
      style={{ minWidth: "1200px" }}
    >
      <img
        src="/1background.png"
        className="absolute top-0 left-0 w-full h-full object-cover z-0 pointer-events-none"
      />

      <img
        className="absolute top-0 left-0 w-[460px] z-10 pointer-events-none"
        src="/side-decor.png"
      />
      <img
        className="absolute top-0 right-0 w-[460px] z-10 pointer-events-none"
        style={{ transform: "scaleX(-1)" }}
        src="/side-decor.png"
      />

      <div className="relative z-20 flex flex-col items-center justify-center h-full">
        <div className="relative w-[700px] h-[420px] flex items-center justify-center">
          <div
            className="absolute top-[60px] w-[140px] h-[190px]"
            style={{
              right: "calc(50% + 90px)",
              background: "url(/wing.png) 100% 100% / 100% 100% no-repeat",
              transform: "scale(1.5)",
              transformOrigin: "right center",
            }}
          />
          <div
            className="absolute top-[60px] w-[140px] h-[190px]"
            style={{
              left: "calc(50% + 90px)",
              background: "url(/wing1.png) 100% 100% / 100% 100% no-repeat",
              transform: "scale(1.5)",
              transformOrigin: "left center",
            }}
          />
          <div
            className="absolute top-0 left-1/2 w-[700px] h-[420px]"
            style={{
              transform: "translateX(-50%) scale(1.5)",
              background: "url(/toIlogo.png) center / contain no-repeat",
            }}
          />
        </div>

        <div className="flex items-center justify-center gap-16 mt-[-40px]">
          <div className="flex flex-col items-center gap-0">
            <span
              className="text-white/40 text-[10px] tracking-[0.3px]"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              КОМАНДЫ
            </span>
            <span
              className="text-[#d3d3d3] text-[32px] leading-[40px]"
              style={{
                fontFamily: "'Antic Didone', serif",
                filter: "drop-shadow(0 0 21px #d3d3d3)",
              }}
            >
              32
            </span>
          </div>

          <div className="flex flex-col items-center gap-0">
            <span
              className="text-white/40 text-[10px] tracking-[0.3px]"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              ПРИЗОВОЙ ФОНД
            </span>
            <div className="flex items-baseline">
              <span
                className="text-[#d3d3d3] text-[40px] tracking-[1.2px] leading-[40px]"
                style={{
                  fontFamily: "'Antic Didone', serif",
                  filter: "drop-shadow(0 0 13px #d3d3d3)",
                }}
              >
                12000
              </span>
              <span
                className="text-[#d3d3d3] text-[15px] ml-1"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                РУБ
              </span>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <span
              className="text-white/40 text-[10px] tracking-[0.3px]"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              МАТЧЕЙ
            </span>
            <div className="flex items-baseline">
              <span
                className="text-[#d3d3d3] text-[40px] leading-[40px]"
                style={{
                  fontFamily: "'Antic Didone', serif",
                  filter: "drop-shadow(0 0 21px #d3d3d3)",
                }}
              >
                62
              </span>
              <span
                className="text-[#d3d3d3] text-[14px] ml-1"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                +1
              </span>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <a
            href="https://vk.com/immortal_trial"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-500 text-[85px] leading-none cursor-pointer select-none"
            style={{ fontFamily: "'Cinzel Decorative', cursive" }}
          >
            УЧАСТВОВАТЬ
          </a>
        </div>

        <div className="mt-5">
          <span className="text-[#a7a7a7] text-[20px] tracking-[0.9px]">
            Докажи своё превосходство
          </span>
        </div>
      </div>
    </div>
  );
}
