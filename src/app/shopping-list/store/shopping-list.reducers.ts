import { Ingredient } from "../../shared/ingredient.model";
import * as ShoppingLsActionsType from "./shopping-list.actions";

export const initialState = {
  ingredients: [new Ingredient("Apples", 5), new Ingredient("Tomatoes", 10)]
};

export function shoppingListReducer(
  state = initialState,
  action: ShoppingLsActionsType.ShoppingListActionsType
) {
  switch (action.type) {
    case ShoppingLsActionsType.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload]
      };

    case ShoppingLsActionsType.ADD_INGREDIENTS:
      return {
        ...state,
        ingredients: [...state.ingredients, ...action.payload]
      };

    case ShoppingLsActionsType.DELETE_INGREDIENT:
      state.ingredients.splice(action.payload, 1);
      return {
        ...state,
        ingredients: [...state.ingredients]
      };

    case ShoppingLsActionsType.UPDATE_INGREDIENT:
      const ingr = state.ingredients[action.payload.index];
      const updatedngredient = {
        ...ingr,
        ...action.payload.ingredient
      };
      state.ingredients[action.payload.index] = updatedngredient;
      return {
        ...state,
        ingredients: [...state.ingredients]
      };

    default:
      return state;
  }
}
