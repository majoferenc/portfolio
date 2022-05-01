import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

import { useAppSelector } from '../../app/hooks';
import { selecSidebarOpened } from '../../components/Sidebar/SidebarSlice';


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
				<h1 className="md:text-4xl text-xl font-mono my-4 text-white">Welcome to my Portfolio Page</h1>
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
