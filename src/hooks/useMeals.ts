import { useQuery } from "@tanstack/react-query";
import { getMeals } from "../utils/queries/getMeals";

export default function useMeals({
  query,
  isDisabled = true,
}: {
  query?: string | null;
  isDisabled?: boolean;
}) {
  const res = useQuery({
    queryKey: ["meals", query],
    queryFn: async () => {
      const res = await getMeals({ query });
      return res;
    },
    enabled: isDisabled,
  });

  return res;
}
