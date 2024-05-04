import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "./components/header";
import "./globals.css";
import Motion from "./components/motion";

const inter = Inter({ subsets: ["latin"] });
config.autoAddCss = false;

export const metadata: Metadata = {
  title: "Bank",
  description: "hehe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Header />
        <Motion>{children}</Motion>
      </body>
    </html>
  );
}
