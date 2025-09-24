import CategoriesList from "../components/CategoriesList";
import MealList from "../components/MealList";
import useFetchCategories from "../hooks/useFetchCategories";
import useFetchMeals from "../hooks/useFetchMeals";
import CategoryCardSkeleton from "../ui/skeleton/CategoryCardSkeleton";
import MealCardSkeleton from "../ui/skeleton/MealCardSkeleton";
import UserNameDisplay from "../ui/UserNameDisplay";

function HomePage() {
  const {
    data: meals,
    isLoading: mealsLoading,
    error: mealsErrMsg,
    isError: mealsErr,
  } = useFetchMeals({});

  const {
    data: categories,
    isLoading: categoriesLoading,
    error: categoriesErrMsg,
    isError: categoriesErr,
  } = useFetchCategories();

  if (mealsErr || categoriesErr) {
    console.error(mealsErrMsg);
    console.error(categoriesErrMsg);
    return null;
  }

  return (
    <>
      {/* Hero Section */}
      <div className="mb-12 text-center">
        <UserNameDisplay />
        <p className="mb-8 text-xl text-gray-600">
          Apa yang ingin kamu masak hari ini?
        </p>
      </div>

      {/* Categories */}
      <div className="mb-12">
        <h2 className="mb-6 text-2xl font-bold text-gray-800">
          Kategori Populer
        </h2>

        {categoriesLoading && (
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {Array.from({ length: 6 }).map((_, idx) => (
              <CategoryCardSkeleton key={idx} />
            ))}
          </div>
        )}

        {!categoriesLoading && categories && (
          <CategoriesList
            className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6"
            categories={categories}
          />
        )}
      </div>

      {/* Featured Meals */}
      <div className="mb-12">
        <h2 className="mb-6 text-2xl font-bold text-gray-800">Resep Pilihan</h2>
        {mealsLoading && (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 10 }).map((_, idx) => (
              <MealCardSkeleton key={idx} />
            ))}
          </div>
        )}

        {!mealsLoading && meals && (
          <MealList
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
            meals={meals}
          />
        )}
      </div>
    </>
  );
}

export default HomePage;
