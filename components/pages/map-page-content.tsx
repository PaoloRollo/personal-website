"use client";
import { motion } from "framer-motion";
// @ts-ignore
import { SVGMap } from "react-svg-map";
// @ts-ignore
import World from "@svg-maps/world";

export default function MapPageContent() {
  return (
    <div className="max-w-6xl w-full mx-auto py-16">
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0 }}
        className="text-3xl md:text-7xl font-black text-center"
      >
        map
      </motion.h1>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 1 }}
        className="flex items-center space-x-4 mt-8 bg-white mx-4 border-none max-w-2xl mx-auto"
      >
        <SVGMap map={World} />
      </motion.div>
    </div>
  );
}
