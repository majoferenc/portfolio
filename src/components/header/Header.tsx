"use client";

import React from "react";
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { useAppDispatch } from "../../app/hooks";
import { setSidebarOpenedValue } from "../Sidebar/SidebarSlice";
import { ThemeToggle } from "@/components/theme-toggle";

export const navigation = [
  {
    id: "0",
    title: "By the numbers",
    url: "#by-the-numbers",
  },
  {
    id: "1",
    title: "Education",
    url: "#education",
  },
  {
    id: "2",
    title: "Experience",
    url: "#experience",
  },
  {
    id: "3",
    title: "Certifications",
    url: "#certifications",
    onlyMobile: false,
  },
  {
    id: "4",
    title: "Blog",
    url: "/blog",
    onlyMobile: true,
  },
];

export function Header() {
  const dispatch = useAppDispatch();
  const location = usePathname(); 

  const openSidebar = () => {
    dispatch(setSidebarOpenedValue(true));
  };

  return (
    <div>
      <header className="flex w-auto fixed bg-stone-700/40 inset-x-0 z-30 shadow-lg">
        <div className="flex">
          <button
            type="submit"
            className="mobile-menu-button p-4 focus:outline-none focus:bg-blue-800"
            onClick={() => openSidebar()}
          >
            <svg
              className="h-5 w-5 z-30 bg-stone"
              xmlns="http://www.w3.org/2000/svg"
              fill="black"
              viewBox="0 0 24 24"
              stroke="white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <div className="flex flex-wrap place-content-center h-16">
            <Link href="/">
              <div className="text-shadow text-glow-white font-medium text-lg">
                Ing. Marian Ferenc
              </div>
            </Link>
          </div>
        </div>
        <div className="flex-auto place-content-center items-center text-center h-16 hidden md:block pr-40">
            {location === '/' && (
              <div>              
                  {navigation.map((item) => (
                  <a
                    key={item.id}
                    href={item.url}
                    className={`relative font-code text-xs uppercase text-n-1 transition-colors hover:text-color-1 items-center text-center ${
                      item.onlyMobile ? "lg:hidden" : ""
                    } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                      item.url === location
                        ? "z-2 lg:text-n-1"
                        : "lg:text-n-1/50"
                    } lg:leading-5 text-shadow text-glow-white font-bold lg:hover:text-n-2 xl:px-12`}
                  >
                    {item.title}
                  </a>
                ))}
              </div>
            )}
            <ThemeToggle />
         </div>
      </header>
    </div>
  );
}

export default Header;
