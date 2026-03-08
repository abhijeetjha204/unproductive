import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Unproductive Mode | Go Touch Grass",
  description:
    "A browser extension that violently blocks you from being productive when you're supposed to be chilling.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-[#0a0a0a] text-zinc-100 min-h-[100dvh] selection:bg-orange-500/30 selection:text-orange-200`}
      >
        {children}
      </body>
    </html>
  );
}
