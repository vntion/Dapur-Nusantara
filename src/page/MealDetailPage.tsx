import {
  ArrowLeft,
  BookOpen,
  ChefHat,
  Clock,
  Globe,
  Users,
} from "lucide-react";
import { useParams } from "react-router";
import BackButton from "../components/BackButton";
import FavoriteButton from "../components/FavoriteButton";
import IngredientsList from "../components/IngredientsList";
import InstructionsList from "../components/InstructionsList";
import Recommendation from "../components/Recommendation";
import SourceLinkButton from "../components/SourceLinkButton";
import ToYoutubeButton from "../components/ToYoutubeButton";
import useFetchMealsById from "../hooks/useFetchMealsById";
import useFetchRecommendations from "../hooks/useFetchRecommendations";
import Spinner from "../ui/Spinner";
import { formatInstructions, getIngredients } from "../utils/helpers";

const MealDetailPage = () => {
  const { mealId } = useParams();

  const {
    data: meal,
    isLoading: isMealsLoading,
    isError,
    error,
  } = useFetchMealsById(mealId);

  const isCategoryEmpty = !!meal?.strCategory;

  const { data: recommendations, isLoading: isRecommendationLoading } =
    useFetchRecommendations(
      isCategoryEmpty,
      meal?.strCategory || "",
      meal?.idMeal || "",
    );

  if (isMealsLoading || isRecommendationLoading) return <Spinner />;

  if (isError || !meal)
    return <strong className="text-red-500">{error?.message && "oops"}</strong>;

  const ingredients = getIngredients(meal);
  const steps = formatInstructions(meal?.strInstructions || "");
  const tags = meal.strTags ? meal.strTags.split(",") : [];

  return (
    <>
      <BackButton className="mb-8 flex transform items-center space-x-2 rounded-full bg-white px-6 py-3 text-gray-600 shadow-lg transition-all hover:scale-105 hover:cursor-pointer hover:text-orange-600 hover:shadow-xl">
        <ArrowLeft className="h-5 w-5" />
        <span className="font-semibold">Kembali</span>
      </BackButton>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Left Column - Image & Basic Info */}
        <div className="lg:col-span-1">
          <div className="overflow-hidden rounded-3xl bg-white shadow-2xl">
            <div className="relative">
              <img
                title={meal?.strMeal || ""}
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
              {meal.strYoutube && <ToYoutubeButton link={meal.strYoutube} />}

              {/* Source Link Button */}
              {meal.strSource && <SourceLinkButton link={meal.strSource} />}
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

            <IngredientsList ingredients={ingredients} />
          </div>

          {/* Instructions */}
          <div className="rounded-3xl bg-white p-8 shadow-xl">
            <h2 className="mb-6 flex items-center text-2xl font-bold text-gray-800">
              <div className="mr-3 rounded-full bg-red-100 p-2">
                <ChefHat className="h-6 w-6 text-red-600" />
              </div>
              Langkah Memasak
            </h2>

            <InstructionsList steps={steps} />
          </div>
        </div>
      </div>

      {recommendations && recommendations.length > 0 && (
        <Recommendation
          recommendations={recommendations}
          category={meal.strCategory}
        />
      )}
    </>
  );
};

export default MealDetailPage;
