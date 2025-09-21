import { X } from "lucide-react";
import type { CategoryType } from "../types/Category";

type Props = {
  active: boolean;
  categories: CategoryType[] | undefined;
  categoryQuery: string | null;
  onCategoryParams: (query: string) => void;
  onDeleteCategory: () => void;
};

function DropdownFilters({
  active,
  categories,
  categoryQuery,
  onCategoryParams,
  onDeleteCategory,
}: Props) {
  return (
    <div
      className={`overflow-hidden rounded-lg bg-white shadow-md transition-all duration-500 ease-in-out ${
        active
          ? "mb-6 max-h-[500px] p-6 opacity-100"
          : "mb-0 max-h-0 p-0 opacity-0"
      }`}
    >
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-800">Filter Kategori</h3>
        {categoryQuery && (
          <button
            onClick={onDeleteCategory}
            className="flex items-center space-x-1 rounded-lg bg-red-100 px-3 py-1.5 text-sm font-medium text-red-700 transition-all hover:cursor-pointer hover:bg-red-200 hover:text-red-800"
          >
            <X className="size-4" />
            <span>Hapus Filter</span>
          </button>
        )}
      </div>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-6">
        {categories &&
          categories.map((category) => (
            <button
              key={category.idCategory}
              onClick={() => onCategoryParams(category.strCategory)}
              className={`rounded-lg border p-3 text-left transition-all hover:cursor-pointer ${
                categoryQuery === category.strCategory
                  ? "border-orange-500 bg-orange-100 text-orange-700 shadow-sm"
                  : "border-gray-200 bg-gray-50 text-gray-700 hover:border-orange-300 hover:bg-orange-100/50 hover:text-orange-600"
              }`}
            >
              <div className="truncate text-sm font-medium">
                {category.strCategory}
              </div>
            </button>
          ))}
      </div>
    </div>
  );
}

export default DropdownFilters;
