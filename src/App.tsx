import React, { useState } from "react";
import { InputTextField, Button } from "./components/sharedComponents";
import { RootState, AppDispatch } from "./reduxapp/store";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { addRecipe } from "./reduxFeatures/recipeSlice";
import { MainCard } from "./components/cards";
import styles from "./components/cards/mainCard.module.css";
const App: React.FC = () => {
  const [recipeName, setRecipeName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const dispatch: AppDispatch = useDispatch();
  const recipes = useSelector((state: RootState) => state.recipe.recipe);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target; // Extract name and value

    if (name === "recipeName") {
      setRecipeName(value);
    } else if (name === "ingredients") {
      setIngredients(value);
    }
  };
  const handleClick = () => {
    console.log("added");
    if (recipeName.trim() && ingredients.trim()) {
      dispatch(addRecipe({ recipeName, ingredients }));
      setRecipeName("");
      setIngredients("");
    }
  };
  return (
    <div className="app">
      <div>
        <h2>Add Recipe Details</h2>
        <InputTextField
          type="text"
          label="Recipe Name"
          name="recipeName"
          value={recipeName}
          onChange={handleChange}
        />
        <InputTextField
          type="text"
          label="Ingredients"
          name="ingredients"
          value={ingredients}
          onChange={handleChange}
        />
        <Button label="Add" type="add" onClick={handleClick} />
      </div>
      <div>
        <h3 className={styles.h3}>Recipes</h3>
        {recipes.length > 0 &&
          recipes.map((recipe) => <MainCard key={recipe.id} recipe={recipe} />)}
      </div>
    </div>
  );
};

export default App;
