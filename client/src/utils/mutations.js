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
  mutation addWorkout($exercises: [ID]!) {
    addWorkout(exercises: $exercises) {
      workoutDate
      exercises {
        bodyPart
        equipment
        id
        name
        target
        category {
          name
        }
      }
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
  }
`;

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
    }
  }
`;
