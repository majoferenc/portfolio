import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    experience: string;
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 p-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          href={item?.experience}
          key={item?.experience}
          className="relative group block p-2 h-full w-full mask-b-from-80% mask-b-to-100%"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
              className="md:w-1/2 flex justify-center"
              initial={{ opacity: 0, scale: 0.95, x: 48 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.73, delay: 0.19, ease: 'easeOut' }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
            <CardDescription>{item.experience}</CardDescription>
          </Card>
        </Link>
      ))}
    </div>
  );
};

const durationClass = "duration-300";
const hoverEffectClasses = `hover:-translate-y-1  motion-safe:hover:scale-90 ${durationClass}`;

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        `light:bg-neutral-200 rounded-2xl shadow-2xl h-full w-full p-4 overflow-hidden dark:bg-neutral-800 border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20 ${hoverEffectClasses}`,
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("dark:text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm light:text-black",
        className
      )}
    >
      {children}
    </p>
  );
};
