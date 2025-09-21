import { Filter, Search } from "lucide-react";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import DropdownFilters from "../components/DropdownFilters";
import MealCard from "../components/MealCard";
import useCategories from "../hooks/useCategories";
import useMeals from "../hooks/useMeals";
import Spinner from "../ui/Spinner";

function SearchMealsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showFilter, setShowFilter] = useState(false);

  const searchQuery = searchParams.get("q");
  const categoryQuery = searchParams.get("c");

  const {
    data: categories,
    isLoading: categoriesLoading,
    error: categoriesErrMsg,
    isError: categoriesErr,
  } = useCategories();

  const {
    data: meals,
    isLoading: mealsLoading,
    error: mealsErrMsg,
    isError: mealsErr,
    isEnabled,
  } = useMeals({ query: searchQuery, isDisabled: !!searchQuery });

  const handleCategoryParams = (params: string) => {
    setSearchParams((searchParams) => {
      searchParams.set("c", params);
      return searchParams;
    });
  };

  const handleDeleteCategory = () => {
    setSearchParams((searchParams) => {
      searchParams.delete("c");
      return searchParams;
    });
  };

  useEffect(() => {
    setShowFilter(false);
  }, [searchQuery]);

  if (!isEnabled)
    return (
      <div className="py-16 text-center">
        <Search className="mx-auto mb-4 h-16 w-16 text-gray-300" />
        <h3 className="mb-2 text-xl font-semibold text-gray-600">
          Mulai Pencarian Resep
        </h3>
        <p className="mx-auto max-w-md text-gray-500">
          Gunakan kotak pencarian di atas atau pilih kategori untuk menemukan
          resep yang sempurna!
        </p>
      </div>
    );

  if (categoriesErr) return <strong>{categoriesErrMsg.message}</strong>;
  if (mealsErr) return <strong>{mealsErrMsg.message}</strong>;

  const result = categoryQuery
    ? meals?.filter((meal) => meal.strCategory === categoryQuery)
    : meals;
  const hasResults = result && result?.length !== 0;

  return (
    <div className="mb-8">
      <div className="mb-6 flex flex-col justify-between md:flex-row md:items-center">
        <div>
          <h2 className="mb-2 text-3xl font-bold text-gray-800">
            {searchQuery ? "Hasil Pencarian" : "Cari Resep"}
          </h2>
          {(searchQuery || categoryQuery) && (
            <p className="text-gray-600">
              {searchQuery && `Pencarian: "${searchQuery}"`}
              {searchQuery && categoryQuery && " • "}
              {categoryQuery && `Kategori: ${categoryQuery}`}
            </p>
          )}
        </div>

        <div className="mt-4 flex items-center space-x-3 md:mt-0">
          <button
            onClick={() => setShowFilter(!showFilter)}
            className="flex items-center space-x-2 rounded-lg border border-gray-300 bg-white px-4 py-2 transition-colors hover:cursor-pointer hover:bg-gray-50"
          >
            <Filter className="h-4 w-4" />
            <span>Filter</span>
          </button>
        </div>
      </div>

      <DropdownFilters
        active={showFilter}
        categories={categories}
        categoryQuery={categoryQuery}
        onCategoryParams={handleCategoryParams}
        onDeleteCategory={handleDeleteCategory}
      />

      {(categoriesLoading || mealsLoading) && <Spinner />}

      {!categoriesLoading && !mealsLoading && hasResults && (
        <>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {result.map((meal) => (
              <MealCard meal={meal} key={meal.idMeal} />
            ))}
          </div>

          <div className="mt-8 text-center text-gray-500">
            Menampilkan {result.length} resep
          </div>
        </>
      )}

      {!categoriesLoading && !mealsLoading && !hasResults && (
        <div className="flex flex-col items-center gap-4 py-12">
          <div className="mb-2 text-6xl">😓</div>
          <div className="text-center">
            <h3 className="mb-1 text-xl font-medium text-gray-700">
              Oops, tidak ada yang cocok
            </h3>
            <p className="text-sm text-gray-500">
              Coba kata kunci lain atau pilih kategori berbeda
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchMealsPage;
