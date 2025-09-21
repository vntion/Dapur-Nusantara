import { ChefHat, Heart, Home } from "lucide-react";
import { Link } from "react-router";

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-6xl">🍳</div>
        <div className="absolute top-20 right-20 text-4xl">🥘</div>
        <div className="absolute bottom-20 left-1/4 text-5xl">🍽️</div>
        <div className="absolute right-10 bottom-10 text-3xl">🧄</div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-12 pb-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <h4 className="mb-6 flex items-center text-xl font-bold text-orange-400">
                <span className="mr-2">🍴</span>
                Menu
              </h4>
              <ul className="space-y-4 text-gray-300">
                <li>
                  <div className="group flex cursor-pointer items-center transition-all duration-300 hover:translate-x-2 hover:text-orange-400">
                    <span className="mr-3 opacity-0 transition-opacity group-hover:opacity-100">
                      →
                    </span>
                    Beranda
                  </div>
                </li>
                <li>
                  <div className="group flex cursor-pointer items-center transition-all duration-300 hover:translate-x-2 hover:text-orange-400">
                    <span className="mr-3 opacity-0 transition-opacity group-hover:opacity-100">
                      →
                    </span>
                    Kategori
                  </div>
                </li>
                <li>
                  <div className="group flex cursor-pointer items-center transition-all duration-300 hover:translate-x-2 hover:text-orange-400">
                    <span className="mr-3 opacity-0 transition-opacity group-hover:opacity-100">
                      →
                    </span>
                    Pencarian
                  </div>
                </li>
                <li>
                  <div className="group flex cursor-pointer items-center transition-all duration-300 hover:translate-x-2 hover:text-orange-400">
                    <span className="mr-3 opacity-0 transition-opacity group-hover:opacity-100">
                      →
                    </span>
                    Favorit
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-span-1 md:col-span-3">
            <div className="mb-6 flex items-center space-x-3">
              <div className="rounded-full bg-gradient-to-r from-orange-400 to-red-500 p-2">
                <ChefHat className="h-8 w-8 text-white" />
              </div>
              <h3 className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-2xl font-bold text-transparent">
                Dapur Nusantara
              </h3>
            </div>
            <p className="mb-6 text-lg leading-relaxed text-gray-300">
              Temukan ribuan resep makanan lezat dari seluruh dunia. Masak
              dengan cinta, sajikan dengan kebahagiaan.
            </p>
            <div className="flex space-x-6">
              <Link to="/favorite" className="group cursor-pointer">
                <div className="rounded-full bg-red-500/20 p-3 transition-all duration-300 group-hover:scale-110 group-hover:bg-red-500/30">
                  <Heart className="h-6 w-6 text-red-400 transition-colors group-hover:text-red-300" />
                </div>
              </Link>

              <Link to="/" className="group cursor-pointer">
                <div className="rounded-full bg-green-500/20 p-3 transition-all duration-300 group-hover:scale-110 group-hover:bg-green-500/30">
                  <Home className="h-6 w-6 text-green-400 transition-colors group-hover:text-green-300" />
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative divider */}
        <div className="mt-12 mb-8">
          <div className="flex items-center justify-center">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent"></div>
          </div>
        </div>

        <div className="text-center">
          <div className="inline-block rounded-full border border-white/10 bg-white/5 px-6 py-3 backdrop-blur-sm">
            <p className="flex items-center justify-center space-x-2 text-gray-400">
              <span>
                &copy; {new Date().getFullYear()} Dapur Nusantara. Dibuat dengan
              </span>
              <Heart className="h-4 w-4 animate-pulse fill-current text-red-400" />
              <span>untuk para pecinta kuliner.</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
