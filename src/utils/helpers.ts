import type { MealType } from "../types/Meal";

export const formatInstructions = (instructions: string) => {
  return instructions
    .split("\r\n")
    .filter((step) => step.trim())
    .map((step, index) => ({
      id: index + 1,
      text: step.trim(),
    }));
};

export const getIngredients = (meal: MealType) => {
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}` as keyof MealType] as string;
    const measure = meal[`strMeasure${i}` as keyof MealType] as string;

    if (ingredient && ingredient.trim() && measure && measure.trim()) {
      ingredients.push({
        ingredient: ingredient.trim(),
        measure: measure.trim(),
      });
    }
  }
  return ingredients;
};
