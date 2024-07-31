"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "../ui/aurora-background";
import HeroImage from "./HeroImage";
import HeroText from "./HeroText";

export function Hero() {
  return (
    <section id="hero">
      <AuroraBackground>
        <motion.section
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="container mx-auto"
        >
          <div className="flex flex-col justify-between gap-x-8 dark:text-white xl:flex-row">
            <HeroImage />
            <HeroText />
          </div>
        </motion.section>
      </AuroraBackground>
    </section>
  );
}
