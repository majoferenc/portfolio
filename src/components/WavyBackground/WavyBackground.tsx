"use client";

import React, { useEffect, useRef, useState } from "react";
import { createNoise3D } from "simplex-noise";
import { cn } from "../../utils/cn";

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth,
  backgroundFill,
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  ...props
}: {
  children?: any;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: "slow" | "fast";
  waveOpacity?: number;
  [key: string]: any;
}) => {
  const noise = createNoise3D();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  let animationId: number;
  
  // Store canvas context and dimensions in refs to maintain them across renders
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const dimensionsRef = useRef({ width: 0, height: 0 });
  const ntRef = useRef(0);

  const getSpeed = () => {
    switch (speed) {
      case "slow":
        return 0.001;
      case "fast":
        return 0.002;
      default:
        return 0.001;
    }
  };

  const updateCanvasDimensions = () => {
    if (!canvasRef.current || !ctxRef.current) return;
    
    dimensionsRef.current = {
      width: window.innerWidth,
      height: window.innerHeight
    };
    
    canvasRef.current.width = dimensionsRef.current.width;
    canvasRef.current.height = dimensionsRef.current.height;
    
    ctxRef.current.filter = `blur(${blur}px)`;
  };

  const init = () => {
    if (!canvasRef.current) return;
    
    ctxRef.current = canvasRef.current.getContext("2d");
    if (!ctxRef.current) return;
    
    updateCanvasDimensions();
    ntRef.current = 0;
    render();
  };

  const waveColors = colors ?? [
    "#FFEDCC",
    "#FFDAB9",
    "#FFCC99",
    "#FFB380",
    "#FFAA66",
  ];

  const drawWave = (n: number) => {
    if (!ctxRef.current) return;
    
    const ctx = ctxRef.current;
    const { width, height } = dimensionsRef.current;
    
    ntRef.current += getSpeed();
    
    for (let i = 0; i < n; i+=1) {
      ctx.beginPath();
      ctx.lineWidth = waveWidth || 50;
      ctx.strokeStyle = waveColors[i % waveColors.length];
      
      for (let x = 0; x < width; x += 5) {
        const y = noise(x / 800, 0.3 * i, ntRef.current) * 100;
        ctx.lineTo(x, y + height * 0.5);
      }
      
      ctx.stroke();
      ctx.closePath();
    }
  };

  const render = () => {
    if (!ctxRef.current) return;
    
    const ctx = ctxRef.current;
    const { width, height } = dimensionsRef.current;
    
    ctx.fillStyle = backgroundFill || "black";
    ctx.globalAlpha = waveOpacity || 0.5;
    ctx.fillRect(0, 0, width, height);
    drawWave(5);
    animationId = requestAnimationFrame(render);
  };

  useEffect(() => {
    init();
    
    const handleResize = () => {
      updateCanvasDimensions();
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  const [isSafari, setIsSafari] = useState(false);
  useEffect(() => {
    setIsSafari(
      typeof window !== "undefined" &&
        navigator.userAgent.includes("Safari") &&
        !navigator.userAgent.includes("Chrome")
    );
  }, []);

  return (
    <div
      className={cn(
        "h-5/6 flex flex-col items-center justify-center",
        containerClassName
      )}
    >
      <canvas
        className="absolute inset-0 z-0 brightness-50 shadow backdrop-blur"
        ref={canvasRef}
        id="canvas"
        style={{
          ...(isSafari ? { filter: `blur(${blur}px)` } : {}),
        }}
      />
      <div className={cn("relative z-10", className)} {...props}>
        {children}
      </div>
    </div>
  );
};

export default WavyBackground;