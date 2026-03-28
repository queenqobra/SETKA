import { useState } from "react";
import { Header } from "./components/Header";
import { HeroPage } from "./pages/HeroPage";
import { BracketPage } from "./pages/BracketPage";

function App() {
  const [page, setPage] = useState<"hero" | "bracket">("hero");

  return (
    <div style={{ background: "#000", minHeight: "100vh" }}>
      <Header
        onShowBracket={() => setPage("bracket")}
        onShowHero={() => setPage("hero")}
        page={page}
      />
      <div style={{ paddingTop: 56 }}>
        {page === "hero" ? (
          <HeroPage />
        ) : (
          <BracketPage onBack={() => setPage("hero")} />
        )}
      </div>
    </div>
  );
}

export default App;
