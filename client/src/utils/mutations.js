import { gql } from '@apollo/client';

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
  mutation addUser(
    $username: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      username: $username
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

// export const ADD_WORKOUT = gql`
// mutation addWorkout($progress: [ID]!) {
//   addWorkout(workouts: $workout) {
//       difficulty
//       muscle groups
//       _id
//     }
//   }
// `;

// export const ADD_WORKOUT = gql`
// mutation addWorkout($progress: [ID]!) {
//   addWorkout(workouts: $workout) {
//       difficulty
//       muscle groups
//       _id
//     }
//   }
// `;


export const REMOVE_WORKOUT = gql`
  mutation removeWorkout($id: ID!) {
    removeWorkout(id: $id) {
      _id
      username
      workout {
        _id
        username
      }
    }
  }
`;
