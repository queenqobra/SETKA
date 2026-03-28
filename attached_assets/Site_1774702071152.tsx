import { HeroBannerSection } from "./sections/HeroBannerSection";
import { NavigationHeaderSection } from "./sections/NavigationHeaderSection";
import { SocialMediaFooterSection } from "./sections/SocialMediaFooterSection";
import { TournamentBracketSection } from "./sections/TournamentBracketSection/TournamentBracketSection";
import { TournamentDetailsSection } from "./sections/TournamentDetailsSection/TournamentDetailsSection";

export const Site = (): JSX.Element => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Fixed navigation */}
      <NavigationHeaderSection />
       <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">

  {/* ФОН */}
  <img
    src="/1background.png"
    className="absolute top-0 left-0 w-full h-auto z-0 pointer-events-none"
  />

  {/* ДЕКОР */}
 <img
  className="
    absolute top-0 left-0
    w-[300px]
    sm:w-[360px]
    md:w-[420px]
    lg:w-[460px]
    z-10 pointer-events-none
  "
  src="/side-decor.png"
/>

<img
  className="
    absolute top-0 right-0
    w-[300px]
    sm:w-[360px]
    md:w-[420px]
    lg:w-[460px]
    z-10 scale-x-[-1]
  "
  src="/side-decor.png"
/>

  {/* HERO */}
  <div className="relative z-20">
    <HeroBannerSection />
  </div>

</section>
        {/* red pic */}
       <div className="absolute inset-0 z-0 pointer-events-none">
  <video
    autoPlay
    loop
    muted
    playsInline
    className="w-full h-full object-cover opacity-40"
  >
    <source src="/pic_red.webm" type="video/webm" />
  </video>
  
</div>

        

        {/* Top dark gradient */}
        <div className="absolute top-0 left-0 w-full h-[50%] bg-gradient-to-b from-black via-black/20 to-transparent z-10 pointer-events-none" />



      


      {/* Main content */}
      <main className="flex-1 relative z-10">
        <TournamentDetailsSection />
        <TournamentBracketSection />
      </main>
      <div className="relative w-full overflow-visible pointer-events-none z-0">



</div>
<div className="relative">

  <div
    onClick={scrollToTop}
    className="
      absolute right-6
      bottom-[20px]
      w-12 h-12
      bg-[url(/arrow.png)]
      bg-contain bg-no-repeat
      z-50
      cursor-pointer
      hover:scale-110 transition
    "
    style={{
      filter: "drop-shadow(0 0 10px white)"
    }}
  />

</div>

<SocialMediaFooterSection />

      
</div>
    
  );
};
