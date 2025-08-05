"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

// ButtonWrapper component that accepts buttonText and disabled as props
export function ButtonWrapper({
  buttonText,
  disabled = false,
}: {
  buttonText: string;
  disabled?: boolean;
}) {
  return (
    <div>
      <SpotlightButton buttonText={buttonText} disabled={disabled} />
    </div>
  );
}

// SpotlightButton component accepts buttonText and disabled as props
const SpotlightButton = ({
  buttonText,
  disabled = false,
}: {
  buttonText: string;
  disabled?: boolean;
}) => {
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const spanRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (disabled) return; // Don't add listeners if disabled

    const handleMouseMove = (e: MouseEvent) => {
      if (!btnRef.current || !spanRef.current) return;
      const { width } = btnRef.current.getBoundingClientRect();
      const offset = e.offsetX;
      const left = `${(offset / width) * 100}%`;
      spanRef.current.animate({ left }, { duration: 250, fill: "forwards" });
    };

    const btnElement = btnRef.current;
    if (btnElement) {
      btnElement.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (btnElement) {
        btnElement.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, [disabled]);

  return (
    <motion.button
      whileTap={!disabled ? { scale: 0.985 } : {}}
      ref={btnRef}
      type="submit"
      disabled={disabled}
      aria-disabled={disabled}
      className={`relative w-full max-w-xs overflow-hidden rounded-lg px-4 py-3 text-lg font-medium
        ${
          disabled
            ? "bg-gray-400 text-gray-200 cursor-not-allowed"
            : "bg-slate-950 text-yellow-500"
        }
        transition-colors duration-200`}
      tabIndex={disabled ? -1 : 0}
    >
      <span className="pointer-events-none relative z-10 mix-blend-difference">
        {buttonText}
      </span>
      {!disabled && (
        <span
          ref={spanRef}
          className="pointer-events-none absolute left-[50%] top-[50%] h-32 w-32 -translate-x-[50%] -translate-y-[50%] rounded-full bg-orange-500 text-yellow-500 bg-gradient-to-r blur-2xl brightness-150 from-orange-600 via-yellow-600 to-orange-60"
        />
      )}
    </motion.button>
  );
};

export default ButtonWrapper;