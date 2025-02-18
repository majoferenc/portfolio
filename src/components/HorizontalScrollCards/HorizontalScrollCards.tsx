import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";


export const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-80%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-900 pt-40 shadow">
                  <motion.h2
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.4,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="lg:text-6xl bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent"
          >
            Project Experience (IBM)
          </motion.h2>
      <div className="sticky top-0 flex pt-20 items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-8 pb-20">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }: any) => {
  return (
    <div
      key={card.id}
      className="group relative h-screen w-[650px] overflow-hidden bg-neutral-200 mb-10"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
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
};

export default HorizontalScrollCarousel;

const cards = [
  {
    url: "/flying.jpg",
    title: "Cloud architecture & microservices development for German telco company",
    year: "2020 - Now",
    id: 6,
  },
  {
    url: "/laptop.jpg",
    title: "Azure consulting & DevSecOps engineering for Swiss based company",
    year: "2023 - Now",
    id: 1,
  },
  {
    url: "/boat.jpg",
    title: "Application Modernisation & container ready architecture for Slovak ministries",
    year: "2023 - 2024",
    id: 7,
  },
  {
    url: "/phone.jpg",
    title: "DevOps engineer for German financing company",
    year: "2020 - 2021",
    id: 2,
  },
  {
    url: "/desk.jpg",
    title: "Application Modernisation to Cloud for German government",
    year: "2017 - 2023",
    id: 4,
  },
  {
    url: "/learning.jpg",
    title: "Frontend development & consulting for German oiling company",
    year: "2020 - 2020",
    id: 5,
  },
];