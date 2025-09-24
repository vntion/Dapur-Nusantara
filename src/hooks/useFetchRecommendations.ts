import { useQuery } from "@tanstack/react-query";
import { getMealsByCategory } from "../utils/queries/getMeals";
import type { MealType } from "../types/Meal";

export default function useFetchRecommendations(
  isCategoryEmpty: boolean,
  mealCategory: MealType["strCategory"],
  currMealId: MealType["idMeal"],
) {
  const res = useQuery({
    queryKey: ["recommendations", mealCategory],
    queryFn: async () => {
      if (!isCategoryEmpty) return [];
      const data = await getMealsByCategory(mealCategory);
      return data.filter((item) => item.idMeal !== currMealId).slice(0, 6);
    },
    enabled: !!isCategoryEmpty,
  });

  return res;
}
