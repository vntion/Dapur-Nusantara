import { ArrowRight, TrendingUp } from "lucide-react";
import { Link } from "react-router";
import type { MealRecommendedType } from "../types/Meal";
import RecommendationCard from "./RecommendationCard";

type Props = {
  category: string | null;
  recommendations: MealRecommendedType[];
};

function Recommendation({ category, recommendations }: Props) {
  return (
    <div className="mt-16">
      <div className="mb-8 text-center">
        <div className="mb-4 flex items-center justify-center">
          <div className="rounded-full bg-gradient-to-r from-orange-400 to-red-400 p-3">
            <TrendingUp className="h-8 w-8 text-white" />
          </div>
        </div>
        <h2 className="mb-2 text-3xl font-bold text-gray-800">
          Rekomendasi Serupa
        </h2>
        <p className="text-gray-600">
          Makanan lain dari kategori{" "}
          <span className="font-semibold text-orange-600">{category}</span> yang
          mungkin Anda suka
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {recommendations.map((recommendedMeal, index) => (
          <RecommendationCard
            key={recommendedMeal.idMeal}
            recommendedMeal={recommendedMeal}
            index={index}
          />
        ))}
      </div>

      {/* View All Button */}
      <div className="mt-8 text-center">
        <Link
          to={`/search?c=${category}`}
          className="inline-flex items-center space-x-2 rounded-full bg-gradient-to-r from-orange-400 to-red-400 px-8 py-3 font-semibold text-white shadow-lg transition-all hover:scale-105 hover:from-orange-500 hover:to-red-500"
        >
          <span>Lihat Semua {category}</span>
          <ArrowRight className="h-5 w-5" />
        </Link>
      </div>
    </div>
  );
}

export default Recommendation;
