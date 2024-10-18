"use client";

import { useEffect, useState } from 'react';
import Image from "next/image";

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);


  return (
    <div className="fixed bottom-2 right-2 z-40">
      <button
        type="button"
        onClick={scrollToTop}
        className={`${
          isVisible ? 'opacity-100' : 'opacity-0'
        } bg-yellow-600 hover:bg-yellow-700 focus:ring-yellow-500 inline-flex items-center rounded-full p-3 text-white shadow-sm transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2`}
        style={{ display: isVisible ? 'flex' : 'none' }} // Optional: Hide button when not visible
      >
        <Image
            src="/arrowup.png"
            alt="arrow-up"
            width={100}
            height={100} 
            className="h-6 w-6" aria-hidden="true" 
        />
      </button>
    </div>
  );
};

export default ScrollToTop;