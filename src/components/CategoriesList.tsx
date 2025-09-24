import type { CategoryType } from "../types/Category";
import CategoryCard from "./CategoryCard";

type CategoriesListProps = {
  className: string;
  categories: CategoryType[];
};

function CategoriesList({ className, categories }: CategoriesListProps) {
  return (
    <div className={className}>
      {categories.map((category) => (
        <CategoryCard key={category.idCategory} category={category} />
      ))}
    </div>
  );
}

export default CategoriesList;
