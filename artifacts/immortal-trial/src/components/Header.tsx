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
        className="flex items-center justify-center relative"
        style={{
          height: 56,
          background: "linear-gradient(90deg, #000 0%, #2d0000 49%, #000 97%)",
          boxShadow: "0 4px 20px rgba(0,0,0,0.8)",
        }}
      >
        {/* Nav buttons */}
        <div className="flex items-center" style={{ gap: 80 }}>
          <NavBtn label="О ТУРНИРЕ" active={page === "hero"} onClick={onShowHero} />
          <NavBtn label="СЕТКА" active={page === "bracket"} onClick={onShowBracket} />
        </div>
      </div>

      {/* Логотип по центру, перекрывает хедер снизу */}
      <div
        className="absolute left-1/2 pointer-events-none"
        style={{
          top: 56,
          transform: "translate(-50%, -50%)",
          zIndex: 60,
        }}
      >
        <img
          src={logoImg}
          style={{ width: 180, height: "auto", opacity: 0.9 }}
          alt="Logo"
        />
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
        fontFamily: "monospace",
        fontSize: 13,
        letterSpacing: "4px",
        color: active ? "#fff" : "rgba(255,255,255,0.4)",
        fontWeight: 700,
        padding: "4px 16px",
        transition: "color 0.2s",
        textShadow: active ? "0 0 12px rgba(255,255,255,0.4)" : "none",
      }}
    >
      {label}
    </button>
  );
}
