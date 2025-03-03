import React from "react";
import { Recipe } from "../../reduxFeatures/recipeSlice";
import { Button } from "../sharedComponents";
import styles from "./mainCard.module.css";
import Ingredient from "./Ingredient";
export interface MainCardProps {
  recipe: Recipe;
}
const MainCard: React.FC<MainCardProps> = ({ recipe }) => {
  const handleEditClick = () => {
    console.log("edit clicked");
  };
  const handleDeleteClick = () => {
    console.log("delet clicked");
  };
  const ingredients: Array<string> = recipe.ingredients.split(`,`);
  console.log(ingredients);
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardHeader}>
        <h2 style={{ margin: 0 }}>{recipe.recipeName}</h2>
        <div className={styles.buttonGroup}>
          <Button label="Edit" type="edit" onClick={handleEditClick} />
          <Button label="Delete" type="delete" onClick={handleDeleteClick} />
        </div>
      </div>
      <div className={styles.ingredients}>
        <h3 className={styles.h3}>Ingredients</h3>
        {ingredients.length > 0 &&
          ingredients.map((ingredient) => <Ingredient name={ingredient} />)}
      </div>
    </div>
  );
};
export default MainCard;
