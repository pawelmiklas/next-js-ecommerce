import Link from "next/link";
import Image from "next/image";
import { formatImageFilename } from "@/utils";

interface CategoryTileProps {
  name: string;
}

export const CategoryTile = ({ name }: CategoryTileProps) => (
  <Link
    href={`/category/${name}`}
    className="relative flex h-64 w-full flex-col overflow-hidden rounded-lg hover:opacity-90 transition-all"
  >
    <Image
      src={`/${formatImageFilename(name)}.jpg`}
      alt={name}
      fill
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      className="object-cover"
    />
    <span className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50" />
    <span className="relative mt-auto p-4 text-center text-xl font-bold text-white">
      {name}
    </span>
  </Link>
);
