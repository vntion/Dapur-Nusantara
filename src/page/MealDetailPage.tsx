import { useQuery } from "@tanstack/react-query";
import {
  ArrowLeft,
  BookOpen,
  ChefHat,
  Clock,
  ExternalLink,
  Globe,
  Play,
  Users,
} from "lucide-react";
import { Link, useNavigate, useParams } from "react-router";
import FavoriteButton from "../components/FavoriteButton";
import Recommendation from "../components/Recommendation";
import RecommendationCard from "../components/RecommendationCard";
import Spinner from "../ui/Spinner";
import { formatInstructions, getIngredients } from "../utils/helpers";
import { getMealById, getMealsByCategory } from "../utils/queries/getMeals";

const MealDetailPage = () => {
  const { mealId } = useParams();
  const navigate = useNavigate();

  const {
    data: meal,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["meal", mealId],
    queryFn: async () => {
      const data = await getMealById(mealId);
      return data;
    },
  });

  const { data: recommendations, isLoading: isLoadingRecommendations } =
    useQuery({
      queryKey: ["recommendations", meal?.strCategory],
      queryFn: async () => {
        if (!meal?.strCategory) return [];
        const data = await getMealsByCategory(meal.strCategory);
        return data.filter((item) => item.idMeal !== meal.idMeal).slice(0, 6);
      },
      enabled: !!meal?.strCategory,
    });

  if (isLoading || isLoadingRecommendations) return <Spinner />;

  if (isError || !meal)
    return <strong className="text-red-500">{error?.message && "oops"}</strong>;

  const ingredients = getIngredients(meal);
  const steps = formatInstructions(meal?.strInstructions || "");
  const tags = meal.strTags ? meal.strTags.split(",") : [];

  return (
    <>
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-8 flex transform items-center space-x-2 rounded-full bg-white px-6 py-3 text-gray-600 shadow-lg transition-all hover:scale-105 hover:cursor-pointer hover:text-orange-600 hover:shadow-xl"
      >
        <ArrowLeft className="h-5 w-5" />
        <span className="font-semibold">Kembali</span>
      </button>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Left Column - Image & Basic Info */}
        <div className="lg:col-span-1">
          <div className="overflow-hidden rounded-3xl bg-white shadow-2xl">
            <div className="relative">
              <img
                src={meal?.strMealThumb || ""}
                alt={meal?.strMeal || ""}
                className="h-96 w-full object-cover lg:h-80"
              />

              <FavoriteButton
                position="top-4 right-4"
                meal={{
                  strMeal: meal.strMeal || "",
                  strMealThumb: meal.strMealThumb || "",
                  idMeal: meal.idMeal || "",
                }}
                heartSize="size-6"
              />
            </div>

            <div className="p-6">
              <h1 className="mb-4 text-2xl font-bold text-gray-800">
                {meal.strMeal}
              </h1>

              {/* Quick Info Grid */}
              <div className="mb-6 grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-gradient-to-r from-orange-100 to-orange-200 p-4 text-center">
                  <ChefHat className="mx-auto mb-2 h-6 w-6 text-orange-600" />
                  <p className="text-sm font-medium text-orange-800">
                    {meal.strCategory}
                  </p>
                </div>

                <div className="rounded-xl bg-gradient-to-r from-blue-100 to-blue-200 p-4 text-center">
                  <Globe className="mx-auto mb-2 h-6 w-6 text-blue-600" />
                  <p className="text-sm font-medium text-blue-800">
                    {meal.strArea}
                  </p>
                </div>

                <div className="rounded-xl bg-gradient-to-r from-green-100 to-green-200 p-4 text-center">
                  <Clock className="mx-auto mb-2 h-6 w-6 text-green-600" />
                  <p className="text-sm font-medium text-green-800">
                    45-60 min
                  </p>
                </div>

                <div className="rounded-xl bg-gradient-to-r from-purple-100 to-purple-200 p-4 text-center">
                  <Users className="mx-auto mb-2 h-6 w-6 text-purple-600" />
                  <p className="text-sm font-medium text-purple-800">
                    4-6 porsi
                  </p>
                </div>
              </div>

              {/* Tags */}
              {tags.length > 0 && (
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag, index) => (
                      <span
                        key={index}
                        className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700"
                      >
                        #{tag.trim()}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* YouTube Button */}
              {meal.strYoutube && (
                <Link
                  to={meal.strYoutube}
                  target="_blank"
                  className="mb-4 flex w-full transform items-center justify-center space-x-2 rounded-xl bg-gradient-to-r from-red-500 to-red-600 px-6 py-4 font-semibold text-white shadow-lg transition-all hover:scale-105 hover:from-red-600 hover:to-red-700"
                >
                  <Play className="h-5 w-5" />
                  <span>Tonton Tutorial</span>
                </Link>
              )}

              {/* Source Link Button */}
              <Link
                to={
                  meal.strSource ||
                  `https://www.themealdb.com/meal/${meal.idMeal}`
                }
                target="_blank"
                className="flex w-full transform items-center justify-center space-x-2 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-4 font-semibold text-white shadow-lg transition-all hover:scale-105 hover:from-blue-600 hover:to-blue-700"
              >
                <ExternalLink className="h-5 w-5" />
                <span>Sumber Resep</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Right Column - Ingredients & Instructions */}
        <div className="space-y-8 lg:col-span-2">
          {/* Ingredients */}
          <div className="rounded-3xl bg-white p-8 shadow-xl">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="flex items-center text-2xl font-bold text-gray-800">
                <div className="mr-3 rounded-full bg-orange-100 p-2">
                  <BookOpen className="h-6 w-6 text-orange-600" />
                </div>
                Bahan-Bahan
              </h2>
              <span className="rounded-full bg-orange-100 px-3 py-1 text-sm font-semibold text-orange-800">
                {ingredients.length} items
              </span>
            </div>

            <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {ingredients.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center space-x-4 rounded-xl bg-gradient-to-r from-gray-50 to-orange-50 p-4 transition-all"
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-orange-400 to-red-400">
                    <span className="text-sm font-bold text-white">
                      {index + 1}
                    </span>
                  </div>
                  <div className="flex-grow">
                    <p className="font-semibold text-gray-800">
                      {item.measure} {item.ingredient}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Instructions */}
          <div className="rounded-3xl bg-white p-8 shadow-xl">
            <h2 className="mb-6 flex items-center text-2xl font-bold text-gray-800">
              <div className="mr-3 rounded-full bg-red-100 p-2">
                <ChefHat className="h-6 w-6 text-red-600" />
              </div>
              Langkah Memasak
            </h2>

            <ul className="space-y-6">
              {steps.map((step, index) => (
                <li key={index} className="flex space-x-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-red-400 to-pink-400">
                      <span className="font-bold text-white">{step.id}</span>
                    </div>
                  </div>
                  <div className="flex-grow rounded-xl bg-gradient-to-r from-red-50 to-pink-50 p-4">
                    <p className="leading-relaxed text-gray-700">{step.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {recommendations && recommendations.length > 0 && (
        <Recommendation category={meal.strCategory}>
          {recommendations.map((recommendedMeal, index) => (
            <RecommendationCard
              key={recommendedMeal.idMeal}
              recommendedMeal={recommendedMeal}
              index={index}
            />
          ))}
        </Recommendation>
      )}
    </>
  );
};

export default MealDetailPage;
