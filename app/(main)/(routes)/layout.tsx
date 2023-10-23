"use client";

import { Spinner } from "@/components/spinner";
import { useConvexAuth } from "convex/react";
import { redirect } from "next/navigation";
import { Navigation } from "../_components/navigation";

const DocumentsLayout = ({ children }: { children: React.ReactNode }) => {
  const { isLoading, isAuthenticated } = useConvexAuth();
  {
    isLoading && <Spinner size={"lg"} />;
  }
  if (!isAuthenticated) {
    return redirect("/");
  }
  return (
    <>
      <div className="h-full flex dark:bg-[#1F1F1F]">
        <Navigation />
        <main className="flex-1 h-full overflow-y-auto">{children}</main>
      </div>
      );
    </>
  );
};
export default DocumentsLayout;
