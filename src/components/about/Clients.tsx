"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function Clients() {
  return (
    <div className="h-[20rem] rounded-md flex flex-col antialiased bg-zinc-50 text-zinc-800 dark:bg-neutral-900 dark:text-zinc-50 dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
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
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Harianindo",
    title: "Kirwan",
    image: "/clients/harianindo.png"
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "Digiwatchdog",
    title: "Gilang",
    image: "/clients/digiwatchdog.png"
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Rekomendy",
    title: "Billa",
    image: "/clients/rekomendy.png"
  },
];
