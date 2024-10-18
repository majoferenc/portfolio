"use client";

import React from "react";
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { useAppDispatch } from "../../app/hooks";
import { setSidebarOpenedValue } from "../Sidebar/SidebarSlice";

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
  }
];

export function Header() {
  const dispatch = useAppDispatch();
  const location = usePathname(); 

  const openSidebar = () => {
    dispatch(setSidebarOpenedValue(true));
  };

  return (
    <div>
      <header className="flex w-auto bg-black bg-opacity-50 fixed inset-x-0 z-30 shadow">
        <div className="flex">
          <button
            type="submit"
            className="mobile-menu-button p-4 focus:outline-none focus:bg-blue-800"
            onClick={() => openSidebar()}
          >
            <svg
              className="h-5 w-5 z-30"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
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
              <div className="shadow text-white font-medium text-lg">
                Ing. Marian Ferenc
              </div>
            </Link>
          </div>
        </div>
        {location === '/' && (
          <div className="flex-auto text-gray-200 place-content-center items-center text-center h-16 hidden md:block pr-40">
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
                } lg:leading-5 lg:hover:text-n-2 xl:px-12`}
              >
                {item.title}
              </a>
            ))}
          </div>
        )}
      </header>
    </div>
  );
}

export default Header;
