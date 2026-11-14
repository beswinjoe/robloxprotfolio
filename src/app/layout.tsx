import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Beswin Joe (beswinjee) — Roblox Developer & QA Tester",
  description:
    "Portfolio of Beswin Joe (beswinjee) — Roblox Luau Scripter, Gameplay Systems Developer, and Game QA Tester.",
  keywords: [
    "Beswin Joe",
    "beswinjee",
    "Roblox Developer",
    "Roblox QA Tester",
    "Luau Scripting",
    "Roblox Studio",
    "Game Testing",
    "Bug Reporting",
  ],
  authors: [{ name: "Beswin Joe", url: "https://roblox.com" }],
  openGraph: {
    title: "Beswin Joe — Roblox Developer & QA Tester",
    description:
      "Roblox Luau Scripter, Gameplay Systems Developer, and Game QA Tester. High-fidelity gameplay systems and rigorous QA reporting.",
    type: "website",
    locale: "en_US",
    siteName: "Beswin Joe Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Beswin Joe — Roblox Developer & QA Tester",
    description:
      "Roblox Luau Scripter, Gameplay Systems Developer, and Game QA Tester.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#101010",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="min-h-screen bg-[#101010] text-[#ededed] antialiased selection:bg-[#27272a] selection:text-white">
        {children}
      </body>
    </html>
  );
}
