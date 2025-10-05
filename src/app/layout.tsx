
import "./globals.scss";
import localFont from "next/font/local";
import { Footer } from "../components/footer/Footer";
import { WavyBackground } from "../components/WavyBackground/WavyBackground";
import { ThemeProvider } from "@/components/theme-provider";
import ClientWrapper from "./ClientWrapper";

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

export const metadata = {
  title: "Ing. Marián Ferenc - Portfolio",
  description: "Main page of Ing. Marián Ferenc portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
          <ThemeProvider defaultTheme="dark" storageKey="theme-mode">
            <WavyBackground className="absolute inset-0 w-full h-full -z-10" />
            <ClientWrapper>{children}</ClientWrapper>
            <Footer />
          </ThemeProvider>
      </body>
    </html>
  );
}
