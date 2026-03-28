import bgImg from "@assets/1background_1774702840993.png";
import logoImg from "@assets/logo-white_1774702870767.png";
import toiLogoImg from "@assets/toi-logo-red-back_1774702845298.png";
import wingImg from "@assets/wing_1774702849653.png";
import decorImg from "@assets/side-decor_1774702857131.png";

export function HeroPage() {
  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ height: "calc(100vh - 60px)", minWidth: 1100 }}
    >
      {/* Фон */}
      <img
        src={bgImg}
        className="absolute top-0 left-0 w-full h-full object-cover z-0 pointer-events-none"
        style={{ opacity: 0.55, filter: "grayscale(20%)" }}
      />

      {/* Декор по бокам */}
      <img
        src={decorImg}
        className="absolute top-0 left-0 z-10 pointer-events-none"
        style={{ width: 200, opacity: 0.7 }}
      />
      <img
        src={decorImg}
        className="absolute top-0 right-0 z-10 pointer-events-none"
        style={{ width: 200, opacity: 0.7, transform: "scaleX(-1)" }}
      />

      {/* Центральный контент */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full" style={{ gap: 0 }}>

        {/* Крылья + логотип */}
        <div className="relative flex items-center justify-center" style={{ width: 600, height: 280 }}>
          {/* Левое крыло (отзеркалено) */}
          <img
            src={wingImg}
            style={{
              position: "absolute",
              left: 20,
              top: 40,
              width: 160,
              transform: "scaleX(-1)",
              opacity: 0.9,
            }}
          />
          {/* Правое крыло */}
          <img
            src={wingImg}
            style={{
              position: "absolute",
              right: 20,
              top: 40,
              width: 160,
              opacity: 0.9,
            }}
          />
          {/* Центральный логотип ToI */}
          <img
            src={toiLogoImg}
            style={{
              width: 340,
              position: "relative",
              zIndex: 2,
              filter: "drop-shadow(0 0 30px rgba(200,0,0,0.5))",
            }}
          />
        </div>

        {/* Разделитель */}
        <div style={{ width: 500, height: 1, background: "rgba(180,0,0,0.5)", margin: "4px 0" }} />
        <div style={{ width: 500, height: 1, background: "rgba(180,0,0,0.25)", marginBottom: 28 }} />

        {/* Статистика */}
        <div className="flex items-center justify-center" style={{ gap: 56 }}>
          <StatItem label="КОМАНДЫ" value="32" />
          <StatItem label="ПРИЗОВОЙ ФОНД" value="12000" suffix="РУБ" large />
          <StatItem label="МАТЧЕЙ" value="62" suffix="+1" />
        </div>

        {/* Кнопка УЧАСТВОВАТЬ */}
        <div style={{ marginTop: 28 }}>
          <a
            href="https://vk.com/immortal_trial"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "block",
              fontSize: 72,
              fontFamily: "'Cinzel Decorative', 'Cinzel', cursive",
              color: "#cc1100",
              textDecoration: "none",
              letterSpacing: "4px",
              lineHeight: 1,
              textShadow: "0 0 40px rgba(220,0,0,0.4)",
            }}
          >
            УЧАСТВОВАТЬ
          </a>
        </div>

        {/* Subtitle */}
        <div style={{ marginTop: 14 }}>
          <span style={{ color: "#888", fontSize: 16, letterSpacing: "3px", fontFamily: "monospace" }}>
            Докажи своё превосходство
          </span>
        </div>
      </div>
    </div>
  );
}

function StatItem({
  label, value, suffix, large,
}: { label: string; value: string; suffix?: string; large?: boolean }) {
  return (
    <div className="flex flex-col items-center" style={{ gap: 2 }}>
      <span style={{ color: "rgba(255,255,255,0.35)", fontSize: 9, letterSpacing: "2px", fontFamily: "monospace" }}>
        {label}
      </span>
      <div className="flex items-baseline" style={{ gap: 4 }}>
        <span style={{
          color: "#d3d3d3",
          fontSize: large ? 38 : 30,
          fontFamily: "'Cinzel', 'Georgia', serif",
          textShadow: "0 0 20px rgba(211,211,211,0.5)",
          lineHeight: 1,
          fontWeight: 700,
        }}>
          {value}
        </span>
        {suffix && (
          <span style={{ color: "#d3d3d3", fontSize: 12, fontFamily: "monospace", opacity: 0.8 }}>
            {suffix}
          </span>
        )}
      </div>
    </div>
  );
}
