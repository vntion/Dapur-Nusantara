import CategoryCard from "../components/CategoryCard";
import MealCard from "../components/MealCard";
import useCategories from "../hooks/useCategories";
import useMeals from "../hooks/useMeals";
import useUserStore from "../stores/useUserStore";
import CategoryCardSkeleton from "../ui/skeleton/CategoryCardSkeleton";
import MealCardSkeleton from "../ui/skeleton/MealCardSkeleton";

function HomePage() {
  const {
    data: meals,
    isLoading: mealsLoading,
    error: mealsErrMsg,
    isError: mealsErr,
  } = useMeals({});

  const {
    data: categories,
    isLoading: categoriesLoading,
    error: categoriesErrMsg,
    isError: categoriesErr,
  } = useCategories();

  const userName = useUserStore((state) => state.userName);

  if (mealsErr || categoriesErr) {
    console.error(mealsErrMsg);
    console.error(categoriesErrMsg);
    return null;
  }

  return (
    <>
      {/* Hero Section */}
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-800 md:text-6xl">
          Halo,{" "}
          <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
            {userName}
          </span>
          ! 👋
        </h1>
        <p className="mb-8 text-xl text-gray-600">
          Apa yang ingin kamu masak hari ini?
        </p>
      </div>

      {/* Categories */}
      <div className="mb-12">
        <h2 className="mb-6 text-2xl font-bold text-gray-800">
          Kategori Populer
        </h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {categoriesLoading
            ? Array.from({ length: 6 }).map((_, idx) => (
                <CategoryCardSkeleton key={idx} />
              ))
            : categories!.map((category, index) => (
                <CategoryCard key={index} category={category} />
              ))}
        </div>
      </div>

      {/* Featured Meals */}
      <div className="mb-12">
        <h2 className="mb-6 text-2xl font-bold text-gray-800">Resep Pilihan</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {mealsLoading
            ? Array.from({ length: 10 }).map((_, idx) => (
                <MealCardSkeleton key={idx} />
              ))
            : meals!.map((meal, index) => <MealCard key={index} meal={meal} />)}
        </div>
      </div>
    </>
  );
}

export default HomePage;
