"use client";

import { Spinner } from "@/components/spinner";
import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const Heading = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();
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
      {isLoading && (
        <div className="w-full flex items-center justify-center">
          <Spinner size="lg" />
        </div>
      )}
      {isAuthenticated && !isLoading && (
        <Button asChild>
          <Link href="/documents">
            Enter IdeaFlow
            <ArrowRight className="h-4 w-4 ml-3" />
          </Link>
        </Button>
      )}
      {!isAuthenticated && !isLoading && (
        <SignInButton>
          <Button>Sign-In</Button>
        </SignInButton>
      )}
    </div>
  );
};
