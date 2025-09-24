import { Search } from "lucide-react";

function EmptyQueryResult() {
  return (
    <div className="py-16 text-center">
      <Search className="mx-auto mb-4 h-16 w-16 text-gray-300" />
      <h3 className="mb-2 text-xl font-semibold text-gray-600">
        Mulai Pencarian Resep
      </h3>
      <p className="mx-auto max-w-md text-gray-500">
        Gunakan kotak pencarian di atas atau pilih kategori untuk menemukan
        resep yang sempurna!
      </p>
    </div>
  );
}

export default EmptyQueryResult;
