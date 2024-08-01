"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function Clients() {
  return (
    <div className="h-[10rem] rounded-md flex flex-col antialiased bg-zinc-50 text-zinc-800 dark:bg-neutral-900 dark:text-zinc-50 dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    image_light: "/clients/harianindo.png",
    image_dark: "/clients/harianindo-dark.png",
  },
  {
    image_light: "/clients/digiwatchdog.png",
    image_dark: "/clients/digiwatchdog.png",
  },
  {
    image_light: "/clients/rekomendy.png",
    image_dark: "/clients/rekomendy-dark.png",
  },
];
