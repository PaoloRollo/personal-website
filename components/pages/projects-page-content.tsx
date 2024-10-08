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
    name: "Brian",
    type: "startup",
    description:
      "Unleash the power of web3 Intents with AI. Swap, transfer, bridge tokens and perform any other on-chain operations by prompting.",
    logo: "https://www.brianknows.org/brian_logo.png",
    link: "https://brianknows.org",
  },
  {
    name: "builders garden",
    type: "startup",
    description:
      "A web3 MVP studio building and launching web3 products in a matter of weeks.",
    logo: "/logos/builders-garden-logo.webp",
    link: "https://builders.garden",
  },
  {
    name: "Flux",
    type: "ETHWarsaw",
    description: "Crypto-friendly checkout infrastructure for every business.",
    logo: "/logos/flux.webp",
    link: "https://devfolio.co/projects/flux-f5d0",
  },
  {
    name: "EVM Actions",
    type: "ETHGlobal Brussels",
    description:
      "A standard to perform web3 interactions within any (web2) website such as social networks.",
    logo: "/logos/zap.png",
    link: "https://evm-actions.builders.garden/starter-kit",
  },
  {
    name: "Agent Smith",
    type: "ETHSeoul",
    description:
      "Enter the NEAR matrix with Agent Smith, the multi-chain AI agent.",
    logo: "/logos/agent-smith.webp",
    link: "https://devfolio.co/projects/agent-smith-6ef3",
  },
  {
    name: "Fluidpay",
    type: "ETHGlobal London",
    description:
      "Fluidpay is a mobile-first p2p payments app running on Base and USDC-centric.",
    logo: "/logos/fluidpay.svg",
    link: "https://ethglobal.com/showcase/fluidpay-tpqvz",
  },
  {
    name: "Papabase",
    type: "ETHDenver 2024",
    description:
      "Making public goods donations accessible to everyone through crypto and fiat.",
    logo: "/logos/papabase.svg",
    link: "https://devfolio.co/projects/papabase-7d6b",
  },
  {
    name: "Ghost",
    type: "LFGHO Winner",
    description:
      "A mobile-native AA smart wallet designed for p2p payments, featuring automatic saving plans and easy-to-use investment features GHO-based.",
    logo: "/logos/ghost.webp",
    link: "https://ethglobal.com/showcase/ghost-mae3q",
  },
  {
    name: "Pulse",
    type: "ETHGlobal Istanbul",
    description:
      "Pulse is a revolutionary mobile-first social client leveraging Lens and Farcaster frameworks.",
    logo: "/logos/pulse.webp",
    link: "https://pulse-indol.vercel.app/",
  },
  {
    name: "threelingo",
    type: "ETHLisbon",
    description: "the free, fun and effective way to learn web3.",
    logo: "/logos/threelingo.webp",
    link: "https://threelingo.vercel.app/",
  },
  {
    name: "GitGate",
    type: "ETHLisbon",
    description:
      "A web app allowing repository owners to setup token-gated access controls to GitHub repositories.",
    logo: "/logos/gitgate.png",
    link: "https://taikai.network/ethlisbon/hackathons/ethlisbon-2022/projects/cl9sjt5s53583760118v1r1jdup/idea",
  },
  {
    name: "urbe.eth",
    type: "community",
    description:
      "Community for Web3 builders in rome: coworking, events, hackathons, and more.",
    logo: "/logos/urbe-eth.webp",
    link: "https://urbe.build",
  },
  {
    name: "ETHRome",
    type: "community",
    description:
      "The 1st web3 hackathon in Italy, on governance and privacy topics",
    logo: "/logos/ethrome.webp",
    link: "https://ethrome.org",
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
    name: "Honeypot Sniper",
    type: "open source",
    description:
      "A simple Ethereum ERC-20 honeypot sniper on UniswapV2, UniswapV3 and Sushiswap.",
    logo: "/logos/honeypot.png",
    link: "https://github.com/PaoloRollo/honeypot-sniper",
  },
  {
    name: "providers-wtf",
    type: "open source",
    description:
      "A library to switch between viem and ethers providers easily.",
    logo: "/logos/providers-wtf.png",
    link: "https://github.com/PaoloRollo/providers-wtf",
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
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 1 }}
        className="grid grid-cols-1 md:grid-cols-3 mt-8 gap-4 mx-auto p-4"
      >
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
                  <p className="text-md font-bold">{project.name}</p>
                  <Link
                    href={project.link}
                    isExternal
                    className="text-xs text-default-500 truncate"
                  >
                    {project.link.length > 22
                      ? `${project.link.slice(0, 22)}...`
                      : project.link}
                  </Link>
                </div>
              </div>
              <Chip
                color={
                  project.type === "startup"
                    ? "primary"
                    : project.type === "community"
                    ? "warning"
                    : project.type === "open source"
                    ? "success"
                    : "danger"
                }
                size="sm"
              >
                {project.type}
              </Chip>
            </CardHeader>
            <Divider />
            <CardBody>
              <p className="text-sm">{project.description}</p>
            </CardBody>
          </Card>
        ))}
      </motion.div>
    </div>
  );
}
