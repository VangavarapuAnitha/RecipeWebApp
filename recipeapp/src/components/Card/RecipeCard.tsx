import React from "react";
import { RecipeProps } from "../../App";
import { Button } from "../sharedComponents";
interface RecipeCardProps {
  id: string;
  name: string;
  ingredients: string[];
  deleteRecipe: (payload: string) => void;
  setEditRecipe: (value: boolean) => void;
  setRecipe: (value: RecipeProps) => void;
}
const RecipeCard: React.FC<RecipeCardProps> = ({
  id,
  name,
  ingredients,
  deleteRecipe,
  setEditRecipe,
  setRecipe,
}) => {
  const ingredientList = ingredients;
  const handleEditRecipe = () => {
    setEditRecipe(true);
    setRecipe({
      id: id,
      name: name,
      ingredients: ingredients,
    });
  };
  const handleDeleteRecipe = () => {
    const payload = id;
    deleteRecipe(payload);
  };
  return (
    <div>
      <div>
        <p>{name}</p>
        <Button label="Edit" onClick={handleEditRecipe} />
        <Button label="Delete" onClick={handleDeleteRecipe} />
      </div>
      <div>
        {ingredientList.length > 0 &&
          ingredientList.map((i) => {
            return <div>{i}</div>;
          }, [])}
      </div>
    </div>
  );
};
export default RecipeCard;
