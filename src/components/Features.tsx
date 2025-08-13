"use client";

import { useEffect, useState } from "react";
import {
  Box,
  Code,
  CheckCircle,
  Rocket,
  Factory,
  Microchip,
  Handshake,
  RefreshCcw,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { useIsMobile } from "@/lib/use-mobile";
import { motion, useAnimation } from "framer-motion";

const Features = () => {
  const [currentSprint, setCurrentSprint] = useState(1);
  const totalSprints = 3;
  const isMobile = useIsMobile();
  const controls = useAnimation();
  
  useEffect(() => {
    const loopAnimation = async () => {
      while (true) {
        await controls.start({
          width: "100%",
          transition: { duration: 5, ease: "linear" },
        });
        setCurrentSprint((prev) => (prev < totalSprints ? prev + 1 : 1));
        await controls.start({ width: "0%", transition: { duration: 0 } });
      }
    };
    loopAnimation();
  }, [controls]);

  const stepFlowItems = [
    {
      icon: <Microchip className="h-10 w-10" />,
      title: "Understanding all requirements and risks first",
      description: "Understanding all requirements and risks first",
    },
    {
      icon: <Factory className="h-10 w-10" />,
      title: "Correct technology stack",
      description: "Leveraging correct technology stack for the solution is crucial",
    },
    {
      icon: <Handshake className="h-10 w-10" />,
      title: "Client value first",
      description: "Creating client value is my top priority",
    },
  ];

  const sprintPhases = [
    { name: "Planning", icon: <CheckCircle className="h-4 w-4" /> },
    { name: "Development", icon: <Code className="h-4 w-4" /> },
    { name: "Testing", icon: <Box className="h-4 w-4" /> },
    { name: "Review", icon: <RefreshCcw className="h-4 w-4" /> },
  ];

  return (
    <section id="technology" className="py-10 md:py-16">
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl text-gray-600 font-bold mb-4">Development process</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Applying agile methodology to deliver software product quickly and according to all
            customer needs.
          </p>
        </div>

        {/* Step Flow */}
        <div className="rounded-xl shadow-lg border border-gray-100 p-8 mb-10 transition-all duration-300 hover:shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {stepFlowItems.map((item, index) => (
              <HoverCard key={index}>
                <HoverCardTrigger asChild>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 h-full cursor-pointer"
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="bg-gray-500 rounded-full p-4 mb-4">{item.icon}</div>
                      <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </motion.div>
                </HoverCardTrigger>
                <HoverCardContent className="w-80 shadow-lg bg-gray-700">
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold">{item.title}</h4>
                    <p className="text-sm">{item.description}</p>
                  </div>
                </HoverCardContent>
              </HoverCard>
            ))}
          </div>

          {/* Progress Bar */}
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-6 mb-10 shadow-md">
            <div className="max-w-3xl mx-auto">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-2">
                <h3 className="text-xl font-bold">Adaptation Project</h3>
                <div className="flex items-center">
                  <span className="text-sm text-gray-500 mr-2">Iterative Development</span>
                  <RefreshCcw className="h-5 w-5 text-gray-600 animate-rotate-slow" />
                </div>
              </div>

              <p className="text-gray-600 mb-4">
                Working iteratively with customers to tailor solutions to their needs
              </p>

              <div className="relative mb-2 h-3 bg-gray-200 rounded overflow-hidden">
                <motion.div
                  className="h-full bg-blue-500"
                  initial={{ width: "0%" }}
                  animate={controls}
                />
              </div>

              {/* Sprint Phases */}
              <div
                className={cn(
                  "grid gap-1 mt-4",
                  isMobile ? "grid-cols-2 gap-y-2" : "grid-cols-4"
                )}
              >
                {sprintPhases.map((phase, index) => (
                  <motion.div
                    key={index}
                    animate={{
                      backgroundColor:
                        currentSprint - 1 === Math.floor((index / sprintPhases.length) * totalSprints)
                          ? "#EFF6FF"
                          : "#F9FAFB",
                    }}
                    transition={{ duration: 0.3 }}
                    className="text-black text-center p-2 rounded border border-gray-100"
                  >
                    <div className="flex flex-col items-center">
                      <div className="rounded-full p-1 mb-1 bg-gray-100 text-gray-500">
                        {phase.icon}
                      </div>
                      <span className="text-xs font-medium">{phase.name}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Final Rocket Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-gray-100 via-white to-gray-100 rounded-lg p-8 max-w-xl mx-auto text-center shadow-md hover:shadow-lg transition-all duration-300"
          >
            <div className="relative inline-block mb-4">
              <div className="absolute inset-0 bg-black/10 rounded-full animate-pulse-slow"></div>
              <div className="relative bg-white rounded-full p-4 border border-gray-200 shadow-md">
                <Rocket className="h-10 w-10 text-gray-700" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-700">Hitting the Market</h3>
            <p className="text-gray-700">Ready to scale, produce, and launch</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;