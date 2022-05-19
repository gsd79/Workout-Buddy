import React from "react";
import {Container} from "react-bootstrap";
import Auth from "../utils/auth";

import { useQuery, useMutation } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";
import { QUERY_WORKOUT } from "../utils/queries";
import { REMOVE_WORKOUT } from "../utils/mutations";
import { useSelector } from "react-redux";
import { useLazyQuery } from "@apollo/client";



const SavedWorkouts = () => {
    const { loading, data } = useQuery(QUERY_USER);

    // const [removeWorkout] = useMutation(REMOVE_WORKOUT);
    const [getWorkout] = useLazyQuery(QUERY_WORKOUT);
    const userData = data?.user.savedWorkouts || {};

      // // create function that accepts the workout's mongo _id value as param and deletes the workout from the database
      const handleDeleteWorkout = async (workoutId) => {
        const token = Auth.loggedIn() ? Auth.getToken() : null;

        if (!token) {
          return false;
        }

      }

        const state = useSelector((state) => {
          return state;
        })

  // try {
  //     await removeWorkout({
  //       variables: { workoutId },
  //     });

  //     removeWorkoutId(workoutId);
  //   } catch (err) {
  //     console.error(err);
  //   }


      // if (loading) {
      //   return <h2>LOADING...</h2>;
      // }

      const workoutIds = [];
    
        // getWorkout({
        //   variables: { exercises: workoutIds },
        // });
        // console.log(count++);
    // console.log(workoutIds);    
    // console.log(data);    
    // console.log(userData);
    
    return (
      

        <>
            
                <Container>
                    Viewing saved workouts!
                
                {/* TODO app does not like the savedWorkouts.length. gotta fix this  */}
                {<h2>
                    {workoutIds.length > 0
                        ? `Viewing ${userData.workoutIds.length} saved ${userData.workoutIds.length === 1 ? "workout" : "workouts"
                        }:`
                        : "You have no saved workouts!"}
                </h2>}
            
            </Container>
        </>
    );
                                
                    }
                    
                  
export default SavedWorkouts;
