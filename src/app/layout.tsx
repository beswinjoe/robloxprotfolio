import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Beswin Joe — Roblox Developer & QA Tester",
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
  authors: [{ name: "Beswin Joe", url: "https://beswinjoe.me/roblox" }],
  openGraph: {
    title: "Beswin Joe — Roblox Developer & QA Tester",
    description:
      "I script gameplay systems, test game experiences, identify bugs and help developers improve their Roblox games.",
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
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/apple-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth bg-white text-slate-900">
      <body className="min-h-screen bg-white text-slate-900 antialiased selection:bg-rose-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
