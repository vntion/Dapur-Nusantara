import type { MealType } from "../types/Meal";
import MealCard from "./MealCard";

type MealListProps = {
  className: string;
  meals: MealType[];
};

function MealList({ className, meals }: MealListProps) {
  return (
    <div className={className}>
      {meals.map((meal) => (
        <MealCard meal={meal} key={meal.idMeal} />
      ))}
    </div>
  );
}

export default MealList;
