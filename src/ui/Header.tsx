import { User } from "lucide-react";
import SearchForm from "../components/SearchForm";
import Logo from "./Logo";

function Header() {
  return (
    <header className="bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 shadow-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Logo />

          <div className="flex items-center space-x-4">
            <SearchForm />

            <div className="flex items-center space-x-2 rounded-full bg-white/20 px-4 py-2">
              <User className="h-5 w-5 text-white" />
              {/* <span className="font-medium text-white">{userName}</span> */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
