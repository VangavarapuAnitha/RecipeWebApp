import React from "react";
import { RecipeState, Recipe } from "../App";
import { RecipeCard } from "./Card";
interface RecipeListProps {
  recipes: RecipeState;
  deleteRecipe: (payload: string) => void;
  setEditRecipe: (value: boolean) => void;
  setRecipe: (value: Recipe) => void;

  deleteIngredient: (id: string, index: number) => void;
  updateIngredient: (
    id: string,
    index: number,
    ingredientValue: string
  ) => void;
}
const RecipeList: React.FC<RecipeListProps> = ({
  recipes,
  deleteRecipe,
  setEditRecipe,
  setRecipe,

  deleteIngredient,
  updateIngredient,
}) => {
  const recipeList = recipes.recipes;
  console.log(recipeList.length);
  return (
    <div style={{ display: "flex", flexDirection: "column", width: "50%" }}>
      {recipeList.length > 0 &&
        recipeList.map((r, index) => {
          return (
            <RecipeCard
              key={index}
              id={r.id}
              name={r.name}
              ingredients={r.ingredients}
              deleteRecipe={deleteRecipe}
              setEditRecipe={setEditRecipe}
              setRecipe={setRecipe}
              deleteIngredient={deleteIngredient}
              updateIngredient={updateIngredient}
            />
          );
        }, [])}
    </div>
  );
};
export default RecipeList;
