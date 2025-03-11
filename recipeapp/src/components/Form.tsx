import React, { useState, useEffect } from "react";
import { Input, Button, Dropdown } from "./sharedComponents";
import { v4 as uuid } from "uuid";
import { Recipe } from "../App";
import { OptionItem } from "../components/sharedComponents/Dropdown";
interface FormProps<T> {
  addRecipe: (payload: T) => void;
  editRecipe: boolean;
  recipe: T;
  updateRecipe: (payload: T) => void;
}

interface RecipeErrors<T> {
  recipeName?: T;
  ingredients?: T;
}

const Form: React.FC<FormProps<Recipe<string>>> = ({
  addRecipe,
  editRecipe,
  recipe,
  updateRecipe,
}) => {
  const [recipeName, setRecipeName] = useState<string>("");
  const [ingreditents, setIngredients] = useState<string>("");
  const [errors, setErrors] = useState<RecipeErrors<string>>({});
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
  const validateRecipe = (
    recipeName: string,
    ingredients: string
  ): RecipeErrors<string> => {
    const errors: RecipeErrors<string> = {};
    if (!recipeName.trim()) {
      errors.recipeName = "RecipeName is required";
    } else if (!recipeName.match(/^[a-zA-Z]+$/)) {
      errors.recipeName = "Invalid RecipeName(only alphabets are allowed)";
    }
    if (!ingredients.trim()) {
      errors.ingredients = "At least one ingredient requierd";
    } else if (!ingredients.match(/^([a-zA-Z]+\s?,?\s?)+$/)) {
      errors.ingredients =
        "Invalid ingredients(only alphabets are allowed seperated by comma)";
    }
    return errors;
  };
  const handleSubmit = () => {
    const errors = validateRecipe(recipeName, ingreditents);
    setErrors(errors);
    if (Object.keys(errors).length !== 0) return;
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
  const state: OptionItem<string>[] = [
    { value: "ap", label: "AP" },
    { value: "t", label: "Tel" },
  ];
  console.log(typeof state);
  // const country: Array<string> = ["Ind", "US", "Pak"];
  // const countrynum: Array<number> = [91, 1];
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
      <Input<string>
        label="Recipe Name"
        name="recipeName"
        value={recipeName}
        onChange={handleChange}
        message={errors.recipeName ? errors.recipeName : undefined}
      />
      <Input<string>
        label="Ingredients"
        name={ingreditents}
        value={ingreditents}
        onChange={handleChange}
        message={errors.ingredients ? errors.ingredients : undefined}
      />
      <Dropdown<string> options={state} />
      {/* <Dropdown<string> items={country} /> */}
      {/* <Dropdown<number> items={countrynum} /> */}

      <Button label={editRecipe ? "Update" : "Add"} onClick={handleSubmit} />
    </div>
  );
};
export default Form;
