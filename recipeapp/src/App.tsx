import React, { useReducer, Reducer, useState } from "react";
import Form from "./components/Form";
import RecipeList from "./components/RecipeList";
export interface RecipeProps {
  id: string;
  name: string;
  ingredients: string[];
}

export interface Recipe {
  recipe: RecipeProps;
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
  | { type: "edit"; payload: RecipeProps };

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
      return {
        ...state,
        recipes: state.recipes.filter(
          (recipe) => recipe.recipe.id !== action.payload
        ),
      };
    case "edit":
      return {
        ...state,
        ...state.recipes.find((r) => {
          if (r.recipe.id === action.payload.id) {
            return {
              name: action.payload.name,
            };
          }
        }),
      };
    default:
      return state;
  }
};

const App: React.FC = () => {
  const [recipes, dispatch] = useReducer(recipeReducer, initialState);
  const [editRecipe, setEditRecipe] = useState<boolean>(false);
  const [recipe, setRecipe] = useState<RecipeProps>({
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
  function updateRecipe(payload: RecipeProps) {
    dispatch({ type: "edit", payload: payload });
  }
  return (
    <div>
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
      />
    </div>
  );
};
export default App;
