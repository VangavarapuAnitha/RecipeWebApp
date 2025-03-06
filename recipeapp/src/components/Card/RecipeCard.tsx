import React from "react";
import { Recipe } from "../../App";
import { Button } from "../sharedComponents";
import Ingredient from "./Ingredient";
import styles from "./recipeCard.module.css";
interface RecipeCardProps {
  id: string;
  name: string;
  ingredients: string[];
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
const RecipeCard: React.FC<RecipeCardProps> = ({
  id,
  name,
  ingredients,
  deleteRecipe,
  setEditRecipe,
  setRecipe,

  deleteIngredient,
  updateIngredient,
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
    <div className={styles.container}>
      <div className={styles.title}>
        <h1 style={{ color: "orangered", fontSize: "14px" }}>{name}</h1>
        <div style={{ display: "flex" }}>
          <Button label="Edit" onClick={handleEditRecipe} />
          <Button label="Delete" onClick={handleDeleteRecipe} />
        </div>
      </div>
      <div>
        {ingredientList.length > 0 &&
          ingredientList
            .filter((i, index) => {
              return i !== "";
            })
            .map((i, index) => {
              return (
                <Ingredient
                  key={index}
                  index={index}
                  id={id}
                  ingredient={i}
                  deleteIngredient={deleteIngredient}
                  updateIngredient={updateIngredient}
                />
              );
            }, [])}
      </div>
    </div>
  );
};
export default RecipeCard;
