import { BookOpen, Heart, Search } from "lucide-react";
import { useState } from "react";
import ClearFavoritesButton from "../components/ClearFavoritesButton";
import FavoriteMealCard from "../components/FavoriteMealCard";
import useFavoriteStore from "../stores/useFavoriteStore";
import { Link } from "react-router";

// Type definition
export type FavoriteType = {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
};

const FavoritePage = () => {
  const favorites = useFavoriteStore((state) => state.favorites);
  const [searchQuery, setSearchQuery] = useState("");

  const isFavoritesEmpty = favorites.length === 0;
  const filteredFavorites = favorites.filter((favorite) =>
    favorite.strMeal.toLowerCase().includes(searchQuery.toLowerCase().trim()),
  );

  return (
    <>
      {/* Page Header */}
      <div className="mb-8 flex flex-col justify-between lg:flex-row lg:items-center">
        <div className="flex-1">
          <div className="mb-3 flex items-center space-x-3">
            <Heart className="h-8 w-8 fill-current text-red-500" />
            <h1 className="text-3xl font-bold text-gray-800">Resep Favorit</h1>
          </div>
          <p className="mb-4 text-gray-600 lg:mb-0">
            {isFavoritesEmpty
              ? "Belum ada resep favorit"
              : `${favorites.length} resep tersimpan`}

            {searchQuery &&
              filteredFavorites.length !== favorites.length &&
              ` • Menampilkan ${filteredFavorites.length} hasil`}
          </p>
        </div>

        {/* Search & Actions */}
        <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
          {/* Search Box */}
          <div className="relative">
            <Search className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 transform text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari favorit..."
              className="w-full rounded-lg border border-gray-300 py-2.5 pr-4 pl-10 outline-none focus:border focus:ring-2 focus:ring-orange-500 focus:outline-4 sm:w-64"
            />
          </div>

          <ClearFavoritesButton />
        </div>
      </div>

      {/* Empty State - No Favorites */}
      {isFavoritesEmpty && (
        <div className="flex flex-col items-center gap-6 py-20">
          <div className="mb-4 text-8xl">❤️</div>
          <div className="max-w-md text-center">
            <h2 className="mb-3 text-2xl font-semibold text-gray-700">
              Belum ada favorit nih!
            </h2>
            <p className="mb-6 leading-relaxed text-gray-500">
              Mulai jelajahi resep dan simpan yang kamu suka dengan menekan ikon
              hati. Semua resep favorit akan tersimpan di sini.
            </p>
            <Link
              to="/"
              className="inline-flex items-center space-x-2 rounded-lg bg-orange-500 px-6 py-3 font-medium text-white transition-colors hover:bg-orange-600"
            >
              <BookOpen className="h-5 w-5" />
              <span>Jelajahi Resep</span>
            </Link>
          </div>
        </div>
      )}

      {/* Empty State - No Search Results */}
      {favorites.length > 0 && filteredFavorites.length === 0 && (
        <div className="flex flex-col items-center gap-4 py-16">
          <div className="mb-2 text-6xl">🔍</div>
          <div className="text-center">
            <h3 className="mb-1 text-xl font-medium text-gray-700">
              Tidak ada yang cocok
            </h3>
            <p className="text-sm text-gray-500">
              Coba kata kunci lain untuk mencari favorit
            </p>
          </div>
        </div>
      )}

      {/* Favorites Grid */}
      {favorites.length > 0 && (
        <div className="space-y-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredFavorites.map((favorite) => (
              <FavoriteMealCard key={favorite.idMeal} favoriteMeal={favorite} />
            ))}
          </div>

          {/* Quick Stats */}
          <div className="rounded-xl bg-white p-6 shadow-md">
            <h3 className="mb-4 flex items-center space-x-2 text-lg font-semibold text-gray-800">
              <span>📊</span>
              <span>Statistik Favorit</span>
            </h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-lg bg-gradient-to-br from-orange-50 to-orange-100 p-4 text-center">
                <div className="mb-1 text-3xl font-bold text-orange-600">
                  {favorites.length}
                </div>
                <div className="text-sm font-medium text-gray-600">
                  Total Favorit
                </div>
              </div>
              <div className="rounded-lg bg-gradient-to-br from-red-50 to-red-100 p-4 text-center">
                <div className="mb-1 text-3xl">❤️</div>
                <div className="text-sm font-medium text-gray-600">
                  Resep Tersayang
                </div>
              </div>
              <div className="rounded-lg bg-gradient-to-br from-yellow-50 to-yellow-100 p-4 text-center">
                <div className="mb-1 text-3xl">🍳</div>
                <div className="text-sm font-medium text-gray-600">
                  Siap Dimasak
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FavoritePage;
