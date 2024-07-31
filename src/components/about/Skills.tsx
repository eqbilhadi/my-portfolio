"use client";
import React from "react";
import { AnimatedTooltip } from "../ui/animated-tooltip";
import { motion } from "framer-motion";
const people = [
  {
    id: 1,
    name: "Laravel",
    designation: "",
    image: "/skills/laravel.png",
  },
  {
    id: 2,
    name: "CodeIgniter",
    designation: "",
    image: "/skills/codeigniter.png",
  },
  {
    id: 3,
    name: "Javascript",
    designation: "",
    image: "/skills/js.png",
  },
  {
    id: 4,
    name: "PHP",
    designation: "",
    image: "/skills/php.png",
  },
  {
    id: 5,
    name: "React",
    designation: "",
    image: "/skills/react.png",
  },
  {
    id: 6,
    name: "Livewire",
    designation: "",
    image: "/skills/livewire.png",
  },
];

export function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: "easeInOut",
      }}
      className="flex flex-row items-center justify-start mb-10 w-full mt-5"
    >
      <AnimatedTooltip items={people} />
    </motion.div>
  );
}
