import localFont from "next/font/local";
import "./globals.css";
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

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <html lang="en">
    <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </body>
  </html>
);

export default RootLayout;
