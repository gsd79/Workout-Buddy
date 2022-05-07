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
    $firstName: String!
    $userName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      userName: $userName
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

export const ADD_WORKOUT = gql`
mutation addWorkout($user: [ID]!) {
  addOrder(products: $products) {
      purchaseDate
      products {
        _id
        username
      }
    }
  }
`;


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
