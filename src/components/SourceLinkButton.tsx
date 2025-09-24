import { Link } from "react-router";
import type { MealType } from "../types/Meal";
import { ExternalLink } from "lucide-react";

type SourceLinkButtonProps = {
  link: MealType["strSource"];
};

function SourceLinkButton({ link }: SourceLinkButtonProps) {
  return (
    <Link
      to={link || "/"}
      target="_blank"
      className="flex w-full transform items-center justify-center space-x-2 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-4 font-semibold text-white shadow-lg transition-all hover:scale-105 hover:from-blue-600 hover:to-blue-700"
    >
      <ExternalLink className="h-5 w-5" />
      <span>Sumber Resep</span>
    </Link>
  );
}

export default SourceLinkButton;
