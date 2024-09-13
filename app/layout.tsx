import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
import {
  ShoppingBagIcon,
  Square3Stack3DIcon,
} from "@heroicons/react/24/outline";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="bg-gray-800 p-4">
          <nav className="flex justify-between items-center">
            <Link href="/" className="text-white">
              <Square3Stack3DIcon className="h-8 w-8" aria-hidden="true" />
              <span className="sr-only">StyleHub</span>
            </Link>
            <Link href="/cart" className="text-white">
              <ShoppingBagIcon className="h-6 w-6" aria-hidden="true" />
              <span className="sr-only">Cart</span>
            </Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
