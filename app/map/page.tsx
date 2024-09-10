import MapPageContent from "@/components/pages/map-page-content";
import { Button } from "@nextui-org/react";
import { ArrowLeftIcon } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "map - paolorollo.dev",
  description: "the countries I've visited for conferences and vacations.",
};

export default function MapPage() {
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
      <MapPageContent />
    </main>
  );
}
