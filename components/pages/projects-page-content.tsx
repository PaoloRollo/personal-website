"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardBody,
  CardHeader,
  Chip,
  Divider,
  Image,
  Link,
} from "@nextui-org/react";

interface Project {
  name: string;
  type: string;
  logo: string;
  link: string;
  description: string;
}

const projects: Project[] = [
  {
    name: "Playerself Labs",
    type: "startup",
    description:
      "Shaping the gaming industry through storytelling, technology and community.",
    logo: "https://media.licdn.com/dms/image/D4D0BAQE5LCUBiZrYDg/company-logo_100_100/0/1689152492669/playerselfnft_logo?e=1710374400&v=beta&t=6bnzlg5xLoLEYD89nK5-138yh1Ry9UaLWW6Kf1WfNDw",
    link: "https://playerself.com",
  },
  {
    name: "Brian",
    type: "startup",
    description:
      "Unleash the power of web3 Intents with AI. Swap, transfer, bridge tokens and perform any other on-chain operations by prompting.",
    logo: "https://www.brianknows.org/brian_logo.png",
    link: "https://brianknows.org",
  },
  {
    name: "EthLogSpy",
    type: "open source",
    description:
      "Reverse proxy for Ethereum nodes that stores logs information for a faster retrieval.",
    logo: "https://github.com/PaoloRollo/ethlogspy/raw/main/ethlogspy.png",
    link: "https://github.com/PaoloRollo/ethlogspy",
  },
  {
    name: "Pulse",
    type: "hackathon",
    description: "",
    logo: "",
    link: "https://github.com/PaoloRollo/pulse",
  },
];

export default function ProjectsPageContent() {
  return (
    <div className="max-w-6xl w-full mx-auto py-16">
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0 }}
        className="text-3xl md:text-7xl font-black text-center"
      >
        projects
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-8 gap-4">
        {projects.map((project) => (
          <Card className="max-w-[400px]" key={project.name}>
            <CardHeader className="flex justify-between">
              <div className="flex gap-3">
                <Image
                  alt={`${project.name} logo`}
                  height={40}
                  radius="sm"
                  src={project.logo}
                  width={40}
                />
                <div className="flex flex-col">
                  <p className="text-md">{project.name}</p>
                  <Link
                    href={project.link}
                    isExternal
                    className="text-small text-default-500 truncate"
                  >
                    {project.link}
                  </Link>
                </div>
              </div>
              <Chip color="primary">{project.type}</Chip>
            </CardHeader>
            <Divider />
            <CardBody>
              <p>{project.description}</p>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}
