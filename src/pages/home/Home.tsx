/* eslint-disable react/jsx-no-target-blank */
import React, { RefObject, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

import { useAppSelector } from '../../app/hooks';
import { selecSidebarOpened } from '../../components/Sidebar/SidebarSlice';
import MyPicture from '../../images/IMG_2255.png';
import LinkedIn from '../../images/linkedin-icon.png';
import GitHub from '../../images/github-icon.png';

const opacitySetter = (componentRef: RefObject<HTMLDivElement>, duration: number) => {
	setTimeout(() => {
		componentRef.current?.classList.remove("opacity-0");
		componentRef.current?.classList.add("opacity-100");
	}, duration);
}

export function Home() {
	const durationClass = "duration-300";
	const animationClasses = `transform transition-all opacity-0 ${durationClass}`;
	const hoverEffectClasses = `hover:-translate-y-1  motion-safe:hover:scale-110 ${durationClass}`;
	const nameText = "My name is Ing. Marián Ferenc";
	const descriptionText = "Full Stack Developer With DevOps Skills from Košice, Slovakia.";
	const bodyRef = useRef<HTMLDivElement | null>(null);
	const nameRef = useRef<HTMLDivElement | null>(null);
	const descriptionRef = useRef<HTMLDivElement | null>(null);
	const iconsRef = useRef<HTMLDivElement | null>(null);
	const sidebarOpened = useAppSelector(selecSidebarOpened)

	useEffect(() => {
		if (sidebarOpened === true) {
			addBlur()
		} else {
			removeBlur()
		}
  }, [sidebarOpened])

	opacitySetter(nameRef, 500);
	opacitySetter(descriptionRef, 1000);
	opacitySetter(iconsRef, 1500);

	const addBlur = () => {
    bodyRef.current?.classList.add("filter", "blur-sm");
  }

	const removeBlur = () => {
   bodyRef.current?.classList.remove("filter", "blur-sm");
  }

	return (
		<div className="md:my-0 md:pt-40">
			<div ref={bodyRef} className=" h-1/4 overflow-visible">
				<div className="grid md:grid-cols-4 grid-cols-">
					<div />
					<div className="text-right mx-12 md:mx-96 md:w-96 md:my-80 md:mb-0 md:ml-40">
						<h1 ref={nameRef} className={`drop-shadow-2xl md:text-2xl text-xl font-mono my-4 text-yellow-500 ease-in-out delay-15 ${hoverEffectClasses} ${animationClasses}`}>{ nameText }</h1>
						<h2 ref={descriptionRef} className={`drop-shadow-2xl md:text-4xl text-xl font-mono my-4 text-white ${animationClasses}`}>{ descriptionText }</h2>
						<div ref={iconsRef} className={`grid grid-cols-2 grid-cols- px-16 ${animationClasses}`}>
							<a href='https://www.linkedin.com/in/ing-marian-ferenc-slovakia/' target="_blank" className="h-[4rem] w-[4rem]">
								<img src={LinkedIn} className={`h-[4rem] m-0 ${hoverEffectClasses}`} alt="LinkedIn link" />
							</a>
							<a href='https://github.com/majoferenc' target="_blank" className="h-[4rem] w-[4rem]">
								<img src={GitHub} className={`h-[4rem] m-0 ${hoverEffectClasses}`} alt="GitHub link" />
							</a>
						</div>
					</div>
					<div className="flex justify-center items-center">
						<img src={MyPicture} className="md:ml-0 w-20 min-w-[15rem] md:min-w-[24rem] md:h-[50rem] rounded-tr-lg" alt="Me" />
					</div>
					<div />
				</div>
				<div>
					<div className="bg-white pb-64 py-8">
						<p>Hard Skills</p>
					</div>
				</div>
				<div>
					<div className="bg-white pb-64 py-8">
						<p>Soft Skills</p>
					</div>
				</div>
				<div>
					<div className="bg-white pb-64 py-8">
						<p>Certifications</p>
					</div>
				</div>
				<div>
					<Link to='/about'>
						<button type="submit" className={`text-white rounded font-bold py-2 px-4 m-4 text-sm bg-gray-900 ${hoverEffectClasses}`}>About me</button>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Home
