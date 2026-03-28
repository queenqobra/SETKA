import { useState } from "react";
import { Header } from "./components/Header";
import { HeroPage } from "./pages/HeroPage";
import { BracketPage } from "./pages/BracketPage";

function App() {
  const [page, setPage] = useState<"hero" | "bracket">("hero");

  return (
    <div className="bg-black" style={{ overflow: "hidden", height: "100vh" }}>
      <Header
        onShowBracket={() => setPage("bracket")}
        onShowHero={() => setPage("hero")}
        page={page}
      />
      <div style={{ paddingTop: "60px", height: "100vh" }}>
        {page === "hero" ? (
          <HeroPage onShowBracket={() => setPage("bracket")} />
        ) : (
          <BracketPage onBack={() => setPage("hero")} />
        )}
      </div>
    </div>
  );
}

export default App;
