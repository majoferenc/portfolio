"use client";

import Image from "next/image";
/* eslint-disable react/jsx-no-target-blank */
import React, { RefObject, useEffect, useRef, useMemo } from "react";
import { motion } from "framer-motion";
import { ScrollParallax } from "react-just-parallax";
import { Parallax } from "react-parallax"

import { useAppSelector } from "../app/hooks";
import { selecSidebarOpened } from "../components/Sidebar/SidebarSlice";
import { WavyBackground } from "../components/WavyBackground/WavyBackground";
import { Scroll } from "../components/Scroll/Scroll";
import { ExpertiseCard } from "../components/ExpertiseCard/ExpertiseCard";
import { ByTheNumbersCard } from "../components/ByTheNumbersCard/ByTheNumbersCard";
import { ScrollToTop } from "../components/ScrollToTop/ScrollToTop";
import { HorizontalScrollCarousel } from "../components/HorizontalScrollCards/HorizontalScrollCards";


const opacitySetter = (
  componentRef: RefObject<HTMLDivElement>,
  duration: number
) => {
  setTimeout(() => {
    componentRef.current?.classList.remove("opacity-0");
    componentRef.current?.classList.add("opacity-100");
  }, duration);
};

export default function Page() {
  const durationClass = "duration-300";
  const animationClasses = `transform transition-all opacity-0 ${durationClass}`;
  const hoverEffectClasses = `hover:-translate-y-1  motion-safe:hover:scale-110 ${durationClass}`;
  const fullNammeText = "Ing. Marián Ferenc"
  const descriptionText =
    "Full Stack Developer, DevSecOps & Cloud Architecture Engineer from Košice, Slovakia.";
  const byTheNumbersCard = [
    {
      number: 4,
      text: "Spoken Languages"
    },
    {
      number: 7,
      text: "Customer facing Projects"
    },
    {
      number: 7,
      text: "Years of Experience"
    },
    {
      number: 39,
      text: "Certifications/Badges"
    }
  ];
  const expertiseCards = [
    {
      description: 'Vue.js, Next.js, Angular',
      title: 'Frontend Development',
      experience: '3 years of experience',
    },
    {
      description: 'Spring Boot, Java EE, Node.js / LangChain, ChromaDB',
      title: 'Backend development & GenAI solutions',
      experience: '7 years of experience',
    },
    {
      description: 'Kubernetes / Cloudification / Pipelining - GitLab CI & GitOps - ArgoCD',
      title: 'DevSecOps Engineer',
      experience: '5 years of experience',
    },
    {
      description: 'Cloud Architecture - IBM Cloud, Azure, AWS',
      title: 'Application Architect',
      experience: '2 years of experience',
    },
  ];
  const bodyRef = useRef<HTMLDivElement | null>(null);
  const nameRef = useRef<HTMLDivElement | null>(null);
  const descriptionRef = useRef<HTMLDivElement | null>(null);
  const iconsRef = useRef<HTMLDivElement | null>(null);
  const parallaxRef = useRef(null);
  const sidebarOpened = useAppSelector(selecSidebarOpened);

  const wavyBgElement = useMemo(
    () => <WavyBackground className="max-w-4xl mx-auto overflow-hidden shadow-md" />,
    []
  );
  
  useEffect(() => {
    if (sidebarOpened === true) {
      addBlur();
    } else {
      removeBlur();
    }
  }, [sidebarOpened]);

  opacitySetter(nameRef, 500);
  opacitySetter(descriptionRef, 1000);
  opacitySetter(iconsRef, 1500);

  const addBlur = () => {
    bodyRef.current?.classList.add("filter", "blur-sm");
  };

  const removeBlur = () => {
    bodyRef.current?.classList.remove("filter", "blur-sm");
  };

  return (
    <div className="md:my-0 md:pt-40 pt-20 bg-black" id="hero">
      {wavyBgElement}
        <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8, ease: "easeInOut" }}
      >
        <ScrollParallax strength={0.05}>
        <span className="text-center">
          <p className="absolute text-3xl left-0 right-0 m-auto mx-auto flex border w-fit bg-gradient-to-r blur-xl brightness-150 from-orange-600 via-orange-600 to-orange-600 bg-clip-text md:text-6xl box-content font-extrabold text-transparent text-center select-none">
            {fullNammeText}
          </p>
          <p className="relative text-3xl w-fit p-2 mx-auto justify-center flex h-fit bg-gradient-to-r items-center from-gray-200 via-gray-200 to-gray-200 bg-clip-text md:text-6xl font-extrabold text-transparent text-center select-auto">
            {fullNammeText}
          </p>
        </span>
        </ScrollParallax>
        <div className="grid md:grid-cols-3 grid-cols- text-center">
          <div />
          <div className="text-left md:w-96 md:my-80 md:mb-0">
            <h2
              ref={descriptionRef}
              className={`drop-shadow-2xl md:text-4xl text-xl font-mono m-8 text-white ${animationClasses}`}
            >
              {descriptionText}
            </h2>
            <div
              ref={iconsRef}
              className={`grid grid-cols-2 grid-cols- md:px-16 px-20 mx-8 md:mx-0 ${animationClasses}`}
            >
              <a
                href="https://www.linkedin.com/in/ing-marian-ferenc-slovakia/"
                target="_blank"
                className="h-[4rem] w-[4rem]"
              >
                <Image
                  src="/linkedin-icon.png"
                  width={100}
                  height={100}
                  className={`h-[4rem] m-0 ${hoverEffectClasses} bg-white-700`}
                  alt="LinkedIn link"
                />
              </a>
              <a
                href="https://github.com/majoferenc"
                target="_blank"
                className="h-[4rem] w-[4rem]"
              >
                <Image
                  src="/github-icon.png"
                  width={100}
                  height={100}
                  className={`h-[4rem] m-0 ${hoverEffectClasses}`}
                  alt="GitHub link"
                />
              </a>
            </div>
          </div>
          <div className="flex justify-center items-center md:pr-[80rem]">
            <Image
              src={"/IMG_2255.png"}
              width={150}
              height={100}
              className="w-40 md:ml-0 md:min-w-[25rem] md:min-w-[20rem] rounded-tr-lg"
              alt="Me"
            />
          </div>
        </div>
        <div className="text-center pb-20">
          <Scroll />
        </div>
        </motion.div>
      <div ref={bodyRef} className=" h-1/4 overflow-visible">
        <div>
          <div>
            <div className="pb-40">
              <div ref={parallaxRef}>
                <div className="mx-auto bg-gradient-to-l from-white to-white h-60">
                <div className="mx-auto container w-full flex flex-col justify-center items-center">
                  <div className="flex justify-center items-center flex-col">
                    <div className="mt-10 hover:outline-2 hover:outline-white transition-all duration-300" id="by-the-numbers">
                      <motion.h2
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                          delay: 0.3,
                          duration: 0.8,
                          ease: "easeInOut",
                        }}
                        className="lg:text-6xl bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent"
                      >
                        By the numbers
                      </motion.h2>
                    </div>
                  </div>
                </div>
              </div>
                    <ByTheNumbersCard cards={byTheNumbersCard} />
              </div>
            </div>
          </div>
        </div>
        
      <HorizontalScrollCarousel />
        <div>
          <div className="bg-white pb-20 py-8">
            <div>
            <div className="mx-auto bg-gradient-to-l from-white to-white">
                <div className="mx-auto container w-full flex flex-col justify-center items-center">
                  <div className="flex justify-center items-center flex-col">
                    <div className="mt-10" id="experience">
                      <motion.h2
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                          delay: 0.3,
                          duration: 0.8,
                          ease: "easeInOut",
                        }}
                        className="lg:text-6xl bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent"
                      >
                        Expertise
                      </motion.h2>
                    </div>
                  </div>
                </div>
              </div>
              <ExpertiseCard cards={expertiseCards} />
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className="container mx-auto pt-16">
            <div className="mx-auto">
                <div className="mx-auto container w-full flex flex-col justify-center items-center">
                  <div className="flex justify-center items-center flex-col">
                    <div className="mt-10" id="certifications">
                      <motion.h2
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                          delay: 0.3,
                          duration: 0.8,
                          ease: "easeInOut",
                        }}
                        className="lg:text-6xl bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent"
                      >
                        Certifications
                      </motion.h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="xl:py-8 lg:py-16 md:py-16 sm:py-16 px-15 flex flex-wrap items-center justify-center">
                <div className={`w-6/12 xl:w-[10rem] lg:w-1/4 md:w-1/4 flex justify-center xl:pb-10 pb-16 items-center  ${hoverEffectClasses}`}>
                  <Image 
                  src="/aws_certified_sol_arch_pro.png" 
                  alt="AWS Certified Solutions Architect Professional"
                  width={150}
                  height={100} 
                  />
                </div>
                <div className={`w-6/12 xl:w-[10rem] lg:w-1/4 md:w-1/4 flex justify-center xl:pb-10 pb-16 items-center  ${hoverEffectClasses}`}>
                  <Image 
                  src="/terraform_cert.png" 
                  alt="Terraform certificate"
                  width={150}
                  height={100}  
                  />
                </div>
                <div className={`w-6/12 xl:w-[10rem] lg:w-1/4 md:w-1/4 flex justify-center xl:pb-10 pb-16 items-center  ${hoverEffectClasses}`}>
                  <Image 
                  src="/redhat_openshift_administration.png" 
                  width={150}
                  height={100} 
                  alt="RedHat OpenShift Administrator" 
                  />
                </div>
                <div className={`w-6/12 xl:w-[10rem] lg:w-1/4 md:w-1/4 flex justify-center xl:pb-10 pb-16 items-center  ${hoverEffectClasses}`}>
                  <Image 
                  src="/ckad_cert.png" 
                  alt="Certified Kubernetes Application Developer" 
                  width={150}
                  height={100} 
                  />
                </div>
                <div className={`w-6/12 xl:w-[10rem] lg:w-1/4 md:w-1/4 flex justify-center xl:pb-10 pb-16 items-center  ${hoverEffectClasses}`}>
                  <Image 
                  src="/oracle_java_8_prof_cert.png" 
                  alt="Certified Java Professional" 
                  width={150}
                  height={100} 
                  />
                </div>
              </div>
              <Parallax
          blur={{ min: -15, max: 15 }}
          bgImage="/graduation-cap.svg"
          bgImageAlt="University Degree"
          strength={400}
        >
      <div className="mb-48 min-h-[300px] flex flex-col justify-center items-center" id="education">
        <div className="p-8 rounded-lg">
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
            Education
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.5,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="mt-20 text-white text-center text-4xl font-medium tracking-tight"
          >
            Engineer&apos;s degree in Informatics from Technical University of Kosice 
          </motion.p>
        </div>
      </div>
      </Parallax>
              <div className="flex items-center justify-center">
                <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                    <a
                      href="https://www.credly.com/users/marian-ferenc/badges"
                      target="_blank"
                      type="submit"
                      className={`mx-auto text-white rounded font-bold py-2 px-4 m-4 text-sm`}
                    >
                      Credly
                    </a>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ScrollToTop />
    </div>
  );
}
