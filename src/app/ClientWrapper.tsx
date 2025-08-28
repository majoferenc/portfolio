'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import MouseTracer from '../components/MouseTracer/MouseTracer';
import { Suspense } from 'react';
import { Provider } from "react-redux";
import { store } from "./store";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { Header } from "../components/header/Header";

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [enableMouseTracer, setEnableMouseTracer] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const pathname = usePathname();

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
    <Provider store={store}>
      <Sidebar />
      <Header />
      {enableMouseTracer && <MouseTracer />}
      <Suspense fallback={<div>Loading...</div>}>
        <div
          className={`flex-grow relative z-10 transition-all duration-300 ${
            isTransitioning ? 'blur-md pointer-events-none' : ''
          }`}
        >
          {children}
        </div>
      </Suspense>
    </Provider>
  );
}
