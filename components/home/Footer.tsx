import Link from "next/link";

export const Footer = () => (
  <footer className="bg-gray-100">
    <div className="max-w-7xl py-8 px-4 sm:px-6 lg:px-8 gap-4 flex flex-col mx-auto">
      <div className="flex flex-col items-center sm:flex-row sm:justify-between gap-2">
        <Link href="/" className="text-gray-800 text-lg font-semibold">
          StyleHub
        </Link>
        <nav className="flex gap-4">
          <Link
            href="/about"
            className="text-sm text-gray-500 hover:text-gray-900"
          >
            About
          </Link>
          <Link
            href="/terms"
            className="text-sm text-gray-500 hover:text-gray-900"
          >
            Terms
          </Link>
          <Link
            href="/privacy"
            className="text-sm text-gray-500 hover:text-gray-900"
          >
            Privacy
          </Link>
        </nav>
      </div>
      <div className="text-center text-sm text-gray-400">
        © 2024 StyleHub. All rights reserved.
      </div>
    </div>
  </footer>
);
