import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export enum Status {
  add = 0,
  edit,
  delete,
}
export interface Recipe {
  id: string;
  recipeName: string;
  ingredients: string;
  recipeStatus: Status;
}
export interface Recipes {
  recipe: Recipe[];
}
const initialState: Recipes = {
  recipe: [],
};

export const recipeSlice = createSlice({
  name: "recipe",
  initialState,
  reducers: {
    addRecipe: (
      state,
      action: PayloadAction<{ recipeName: string; ingredients: string }>
    ) => {
      const r = {
        id: uuidv4(),
        recipeName: action.payload.recipeName,
        ingredients: action.payload.ingredients,
        recipeStatus: Status.add,
      };
      state.recipe.push(r);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addRecipe } = recipeSlice.actions;

export default recipeSlice.reducer;
