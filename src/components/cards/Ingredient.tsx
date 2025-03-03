import React from "react";
import styles from "./mainCard.module.css";
import { Button } from "../sharedComponents";
interface IngredientProps {
  name: string;
}
const Ingredient: React.FC<IngredientProps> = ({ name }) => {
  const handleEditClick = () => {
    console.log("edit clicked");
  };
  const handleDeleteClick = () => {
    console.log("delet clicked");
  };
  return (
    <div className={styles.cardHeader}>
      <h3 style={{ margin: 0 }}>{name}</h3>
      <div className={styles.buttonGroup}>
        <Button label="Edit" type="edit" onClick={handleEditClick} />
        <Button label="Delete" type="delete" onClick={handleDeleteClick} />
      </div>
    </div>
  );
};
export default Ingredient;
