import Link from "next/link";
import Image from "next/image";

export const HeroSection = () => (
  <div className="relative w-full h-[80vh]">
    <Image
      src="/hero-background.jpg"
      alt="Hero background"
      fill
      className="object-cover"
      quality={100}
      priority
    />
    <div className="absolute inset-0 bg-black opacity-50" />
    <div className="relative z-10 flex justify-center h-full max-w-2xl mx-auto flex-col items-center text-center text-white px-8">
      <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
        Elevate Your Style
      </h1>
      <p className="mt-4 text-x">
        Discover our curated collection of trendsetting fashion. From casual
        chic to elegant sophistication, find your perfect look today.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-md border border-transparent bg-white px-8 py-3 text-gray-900 hover:bg-gray-100 transition-colors"
      >
        Explore Collections
      </Link>
    </div>
  </div>
);
