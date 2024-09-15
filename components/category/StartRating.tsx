import { StarIcon as StarIconSolid } from "@heroicons/react/20/solid";
import { StarIcon as StarIconOutline } from "@heroicons/react/24/outline";

interface StarRatingProps {
  rating: number;
  maxRating?: number;
}

export const StarRating = ({ rating, maxRating = 5 }: StarRatingProps) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  return (
    <div className="flex items-center">
      {[...Array(maxRating)].map((_, index) => {
        if (index < fullStars) {
          return (
            <StarIconSolid key={index} className="w-5 h-5 text-yellow-400" />
          );
        } else if (index === fullStars && hasHalfStar) {
          return (
            <div key={index} className="relative w-5 h-5">
              <StarIconOutline className="absolute w-5 h-5 text-yellow-400" />
              <div className="absolute w-[10px] h-5 overflow-hidden">
                <StarIconSolid className="w-5 h-5 text-yellow-400" />
              </div>
            </div>
          );
        }

        return (
          <StarIconOutline key={index} className="w-5 h-5 text-yellow-400" />
        );
      })}
      <span className="ml-1 text-sm text-gray-600">({rating.toFixed(1)})</span>
    </div>
  );
};
