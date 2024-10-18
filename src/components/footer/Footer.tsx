"use client";

import React, { useEffect } from "react";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";

const COLORS_TOP = ["#FFEDCC", "#FFDAB9", "#FFCC99", "#FFB380"];

export function Footer() {
    const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [color]);
  
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50% ${color})`;
//  const border = useMotionTemplate`1px solid ${color}`;
//  const boxShadow = useMotionTemplate`0px 4px 2px ${color}`;

  return (
    <div>
      <footer className="bg-black">
        <motion.section
      style={{
        backgroundImage,
      }}
      className="relative grid place-content-center overflow-hidden bg-black px-4 py-5 text-gray-200"
    >
      <div className="relative z-10 flex flex-col items-center">
        <div className="grid grid-cols-1 gap-8">
        <p className="max-w-xl text-center text-base leading-relaxed md:text-lg md:leading-relaxed">
        Ing.Marián Ferenc {new Date().getFullYear()}
        </p>
        </div>
      </div>

      <div className="absolute inset-0 z-0 brightness-50">
        <Canvas>
          <Stars radius={50} count={1000} factor={4} fade speed={2} />
        </Canvas>
      </div>
    </motion.section>
      </footer>
    </div>
  );
}

export default Footer;
