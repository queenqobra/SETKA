import bgImg from "@assets/1background_1774702840993.png";
import toiLogoImg from "@assets/toi-logo-red-back_1774702845298.png";
import wingImg from "@assets/wing_1774702849653.png";
import decorImg from "@assets/side-decor_1774702857131.png";

export function HeroPage() {
  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ height: "calc(100vh - 56px)", minWidth: 1100 }}
    >
      {/* Фон */}
      <img
        src={bgImg}
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
        style={{ opacity: 0.55, filter: "grayscale(15%)" }}
      />

      {/* Декор левый — растянут во всю высоту */}
      <img
        src={decorImg}
        className="absolute top-0 left-0 z-10 pointer-events-none"
        style={{ height: "100%", width: "auto", opacity: 0.75 }}
      />
      {/* Декор правый — зеркало, во всю высоту */}
      <img
        src={decorImg}
        className="absolute top-0 right-0 z-10 pointer-events-none"
        style={{ height: "100%", width: "auto", opacity: 0.75, transform: "scaleX(-1)" }}
      />

      {/* Основной контент — смещён вверх */}
      <div
        className="relative z-20 flex flex-col items-center"
        style={{ paddingTop: "5vh" }}
      >
        {/* Крылья + логотип — 2× крупнее, высоко */}
        <div
          className="relative flex items-center justify-center"
          style={{ width: 900, height: 460 }}
        >
          {/* Левое крыло — оригинал (без зеркала) */}
          <img
            src={wingImg}
            style={{
              position: "absolute",
              left: -20,
              top: 60,
              width: 260,
              opacity: 0.95,
            }}
          />
          {/* Правое крыло — зеркальное */}
          <img
            src={wingImg}
            style={{
              position: "absolute",
              right: -20,
              top: 60,
              width: 260,
              opacity: 0.95,
              transform: "scaleX(-1)",
            }}
          />
          {/* Центральный логотип ToI */}
          <img
            src={toiLogoImg}
            style={{
              width: 560,
              position: "relative",
              zIndex: 2,
              filter: "drop-shadow(0 0 50px rgba(200,0,0,0.55))",
            }}
          />
        </div>

        {/* Разделитель */}
        <div style={{ width: 620, height: 1, background: "rgba(180,0,0,0.55)", marginTop: -20 }} />
        <div style={{ width: 620, height: 1, background: "rgba(180,0,0,0.22)", marginBottom: 20 }} />

        {/* Статистика */}
        <div className="flex items-center justify-center" style={{ gap: 64 }}>
          <StatItem label="КОМАНДЫ" value="32" />
          <StatItem label="ПРИЗОВОЙ ФОНД" value="12000" suffix="РУБ" large />
          <StatItem label="МАТЧЕЙ" value="62" suffix="+1" />
        </div>

        {/* УЧАСТВОВАТЬ */}
        <div style={{ marginTop: 24 }}>
          <a
            href="https://vk.com/immortal_trial"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "block",
              fontSize: 80,
              fontFamily: "'Kudry', cursive",
              color: "#cc1100",
              textDecoration: "none",
              letterSpacing: "3px",
              lineHeight: 1,
              textShadow: "0 0 40px rgba(220,0,0,0.35)",
            }}
          >
            УЧАСТВОВАТЬ
          </a>
        </div>

        {/* Subtitle */}
        <div style={{ marginTop: 12 }}>
          <span
            style={{
              color: "#888",
              fontSize: 18,
              letterSpacing: "3px",
              fontFamily: "'LaborUnion', sans-serif",
            }}
          >
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
    <div className="flex flex-col items-center" style={{ gap: 3 }}>
      <span
        style={{
          color: "rgba(255,255,255,0.38)",
          fontSize: 10,
          letterSpacing: "2.5px",
          fontFamily: "'Literature', sans-serif",
        }}
      >
        {label}
      </span>
      <div className="flex items-baseline" style={{ gap: 5 }}>
        <span
          style={{
            color: "#d3d3d3",
            fontSize: large ? 42 : 34,
            fontFamily: "'Cinzel', 'Georgia', serif",
            textShadow: "0 0 22px rgba(211,211,211,0.45)",
            lineHeight: 1,
            fontWeight: 700,
          }}
        >
          {value}
        </span>
        {suffix && (
          <span
            style={{
              color: "#d3d3d3",
              fontSize: 13,
              fontFamily: "'Literature', sans-serif",
              opacity: 0.75,
            }}
          >
            {suffix}
          </span>
        )}
      </div>
    </div>
  );
}
