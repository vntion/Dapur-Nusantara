import { Search } from "lucide-react";
import { useEffect, useState, type FormEvent } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router";

function SearchForm() {
  const [_, setSearchParams] = useSearchParams(); // @ts-nocheck
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const pathName = location.pathname;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!search) return;

    if (!pathName.startsWith("/search")) {
      navigate(`/search?q=${search}`);
      return;
    }

    setSearchParams((searchParams) => {
      searchParams.set("q", search.trim());
      return searchParams;
    });
  };

  useEffect(() => {
    setSearch("");
  }, [pathName]);

  return (
    <form className="relative" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Cari resep favorit..."
        value={search || ""}
        onChange={(e) => setSearch(e.target.value)}
        className="w-64 rounded-full border-2 border-white/30 bg-white py-2 pr-4 pl-10 text-gray-700 placeholder-gray-500 shadow-md transition-all duration-300 hover:border-white/50 focus:border-white focus:ring-2 focus:ring-white/50 focus:outline-none"
      />
      <button type="submit">
        <Search className="absolute top-1/2 left-3 size-5 -translate-y-1/2 transform cursor-pointer text-gray-400 transition-colors hover:text-gray-600" />
      </button>
    </form>
  );
}

export default SearchForm;
