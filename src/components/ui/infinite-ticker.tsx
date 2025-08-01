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
          animate={isLoaded ? {
            x: -width
          } : { x: 0 }}
          transition={isLoaded ? {
            repeat: Infinity,
            ease: "linear",
            duration: speed,
            repeatType: "loop"
          } : { duration: 0 }}
        >
          {tickerItems.map((item, i) => (
            <div
              key={`${item.id}-${i}`}
              className="flex flex-col items-center px-5 flex-shrink-0"
            >
              <div className="bg-zinc-800/20 rounded-lg p-3 flex items-center h-14">
                <div className="relative w-7 h-7 mr-3 flex items-center justify-center">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={28}
                    height={28}
                    className="object-contain"
                    unoptimized
                    onError={(e) => {
                      // Handle image error by showing fallback
                      e.currentTarget.src = `https://placehold.co/28x28/374151/ffffff?text=${item.name[0]}`;
                    }}
                  />
                </div>
                <span className="text-sm font-medium whitespace-nowrap">{item.name}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
