/* eslint-disable react/jsx-no-target-blank */
import React, { RefObject, useEffect, useRef } from "react";
import { motion } from "framer-motion";

import { useAppSelector } from "../../app/hooks";
import { selecSidebarOpened } from "../../components/Sidebar/SidebarSlice";
import MyPicture from "../../images/IMG_2255.png";
import LinkedIn from "../../images/linkedin-icon.png";
import GitHub from "../../images/github-icon.png";
import AWSCert from "../../images/aws_certified_cloud_practicioner.png";
import TerraformCert from "../../images/terraform_cert.png";
import RHOpenShiftAdminCert from "../../images/redhat_openshift_administration.png";
import CKADCert from "../../images/ckad_cert.png";
import OracleProfessionalCert from "../../images/oracle_java_8_prof_cert.png";
import { WavyBackground } from "../../components/WavyBackground/WavyBackground";
import { Scroll } from "../../components/Scroll/Scroll";
import { ExpertiseCard } from "../../components/ExpertiseCard/ExpertiseCard";
import { ByTheNumbersCard } from "../../components/ByTheNumbersCard/ByTheNumbersCard";

const opacitySetter = (
  componentRef: RefObject<HTMLDivElement>,
  duration: number
) => {
  setTimeout(() => {
    componentRef.current?.classList.remove("opacity-0");
    componentRef.current?.classList.add("opacity-100");
  }, duration);
};

export function Home() {
  const durationClass = "duration-300";
  const animationClasses = `transform transition-all opacity-0 ${durationClass}`;
  const hoverEffectClasses = `hover:-translate-y-1  motion-safe:hover:scale-110 ${durationClass}`;
  const fullNammeText = "Ing. Marián Ferenc"
  const descriptionText =
    "Full Stack Developer With DevOps Skills from Košice, Slovakia.";
  const byTheNumbersCard = [
    {
      number: 4,
      text: "Spoken Languages"
    },
    {
      number: 6,
      text: "Customer facing Projects"
    },
    {
      number: 7,
      text: "Years of Experience"
    },
    {
      number: 35,
      text: "Certifications/Badges"
    }
  ];
  const expertiseCards = [
    {
      description: 'Vue.js / React.js / Angular',
      title: 'Frontend Development',
      experience: '3 years of experience',
    },
    {
      description: 'Spring Boot / Java EE / Node.js',
      title: 'Backend development',
      experience: '7 years of experience',
    },
    {
      description: 'Kubernetes / Cloudification / Pipelining',
      title: 'DevOps Engineer',
      experience: '5 years of experience',
    },
    {
      description: 'Cloud Architecture',
      title: 'Application Architect',
      experience: '2 years of experience',
    },
  ];
  const bodyRef = useRef<HTMLDivElement | null>(null);
  const nameRef = useRef<HTMLDivElement | null>(null);
  const descriptionRef = useRef<HTMLDivElement | null>(null);
  const iconsRef = useRef<HTMLDivElement | null>(null);
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
    <div className="md:my-0 md:pt-20">
      <WavyBackground className="max-w-4xl mx-auto pb-40 overflow-hidden">
        <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8, ease: "easeInOut" }}
      >
        <span className="text-center">
          <p className="absolute left-0 right-0 m-auto mx-auto flex border w-fit bg-gradient-to-r blur-xl brightness-150 from-orange-600 via-orange-600 to-orange-600 bg-clip-text text-6xl box-content font-extrabold text-transparent text-center select-none">
            {fullNammeText}
          </p>
          <p className="relative w-fit p-2 mx-auto justify-center flex h-fit bg-gradient-to-r items-center from-gray-200 via-gray-200 to-gray-200 bg-clip-text text-6xl font-extrabold text-transparent text-center select-auto">
            {fullNammeText}
          </p>
        </span>
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
              className={`grid grid-cols-2 grid-cols- px-16 ${animationClasses}`}
            >
              <a
                href="https://www.linkedin.com/in/ing-marian-ferenc-slovakia/"
                target="_blank"
                className="h-[4rem] w-[4rem]"
              >
                <img
                  src={LinkedIn}
                  className={`h-[4rem] m-0 ${hoverEffectClasses} bg-white-700`}
                  alt="LinkedIn link"
                />
              </a>
              <a
                href="https://github.com/majoferenc"
                target="_blank"
                className="h-[4rem] w-[4rem]"
              >
                <img
                  src={GitHub}
                  className={`h-[4rem] m-0 ${hoverEffectClasses}`}
                  alt="GitHub link"
                />
              </a>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <img
              src={MyPicture}
              className="w-40 md:ml-0 md:min-w-[20rem] md:min-w-[20rem] rounded-tr-lg"
              alt="Me"
            />
          </div>
          <div />
        </div>
        </motion.div>
        <div className="text-center">
          <Scroll />
        </div>
      </WavyBackground>
      <div ref={bodyRef} className=" h-1/4 overflow-visible">
        <div>
          <div>
            <div className="pb-20">
              <div className="mx-auto bg-gradient-to-l from-white to-white h-60">
                <div className="mx-auto container w-full flex flex-col justify-center items-center">
                  <div className="flex justify-center items-center flex-col">
                    <div className="mt-10">
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
        <div className="mb-48">
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
            className="bg-white from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent"
          >
            Engineer&apos;s degree in Informatics from Technical University of
            Kosice
          </motion.p>
        </div>

        <div>
          <div className="bg-white pb-20 py-8">
            <div>
            <div className="mx-auto bg-gradient-to-l from-white to-white">
                <div className="mx-auto container w-full flex flex-col justify-center items-center">
                  <div className="flex justify-center items-center flex-col">
                    <div className="mt-10">
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
            <div className="mx-auto bg-gradient-to-l from-black to-black">
                <div className="mx-auto container w-full flex flex-col justify-center items-center">
                  <div className="flex justify-center items-center flex-col">
                    <div className="mt-10">
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
                <div className="w-6/12 xl:w-[10rem] lg:w-1/4 md:w-1/4 flex justify-center xl:pb-10 pb-16 items-center">
                  <img src={AWSCert} alt="" />
                </div>
                <div className="w-6/12 xl:w-[10rem] lg:w-1/4 md:w-1/4 flex justify-center xl:pb-10 pb-16 items-center">
                  <img src={TerraformCert} alt="" />
                </div>
                <div className="w-6/12 xl:w-[10rem] lg:w-1/4 md:w-1/4 flex justify-center xl:pb-10 pb-16 items-center">
                  <img src={RHOpenShiftAdminCert} alt="" />
                </div>
                <div className="w-6/12 xl:w-[10rem] lg:w-1/4 md:w-1/4 flex justify-center xl:pb-10 pb-16 items-center">
                  <img src={CKADCert} alt="" />
                </div>
                <div className="w-6/12 xl:w-[10rem] lg:w-1/4 md:w-1/4 flex justify-center xl:pb-10 pb-16 items-center">
                  <img src={OracleProfessionalCert} alt="" />
                </div>
              </div>
              <a
                href="https://www.credly.com/users/marian-ferenc/badges"
                target="_blank"
                type="submit"
                className={`text-white rounded font-bold py-2 px-4 m-4 text-sm bg-gray-900 ${hoverEffectClasses}`}
              >
                Credly
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
