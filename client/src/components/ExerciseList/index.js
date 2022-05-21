import React, { useEffect } from "react";
// commented out in favor of redux logic
//import { useStoreContext } from '../../utils/GlobalState';
import { useDispatch, useSelector } from "react-redux";
import { UPDATE_EXERCISES } from "../../utils/actions";
import { useQuery } from "@apollo/client";

import ExerciseItem from "../ExerciseItem";
import { QUERY_EXERCISES } from "../../utils/queries";
import spinner from "../../assets/img/spinner.gif";

//import IndexDB helper which will allow the app to talk
// to the database
import { idbPromise } from "../../utils/helpers";

// currentCategory props is no longer used as is part of the
//function ExerciseList({ currentCategory }) {
// global state

function ExerciseList({ categoryId }) {
  // commented out in favor of redux logic
  //const [state, dispatch] = useStoreContext();
  const state = useSelector((state) => {
    return state;
  });

  const dispatch = useDispatch();

  const { loading, data } = useQuery(QUERY_EXERCISES);

  //const exercises = data?.exercises || [];

  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_EXERCISES,
        exercises: data.exercises,
      });

      // but let's also take each exercise and save it to IndexedDB using the helper function
      data.exercises.forEach((exercise) => {
        idbPromise("exercises", "put", exercise);
      });
    } else if (!loading) {
      idbPromise("exercises", "get").then((exercises) => {
        // use retrieved data to set global state for offline browsing
        console.log("I am offline");
        dispatch({
          type: UPDATE_EXERCISES,
          exercises: exercises,
        });
      });
    }
  }, [loading, data, dispatch]);

  function filterExercises() {
    if (!categoryId) {
      return state.exercises;
    }

    return state.exercises.filter(
      (exercise) => exercise.bodyPart === categoryId
    );

    // console.log("State.Exercises ", state.exercises);

    // var filterResult = state.exercises.filter(function (exercise) {
    //   return exercise.bodyPart === categoryId;
    // });

    // console.log("FilterResult", filterResult);
  }

  return (
    <div>
      <h2> Exercises:</h2>
      {state.exercises.length ? (
        <div className="flex-row">
          {filterExercises().map((exercise) => (
            <ExerciseItem
              key={exercise._id}
              _id={exercise._id}
              gifUrl={exercise.gifUrl}
              name={exercise.name}
              target={exercise.target}
              equipment={exercise.equipment}
            />
          ))}
        </div>
      ) : (
        <h3>You haven't added any exercises yet!</h3>
      )}
      {loading ? <img src={spinner} alt="loading" /> : null}
    </div>
  );
}

export default ExerciseList;
