import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";


export const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-80%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-900 pt-40">
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
            Project Experience
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
    </div>
  );
};

export default HorizontalScrollCarousel;

const cards = [
  {
    url: "/laptop.avif",
    title: "Integration Platform Projec - JEE/ Oracle SOA",
    id: 1,
  },
  {
    url: "/phone.avif",
    title: "DevOps developer for German project",
    id: 2,
  },
  {
    url: "/people.jpg",
    title: "Frontend & backend developer",
    id: 3,
  },
  {
    url: "/desk.jpg",
    title: "Application Modernisation to Cloud",
    id: 4,
  },
  {
    url: "/learning.jpg",
    title: "Networking",
    id: 5,
  },
  {
    url: "/flying.jpg",
    title: "Title 6",
    id: 6,
  },
  {
    url: "/boat.jpg",
    title: "Title 7",
    id: 7,
  },
];