"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface TechItem {
  id: string;
  name: string;
  image: string;
}

interface InfiniteTechTickerProps {
  items: TechItem[];
  speed?: number;
}

export function InfiniteTechTicker({
  items,
  speed = 25 // seconds to complete one loop
}: InfiniteTechTickerProps) {
  // Duplicate items to create seamless loop
  const tickerItems = [...items, ...items];
  const [width, setWidth] = useState(0);
  const tickerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Calculate total width on mount and window resize
  useEffect(() => {
    const calculateWidth = () => {
      if (tickerRef.current) {
        setWidth(tickerRef.current.scrollWidth / 2);
      }
    };

    // Slight delay to ensure all images have loaded
    const timer = setTimeout(() => {
      calculateWidth();
      setIsLoaded(true);
    }, 500);

    window.addEventListener("resize", calculateWidth);

    return () => {
      window.removeEventListener("resize", calculateWidth);
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <div className="relative w-full overflow-hidden sm:py-8">
      <div className="w-full max-w-7xl mx-auto overflow-hidden">
        <motion.div
          ref={tickerRef}
          className="flex items-center"
          animate={
            isLoaded
              ? {
                  x: -width
                }
              : { x: 0 }
          }
          transition={
            isLoaded
              ? {
                  repeat: Infinity,
                  ease: "linear",
                  duration: speed,
                  repeatType: "loop"
                }
              : { duration: 0 }
          }
        >
          {tickerItems.map((item, i) => (
            <div
              key={`${item.id}-${i}`}
              className="flex flex-col items-center px-4 flex-shrink-0"
            >
              <div className="relative bg-zinc-800/30 rounded-lg p-3 flex items-center h-14 dark:shadow-[0_2px_8px_rgba(0,0,0,0.4),0_8px_16px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)] border border-zinc-700/50 backdrop-blur-sm overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br dark:from-white/20 dark:via-white/5 dark:o-transparent rounded-full blur-xl translate-x-6 -translate-y-6" />
                <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-br dark:from-white/30 dark:via-white/10 to-transparent rounded-full blur-sm translate-x-2 -translate-y-2" />

                <div className="relative w-7 h-7 mr-3 flex items-center justify-center z-10">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={28}
                    height={28}
                    className="object-contain"
                    unoptimized
                  />
                </div>
                <span className="text-sm font-medium whitespace-nowrap z-10 light:text-white">
                  {item.name}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}