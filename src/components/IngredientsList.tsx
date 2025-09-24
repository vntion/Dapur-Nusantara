import IngredientItem from "./IngredientItem";

type IngredientsListProps = {
  ingredients: { ingredient: string; measure: string }[];
};

function IngredientsList({ ingredients }: IngredientsListProps) {
  return (
    <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {ingredients.map((ingredient, index) => (
        <IngredientItem key={index} ingredient={ingredient} index={index} />
      ))}
    </ul>
  );
}

export default IngredientsList;
