import ProjectsPageContent from "@/components/pages/projects-page-content";
import { Button } from "@nextui-org/react";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";

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
