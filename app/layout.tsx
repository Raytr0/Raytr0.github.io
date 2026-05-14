import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Ryan Huang | Software Developer",
  description:
    "Self-driven, quick starter, passionate programmer with a curious mind who enjoys solving complex and challenging real-world problems.",
  keywords: [
    "Software Developer",
    "Software Engineer",
    "Python",
    "Java",
    "React",
    "Full Stack",
  ],
  authors: [{ name: "Ryan Huang" }],
  openGraph: {
    title: "Ryan Huang | Software Developer",
    description:
      "Self-driven, quick starter, passionate programmer with a curious mind.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0f172a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} bg-background`}
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
