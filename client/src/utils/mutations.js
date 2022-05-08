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
mutation addUser($username: String!, $email: String!, $password: String!) {
  addUser(username: $username, email: $email, password: $password) {
    token
    user {
      _id
    }
  }
}
`;

export const SAVE_WORKOUT = gql`
mutation saveWorkout($name: String!, $id: ID!) {
  exercises{
    bodyPart
    equipment
    gifUrl
    id
    name
    target
  }
  user{
    _id
  }
}`


export const REMOVE_WORKOUT = gql `
mutation removeWorkout($name: String!, $id: ID!) {
  user{
    _id
  }
}`