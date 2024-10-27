import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export function AnimatedTextToHeader() {
  const [contentHeight, setContentHeight] = useState(0);
  const { scrollY } = useScroll();
  
  // Update content height on mount
  useEffect(() => {
    setContentHeight(document.body.scrollHeight - window.innerHeight);
  }, []);
  
  // Transform values for position and scale
  const yRange = useTransform(scrollY, [0, 200], ['50vh', '1rem']);
  const xRange = useTransform(scrollY, [0, 200], ['50%', '2rem']);
  const scaleRange = useTransform(scrollY, [0, 200], [2, 1]);
  
  return (
    <div>
      <motion.h1
        className="fixed font-bold text-3xl text-blue-600 origin-left"
        style={{
          y: yRange,
          x: xRange,
          scale: scaleRange,
        }}
      >
        Awesome Title
      </motion.h1>      
    </div>
  );
}