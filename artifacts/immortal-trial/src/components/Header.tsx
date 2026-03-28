interface HeaderProps {
  onShowBracket: () => void;
  onShowHero: () => void;
  page: "hero" | "bracket";
}

export function Header({ onShowBracket, onShowHero, page }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 w-full z-50" style={{ minWidth: "1200px" }}>
      <div
        className="flex h-[60px] items-center justify-center gap-0 relative"
        style={{
          background: "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(45,0,0,1) 49%, rgba(0,0,0,1) 97%)",
          boxShadow: "0px 4px 6.8px 5px rgba(0,0,0,0.52)",
        }}
      >
        <button
          onClick={onShowHero}
          className={`w-[300px] h-[30px] text-[13px] tracking-[4px] font-mono transition-colors ${
            page === "hero" ? "text-white" : "text-white/50 hover:text-white"
          }`}
        >
          О ТУРНИРЕ
        </button>

        <button
          onClick={onShowBracket}
          className={`w-[300px] h-[30px] text-[13px] tracking-[4px] font-mono transition-colors ${
            page === "bracket" ? "text-white" : "text-white/50 hover:text-white"
          }`}
        >
          СЕТКА
        </button>
      </div>

      {/* Logo centered below nav */}
      <div className="flex justify-center pointer-events-none" style={{ marginTop: "-28px" }}>
        <img
          src="/logo-white.png"
          className="w-[200px] h-auto object-contain"
          alt="Logo"
        />
      </div>
    </header>
  );
}
