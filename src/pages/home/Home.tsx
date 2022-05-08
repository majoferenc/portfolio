import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

import { useAppSelector } from '../../app/hooks';
import { selecSidebarOpened } from '../../components/Sidebar/SidebarSlice';
import MyPicture from '../../images/IMG_2255.png';

export function Home() {
	const bodyRef = useRef<HTMLDivElement | null>(null);
	const nameRef = useRef<HTMLDivElement | null>(null);
	const descriptionRef = useRef<HTMLDivElement | null>(null);
	const sidebarOpened = useAppSelector(selecSidebarOpened)
	useEffect(() => {
		if (sidebarOpened === true) {
			addBlur()
		} else {
			removeBlur()
		}
  }, [sidebarOpened])

	setTimeout(() => {
		nameRef.current?.classList.remove("opacity-0");
		nameRef.current?.classList.add("opacity-100");
	}, 500);

	setTimeout(() => {
		descriptionRef.current?.classList.remove("opacity-0");
		descriptionRef.current?.classList.add("opacity-100");
	}, 1000);

	const addBlur = () => {
    bodyRef.current?.classList.add("filter", "blur-sm");
  }

	const removeBlur = () => {
   bodyRef.current?.classList.remove("filter", "blur-sm");
  }

	return (
		<div className="m-auto md:pt-40">
			<div ref={bodyRef} className=" h-1/4 overflow-visible">
				<div className="grid md:grid-cols-2 gap-4 grid-cols-">
					<div className="text-right mx-12 md:mx-96 md:w-96 md:py-80">
						<h1 ref={nameRef} className="drop-shadow-2xl md:text-2xl text-xl font-mono my-4 text-yellow-500 transform transition-all opacity-0 ease-in-out delay-15 hover:-translate-y-1  motion-safe:hover:scale-110 duration-300">My name is Ing. Marián Ferenc</h1>
						<h2 ref={descriptionRef} className="drop-shadow-2xl md:text-4xl text-xl font-mono my-4 text-white transform transition-all opacity-0 duration-300">Full Stack Developer With DevOps Skills from Košice, Slovakia.</h2>
					</div>
					<div className="mx-8">
						<img src={MyPicture} className="md:h-[50rem] rounded-tr-lg" alt="Me" />
					</div>
				</div>
				<div className="grid md:grid-cols-3 grid-cols-">
					<div className="bg-white pb-64 py-8">
						<p>Frontend</p>
					</div>
					<div className="bg-white pb-64 py-8">
						<p>Backend</p>
					</div>
					<div className="bg-white pb-64 py-8">
						<p>DevOps</p>
					</div>
				</div>
				<div>
					<Link to='/about'>
					<button type="submit" className="text-white rounded font-bold motion-safe:hover:scale-110 py-2 px-4 m-4 bg-gray-900 duration-300">About me</button>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Home
