import React from "react";
<<<<<<< HEAD
// import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    ({
      method: "POST",
      url: "http://localhost:3000/send",
      data: this.state,
    }).then((response) => {
      if (response.data.status === "success") {
        alert("Message Sent.");
        this.resetForm();
      } else if (response.data.status === "fail") {
        alert("Message failed to send.");
      }
    });
  }

  //   resetForm(){
  //     this.setState({name: ‘’, email: ‘’, message: ‘’})
  //   }

  render() {
    return (
      <div className="App">
        <form
          id="contact-form"
          onSubmit={this.handleSubmit.bind(this)}
          method="POST"
        >
          <div className="form-group">
            <label htmlFor="name">Workout Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={this.state.name}
              onChange={this.onNameChange.bind(this)}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Notes</label>
            <textarea
              className="form-control"
              rows="5"
              id="message"
              value={this.state.message}
              onChange={this.onMessageChange.bind(this)}
            />
          </div>
          <button type="Add Workout" className="btn btn-primary">
            Add Workout
          </button>
        </form>
      </div>
    );
  }

  onNameChange(event) {
    this.setState({ name: event.target.value });
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value });
  }
}

export default App;
=======
import {
  Container,
  Card,
  Button,
  Jumbotron,
  CardColumns
} from "react-bootstrap";
import Auth from "../utils/auth";
// import { removeWorkoutId } from "../utils/localStorage"; no localstorage created yet (will be using indexdb instead)
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";
import { REMOVE_WORKOUT } from "../utils/mutations";

const SavedWorkouts = () => {
  const { loading, data } = useQuery(QUERY_USER);
  const [removeWorkout] = useMutation(REMOVE_WORKOUT);
  const userData = data?.user || {};

//   // create function that accepts the workout's mongo _id value as param and deletes the workout from the database
//   const handleDeleteWorkout = async (workoutId) => {
//     const token = Auth.loggedIn() ? Auth.getToken() : null;

//     if (!token) {
//       return false;
//     }

    // try {
    //   await removeWorkout({
    //     variables: { workoutId },
    //   });

    //   removeWorkoutId(workoutId);
    // } catch (err) {
    //   console.error(err);
    // }
  // };

//   if (loading) {
//     return <h2>LOADING...</h2>;
//   }

  return (
    <>
      <Jumbotron fluid className="text-light bg-dark">
        <Container>
          <h1>Viewing saved workouts!</h1>
        </Container>
      </Jumbotron>
      <Container>
        {/* TODO app does not like the savedWorkouts.length. gotta fix this  */}
        { <h2>
          {userData.savedWorkouts.length
            ? `Viewing ${userData.savedWorkouts.length} saved ${
                userData.savedWorkouts.length === 1 ? "workout" : "workouts"
              }:`
            : "You have no saved workouts!"}
        </h2> }
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
>>>>>>> d9c376c1afe6ae0e49ae5e60e79b2b4c379cadf6
