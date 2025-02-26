"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

// ButtonWrapper component that accepts buttonText as a prop
export function ButtonWrapper({ type, buttonText }: { type: "button" | "submit" | "reset", buttonText: string }) {
  return (
    <div className="">
      <SpotlightButton type={type} buttonText={buttonText} />
    </div>
  );
}

// SpotlightButton component accepts buttonText as a prop
const SpotlightButton = ({ type, buttonText }:  { type: "button" | "submit" | "reset", buttonText: string }) => {
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const spanRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!btnRef.current || !spanRef.current) return; // Ensure the refs are not null

      const { width } = btnRef.current.getBoundingClientRect();
      const offset = e.offsetX;
      const left = `${(offset / width) * 100}%`;
      
      // Check if the spanRef is valid before animating
      if (spanRef.current) {
        spanRef.current.animate({ left }, { duration: 250, fill: "forwards" });
      }
    };

    const handleMouseLeave = () => {
  
    };

    const btnElement = btnRef.current;
    if (btnElement) {
      btnElement.addEventListener("mousemove", handleMouseMove);
      btnElement.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (btnElement) {
        btnElement.removeEventListener("mousemove", handleMouseMove);
        btnElement.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <motion.button
      whileTap={{ scale: 0.985 }}
      ref={btnRef}
      className="relative w-full max-w-xs overflow-hidden rounded-lg bg-slate-950 px-4 py-3 text-lg font-medium text-yellow-500"
    >
      <button type={type} className="pointer-events-none relative z-10 mix-blend-difference">
        {buttonText} {/* Use the buttonText prop */}
      </button>
      <span
        ref={spanRef}
        className="pointer-events-none absolute left-[50%] top-[50%] h-32 w-32 -translate-x-[50%] -translate-y-[50%] rounded-full bg-orange-500 text-yellow-500  bg-gradient-to-r blur-2xl brightness-150 from-orange-600 via-yellow-600 to-orange-60"
      />
    </motion.button>
  );
};

export default ButtonWrapper;
