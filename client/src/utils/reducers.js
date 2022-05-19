// commented out in favor of redux logic
//import { useReducer } from 'react';

// actions to take
import {
  UPDATE_EXERCISES,
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
  ADD_TO_CART,
  ADD_MULTIPLE_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_CART_EQUIPMENT,
  CLEAR_CART,
  TOGGLE_CART,
} from "./actions";

const defaultState = {
  exercises: [],
  cart: [],
  cartOpen: false,
  categories: [],
  currentCategory: "",
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    // if action type value is the value of `UPDATE_EXERCISES`, return a new state object with an updated exercises array
    case UPDATE_EXERCISES:
      return {
        ...state,
        exercises: [...action.exercises],
      };
    // if action type value is the value of `UPDATE_CATEGORIES`, return a new state object with an updated categories array
    case UPDATE_CATEGORIES:
      return {
        ...state,
        categories: [...action.categories],
      };
    // if action type value is the value of `UPDATE_CURRENT_CATEGORY`, return a new string instead of an array
    case UPDATE_CURRENT_CATEGORY:
      return {
        ...state,
        currentCategory: action.currentCategory,
      };
    // UI Cart case
    case ADD_TO_CART:
      return {
        ...state,
        cartOpen: true,
        cart: [...state.cart, action.exercise],
      };
    // add multiple to cart
    case ADD_MULTIPLE_TO_CART:
      return {
        ...state,
        cart: [...state.cart, ...action.exercises],
      };
    // Remove from cart
    case REMOVE_FROM_CART:
      let newState = state.cart.filter((exercise) => {
        return exercise._id !== action._id;
      });

      return {
        ...state,
        cartOpen: newState.length > 0,
        cart: newState,
      };
    case UPDATE_CART_EQUIPMENT:
      return {
        ...state,
        cartOpen: true,
        cart: state.cart.map((exercise) => {
          if (action._id === exercise._id) {
            exercise.addingEquipment = action.addingEquipment;
          }
          return exercise;
        }),
      };

    case CLEAR_CART:
      return {
        ...state,
        cartOpen: false,
        cart: [],
      };

    case TOGGLE_CART:
      return {
        ...state,
        cartOpen: !state.cartOpen,
      };

    // if no changes, leave as default values
    default:
      return state;
  }
};

export default reducer;

// commented out in favor of redux logic
// export function useProductReducer(initialState) {
//   return useReducer(reducer, initialState);
// }
