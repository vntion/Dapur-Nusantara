import { Clock, Users } from "lucide-react";
import { Link } from "react-router";
import type { FavoriteType } from "../types/Favorite";
import DeleteFavoriteButton from "./DeleteFavoriteButton";

type Props = {
  favoriteMeal: FavoriteType;
};

function FavoriteMealCard({ favoriteMeal }: Props) {
  return (
    <div className="group overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:shadow-xl">
      <div className="relative">
        <img
          src={favoriteMeal.strMealThumb}
          alt={favoriteMeal.strMeal}
          className="h-48 w-full cursor-pointer object-cover transition-transform duration-300"
        />

        <DeleteFavoriteButton idMeal={favoriteMeal.idMeal} />
      </div>

      <div className="p-5">
        <h3 className="mb-3 line-clamp-2 cursor-pointer leading-snug font-semibold text-gray-800 transition-colors hover:text-orange-600">
          {favoriteMeal.strMeal}
        </h3>

        <div className="mb-4 flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center space-x-1">
            <Clock className="h-4 w-4" />
            <span>30 min</span>
          </div>
          <div className="flex items-center space-x-1">
            <Users className="h-4 w-4" />
            <span>4 porsi</span>
          </div>
        </div>

        <Link
          to={`/meal/${favoriteMeal.idMeal}`}
          className="inline-block w-full transform rounded-lg bg-gradient-to-r from-orange-500 to-red-500 py-2.5 text-center text-sm font-medium text-white transition-all hover:scale-[1.02] hover:from-orange-600 hover:to-red-600 active:scale-[0.98]"
        >
          Lihat Resep
        </Link>
      </div>
    </div>
  );
}

export default FavoriteMealCard;
