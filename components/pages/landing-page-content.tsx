"use client";

import { Button, Image, cn } from "@nextui-org/react";
import { motion } from "framer-motion";
import {
  GithubIcon,
  MapIcon,
  TwitterIcon,
  FolderClockIcon,
} from "lucide-react";
import { Source_Code_Pro } from "next/font/google";
import Link from "next/link";

const sourceCodePro = Source_Code_Pro({ subsets: ["latin"] });

export default function LandingPageContent() {
  return (
    <section className="hero h-screen w-screen flex flex-col items-center justify-center text-center px-4">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 2 }}
        className="mb-4"
      >
        <Image
          src="/orbulo.png"
          className="h-24 w-24"
          alt="orbulo in all his majesty"
          radius="full"
        />
      </motion.div>
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0 }}
        className="text-3xl md:text-7xl font-black"
      >
        full stack developer
      </motion.h1>
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 1 }}
        className="text-3xl md:text-7xl font-black"
      >
        sleep-deprived hacker
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 2 }}
        className={cn(
          "text-md md:text-3xl font-bold text-foreground-400 mt-2 md:mt-4",
          sourceCodePro.className
        )}
      >
        &lt; coding cool shit for a living /&gt;
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 2 }}
        className="flex items-center space-x-2 md:space-x-4 mt-8"
      >
        <Button variant="faded" as={Link} href="/projects">
          <FolderClockIcon />
          <span className="hidden md:block">Projects</span>
        </Button>
        <Button variant="faded" as={Link} href="/map">
          <MapIcon />
          <span className="hidden md:block">Map</span>
        </Button>
        <Button variant="faded" as={Link} href="https://github.com/PaoloRollo">
          <GithubIcon />
          <span className="hidden md:block">Github</span>
        </Button>
        <Button variant="faded" as={Link} href="https://twitter.com/orbuloeth">
          <TwitterIcon />
          <span className="hidden md:block">Twitter</span>
        </Button>
      </motion.div>
    </section>
  );
}
