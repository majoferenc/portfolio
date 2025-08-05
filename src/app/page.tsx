"use client";

import Image from "next/image";
/* eslint-disable react/jsx-no-target-blank */
import React, { RefObject, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ScrollParallax } from "react-just-parallax";
import { Parallax } from "react-parallax"

import { InfiniteTechTicker } from "@/components/ui/infinite-ticker";
import { useAppSelector } from "../app/hooks";
import { selecSidebarOpened } from "../components/Sidebar/SidebarSlice";
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
  
  const techItems = [
    { id: "react", name: "React", image: "/React.png"},
    { id: "spring", name: "Spring Boot", image: "/Spring.png"},
    { id: "terraform", name: "Terraform", image: "/Terraform.png"},
    { id: "aws", name: "AWS", image: "/AWS.png"},
    { id: "azure", name: "Azure", image: "/Azure.png"},
    { id: "vue.js", name: "Vue.js", image: "/Vue.png"},
    { id: "docker", name: "Docker", image: "/Docker.png"},
    { id: "kubernetes", name: "Kubernetes", image: "/Kubernetes.png"},
    { id: "argocd", name: "ArgoCD", image: "/ArgoCD.png"},
    { id: "jenkins", name: "Jenkins", image: "/Jenkins.png"},
    { id: "gitlabci", name: "Gitlab CI", image: "/GitLab.png"},
  ];

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
      number: 8,
      text: "Customer facing Projects"
    },
    {
      number: 8,
      text: "Years of Experience"
    },
    {
      number: 42,
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
    <div className="relative pt-[35px] sm:pt-[100px]" id="hero">
      <div className="flex justify-center items-center">
      <motion.div
      className="w-full"
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.4, duration: 0.8, ease: "easeInOut" }}
  >
    <ScrollParallax strength={0.05}>
      <span className="block text-center">
        <p className="lg:text-6xl bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent">
          {fullNammeText}
        </p>
      </span>
    </ScrollParallax>
    {/* Flex container for description and image */}
    <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-2 sm:mt-8 w-full">
      {/* Description and icons container */}
      <div className="flex flex-col items-center w-full px-4 md:max-w-md">
        <h2
          ref={descriptionRef}
          className={`drop-shadow-2xl text-center text-base sm:text-lg md:text-2xl font-mono m-4 break-words  ${animationClasses}`}
        >
          {descriptionText}
        </h2>
        <div className="flex items-center justify-center p-5">
            <button className={`${hoverEffectClasses} "relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 m-4"`}>
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 mx-2 py-1 text-sm font-medium text-white backdrop-blur-3xl">
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
            <button className={`${hoverEffectClasses} "relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 m-4"`}>
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 mx-2 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                <a
                  href="/resume_marian_ferenc_25.pdf"
                  download="Marian_Ferenc_25-CV.pdf"
                  target="_blank"
                  type="submit"
                  className={`mx-auto text-white rounded font-bold py-2 px-4 m-4 text-sm`}
                >
                  Download CV
                </a>
              </span>
            </button>
          </div>
        <div
          ref={iconsRef}
          className={`flex justify-center space-x-4 mt-4 ${animationClasses}`}
        >
          <a
            href="https://www.linkedin.com/in/ing-marian-ferenc-slovakia/"
            target="_blank"
            className="h-16 w-16"
          >
            <Image
              src="/linkedin-icon.png"
              width={100}
              height={100}
              className={`h-16 w-16 ${hoverEffectClasses}`}
              alt="LinkedIn link"
            />
          </a>
          <a
            href="https://github.com/majoferenc"
            target="_blank"
            className="h-16 w-16"
          >
            <Image
              src="/github-icon.png"
              width={100}
              height={100}
              className={`h-16 w-16 ${hoverEffectClasses} bg-black rounded-full`}
              alt="GitHub link"
            />
          </a>
          
        </div>
        <div>
        </div>
      </div>
      {/* Photo container */}
      <div className="flex justify-center items-center">
        <Image
          src="/IMG_2255.png"
          width={145}
          height={145}
          className="w-40 md:ml-0 md:min-w-[20rem] md:min-w-[20rem] rounded-tr-lg mask-r-from-70%"
          alt="Me"
        />
      </div>
    </div>
          {/* Tech Stack Section */}
          <motion.section
        id="tech-stack"
        className="py-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div title="Tech Stack" />

        <InfiniteTechTicker items={techItems} speed={30} />
      </motion.section>
    <div className="text-center pb-20 mt-2">
      <Scroll />
    </div>
  </motion.div>
      </div>
      <div ref={bodyRef} className=" h-1/4 overflow-visible">
        <div>
          <div>
            <div className="pb-40">
              <div ref={parallaxRef}>
                <div className="mx-auto h-60">
                <div className="mx-auto container w-full flex flex-col justify-center items-center">
                  <div className="flex justify-center items-center flex-col">
                    <div className="mt-10 hover:outline-white transition-all duration-300" id="by-the-numbers">
                      <motion.h2
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                          delay: 0.3,
                          duration: 0.8,
                          ease: "easeInOut",
                        }}
                        className={`lg:text-6xl bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent ${hoverEffectClasses}`}
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
        <div className="bg-primary-600 rounded-tl-[10rem] rounded-br-[10rem] min-h-[400px]">
          <div className="pb-20 py-8">
            <div>
            <div className="mx-auto bg-gradient-to-l">
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
            className="mt-20 text-center text-shadow text-glow-white text-4xl font-medium tracking-tight"
          >
            Engineer&apos;s degree in Informatics from Technical University of Kosice 
          </motion.p>
        </div>
      </div>
      </Parallax>
            </div>
          </div>
        </div>
      </div>
      <ScrollToTop />
    </div>
  );
}
