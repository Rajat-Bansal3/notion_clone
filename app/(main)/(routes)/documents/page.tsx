"use client";

import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/clerk-react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { PlusCircle } from "lucide-react";
import Image from "next/image";
import { toast } from "sonner";

const Documents = () => {
  const { user } = useUser();

  const create = useMutation(api.documents.create);

  const onCreate = () => {
    const promise = create({ title: "Untitled Document" });

    toast.promise(promise, {
      loading: "Creating a new Document...",
      success: "New Document was created successfully",
      error: "Failed to create a new Document",
    });
  };

  return (
    <>
      <div className="h-full flex flex-col items-center justify-center space-y-4">
        <Image
          src="/empty.png"
          height={300}
          width={300}
          alt="empty"
          className="dark:hidden"
        />
        <Image
          src="/empty-dark.png"
          height={300}
          width={300}
          alt="empty"
          className="hidden dark:block"
        />
        <h2 className="text-lg font-medium">
          welcome to {user?.firstName}&apos;s IdeaFlow
        </h2>
        <Button onClick={onCreate}>
          <PlusCircle className="h-4 w-4 mr-2" />
          Create Note
        </Button>
      </div>
    </>
  );
};

export default Documents;
