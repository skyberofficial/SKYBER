"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function BackgroundGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 0.3, 0]);

  return (
    <motion.div
      ref={ref}
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
      style={{ opacity }}
    >
      <motion.div
        className="absolute inset-0"
        style={{ y: translateY }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#17D49220_1px,transparent_1px),linear-gradient(to_bottom,#17D49220_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      </motion.div>
    </motion.div>
  );
} 