import { Clock, Users } from "lucide-react";
import { Link } from "react-router";
import type { MealType } from "../types/Meal";
import FavoriteButton from "./FavoriteButton";

type Props = {
  meal: MealType;
};

function MealCard({ meal }: Props) {
  return (
    <Link to={`/meal/${meal.idMeal}`}>
      <div className="flex h-full transform cursor-pointer flex-col rounded-xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
        <div className="relative overflow-hidden rounded-t-xl">
          <img
            src={meal.strMealThumb || ""}
            alt={meal.strMeal || ""}
            className="h-48 w-full object-cover transition-transform duration-300"
          />

          <FavoriteButton
            position="top-3 right-3"
            meal={{
              idMeal: meal.idMeal!,
              strMeal: meal.strMeal!,
              strMealThumb: meal.strMealThumb!,
            }}
            heartSize="size-4"
          />

          {meal.strCategory && (
            <div className="absolute bottom-3 left-3">
              <span className="rounded-full bg-orange-500 px-2 py-1 text-xs text-white">
                {meal.strCategory}
              </span>
            </div>
          )}
        </div>

        <div className="p-4">
          <h3 className="mb-2 line-clamp-1 font-semibold text-gray-800">
            {meal.strMeal}
          </h3>

          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>30 min</span>
            </div>
            <div className="flex items-center space-x-1">
              <Users className="h-4 w-4" />
              <span>4 porsi</span>
            </div>
          </div>

          {meal.strArea && (
            <div className="mt-2 text-xs font-medium text-orange-600">
              📍 {meal.strArea}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}

export default MealCard;
