import { Link } from "react-router";
import type { MealType } from "../types/Meal";
import { Play } from "lucide-react";

type ToYoutubeButtonProps = {
  link: MealType["strYoutube"];
};

function ToYoutubeButton({ link }: ToYoutubeButtonProps) {
  return (
    <Link
      to={link || ""}
      target="_blank"
      className="mb-4 flex w-full transform items-center justify-center space-x-2 rounded-xl bg-gradient-to-r from-red-500 to-red-600 px-6 py-4 font-semibold text-white shadow-lg transition-all hover:scale-105 hover:from-red-600 hover:to-red-700"
    >
      <Play className="h-5 w-5" />
      <span>Tonton Tutorial</span>
    </Link>
  );
}

export default ToYoutubeButton;
