import Link from "next/link";
import Image from "next/image";

interface CategoryTileProps {
  name: string;
}

export const CategoryTile = ({ name }: CategoryTileProps) => (
  <Link
    key={name}
    href={`/name/${name}`}
    className="relative flex h-64 w-full flex-col overflow-hidden rounded-lg hover:opacity-90 transition-all"
  >
    <Image
      src={`/${name.toLowerCase()}.jpg`}
      alt={name}
      layout="fill"
      objectFit="cover"
      className="absolute inset-0"
    />
    <span className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50" />
    <span className="relative mt-auto p-4 text-center text-xl font-bold text-white">
      {name}
    </span>
  </Link>
);
