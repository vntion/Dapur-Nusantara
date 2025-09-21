import type { CategoryType } from "../types/Category";

type Props = {
  category: CategoryType;
};

function CategoryCard({ category }: Props) {
  return (
    <div className="transform cursor-pointer overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
      <div className="relative overflow-hidden">
        <img
          src={category.strCategoryThumb}
          alt={category.strCategory}
          className="h-32 w-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-4 text-center">
        <h3 className="mb-2 font-bold text-gray-800">{category.strCategory}</h3>
        <p className="line-clamp-2 text-sm text-gray-600">
          {category.strCategoryDescription}
        </p>
      </div>
    </div>
  );
}

export default CategoryCard;
