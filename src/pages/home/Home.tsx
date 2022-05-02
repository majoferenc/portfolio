import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

import { useAppSelector } from '../../app/hooks';
import { selecSidebarOpened } from '../../components/Sidebar/SidebarSlice';
import MyPicture from '../../images/IMG_2255.png';

export function Home() {
	const bodyRef = useRef<HTMLDivElement | null>(null);
	const sidebarOpened = useAppSelector(selecSidebarOpened)
	useEffect(() => {
		if (sidebarOpened === true) {
			addBlur()
		} else {
			removeBlur()
		}
  }, [sidebarOpened])

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
						<h1 className="drop-shadow-2xl md:text-2xl text-xl font-mono my-4 text-yellow-500">My name is Ing. Marián Ferenc</h1>
						<h2 className="drop-shadow-2xl md:text-4xl text-xl font-mono my-4 text-white">Full Stack Developer With DevOps Skills from Košice, Slovakia.</h2>
					</div>
					<div className="mx-8">
						<img src={MyPicture} className="md:h-[50rem] rounded-tr-lg" alt="Me" />
					</div>
				</div>
				<div className="grid md:grid-cols-3 gap-4 grid-cols-">
					<div className="mx-8">
						<p>Frontend</p>
					</div>
					<div className="mx-8">
						<p>Backend</p>
					</div>
					<div className="mx-8">
						<p>DevOps</p>
					</div>
				</div>
				<div>
					<Link to='/about'>
					<button type="submit" className="text-white rounded font-bold motion-safe:hover:scale-110 py-2 px-4 m-4 bg-gray-900 duration-300 rounded">About me</button>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Home
