import { Filter } from "lucide-react";
import { useEffect, useState } from "react";
import DropdownFilters from "../components/DropdownFilters";
import EmptyQueryResult from "../ui/EmptyQueryResult";
import MealList from "../components/MealList";
import useFetchCategories from "../hooks/useFetchCategories";
import useFetchMeals from "../hooks/useFetchMeals";
import useQueryParams from "../hooks/useQueryParams";
import Spinner from "../ui/Spinner";
import MealsNotFound from "../ui/MealsNotFound";
import TotalResultDisplay from "../ui/TotalResultDisplay";

function SearchMealsPage() {
  const {
    query: { categoryQuery, searchQuery },
    setSearchParams,
  } = useQueryParams();
  const [showFilter, setShowFilter] = useState(false);

  const {
    data: categories,
    isLoading: categoriesLoading,
    error: categoriesErrMsg,
    isError: categoriesErr,
  } = useFetchCategories();

  const {
    data: meals,
    isLoading: mealsLoading,
    error: mealsErrMsg,
    isError: mealsErr,
    isEnabled,
  } = useFetchMeals({ query: searchQuery, isDisabled: !!searchQuery });

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

  if (!isEnabled) return <EmptyQueryResult />;

  if (categoriesErr) return <strong>{categoriesErrMsg.message}</strong>;
  if (mealsErr) return <strong>{mealsErrMsg.message}</strong>;

  const result = categoryQuery
    ? meals?.filter((meal) => meal.strCategory === categoryQuery)
    : meals;
  const hasResults = result && result?.length !== 0;
  const isFetching = categoriesLoading || mealsLoading;

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

        <FiltersButton
          onClick={() => setShowFilter((showFilter) => !showFilter)}
        />
      </div>

      <DropdownFilters
        active={showFilter}
        categories={categories}
        categoryQuery={categoryQuery}
        onCategoryParams={handleCategoryParams}
        onDeleteCategory={handleDeleteCategory}
      />

      {isFetching && <Spinner />}

      {!isFetching && hasResults && (
        <>
          <MealList
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            meals={result}
          />

          <TotalResultDisplay total={result.length} />
        </>
      )}

      {!isFetching && !hasResults && <MealsNotFound />}
    </div>
  );
}

type FiltersButtonProps = {
  onClick: () => void;
};

function FiltersButton({ onClick }: FiltersButtonProps) {
  return (
    <div className="mt-4 flex items-center space-x-3 md:mt-0">
      <button
        onClick={onClick}
        className="flex items-center space-x-2 rounded-lg border border-gray-300 bg-white px-4 py-2 transition-colors hover:cursor-pointer hover:bg-gray-50"
      >
        <Filter className="h-4 w-4" />
        <span>Filter</span>
      </button>
    </div>
  );
}

export default SearchMealsPage;
