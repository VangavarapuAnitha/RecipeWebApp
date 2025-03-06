import React, { useState, useEffect } from "react";
import { Input, Button } from "./sharedComponents";
import { v4 as uuid } from "uuid";
import { Recipe } from "../App";

interface FormProps {
  addRecipe: (payload: Recipe) => void;
  editRecipe: boolean;
  recipe: Recipe;
  updateRecipe: (payload: Recipe) => void;
}
const Form: React.FC<FormProps> = ({
  addRecipe,
  editRecipe,
  recipe,
  updateRecipe,
}) => {
  const [recipeName, setRecipeName] = useState<string>("");
  const [ingreditents, setIngredients] = useState<string>("");
  useEffect(() => {
    if (editRecipe) {
      setRecipeName(recipe.name);
      setIngredients(recipe.ingredients.join(","));
    }
  }, [editRecipe]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "recipeName") setRecipeName(value);
    else setIngredients(value);
  };
  const handleSubmit = () => {
    if (editRecipe) {
      updateRecipe({
        id: recipe.id,
        name: recipeName,
        ingredients: ingreditents.split(","),
      });
    } else {
      const payload = {
        id: uuid(),
        name: recipeName,
        ingredients: ingreditents.split(","),
      };

      addRecipe(payload);
    }

    setRecipeName("");
    setIngredients("");
  };
  return (
    <div style={{ width: "20%" }}>
      <p
        style={{
          fontSize: "14px",
          fontWeight: "bold",
          textAlign: "center",
          color: "orangered",
        }}
      >
        {editRecipe ? "Update Recipe" : "Add Recipe"}
      </p>
      <Input
        label="Recipe Name"
        name="recipeName"
        value={recipeName}
        onChange={handleChange}
      />
      <Input
        label="Ingredients"
        name="ingreditents"
        value={ingreditents}
        onChange={handleChange}
      />
      <Button label={editRecipe ? "Update" : "Add"} onClick={handleSubmit} />
    </div>
  );
};
export default Form;
