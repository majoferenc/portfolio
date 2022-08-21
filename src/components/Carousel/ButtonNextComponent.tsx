import React from 'react'
import { ButtonNext } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'

export default function ButtonNextComponent() {
	return (
		<ButtonNext
			role='button'
			aria-label='slide forward'
			className='mr-8 w-12 h-12 md:w-14 md:h-14 rounded-full flex justify-center items-center bg-white border border-gray-300 hover:bg-gray-400 absolute z-30 right-0 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800'
			id='next'
		>
			<svg
				width={8}
				height={14}
				viewBox='0 0 8 14'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M1 1L7 7L1 13'
					stroke='black'
					strokeWidth={2}
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</svg>
		</ButtonNext>
	)
}
