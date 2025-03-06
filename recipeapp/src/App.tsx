import React, { useReducer, Reducer, useState } from "react";
import Form from "./components/Form";
import RecipeList from "./components/RecipeList";
export interface Recipe {
  id: string;
  name: string;
  ingredients: string[];
}

export interface RecipeState {
  recipes: Recipe[];
}

type RecipeActionType =
  | {
      type: "add";
      payload: Recipe;
    }
  | { type: "delete"; payload: string }
  | { type: "edit"; payload: Recipe }
  | { type: "deleteIngredient"; payload: { id: string; index: number } }
  | {
      type: "updateIngredient";
      payload: { id: string; index: number; ingredientValue: string };
    };

const initialState: RecipeState = {
  recipes: [],
};

const recipeReducer: Reducer<RecipeState, RecipeActionType> = (
  state,
  action
): RecipeState => {
  switch (action.type) {
    case "add":
      return { ...state, recipes: [...state.recipes, action.payload] };
    case "delete":
      const newRecipes = [...state.recipes];
      const updatedRecipes = newRecipes.filter(
        (recipe) => recipe.id !== action.payload
      );
      return {
        ...state,
        recipes: updatedRecipes,
      };
    case "edit": {
      const newRecipes = [...state.recipes];
      const updatedRecipes = newRecipes.map((recipe) => {
        if (recipe.id === action.payload.id) {
          return action.payload;
        } else return recipe;
      });
      return {
        ...state,
        recipes: updatedRecipes,
      };
    }
    case "deleteIngredient": {
      const newRecipes = [...state.recipes];
      const updatedRecipes = newRecipes.map((recipe) => {
        if (recipe.id === action.payload.id) {
          const newIngredients = recipe.ingredients;
          console.log(newIngredients);
          const delIngredient = newIngredients.splice(action.payload.index, 1);
          console.log(delIngredient);
          return {
            id: recipe.id,
            name: recipe.name,
            ingredients: newIngredients,
          };
        } else {
          return recipe;
        }
      });
      return {
        ...state,
        recipes: updatedRecipes,
      };
    }
    case "updateIngredient": {
      const newRecipes = [...state.recipes];
      const updatedRecipes = newRecipes.map((recipe) => {
        if (recipe.id === action.payload.id) {
          let newIngredients = recipe.ingredients;
          newIngredients[action.payload.index] = action.payload.ingredientValue;
          return {
            id: recipe.id,
            name: recipe.name,
            ingredients: newIngredients,
          };
        } else {
          return recipe;
        }
      });
      return {
        ...state,
        recipes: updatedRecipes,
      };
    }
    default:
      return state;
  }
};

const App: React.FC = () => {
  const [recipes, dispatch] = useReducer(recipeReducer, initialState);
  const [editRecipe, setEditRecipe] = useState<boolean>(false);

  const [recipe, setRecipe] = useState<Recipe>({
    id: "",
    name: "",
    ingredients: [],
  });
  function addRecipe(payload: Recipe) {
    dispatch({ type: "add", payload: payload });
  }
  function deleteRecipe(payload: string) {
    dispatch({
      type: "delete",
      payload: payload,
    });
  }
  function updateRecipe(payload: Recipe) {
    dispatch({ type: "edit", payload: payload });
    setEditRecipe(false);
  }
  function deleteIngredient(id: string, index: number) {
    console.log(id, index);
    dispatch({ type: "deleteIngredient", payload: { id: id, index: index } });
  }
  function updateIngredient(
    id: string,
    index: number,
    ingredientValue: string
  ) {
    dispatch({
      type: "updateIngredient",
      payload: { id, index, ingredientValue },
    });
  }
  return (
    <div style={{ justifyItems: "center" }}>
      <Form
        addRecipe={addRecipe}
        editRecipe={editRecipe}
        recipe={recipe}
        updateRecipe={updateRecipe}
      />
      <RecipeList
        recipes={recipes}
        deleteRecipe={deleteRecipe}
        setEditRecipe={setEditRecipe}
        setRecipe={setRecipe}
        deleteIngredient={deleteIngredient}
        updateIngredient={updateIngredient}
      />
    </div>
  );
};
export default App;
