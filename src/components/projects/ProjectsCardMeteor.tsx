"use client";
import React, { useEffect, useRef } from "react";
import { Meteors } from "../ui/meteors";
import { motion, useAnimation, useInView } from "framer-motion";
import {
  projectCardAnimation,
  projectCardDescriptionAnimation,
  projectCardLinksAnimation,
  projectCardTechAnimation,
} from "./animationCard";
import Image from "next/image";
import Link from "next/link";
import { GithubIcon, LinkIcon } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tech: string[];
  repo: string;
  projectLink: string;
}

export function ProjectsCardMeteor({
  title,
  description,
  image,
  tech,
  repo,
  projectLink,
}: ProjectCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const ctrls = useAnimation();

  useEffect(() => {
    if (isInView) {
      ctrls.start("visible");
    }
  }, [ctrls, isInView]);

  return (
    <motion.div
      ref={ref}
      animate={ctrls}
      initial="hidden"
      variants={projectCardAnimation}
      aria-hidden="true"
      className=""
    >
      <div className="w-full relative">
        <div className="relative shadow-xl bg-zinc-800 border border-gray-800 p-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          <h1 className="font-bold text-xl text-white mb-4 relative z-50">
            {title}
          </h1>
          <motion.div
            ref={ref}
            animate={ctrls}
            initial="hidden"
            variants={projectCardLinksAnimation}
            aria-hidden="true"
            className="absolute right-8 -top-2 ml-8 mt-6 flex items-center justify-center gap-4 lg:ml-14 lg:mt-10"
          >
            <Link
              href={repo}
              target="_blank"
              className="rounded-full bg-foreground p-2 transition-all duration-300 ease-in-out hover:bg-foreground/50"
              aria-label="Open Github Repo"
            >
              <GithubIcon className="h-5 w-5 text-zinc-100 dark:text-zinc-800" />
            </Link>
            <Link
              href={projectLink}
              target="_blank"
              className="rounded-full bg-foreground p-2 transition-all duration-300 ease-in-out hover:bg-foreground/50"
              aria-label="Open Live Demo"
            >
              <LinkIcon className="h-5 w-5 text-zinc-100 dark:text-zinc-800" />
            </Link>
          </motion.div>

          <Image
            src={image}
            alt=""
            width={1000}
            height={600}
            className="z-50 pb-5"
          />

          <p className="font-normal text-base text-zinc-50 mb-4 relative z-50">
            <motion.span
              ref={ref}
              animate={ctrls}
              initial="hidden"
              variants={projectCardDescriptionAnimation}
              aria-hidden="true"
            >
              {description}
            </motion.span>
          </p>

          <motion.div
            ref={ref}
            animate={ctrls}
            initial="hidden"
            variants={projectCardTechAnimation}
            aria-hidden="true"
            className="grid gap-4 grid-cols-2 md:grid-cols-4 lg:grid-cols-2 sm:grid-cols-2 w-full"
          >
            {tech.map((tech, index) => (
              <span
                key={index}
                className="border px-1 py-1 rounded-lg  border-gray-500 text-zinc-50 w-full text-center"
              >
                {tech}
              </span>
            ))}
          </motion.div>
          {/* Meaty part - Meteor effect */}
          <Meteors number={20} />
        </div>
      </div>
    </motion.div>
  );
}
