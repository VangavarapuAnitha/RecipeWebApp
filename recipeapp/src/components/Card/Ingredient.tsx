import React, { useState } from "react";
import { Button, Input } from "../sharedComponents";
interface IngredientProps {
  index: number;
  id: string;
  ingredient: string;

  deleteIngredient: (id: string, index: number) => void;
  updateIngredient: (
    id: string,
    index: number,
    ingredientValue: string
  ) => void;
}
const Ingredient: React.FC<IngredientProps> = ({
  index,
  id,
  ingredient,

  deleteIngredient,
  updateIngredient,
}) => {
  const [editingIngredient, setEditingIngredient] = useState<boolean>(false);
  const [ingredientValue, setIngredientValue] = useState<string>(ingredient);
  const [error, setError] = useState<boolean>(false);
  const handleEditIngredient = () => {
    setEditingIngredient(true);
  };
  const handleDeleteIngredient = () => {
    deleteIngredient(id, index);
  };
  const handleUpdateIngredient = () => {
    if (
      ingredientValue === "" ||
      !ingredientValue.trim() ||
      !ingredientValue.match(/^[\s?a-zA-Z]+$/)
    ) {
      setError(true);
    } else {
      setError(false);
      updateIngredient(id, index, ingredientValue);
      setEditingIngredient(false);
    }
  };
  return (
    <div style={{ alignItems: "center" }}>
      {editingIngredient ? (
        <div
          style={{
            display: "flex",
            width: "50%",
            justifyContent: "space-between",
          }}
        >
          <Input
            label=""
            value={ingredientValue}
            name={ingredientValue}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setIngredientValue(e.target.value)
            }
            message={error ? "fill the fiield" : undefined}
          />
          <Button label="Save" onClick={handleUpdateIngredient} />
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            width: "50%",
            justifyContent: "space-between",
          }}
          key={index}
        >
          <div>{ingredient}</div>
          <div style={{ display: "flex" }}>
            <Button label="Edit" onClick={handleEditIngredient} />
            <Button label="Delete" onClick={handleDeleteIngredient} />
          </div>
        </div>
      )}
    </div>
  );
};
export default Ingredient;
