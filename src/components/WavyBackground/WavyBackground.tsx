"use client";

import React, { useEffect, useRef, useState } from "react";
import { createNoise3D } from "simplex-noise";
import { cn } from "../../utils/cn";
import { useTheme } from "@/components/theme-provider";

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
  const { theme } = useTheme();
  const noise = createNoise3D();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const dimensionsRef = useRef({ width: 0, height: 0 });
  const ntRef = useRef(0);
  const backgroundColorRef = useRef(backgroundFill || "black");
  const lastTimeRef = useRef(0);

  const [isSafari, setIsSafari] = useState(false);
  const [isWeakBrowser, setIsWeakBrowser] = useState(false);
  let animationId: number;

  // Target 60 FPS
  const targetFPS = 60;
  const frameInterval = 1000 / targetFPS;

  useEffect(() => {
    setIsSafari(
      typeof window !== "undefined" &&
        navigator.userAgent.includes("Safari") &&
        !navigator.userAgent.includes("Chrome")
    );

    setIsWeakBrowser(
      typeof window !== "undefined" &&
        /LinkedIn|FBAN|FBAV|Instagram|WebView/.test(navigator.userAgent)
    );
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const computedStyle = getComputedStyle(document.documentElement);
      backgroundColorRef.current =
        backgroundFill ||
        computedStyle.getPropertyValue("--background").trim() ||
        "black";
    }, 0);
    return () => clearTimeout(timeout);
  }, [theme, backgroundFill]);

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

    const scaleFactor = isWeakBrowser ? 0.5 : 1;

    dimensionsRef.current = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    canvasRef.current.width = dimensionsRef.current.width * scaleFactor;
    canvasRef.current.height = dimensionsRef.current.height * scaleFactor;

    ctxRef.current.setTransform(1, 0, 0, 1, 0, 0);
    ctxRef.current.scale(
      isWeakBrowser ? 1 / scaleFactor : scaleFactor,
      isWeakBrowser ? 1 / scaleFactor : scaleFactor
    );

    ctxRef.current.filter = isWeakBrowser ? "none" : `blur(${blur}px)`;
  };

  const init = () => {
    if (!canvasRef.current) return;

    ctxRef.current = canvasRef.current.getContext("2d");
    if (!ctxRef.current) return;

    updateCanvasDimensions();
    ntRef.current = 0;
    lastTimeRef.current = performance.now();
    render();
  };

  const waveColors =
    colors ?? ["#FFEDCC", "#FFDAB9", "#FFCC99", "#FFB380", "#FFAA66"];

  const drawWave = (n: number) => {
    if (!ctxRef.current) return;

    const ctx = ctxRef.current;
    const { width, height } = dimensionsRef.current;

    for (let i = 0; i < n; i++) {
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

  const render = (currentTime?: number) => {
    if (!ctxRef.current) return;

    const now = currentTime || performance.now();
    const deltaTime = now - lastTimeRef.current;

    // Only update if enough time has passed to maintain 60 FPS
    if (deltaTime >= frameInterval) {
      const ctx = ctxRef.current;
      const { width, height } = dimensionsRef.current;

      // Update animation progress
      ntRef.current += getSpeed();

      ctx.fillStyle = backgroundColorRef.current;
      ctx.globalAlpha = waveOpacity || 0.5;
      ctx.fillRect(0, 0, width, height);
      drawWave(5);

      lastTimeRef.current = now - (deltaTime % frameInterval);
    }

    animationId = requestAnimationFrame(render);
  };

  useEffect(() => {
    init();

    const handleResize = () => updateCanvasDimensions();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationId);
    };
  }, [isWeakBrowser]);

  return (
    <div
      className={cn(
        "h-5/6 flex flex-col items-center justify-center",
        containerClassName
      )}
    >
      <canvas
        className="absolute inset-0 z-0 w-full h-full"
        ref={canvasRef}
        id="canvas"
        style={{
          width: "100%",
          height: "100%",
          ...(isSafari || isWeakBrowser ? { filter: `blur(${blur}px)` } : {}),
        }}
      />
      <div className={cn("relative z-10", className)} {...props}>
        {children}
      </div>
    </div>
  );
};

export default WavyBackground;