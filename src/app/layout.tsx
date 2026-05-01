import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import GoogleAnalytics from "@/components/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Election Process Education Assistant",
  description: "Learn about the election process, voting timelines, and civic duties in an interactive way.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-slate-100 overflow-x-hidden antialiased selection:bg-blue-500/30`}>
        {/* Google Analytics Integration */}
        <GoogleAnalytics ga_id="G-ELECTION2026" />
        
        {/* Decorative background elements */}
        <div className="fixed inset-0 z-[-1] pointer-events-none">
          <div className="absolute top-[20%] left-[10%] w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob"></div>
          <div className="absolute top-[40%] right-[10%] w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-[10%] left-[40%] w-72 h-72 bg-emerald-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob animation-delay-4000"></div>
        </div>
        {children}
      </body>
    </html>
  );
}
