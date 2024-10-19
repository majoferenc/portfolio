"use client";

import React, { useEffect, useRef, useState } from "react";

interface Card {
  number: number;
  text: string;
}

interface ByTheNumbersCardProps {
  cards: Card[];
}

export function ByTheNumbersCard({ cards }: ByTheNumbersCardProps) {
  const [animatedNumbers, setAnimatedNumbers] = useState<number[]>(() =>
    Array(cards.length).fill(0)
  );
  const [hasAnimated, setHasAnimated] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Function to check if the element is in the viewport
  const isInViewport = (element: HTMLElement | null) => {
    if (!element) return false;
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!hasAnimated && isInViewport(containerRef.current)) {
        startAnimation();
        setHasAnimated(true); // To prevent re-animation
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll); // In case the user resizes the window

    // Cleanup event listeners
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [hasAnimated]);

  const startAnimation = () => {
    cards.forEach((card, index) => {
      const end = card.number;
      const duration = 2000; // Animation duration in milliseconds
      const frameRate = 1000 / 60; // 60 frames per second
      const totalFrames = Math.round(duration / frameRate);
      let currentFrame = 0;

      const animate = () => {
        currentFrame++;
        const progress = Math.min(currentFrame / totalFrames, 1);
        const currentNumber = Math.floor(progress * end);

        setAnimatedNumbers((prevNumbers) => {
          const updatedNumbers = [...prevNumbers];
          updatedNumbers[index] = currentNumber;
          return updatedNumbers;
        });

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    });
  };

  return (
    <div
      ref={containerRef}
      className="mx-auto container md:-mt-28 -mt-20 flex justify-center items-center"
    >
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 gap-x-2 gap-y-2 lg:gap-x-6 md:gap-x-6 md:gap-y-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex justify-center flex-col items-center w-36 h-36 md:w-44 md:h-48 lg:w-56 lg:h-56 bg-white shadow rounded-2xl"
          >
            <h2 className="lg:text-5xl md:text-4xl text-2xl font-extrabold leading-10 text-center text-gray-800">
              {animatedNumbers[index]}
            </h2>
            <p className="mt-4 text-sm md:text-base lg:text-lg leading-none text-center text-gray-600">
              {card.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ByTheNumbersCard;
