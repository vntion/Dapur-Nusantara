import { Trash2 } from "lucide-react";
import useFavoriteStore from "../stores/useFavoriteStore";

type Props = {
  idMeal: string;
};

function DeleteFavoriteButton({ idMeal }: Props) {
  const deleteFavorite = useFavoriteStore((state) => state.deleteFavoriteById);

  return (
    <div className="absolute top-3 right-3">
      <button
        onClick={() => deleteFavorite(idMeal)}
        className="group/btn rounded-full bg-white/90 p-2 shadow-lg backdrop-blur-sm transition-all hover:scale-110 hover:bg-white"
        title="Hapus dari favorit"
      >
        <Trash2 className="h-4 w-4 text-gray-600 transition-colors group-hover/btn:text-red-500" />
      </button>
    </div>
  );
}

export default DeleteFavoriteButton;
