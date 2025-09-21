import { create } from "zustand";
import type { FavoriteType } from "../types/Favorite";
import { toast } from "react-toastify";

type FavoriteStore = {
  favorites: FavoriteType[];
  addFavorite: (newFavorite: FavoriteType) => void;
  deleteFavoriteById: (idMeal: string) => void;
  clearFavorites: () => void;
};

const useFavoriteStore = create<FavoriteStore>((set) => {
  return {
    favorites: [],
    addFavorite: (newFavorite) =>
      set((state) => ({ favorites: [...state.favorites, newFavorite] })),
    deleteFavoriteById: (idMeal) =>
      set((state) => ({
        favorites: state.favorites?.filter(
          (favorite) => favorite.idMeal !== idMeal,
        ),
      })),
    clearFavorites: () => {
      set(() => ({ favorites: [] }));
      toast.success("Semua berhasil dihapus", {
        position: "bottom-right",
      });
    },
  };
});

export default useFavoriteStore;
