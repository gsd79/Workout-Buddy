import { gql } from '@apollo/client';


export const QUERY_USER = gql`
  {
    user {
      _id
      username
      email
      savedworkouts {
        _id
        excercise {
          bodyPart
          equipment
          gifUrl
          id 
          name
          target
          _id
        }
      }
    }
  }
`;

export const QUERY_USER_BRIEF = gql`
query user($username: String!) {
  user(username: $username) {
    _id
    username
  }
}`

export const QUERY_WORKOUT = gql `
query workout($id: ID!) {
  workout(_id: $id) {
    _id
    name
    exercises {
      _id
      bodyPart
      equipment
      gifUrl
      name
      target
    }
  }
}`

export const QUERY_CATEGORY = gql`
  {
    categories {
      _id
      name
    }
  }
`;

