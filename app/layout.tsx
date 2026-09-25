import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono, Caveat } from "next/font/google";
import { MouseEffect } from "@/components/features/MouseEffect";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-signature",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dev Portfolio — Full Stack Engineer",
  description: "Frontend Engineer transitioning to Full Stack",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} ${caveat.variable} dark h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <MouseEffect />
        {children}
      </body>
    </html>
  );
}
