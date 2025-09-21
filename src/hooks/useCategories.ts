import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../utils/queries/getCategories";

export default function useCategories() {
  const res = useQuery({ queryKey: ["categories"], queryFn: getCategories });

  return res;
}
