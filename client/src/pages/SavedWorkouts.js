import React from "react";
import { Container } from "react-bootstrap";
import Auth from "../utils/auth";


import { useQuery, useMutation } from "@apollo/client";
import { QUERY_WORKOUTS } from "../utils/queries";
import { REMOVE_WORKOUT } from "../utils/mutations";
import { removeWorkoutId } from "../utils/localStorage"
import "./Styles/SavedWorkouts.css"

const SavedWorkouts = () => {
  const { loading, data } = useQuery(QUERY_WORKOUTS);
  const [removeWorkout] = useMutation(REMOVE_WORKOUT, {
    update(cache, { data: { removeWorkout } }) {
      try {
        // read what's currently in the cache
        const { workouts } = cache.readQuery({ query: QUERY_WORKOUTS });
        // remove the deleted workout from the cache
        cache.writeQuery({
          query: QUERY_WORKOUTS,
          data: { workouts: workouts.filter((workout) => workout._id !== removeWorkout._id) },
        });
      } catch (err) {
        console.error(err);
      }
    },
  });

  const handleDelete = (id) => {
    removeWorkout(id);
    removeWorkoutId(id);
  };

  if (loading) return <p>Loading...</p>;
  if (!data) return <p>No data</p>;
  

// const SavedWorkouts = (user) => {
//   console.log(user);
  
//   const username = user.user.username;
//   // const userId = user.user._id;
//   // const workoutId = user.workouts.savedWorkouts._id;
  
//   const { data } = useQuery(QUERY_WORKOUTS, {
//     variables: { username }
//   });
//   console.log(username);
  
//    const [removeWorkout] = useMutation(REMOVE_WORKOUT)
//   //  , {
//   //   variables: {userId, workoutId}
//   // });
  
//   console.log(data);

//   var workouts = {};

//   if (data != null && data.workouts != null) {
//     console.log("HERE");
//     workouts = data.workouts.savedWorkouts;
//   }
  
//   const handleDeleteWorkout = async (workoutId) => {
//       const token = Auth.loggedIn() ? Auth.getToken() : null;
      
//           if (!token) {
//             return false;
//           }
  
//     try {
//       await removeWorkout({
//         variables: { workoutId },
//       });
      
//       removeWorkoutId(workoutId);
//     } catch (err) {
//       console.error(err);
//     }
//   };
  
  return (
    <>
      <Container>
        {<h2>
          {workouts.length > 0 ? `Viewing ${workouts.length} saved ${workouts.length === 1 ? "workout" : "workouts"}` : "You have no saved workouts (you should change that)"}
        </h2>}

        {workouts.length > 0 ?

          <div className="profile-flex">
            {workouts.map(workout => (
              <div key={workout._id} item={workout} border="dark">

                <h3>{workout.name} <button className="button" onClick={() => handleDeleteWorkout(workout._id)}> X</button></h3>

              </div>
            ))}
          </div>
          : null}
      </Container>
    </>
  );
}

export default SavedWorkouts;