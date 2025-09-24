function MealsNotFound() {
  return (
    <div className="flex flex-col items-center gap-4 py-12">
      <div className="mb-2 text-6xl">😓</div>
      <div className="text-center">
        <h3 className="mb-1 text-xl font-medium text-gray-700">
          Oops, tidak ada yang cocok
        </h3>
        <p className="text-sm text-gray-500">
          Coba kata kunci lain atau pilih kategori berbeda
        </p>
      </div>
    </div>
  );
}

export default MealsNotFound;
