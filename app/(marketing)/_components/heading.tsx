import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Heading = () => {
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        Your idea Documents and Plans Unified
        <br />
        <span className="underline">Idea Flow</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        Unlock Creativity, Share Knowledge, and Collaborate Seamlessly with the
        Power of IdeaFlow - Where Ideas Flow Freely
      </h3>
      <Button>
        Enter IdeaFlow
        <ArrowRight className="h-4 w-4 ml-3" />
      </Button>
    </div>
  );
};
