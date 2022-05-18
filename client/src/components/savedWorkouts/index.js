import React from "react";
import {
    Container,
    Card,
    Button,
    Jumbotron,
    CardColumns
} from "react-bootstrap";
import Auth from "../../utils/auth";
// import { removeWorkoutId } from "../utils/localStorage"; no localstorage created yet (will be using indexdb instead)
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_USER } from "../../utils/queries";
import { REMOVE_WORKOUT } from "../../utils/mutations";

const SavedWorkouts = () => {
    const { loading, data } = useQuery(QUERY_USER);
    const [removeWorkout] = useMutation(REMOVE_WORKOUT);
    const userData = data?.user.savedWorkouts || {};

      // create function that accepts the workout's mongo _id value as param and deletes the workout from the database
      const handleDeleteWorkout = async (workoutId) => {
        const token = Auth.loggedIn() ? Auth.getToken() : null;

        if (!token) {
          return false;
        }

    // try {
    //   await removeWorkout({
    //     variables: { workoutId },
    //   });

    //   removeWorkoutId(workoutId);
    // } catch (err) {
    //   console.error(err);
    // }
    // };

      if (loading) {
        return <h2>LOADING...</h2>;
      }
    }
    return (
        <>
            <Jumbotron fluid className="text-light bg-dark">
                <Container>
                    <h1>Viewing saved workouts!</h1>
                </Container>
            </Jumbotron>
            <Container>
                {/* TODO app does not like the savedWorkouts.length. gotta fix this  */}
                {<h2>
                    {userData.savedWorkouts.length
                        ? `Viewing ${userData.savedWorkouts.length} saved ${userData.savedWorkouts.length === 1 ? "workout" : "workouts"
                        }:`
                        : "You have no saved workouts!"}
                </h2>}
                <CardColumns>
                    {userData.savedWorkouts.map((workout) => {
                        return (
                            <Card key={workout.workoutId} border="dark">
                                {workout.image ? (
                                    <Card.Img
                                        src={workout.image}
                                        alt={`The cover for ${workout.name}`}
                                        variant="top"
                                    />
                                ) : null}
                                {/* <Card.Body>
                  <Card.Title>{workout.name}</Card.Title>
                  <p className="small">Workouts: {workout.bodyParts}</p>
                  <Card.Text>{workout.equipment}</Card.Text>
                  <Button
                    className="btn-block btn-danger"
                    onClick={() => handleDeleteWorkout(workout.workoutId)}
                  >
                    Delete this Workout!
                  </Button>
                </Card.Body> */}
                            </Card>
                        );
                    })}
                </CardColumns>
            </Container>
        </>
    );
}


export default SavedWorkouts;
