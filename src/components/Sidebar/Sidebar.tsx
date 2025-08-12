"use client";
import { usePathname } from "next/navigation";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setSidebarOpenedValue } from "./SidebarSlice";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

const sectionLinks = [
  { id: "0", title: "By the numbers", url: "#by-the-numbers" },
  { id: "1", title: "Education", url: "#education" },
  { id: "2", title: "Experience", url: "#experience" },
  { id: "3", title: "Certifications", url: "#certifications" },
];

const pageLinks = [
  { id: "4", title: "Home", url: "/" },
  { id: "5", title: "Blog", url: "/blog" },
  { id: "6", title: "Contact", url: "/contact" },
];

export function Sidebar() {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.sidebar.sidebarOpened);
  const location = usePathname();
  const closeSidebar = () => {
    dispatch(setSidebarOpenedValue(false));
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
    closeSidebar();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black/50 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeSidebar}
          />

          {/* Sidebar */}
          <motion.aside
            className="fixed top-0 right-0 w-64 h-full bg-stone-900 text-white z-50 p-6 flex flex-col gap-6"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <h2 className="text-lg font-bold">Menu</h2>

        
            {/* Section Links */}
            <div className="flex flex-col gap-3">
            {location === "/" &&
              sectionLinks.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.url);
                  }}
                  className="hover:text-primary transition-colors"
                >
                  {item.title}
                </a>
              ))}
            </div>

            <hr className="border-gray-700" />

            {/* Page Links */}
            <div className="flex flex-col gap-3">
              {pageLinks.map((item) => (
                <Link
                  key={item.id}
                  href={item.url}
                  onClick={closeSidebar}
                  className="hover:text-primary transition-colors"
                >
                  {item.title}
                </Link>
              ))}
            </div>

            <div className="mt-auto">
              <ThemeToggle />
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}