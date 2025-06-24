"use client";
import { useTransition } from "react";
import { Button } from "./ui/button";
import { Router } from "lucide-react";
import { useRouter } from "next/navigation";
import { createNewDocument } from "@/actions";

const NewDocumentButton = () => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const handleCreateDocument = () => {
    startTransition(async () => {
      try {
        const { docId } = await createNewDocument();
        router.push(`/doc/${docId}`);
      } catch (error) {
        router.push("/sign-in");
      }
    });
  };
  return (
    <div>
      <Button
        onClick={handleCreateDocument}
        className="hover:cursor-pointer"
        disabled={isPending}
      >
        {isPending ? "creating..." : "New Document Button"}
      </Button>
    </div>
  );
};
export default NewDocumentButton;
