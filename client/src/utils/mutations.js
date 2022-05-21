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
  mutation addWorkout($name: String!) {
    addWorkout(name: $name) {
      _id
      name 
      exercises{
        name
      }     
    }
  }
`;

//remove workout and exercises in it
export const REMOVE_WORKOUT = gql`
  mutation removeWorkout($workout_id: ID!, $user_id: ID!) {
    removeWorkout(workout_id: $workout_id, user_id: $user_id){
    exercises {
      bodyPart
      equipment
      gifUrl
      id
      name
      target
    }
  }
}`



//add exercise

export const ADD_EXERCISE = gql`
  mutation addExercise($workout:ID!, $exercises: ID!) {
    addExercise(workoutId:$id, exerciseid: $exerciseid){
    workout{
    _id
    name
    exercises {
      bodyPart
      equipment
      gifUrl
      id
      name
      target
    }
  }
  }
  }
`;

//remove exercise
export const REMOVE_EXERCISE = gql`
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
  }
}
}
`;
