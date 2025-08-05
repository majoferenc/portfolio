"use client";

import { Suspense, useEffect, useState } from "react";
import localFont from "next/font/local";
import "./globals.scss";
import { Provider } from "react-redux";
import { store } from "./store";
import { Footer } from "../components/footer/Footer";
import { Header } from "../components/header/Header";
import { Sidebar } from "../components/Sidebar/Sidebar";
import MouseTracer from "../components/MouseTracer/MouseTracer";
import { WavyBackground } from "../components/WavyBackground/WavyBackground";
import { ThemeProvider } from "@/components/theme-provider";
import { usePathname } from "next/navigation";
import FullScreenLoading from "../components/FullScreenLoading/FullScreenLoading";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [enableMouseTracer, setEnableMouseTracer] = useState(false);
  const pathname = usePathname();
  // Blur state for route transitions
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (window.innerWidth >= 640) {
      setEnableMouseTracer(true);
    }
  }, []);

  useEffect(() => {
    setIsTransitioning(true);
    const timeout = setTimeout(() => setIsTransitioning(false), 600);
    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <html lang="en">
      <Provider store={store}>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
        >
          <ThemeProvider defaultTheme="dark" storageKey="theme-mode">
            <span>
              <Sidebar />
              <Header />
              {enableMouseTracer && <MouseTracer />}
            </span>
            <div>
              <WavyBackground className="absolute inset-0 w-full h-full -z-10" />
            </div>
            <Suspense fallback={<div>Loading...</div>}>
            <div
              className={`flex-grow relative z-10 transition-all duration-300 ${
                isTransitioning ? "blur-md pointer-events-none" : ""
              }`}
            >
              {children}
            </div>
            </Suspense>
            <Footer />
          </ThemeProvider>
        </body>
      </Provider>
    </html>
  );
}