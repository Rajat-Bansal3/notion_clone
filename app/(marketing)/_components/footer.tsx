import { Button } from "@/components/ui/button";
import { Logo } from "./logo";

export const Footer = () => {
  return (
    <>
      <div className="flex items-center p-6 w-full bg-background z-50 dark:bg-[#1f1f1f]">
        <Logo />
        <div className="md:ml-auto w-full justify-between md:justify-end flex items-center gap-x-2 text-muted-foreground">
          <Button size="sm" variant="ghost">
            Privacy Policy
          </Button>
          <Button size="sm" variant="ghost">
            Terms And Conditions
          </Button>
        </div>
      </div>
    </>
  );
};
