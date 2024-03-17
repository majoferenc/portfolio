import React from "react";
import { ButtonBack } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

export default function ButtonBackComponent() {
  return (
    <ButtonBack
      role="button"
      aria-label="slide backward"
      className="w-12 h-12 md:w-14 md:h-14 rounded-full flex justify-center items-center bg-white border border-gray-300 hover:bg-gray-400 absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
      id="prev"
    >
      <svg
        width={8}
        height={14}
        viewBox="0 0 8 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 1L1 7L7 13"
          stroke="black"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </ButtonBack>
  );
}
