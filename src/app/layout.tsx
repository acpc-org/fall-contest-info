import type { Metadata } from "next";
import "./globals.css";
import { patrick } from "./fonts";

import { Providers } from './providers';
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "ACPC Fall Contest",
  description: "Information on contest logistics, judging and so on!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="text-lg ">
      <body className="bg-[#132b2e] text-white" style={patrick.style}>
        <Providers>
          {children}
          <Footer/>
        </Providers>
      </body>
    </html>
  );
}
