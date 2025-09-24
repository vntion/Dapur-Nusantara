import { useQuery } from "@tanstack/react-query";
import { getMealById } from "../utils/queries/getMeals";

export default function useFetchMealsById(mealId: string = "1") {
  const res = useQuery({
    queryKey: ["meal", mealId],
    queryFn: async () => {
      const data = await getMealById(mealId);
      return data;
    },
  });

  return res;
}
