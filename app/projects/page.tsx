import ProjectsPageContent from "@/components/pages/projects-page-content";
import { Button } from "@nextui-org/react";
import { ArrowLeftIcon } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "projects - paolorollo.dev",
  description: "a list of projects I've worked or actively working on.",
};

export default function ProjectsPage() {
  return (
    <main className="bg-background text-foreground relative">
      <Button
        isIconOnly
        variant="faded"
        as={Link}
        href="/"
        className="absolute top-4 left-4"
      >
        <ArrowLeftIcon />
      </Button>
      <ProjectsPageContent />
    </main>
  );
}
