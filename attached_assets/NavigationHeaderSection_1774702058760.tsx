import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";

const navItems = [
  { label: "СЕТКА", href: "#grid" },
  { label: "О ТУРНИРЕ", href: "#tournament" },
];

export const NavigationHeaderSection = (): JSX.Element => {
  const [, setActiveItem] = useState<string | null>(null);

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex flex-col items-center bg-gradient-to-b from-black/70 to-transparent">
      {/* Main navigation bar */}
      <div className="flex h-[6vh] min-h-[80px] items-center justify-center gap-[8vw] pt-[17px] pb-2 px-[8vw] relative self-stretch w-full shadow-[0px_4px_6.8px_5px_#00000085] bg-[linear-gradient(90deg,rgba(0,0,0,1)_0%,rgba(45,0,0,1)_49%,rgba(0,0,0,1)_97%)]">
        <NavigationMenu>
          <NavigationMenuList className="flex items-center gap-[18vw]">
            {navItems.map((item) => (
              <NavigationMenuItem key={item.label}>
                <NavigationMenuLink asChild>
  <a
    href={item.href}
    className="flex items-center justify-center w-[500px] h-[30px] font-literature text-white text-[15px] min-text-[10px] tracking-[0.30px] leading-[0.1px] font-normal text-center cursor-pointer hover:opacity-80 transition-opacity bg-transparent"
    onClick={() => setActiveItem(item.label)}
  >
    {item.label}
  </a>
</NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Logo area - overlaps the nav bar */}
      <div className="flex flex-col items-center justify-center relative">
        <div className="flex items-center justify-center relative self-stretch w-full flex-[0_0_auto] mt-[-57.00px] mb-[-56.00px]">
          <img
            className="w-[320px] h-auto object-contain"
            alt="Logo"
            src="/logo-white.png"
          />
        </div>
      </div>
    </header>
  );
};
