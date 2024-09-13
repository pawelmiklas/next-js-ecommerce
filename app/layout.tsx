import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
import {
  ShoppingBagIcon,
  Square3Stack3DIcon,
} from "@heroicons/react/24/outline";
import { SWRGlobalConfig } from "@/lib/swrConfig";

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
        <header className="sticky top-0 z-50 bg-white shadow-md">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <Link href="/" className="text-gray-800 flex items-center">
                <Square3Stack3DIcon className="h-8 w-8" aria-hidden="true" />
                <span className="sr-only">StyleHub</span>
              </Link>
              <Link href="/cart" className="text-gray-800">
                <ShoppingBagIcon className="h-6 w-6" aria-hidden="true" />
                <span className="sr-only">Cart</span>
              </Link>
            </div>
          </nav>
        </header>
        <main>{children}</main>
      </SWRGlobalConfig>
    </body>
  </html>
);

export default RootLayout;
