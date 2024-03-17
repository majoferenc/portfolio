import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Footer } from '../../components/footer/Footer'
import { Header } from '../../components/header/Header'
import { About } from '../about/About'
import { Home } from '../home/Home'
import './App.scss'

import Sidebar from '../../components/Sidebar/Sidebar'

export function App() {
	return (
		<div className=' App flex flex-col h-screen justify-between'>
			<Router basename={window.location.pathname || ''}>
				<span>
					<Sidebar />
					<Header />
				</span>
				<div className='flex-1 text-2xl font-bold z-index-0 bg-black pt-16'>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/about' element={<About />} />
					</Routes>
				</div>
			</Router>
			<Footer />
		</div>
	)
}

export default App
