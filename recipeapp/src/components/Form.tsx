import React, { useState, useEffect } from "react";
import { Input, Button } from "./sharedComponents";
import { v4 as uuid } from "uuid";
import { Recipe, RecipeProps } from "../App";
interface FormProps {
  addRecipe: (payload: Recipe) => void;
  editRecipe: boolean;
  recipe: RecipeProps;
  updateRecipe: (payload: RecipeProps) => void;
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
  // useEffect(() => {
  //   if (editRecipe) {
  //     const payload = {
  //       id: recipe.id,
  //       name: recipeName,
  //       ingredients: ingreditents.split(","),
  //     };
  //     updateRecipe(payload);
  //     setRecipeName("");
  //     setIngredients("");
  //   }
  // }, [editRecipe]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "recipeName") setRecipeName(value);
    else setIngredients(value);
  };
  const handleSubmit = () => {
    const payload = {
      recipe: {
        id: uuid(),
        name: recipeName,
        ingredients: ingreditents.split(","),
      },
    };

    addRecipe(payload);
    setRecipeName("");
    setIngredients("");
  };
  return (
    <div>
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
      <Button label="Add" onClick={handleSubmit} />
    </div>
  );
};
export default Form;
