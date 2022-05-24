import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;
export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_WORKOUT = gql`
<<<<<<< HEAD
<<<<<<< Updated upstream
  mutation addWorkout($workouts: String!) {
    addWorkout(name: $workouts) {
=======
  mutation addWorkout($name: String!) {
    addWorkout(name: $name) {
>>>>>>> Stashed changes
      _id
      name
=======
  mutation addWorkout($exercises: [ID]!) {
    addWorkout(exercises: $exercises) {
      workoutDate
      exercises {
        bodyPart
        equipment
        id
        name
<<<<<<< Updated upstream
=======
      }     
=======
<<<<<<< HEAD
  mutation addWorkout($workouts: String!) {
    addWorkout(name: $workouts) {
      _id
      name
=======
  mutation addWorkout($exercises: [ID]!) {
    addWorkout(exercises: $exercises) {
      workoutDate
      exercises {
        bodyPart
        equipment
        id
        name
>>>>>>> Stashed changes
        target
        category {
          name
        }
      }
>>>>>>> d9c376c1afe6ae0e49ae5e60e79b2b4c379cadf6
<<<<<<< Updated upstream
=======
>>>>>>> ea10be63558a190f8a7210da8b8657c8884b1d8d
>>>>>>> Stashed changes
    }
  }
`;

//remove exercises in it
export const REMOVE_WORKOUT = gql`
  mutation removeWorkout($name: String!, $id: ID!) {
    user {
      _id
    }
    exercises {
      bodyPart
      equipment
      gifUrl
      id
      name
      target
    }
  
}`

<<<<<<< HEAD
//add exercise
export const ADD_EXERCISE_TO_WORKOUT = gql`
  mutation addExerciseToWorkout($id: ID!) {
    workouts {
      _id
      name
    }
    exercises {
      _id
      name
    }
  }
`;

//remove exercise
export const REMOVE_EXERCISE_TO_WORKOUT = gql`
  mutation removeExerciseToWorkout($id: ID!) {
    workouts {
      _id
    }
    exercises {
      _id
=======


//add exercise

export const ADD_EXERCISE = gql`
  mutation addExercise($name: String!, $id: ID!) {
    user {
      _id
    }
    exercises {
      bodyPart
      equipment
      gifUrl
      id
      name
      target
    }
  }
`;

//remove exercise
export const REMOVE_EXERCISE = gql`
<<<<<<< Updated upstream
=======
<<<<<<< HEAD
mutation removeExercise($_id:ID!, $exercises: ID!) {
  removeExercise(_id:$id, exerciseid: $exerciseid){
  _id
  name
  exercises {
    bodyPart
    equipment
    gifUrl
    id
    name
    target
=======
>>>>>>> Stashed changes
  mutation removeExercise($name: String!, $id: ID!) {
    user {
      _id
    }
    exercises {
      bodyPart
      equipment
      gifUrl
      id
      name
      target
>>>>>>> d9c376c1afe6ae0e49ae5e60e79b2b4c379cadf6
    }
<<<<<<< Updated upstream
=======
>>>>>>> ea10be63558a190f8a7210da8b8657c8884b1d8d
>>>>>>> Stashed changes
  }
`;
