type IngredientItemProps = {
  index: number;
  ingredient: { ingredient: string; measure: string };
};

function IngredientItem({ index, ingredient }: IngredientItemProps) {
  return (
    <li className="flex items-center space-x-4 rounded-xl bg-gradient-to-r from-gray-50 to-orange-50 p-4 transition-all">
      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-orange-400 to-red-400">
        <span className="text-sm font-bold text-white">{index + 1}</span>
      </div>
      <div className="flex-grow">
        <p className="font-semibold text-gray-800">
          {ingredient.measure} {ingredient.ingredient}
        </p>
      </div>
    </li>
  );
}

export default IngredientItem;
