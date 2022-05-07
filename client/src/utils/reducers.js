// TODO: ASK ABOUT HOW TO ORGANIZE REDUCERS

import { useReducer } from "react";
import {
  UPDATE_USER, 
  ADD_WORKOUT, 
  ADD_REPS, 
  REMOVE_WORKOUT, 
  ADD_CALORIES,
  REMOVE_CALORIES, 
  ADD_WATER,
  REMOVE_WATER, 
  REMOVE_ALL, 
  TOGGLE_PROGRESS
} from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
      case UPDATE_USER:
      return {
        ...state,
        user: [...action.user],
      };

    case ADD_WORKOUT:
      return {
        ...state,
        progressOpen: true,
        progress: [...state.progress, action.workout],
      };

    case ADD_REPS:
      return {
        ...state,
        progressOpen: true,
        progress: state.progress.map(workout => {
          if (action._id === workout._id) {
            workout.repAmt = action.repAmt
          }
          return workout
        })
      };

    // case REMOVE_WORKOUT:
    //   let newState = state.progress.filter(workout => {
    //     return workout._id !== action._id;
    //   });

      return {
        ...state,
        progressOpen: newState.length > 0,
        cart: newState
      };

      case ADD_CALORIES:
        return {
          ...state,
          progressOpen: true,
          progress: [...state.progress, action.calories],
        };  

      // case REMOVE_CALORIES:
      //   let newState = state.progress.filter(calories => {
      //     return calories._id !== action._id;
      //   });
      //   return {
      //     ...state,
      //     progressOpen: newState.length > 0,
      //     cart: newState
      //   };    

      case ADD_WATER:
        return {
          ...state,
          progressOpen: true,
          progress: [...state.progress, action.water],
        };  

      case REMOVE_WATER:
        let newState = state.progress.filter(water => {
          return water._id !== action._id;
        });
        return {
          ...state,
          progressOpen: newState.length > 0,
          cart: newState
        };    

    case REMOVE_ALL:
      return {
        ...state,
        progressOpen: false,
        progress: []
      };

    case TOGGLE_PROGRESS:
      return {
        ...state,
        progressOpen: !state.progressOpen
      };

    
    default:
      return state;
  }
};

export function useProgressReducer(initialState) {
  return useReducer(reducer, initialState)
}