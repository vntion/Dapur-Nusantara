import { Heart } from "lucide-react";
import useFavoriteStore from "../stores/useFavoriteStore";
import type { FavoriteType } from "../types/Favorite";

type Props = {
  position: string;
  meal: FavoriteType;
  heartSize: string;
};

function FavoriteButton({ meal, position, heartSize }: Props) {
  const favorites = useFavoriteStore((state) => state.favorites);
  const addFavorite = useFavoriteStore((state) => state.addFavorite);
  const deleteFavorite = useFavoriteStore((state) => state.deleteFavoriteById);
  const isFavorite = favorites.some(
    (favorite) => favorite.idMeal === meal?.idMeal || "",
  );

  const handleToggleFavorite = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (isFavorite) {
      deleteFavorite(meal?.idMeal || "");
      return;
    }

    const newFavorite: FavoriteType = {
      idMeal: meal?.idMeal || "",
      strMeal: meal?.strMeal || "",
      strMealThumb: meal?.strMealThumb || "",
    };

    addFavorite(newFavorite);
  };

  return (
    <div className={`absolute ${position} z-100`}>
      <button
        title={isFavorite ? "Delete from favorite" : "Add to favorite"}
        onClick={handleToggleFavorite}
        className="group rounded-full bg-white/80 p-2 backdrop-blur-sm transition-colors hover:cursor-pointer hover:bg-white"
      >
        {isFavorite ? (
          <Heart className={`${heartSize} fill-red-500 text-red-500`} />
        ) : (
          <Heart
            className={`${heartSize} text-gray-600 transition-colors group-hover:text-red-500`}
          />
        )}
      </button>
    </div>
  );
}

export default FavoriteButton;
