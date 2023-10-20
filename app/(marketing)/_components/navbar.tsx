"use client";

import { UseScrollTop } from "@/hooks/use-Scroll-top.tsx";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import { ModeToggle } from "@/components/mode-toggle";

export const Navbar = () => {
  const scroll = UseScrollTop();
  return (
    <>
      <div
        className={cn(
          "z-50 bg-background  dark:bg-[#1f1f1f] fixed top-0 flex items-center w-full p-6",
          scroll && "border-b shadow-sm",
        )}
      >
        <Logo />
        <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
          <ModeToggle />
        </div>
      </div>
    </>
  );
};
