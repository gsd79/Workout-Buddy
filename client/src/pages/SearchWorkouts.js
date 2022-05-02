import React, { useState, useEffect } from "react";
import {
  Jumbotron,
  Container,
  Col,
  Form,
  Button,
  Card,
  CardColumns,
} from "react-bootstrap";
import Auth from "../utils/auth";
import { saveWorkoutIds, getSavedWorkoutIds } from "../utils/localStorage";
import { useMutation } from "@apollo/client";
import { SAVE_WORKOUT } from "../utils/mutations";

const SearchWorkouts = () => {
  const [searchedWorkouts, setSearchedWorkouts] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [savedWorkoutIds, setSavedWorkoutIds] = useState(getSavedWorkoutIds());

  const [saveWorkout] = useMutation(SAVE_WORKOUT);

  useEffect(() => {
    return () => saveWorkoutIds(savedWorkoutIds);
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!searchInput) {
      return false;
    }

    try {
      const response = await fetch(
        `https://wger.de/api/v2/exerciseinfo/?limit=20&offset=20${searchInput}` //<--This is in case we can find a search API instead of using seeds -->
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const { items } = await response.json();

      const workoutData = items.map((workout) => ({
        workoutId: workout.id,
        bodyParts: workout.volumeInfo.bodyParts || ["No author to display"],
        name: workout.volumeInfo.name,
        equipment: workout.volumeInfo.equipment,
        image: workout.volumeInfo.imageLinks?.thumbnail || "",
      }));

      setSearchedWorkouts(workoutData);
      setSearchInput("");
    } catch (err) {
      console.error(err);
    }
  };

  const handleSaveWorkout = async (workoutId) => {
    const workoutToSave = searchedWorkouts.find(
      (workout) => workout.workoutId === workoutId
    );
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      await saveWorkout({
        variables: { workoutWorkout: { ...workoutToSave } },
      });

      setSavedWorkoutIds([...savedWorkoutIds, workoutToSave.workoutId]);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Jumbotron fluid className="text-light bg-dark">
        <Container>
          <h1>Search for Workouts-search bar!</h1>
          <Form onSubmit={handleFormSubmit}>
            <Form.Row>
              <Col xs={12} md={8}>
                <Form.Control
                  name="searchInput"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  type="text"
                  size="lg"
                  placeholder="Search for a workout"
                />
              </Col>
              <Col xs={12} md={4}>
                <Button type="submit" variant="success" size="lg">
                  Submit Search
                </Button>
              </Col>
            </Form.Row>
          </Form>
        </Container>
      </Jumbotron>

      <Container>
        <h2>
          {searchedWorkouts.length
            ? `Viewing ${searchedWorkouts.length} results:`
            : "Search for a workout to begin"}
        </h2>
        <CardColumns>
          {searchedWorkouts.map((workout) => {
            return (
              <Card key={workout.workoutId} border="dark">
                {workout.image ? (
                  <Card.Img
                    src={workout.image}
                    alt={`The cover for ${workout.name}`}
                    variant="top"
                  />
                ) : null}
                <Card.Body>
                  <Card.Title>{workout.name}</Card.Title>
                  <p className="small">Body Parts: {workout.bodyParts}</p>
                  <Card.Text>{workout.equipment}</Card.Text>
                  {Auth.loggedIn() && (
                    <Button
                      disabled={savedWorkoutIds?.some(
                        (savedWorkoutId) => savedWorkoutId === workout.workoutId
                      )}
                      className="btn-block btn-info"
                      onClick={() => handleSaveWorkout(workout.workoutId)}
                    >
                      {savedWorkoutIds?.some(
                        (savedWorkoutId) => savedWorkoutId === workout.workoutId
                      )
                        ? "This workout has already been saved!"
                        : "Save this Workout!"}
                    </Button>
                  )}
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns>
      </Container>
    </>
  );
};

export default SearchWorkouts;
