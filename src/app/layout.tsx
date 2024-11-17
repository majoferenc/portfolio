"use client";

//import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.scss";
import { Provider } from "react-redux";
import { store } from "./store";
import { Footer } from "../components/footer/Footer";
import { Header } from "../components/header/Header";
import { Sidebar } from "../components/Sidebar/Sidebar";
//import MouseTracer  from "../components/MouseTracer/MouseTracer";

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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Provider store={store}>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <span>
            <Sidebar />
            <Header />
          </span>
          {children}
          <Footer />
        </body>
      </Provider>
    </html>
  );
}
