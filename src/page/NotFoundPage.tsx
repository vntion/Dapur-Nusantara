import { ArrowLeft, ChefHat, Frown } from "lucide-react";
import { Link } from "react-router";

function NotFoundPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 px-4">
      <div className="w-full max-w-2xl text-center">
        <div className="mb-8">
          {/* Animasi Chef Hat yang sedih */}
          <div className="relative inline-block">
            <div className="animate-bounce">
              <ChefHat className="mx-auto mb-4 h-32 w-32 text-gray-400" />
            </div>
            <Frown className="absolute -bottom-2 left-1/2 h-12 w-12 -translate-x-1/2 transform animate-pulse text-orange-400" />
          </div>
        </div>

        <div className="rounded-3xl border-t-4 border-orange-400 bg-white p-8 shadow-2xl md:p-12">
          <h1 className="mb-4 bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-8xl font-bold text-transparent md:text-9xl">
            404
          </h1>

          <h2 className="mb-4 text-3xl font-bold text-gray-800 md:text-4xl">
            Waduh! Resep Hilang! 🍳
          </h2>

          <p className="mb-8 text-lg leading-relaxed text-gray-600">
            Sepertinya resep yang kamu cari sudah "dimakan" oleh seseorang 😅
            <br />
            Atau mungkin chef-nya sedang mencari bahan di pasar!
          </p>

          {/* Ilustrasi dengan emoji */}
          <div className="mb-8 flex justify-center space-x-4 text-4xl">
            <span className="animate-bounce" style={{ animationDelay: "0s" }}>
              🍅
            </span>
            <span className="animate-bounce" style={{ animationDelay: "0.1s" }}>
              🥕
            </span>
            <span className="animate-bounce" style={{ animationDelay: "0.2s" }}>
              🧅
            </span>
            <span className="animate-bounce" style={{ animationDelay: "0.3s" }}>
              🌶️
            </span>
            <span className="animate-bounce" style={{ animationDelay: "0.4s" }}>
              🥒
            </span>
          </div>

          <div className="mb-8 space-y-4">
            <p className="text-gray-600">
              Jangan khawatir! Masih banyak resep lezat lainnya yang menunggu:
            </p>

            <div className="grid grid-cols-1 gap-4 text-sm text-gray-700 md:grid-cols-2">
              <div className="rounded-lg bg-orange-50 p-4">
                <div className="mb-2 flex items-center space-x-2">
                  <span className="text-orange-500">🏠</span>
                  <span className="font-semibold">Kembali ke Beranda</span>
                </div>
                <p>Temukan ribuan resep pilihan di halaman utama</p>
              </div>

              <div className="rounded-lg bg-red-50 p-4">
                <div className="mb-2 flex items-center space-x-2">
                  <span className="text-red-500">🔍</span>
                  <span className="font-semibold">Cari Resep Lain</span>
                </div>
                <p>Gunakan fitur pencarian untuk menemukan hidangan favorit</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              to="/"
              className="inline-flex transform items-center justify-center space-x-2 rounded-xl bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 px-8 py-3 font-semibold text-white shadow-lg transition-all duration-200 hover:scale-105 hover:cursor-pointer hover:from-orange-500 hover:via-red-500 hover:to-pink-500"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Kembali ke Dapur</span>
            </Link>
          </div>
        </div>

        {/* Quote motivasi */}
        <div className="mt-8 text-center">
          <p className="text-gray-500 italic">
            "Setiap chef pernah kehilangan resep, tapi yang terbaik selalu
            menemukan yang baru!" 👨‍🍳
          </p>
        </div>

        {/* Extra decorative elements */}
        <div className="mt-6 mb-6 flex justify-center space-x-8 text-2xl opacity-50">
          <span className="animate-pulse">🍽️</span>
          <span className="animate-pulse" style={{ animationDelay: "1s" }}>
            🥘
          </span>
          <span className="animate-pulse" style={{ animationDelay: "2s" }}>
            🍲
          </span>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;
