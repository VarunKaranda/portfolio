import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Varun Karanda — Frontend Engineer",
  description:
    "Senior Frontend Engineer with 5 years of experience building scalable, production-grade web applications. Core contributor to the Government of Kerala's K-SMART platform serving 35M+ Users.",
  keywords: [
    "Frontend Engineer",
    "React Developer",
    "Software Engineer",
    "Kerala",
    "K-SMART",
    "Next.js",
    "TypeScript",
  ],
  authors: [{ name: "Varun Karanda" }],
  openGraph: {
    title: "Varun Karanda — Frontend Engineer",
    description:
      "5 years building production-grade web apps. Core contributor to K-SMART — Kerala's flagship platform for 35M citizens.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[#020617] text-slate-200 antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
