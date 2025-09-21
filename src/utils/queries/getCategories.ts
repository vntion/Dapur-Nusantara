import axiosClient from "../../lib/axiosClient";
import type { CategoryType } from "../../types/Category";

export async function getCategories() {
  const res = await axiosClient.get(`/categories.php`);

  return res.data.categories as CategoryType[];
}
