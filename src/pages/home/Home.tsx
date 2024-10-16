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
                  className={`h-[4rem] m-0 ${hoverEffectClasses}`}
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
              <div className="mx-auto container md:-mt-28 -mt-20 flex justify-center items-center">
                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 gap-x-2 gap-y-2 lg:gap-x-6 md:gap-x-6 md:gap-y-6">
                  <div className="flex justify-center flex-col items-center w-36 h-36 md:w-44 md:h-48 lg:w-56 lg:h-56 bg-white shadow rounded-2xl">
                    <h2 className="lg:text-5xl md:text-4xl text-2xl font-extrabold leading-10 text-center text-gray-800">
                      4
                    </h2>
                    <p className="mt-4 text-sm md:text-base lg:text-lg leading-none text-center text-gray-600">
                      Spoken Languages
                    </p>
                  </div>
                  <div className="flex justify-center flex-col items-center w-36 h-36 md:w-44 md:h-48 lg:w-56 lg:h-56 bg-white shadow rounded-2xl">
                    <h2 className="lg:text-5xl md:text-4xl text-2xl font-extrabold leading-10 text-center text-gray-800">
                      6
                    </h2>
                    <p className="mt-4 text-sm md:text-base lg:text-lg leading-none text-center text-gray-600">
                      Customer facing Projects
                    </p>
                  </div>
                  <div className="flex justify-center flex-col items-center w-36 h-36 md:w-44 md:h-48 lg:w-56 lg:h-56 bg-white shadow rounded-2xl">
                    <h2 className="lg:text-5xl md:text-4xl text-2xl font-extrabold leading-10 text-center text-gray-800">
                      7+
                    </h2>
                    <p className="mt-4 text-sm md:text-base lg:text-lg leading-none text-center text-gray-600">
                      Years of Experience
                    </p>
                  </div>
                  <div className="flex justify-center flex-col items-center w-36 h-36 md:w-44 md:h-48 lg:w-56 lg:h-56 bg-white shadow rounded-2xl">
                    <h2 className="lg:text-5xl md:text-4xl text-2xl font-extrabold leading-10 text-center text-gray-800">
                      35
                    </h2>
                    <p className="mt-4 text-sm md:text-base lg:text-lg leading-none text-center text-gray-600">
                      Certifications/Badges
                    </p>
                  </div>
                </div>
              </div>
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
              <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:px-20 px-10 py-20 gap-6">
                <div>
                  <div className="group w-full bg-white relative flex flex-col items-center hover:bg-yellow-400 cursor-pointer shadow-md md:p-12 p-4">
                    <div className="text-gray-600 group-hover:text-white flex flex-col items-center">
                      <svg
                        width={26}
                        height={27}
                        viewBox="0 0 26 27"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0)">
                          <path
                            d="M25.2578 14.3309H19.2969C19.3988 9.55819 20.6309 9.01642 22.1785 8.86178L22.7753 8.78051V3.53242L22.0874 3.57292C20.0666 3.69783 17.8323 4.09805 16.3417 6.11965C15.035 7.89183 14.459 10.7871 14.459 15.2316V23.4673H25.2578V14.3309Z"
                            fill="currentColor"
                          />
                          <path
                            d="M11.48 23.4673V14.3309H5.59859C5.70049 9.55819 6.89283 9.01642 8.44042 8.86178L8.99749 8.78051V3.53242L8.34931 3.57292C6.32844 3.69783 4.07421 4.09805 2.5836 6.11965C1.27707 7.89183 0.681147 10.7871 0.681147 15.2316V23.4673H11.48Z"
                            fill="currentColor"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0">
                            <rect
                              width="24.5767"
                              height={27}
                              fill="white"
                              transform="translate(25.2578 27) rotate(-180)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                      <p className="xl:w-80 text-base leading-normal text-center mt-4">
                        Vue.js / React.js / Angular
                      </p>
                    </div>
                    <div className="text-white group-hover:text-indigo-700 absolute bottom-0 -mb-6">
                      <svg
                        width={34}
                        height={28}
                        viewBox="0 0 34 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g filter="url(#filter0_dd)">
                          <path
                            d="M17 19L28.2583 3.25H5.74167L17 19Z"
                            fill="currentColor"
                          />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center mt-10">
                    <p className="text-base font-semibold leading-4 my-2 text-gray-800">
                      Frontend Development
                    </p>
                    <p className="text-base leading-4 text-center text-gray-600">
                      3 years of experience
                    </p>
                  </div>
                </div>
                <div>
                  <div className="group w-full bg-white relative flex flex-col items-center hover:bg-yellow-400 cursor-pointer shadow-md md:p-12 p-4">
                    <div className="text-gray-600 group-hover:text-white flex flex-col items-center">
                      <svg
                        width={26}
                        height={27}
                        viewBox="0 0 26 27"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0)">
                          <path
                            d="M25.2578 14.3309H19.2969C19.3988 9.55819 20.6309 9.01642 22.1785 8.86178L22.7753 8.78051V3.53242L22.0874 3.57292C20.0666 3.69783 17.8323 4.09805 16.3417 6.11965C15.035 7.89183 14.459 10.7871 14.459 15.2316V23.4673H25.2578V14.3309Z"
                            fill="currentColor"
                          />
                          <path
                            d="M11.48 23.4673V14.3309H5.59859C5.70049 9.55819 6.89283 9.01642 8.44042 8.86178L8.99749 8.78051V3.53242L8.34931 3.57292C6.32844 3.69783 4.07421 4.09805 2.5836 6.11965C1.27707 7.89183 0.681147 10.7871 0.681147 15.2316V23.4673H11.48Z"
                            fill="currentColor"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0">
                            <rect
                              width="24.5767"
                              height={27}
                              fill="white"
                              transform="translate(25.2578 27) rotate(-180)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                      <p className="xl:w-80 text-base leading-normal text-center mt-4">
                        Spring Boot / Java EE / Node.js
                      </p>
                    </div>
                    <div className="text-white group-hover:text-indigo-700 absolute bottom-0 -mb-6">
                      <svg
                        width={34}
                        height={28}
                        viewBox="0 0 34 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g filter="url(#filter0_dd)">
                          <path
                            d="M17 19L28.2583 3.25H5.74167L17 19Z"
                            fill="currentColor"
                          />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center mt-10">
                    <p className="text-base font-semibold leading-4 my-2 text-gray-800">
                      Backend development
                    </p>
                    <p className="text-base leading-4 text-center text-gray-600">
                      7 years of experience
                    </p>
                  </div>
                </div>
                <div>
                  <div className="group w-full bg-white relative flex flex-col items-center hover:bg-yellow-400 cursor-pointer shadow-md md:p-12 p-4">
                    <div className="text-gray-600 group-hover:text-white flex flex-col items-center">
                      <svg
                        width={26}
                        height={27}
                        viewBox="0 0 26 27"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0)">
                          <path
                            d="M25.2578 14.3309H19.2969C19.3988 9.55819 20.6309 9.01642 22.1785 8.86178L22.7753 8.78051V3.53242L22.0874 3.57292C20.0666 3.69783 17.8323 4.09805 16.3417 6.11965C15.035 7.89183 14.459 10.7871 14.459 15.2316V23.4673H25.2578V14.3309Z"
                            fill="currentColor"
                          />
                          <path
                            d="M11.48 23.4673V14.3309H5.59859C5.70049 9.55819 6.89283 9.01642 8.44042 8.86178L8.99749 8.78051V3.53242L8.34931 3.57292C6.32844 3.69783 4.07421 4.09805 2.5836 6.11965C1.27707 7.89183 0.681147 10.7871 0.681147 15.2316V23.4673H11.48Z"
                            fill="currentColor"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0">
                            <rect
                              width="24.5767"
                              height={27}
                              fill="white"
                              transform="translate(25.2578 27) rotate(-180)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                      <p className="xl:w-80 text-base leading-normal text-center mt-4">
                        Kubernetes / Cloudification / Pipelining
                      </p>
                    </div>
                    <div className="text-white group-hover:text-indigo-700 absolute bottom-0 -mb-6">
                      <svg
                        width={34}
                        height={28}
                        viewBox="0 0 34 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g filter="url(#filter0_dd)">
                          <path
                            d="M17 19L28.2583 3.25H5.74167L17 19Z"
                            fill="currentColor"
                          />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center mt-10">
                    <p className="text-base font-semibold leading-4 my-2 text-gray-800">
                      DevOps Enginner
                    </p>
                    <p className="text-base leading-4 text-center text-gray-600">
                      5 years of experience
                    </p>
                  </div>
                </div>
                <div>
                  <div className="group w-full bg-white relative flex flex-col items-center hover:bg-yellow-400 cursor-pointer shadow-md md:p-12 p-4">
                    <div className="text-gray-600 group-hover:text-white flex flex-col items-center">
                      <svg
                        width={26}
                        height={27}
                        viewBox="0 0 26 27"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0)">
                          <path
                            d="M25.2578 14.3309H19.2969C19.3988 9.55819 20.6309 9.01642 22.1785 8.86178L22.7753 8.78051V3.53242L22.0874 3.57292C20.0666 3.69783 17.8323 4.09805 16.3417 6.11965C15.035 7.89183 14.459 10.7871 14.459 15.2316V23.4673H25.2578V14.3309Z"
                            fill="currentColor"
                          />
                          <path
                            d="M11.48 23.4673V14.3309H5.59859C5.70049 9.55819 6.89283 9.01642 8.44042 8.86178L8.99749 8.78051V3.53242L8.34931 3.57292C6.32844 3.69783 4.07421 4.09805 2.5836 6.11965C1.27707 7.89183 0.681147 10.7871 0.681147 15.2316V23.4673H11.48Z"
                            fill="currentColor"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0">
                            <rect
                              width="24.5767"
                              height={27}
                              fill="white"
                              transform="translate(25.2578 27) rotate(-180)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                      <p className="xl:w-80 text-base leading-normal text-center mt-4">
                        Cloud Architecture
                      </p>
                    </div>
                    <div className="text-white group-hover:text-indigo-700 absolute bottom-0 -mb-6">
                      <svg
                        width={34}
                        height={28}
                        viewBox="0 0 34 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g filter="url(#filter0_dd)">
                          <path
                            d="M17 19L28.2583 3.25H5.74167L17 19Z"
                            fill="currentColor"
                          />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center mt-10">
                    <p className="text-base font-semibold leading-4 my-2 text-gray-800">
                      Application Architect
                    </p>
                    <p className="text-base leading-4 text-center text-gray-600">
                      2 years of experience
                    </p>
                  </div>
                </div>
              </div>
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
