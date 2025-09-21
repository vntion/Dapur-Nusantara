import { Trash2 } from "lucide-react";
import useFavoriteStore from "../stores/useFavoriteStore";

function ClearFavoritesButton() {
  const clearFavorites = useFavoriteStore((state) => state.clearFavorites);

  return (
    <button
      title="Hapus semua favorit"
      onClick={clearFavorites}
      className="flex items-center justify-center space-x-2 rounded-lg bg-red-100 px-4 py-2.5 whitespace-nowrap text-red-700 transition-colors hover:cursor-pointer hover:bg-red-200"
    >
      <Trash2 className="h-4 w-4" />
      <span>Hapus Semua</span>
    </button>
  );
}

export default ClearFavoritesButton;
