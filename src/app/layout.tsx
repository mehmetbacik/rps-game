import type { Metadata } from "next";
import { Barlow_Semi_Condensed } from "next/font/google";
import { GameProvider } from "../context/GameContext";
import "@/styles/main.scss";

const barlowSemiCondensed = Barlow_Semi_Condensed({
  variable: "--font-barlow-semi-condensed",
  subsets: ["latin"],
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  title: "Rock Paper Scissors",
  description: "A fun rock-paper-scissors game!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={barlowSemiCondensed.variable}>
      <body>
        <GameProvider>{children}</GameProvider>
      </body>
    </html>
  );
}
