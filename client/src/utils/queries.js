import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  {
    user {
      username
      email
      savedworkouts {
        _id
        workoutDate
        excercises {
          _id
          bodyPart
          equipment
          gifUrl
          target
          name
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
  }
`;

// export const QUERY_WORKOUT = gql`
//   query workout($id: ID!) {
//     workout(_id: $id) {
//       _id
//       name
//       exercises {
//         _id
//         bodyPart
//         equipment
//         gifUrl
//         name
//         target
//       }
//     }
//   }
// `;

//query exercise (add and remove)

export const QUERY_CATEGORIES = gql`
  {
    categories {
      _id
      name
    }
  }
`;

export const QUERY_EXERCISES = gql`
  query exercise {
    exercises {
      _id
      bodyPart
      equipment
      gifUrl
      target
      name
    }
    categories {
      _id
      name
    }
  }
`;

export const GET_ME = gql`
  {
    me {
      _id
      username
      email
      workoutCount
      savedWorkouts {
        workoutId
        bodyParts
        name
        equipment
        gifUrl
        target
      }
    }
  }
`;

export const QUERY_WORKOUT = gql`
  query getWorkout($exercises: [ID]!) {
    checkout(exercises: $exercises) {
      session
    }
  }
`;
