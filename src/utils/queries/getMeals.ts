import axiosClient from "../../lib/axiosClient";
import type { MealRecommendedType, MealType } from "../../types/Meal";

const alphabet = "abcdefghijklmnopqrstuvwxyz";

export async function getMeals({
  query = alphabet[Math.floor(Math.random() * alphabet.length)],
}: {
  query?: string | null;
}) {
  const res = await axiosClient.get(`/search.php`, {
    params: { s: query },
  });

  return res.data.meals as MealType[];
}

export async function getMealById(id: number | string | undefined) {
  const res = await axiosClient.get(`/lookup.php?i=${id}`);
  return res.data.meals[0] as MealType;
}

export async function getMealsByCategory(category: string) {
  const res = await axiosClient.get(`/filter.php?c=${category}`);
  return res.data.meals as MealRecommendedType[];
}
