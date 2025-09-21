import { ArrowRight, Star } from "lucide-react";
import { Link } from "react-router";
import type { MealRecommendedType } from "../types/Meal";
import FavoriteButton from "./FavoriteButton";

type Props = {
  recommendedMeal: MealRecommendedType;
  index: number;
};

function RecommendationCard({ recommendedMeal, index }: Props) {
  return (
    <Link
      to={`/meal/${recommendedMeal.idMeal}`}
      className="relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
    >
      <div className="relative">
        <img
          src={recommendedMeal.strMealThumb}
          alt={recommendedMeal.strMeal}
          className="h-56 w-full object-cover transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="absolute top-3 left-3">
          <span className="rounded-full bg-white/90 px-2 py-1 text-xs font-semibold text-gray-800 backdrop-blur-sm">
            #{index + 1}
          </span>
        </div>

        <FavoriteButton
          position="top-3 right-3"
          meal={{
            idMeal: recommendedMeal.idMeal,
            strMeal: recommendedMeal.strMeal,
            strMealThumb: recommendedMeal.strMealThumb,
          }}
          heartSize="size-5"
        />
      </div>

      <div className="p-4">
        <h3 className="mb-2 line-clamp-2 font-semibold text-gray-800 transition-colors group-hover:text-orange-600">
          {recommendedMeal.strMeal}
        </h3>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium text-gray-700">
              4.{Math.floor(Math.random() * 5) + 3}
            </span>
          </div>

          <button className="flex items-center space-x-1 rounded-full bg-gradient-to-r from-orange-400 to-red-400 px-3 py-1 text-sm font-medium text-white transition-all hover:cursor-pointer hover:from-orange-500 hover:to-red-500">
            <span>Lihat</span>
            <ArrowRight className="h-3 w-3" />
          </button>
        </div>
      </div>
    </Link>
  );
}

export default RecommendationCard;
