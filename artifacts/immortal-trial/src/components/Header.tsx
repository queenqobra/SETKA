import logoImg from "@assets/logo-white_1774702870767.png";

interface HeaderProps {
  onShowBracket: () => void;
  onShowHero: () => void;
  page: "hero" | "bracket";
}

export function Header({ onShowBracket, onShowHero, page }: HeaderProps) {
  return (
    <header
      className="fixed top-0 left-0 w-full z-50"
      style={{ minWidth: 1100 }}
    >
      <div
        className="relative flex items-center justify-between"
        style={{
          height: 56,
          background: "linear-gradient(90deg, #000 0%, #2d0000 49%, #000 97%)",
          boxShadow: "0 4px 20px rgba(0,0,0,0.8)",
          paddingLeft: 80,
          paddingRight: 80,
        }}
      >
        {/* Левая кнопка */}
        <NavBtn label="ОБЗОР" active={page === "hero"} onClick={onShowHero} />

        {/* Логотип по центру внутри хедера */}
        <div className="absolute left-1/2 pointer-events-none" style={{ transform: "translateX(-50%)", top: 0 }}>
          <img
            src={logoImg}
            style={{ width: 160, height: "auto", opacity: 0.9, marginTop: -8 }}
            alt="Logo"
          />
        </div>

        {/* Правая кнопка */}
        <NavBtn label="СЕТКА" active={page === "bracket"} onClick={onShowBracket} />
      </div>
    </header>
  );
}

function NavBtn({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      style={{
        background: "none",
        border: "none",
        cursor: "pointer",
        fontFamily: "'Literature', monospace",
        fontSize: 14,
        letterSpacing: "5px",
        color: active ? "#fff" : "rgba(255,255,255,0.38)",
        fontWeight: 700,
        padding: "4px 20px",
        transition: "color 0.2s",
        textShadow: active ? "0 0 14px rgba(255,255,255,0.5)" : "none",
      }}
    >
      {label}
    </button>
  );
}
