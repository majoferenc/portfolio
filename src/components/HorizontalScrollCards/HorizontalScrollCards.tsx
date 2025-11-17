import React, { useState, forwardRef, useRef, useEffect } from "react";
import { motion } from "framer-motion";

export const HorizontalScrollCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const CARD_GAP = 16;

  const cardRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState(0);

  useEffect(() => {
    if (cardRef.current) {
      setCardWidth(cardRef.current.offsetWidth);
    }
  }, []);

  const translateX = -currentIndex * (cardWidth + CARD_GAP);

  const handleNext = () => {
    if (currentIndex < cards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="relative mx-auto w-full md:p-20">
      <motion.h2
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.4,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text pb-10 
                   text-center text-4xl font-medium tracking-tight text-transparent 
                   lg:text-6xl"
      >
        Project Experience (IBM)
      </motion.h2>

      <div className="relative flex items-center justify-center">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="absolute left-0 z-10 flex h-10 w-10 items-center justify-center 
                     rounded-full bg-white text-black disabled:opacity-50"
        >
          ◀
        </button>

        <div className="mx-10 overflow-hidden">
          <motion.div
            className="flex"
            animate={{ x: translateX }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            style={{ gap: CARD_GAP }}
          >
            {cards.map((card, index) => (
              <Card
                key={card.id}
                card={card}
                ref={index === 0 ? cardRef : null}
              />
            ))}
          </motion.div>
        </div>

        <button
          onClick={handleNext}
          disabled={currentIndex === cards.length - 1}
          className="absolute right-0 z-10 flex h-10 w-10 items-center justify-center 
                     rounded-full bg-white text-black disabled:opacity-50"
        >
          ▶
        </button>
      </div>
    </div>
  );
};

interface CardProps {
  card: {
    id: number;
    url: string;
    title: string;
    year: string;
  };
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ card }, ref) => {
    return (
      <div
        ref={ref}
        key={card.id}
        className="relative h-[50vh] min-w-[450px] sm:min-w-auto overflow-hidden bg-neutral-200 mb-10 p-10"
        style={{ minWidth: '450px' }}
      >
        <div
          style={{
            backgroundImage: `url(${card.url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 z-10 grid place-content-center">
          <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-2xl font-black uppercase text-white backdrop-blur-lg">
            {card.title}
          </p>
        </div>
        <div className="absolute inset-0 z-10 grid place-content-end">
          <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-xl font-black uppercase text-white backdrop-blur-lg mb-16">
          {card.year}
          </p>
        </div>
      </div>
    );
  }
);

Card.displayName = "Card";

export default HorizontalScrollCarousel;

const cards = [
  {
    id: 1,
    url: "/agenticaiworkshop.jpg",
    title: "GenAI Solution architecture for government customer",
    year: "2025 - Now",
  },
  {
    id: 2,
    url: "/flying.jpg",
    title: "Cloud architecture & microservices dev for German telco",
    year: "2020 - Now",
  },
  {
    id: 3,
    url: "/laptop.jpg",
    title: "Azure consulting & DevSecOps for Swiss company",
    year: "2023 - 2024",
  },
  {
    id: 4,
    url: "/boat.jpg",
    title: "Container-ready architecture",
    year: "2023 - 2024",
  },
  {
    id: 5,
    url: "/phone.jpg",
    title: "DevOps engineer for German finance",
    year: "2020 - 2021",
  },
  {
    id: 6,
    url: "/desk.jpg",
    title: "App Modernisation to Cloud",
    year: "2017 - 2023",
  },
  {
    id: 7,
    url: "/learning.jpg",
    title: "Frontend dev and consulting",
    year: "2020 - 2020",
  },
];
