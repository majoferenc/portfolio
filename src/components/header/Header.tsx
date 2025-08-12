"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import { useAppDispatch } from "../../app/hooks";
import { setSidebarOpenedValue } from "../Sidebar/SidebarSlice";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

const sectionLinks = [
  { id: "0", title: "By the numbers", url: "#by-the-numbers" },
  { id: "1", title: "Education", url: "#education" },
  { id: "2", title: "Experience", url: "#experience" },
  { id: "3", title: "Certifications", url: "#certifications" },
];

const pageLinks = [
  { id: "4", title: "Blog", url: "/blog" },
  { id: "5", title: "Contact", url: "/contact" },
];

export function Header() {
  const dispatch = useAppDispatch();
  const location = usePathname();

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openSidebar = () => {
    dispatch(setSidebarOpenedValue(true));
  };

  const scrollToSection = (url: string) => {
    if (url.startsWith("#")) {
      const id = url.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.location.href = url;
    }
  };

  return (
    <header
      className={`fixed top-3.5 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 rounded-full border border-white/10 backdrop-blur-xl
        ${
          isScrolled
            ? "h-14 bg-stone-800/40 scale-95 w-[90%] max-w-4xl shadow-lg"
            : "h-14 bg-stone-800 w-[95%] max-w-5xl"
        }`}
    >
      <div className="mx-auto h-full px-6">
        <nav className="flex items-center justify-between h-full">
          {/* Left Section: Logo + Sidebar Button */}
          <div className="flex items-center gap-3">
            {/* Sidebar Toggle Button (Mobile) */}
            <Button
              variant="outline"
              size="icon"
              className="glass md:hidden"
              onClick={openSidebar}
            >
              <Menu className="h-5 w-5" />
            </Button>

            {/* Logo */}
            <Link href="/" className="font-bold text-base text-white">
              Ing. Marian Ferenc
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {/* Section Links - only on home page */}
            {location === "/" &&
              sectionLinks.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.url);
                  }}
                  className={`text-sm transition-all duration-300 ${
                    item.url === location
                      ? "text-white font-semibold"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item.title}
                </a>
              ))}

            {/* Divider */}
            <span className="w-px h-5 bg-gray-500/50"></span>

            {/* Page Links */}
            {pageLinks.map((item) => (
              <Link
                key={item.id}
                href={item.url}
                className={`text-sm transition-all duration-300 ${
                  item.url === location
                    ? "text-white font-semibold"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {item.title}
              </Link>
            ))}

            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;