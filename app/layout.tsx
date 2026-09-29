import type { Metadata } from "next";
import { Inter, Press_Start_2P } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const pressStart = Press_Start_2P({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: "Game Kitchen",
  description: "Receitas de fã inspiradas em comidas de videogames.",
  openGraph: {
    title: "Game Kitchen",
    description: "Receitas de fã inspiradas em comidas de videogames.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Game Kitchen",
    description: "Receitas de fã inspiradas em comidas de videogames.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={cn(inter.variable, pressStart.variable, "bg-bg text-ink antialiased")}>
        {children}
      </body>
    </html>
  );
}
