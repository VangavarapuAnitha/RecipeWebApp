import React from "react";
import { RecipeState, RecipeProps } from "../App";
import { RecipeCard } from "./Card";
interface RecipeListProps {
  recipes: RecipeState;
  deleteRecipe: (payload: string) => void;
  setEditRecipe: (value: boolean) => void;
  setRecipe: (value: RecipeProps) => void;
}
const RecipeList: React.FC<RecipeListProps> = ({
  recipes,
  deleteRecipe,
  setEditRecipe,
  setRecipe,
}) => {
  const recipeList = recipes.recipes;
  console.log(recipeList.length);
  return (
    <div>
      {recipeList.length > 0 &&
        recipeList.map((r, index) => {
          return (
            <RecipeCard
              key={index}
              id={r.recipe.id}
              name={r.recipe.name}
              ingredients={r.recipe.ingredients}
              deleteRecipe={deleteRecipe}
              setEditRecipe={setEditRecipe}
              setRecipe={setRecipe}
            />
          );
        }, [])}
    </div>
  );
};
export default RecipeList;
