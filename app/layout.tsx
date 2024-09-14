import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SWRGlobalConfig } from "@/lib/swrConfig";
import { Footer } from "@/components/shared/Footer";
import { Navigation } from "@/components/shared/Navigation";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "StyleHub",
  description: "Elevate your style with our curated fashion collection",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <html lang="en">
    <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <SWRGlobalConfig>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </SWRGlobalConfig>
    </body>
  </html>
);

export default RootLayout;
