import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query user($_id: ID!) {
    user (_id: $_id) {
      _id
      username
      email
      password
      savedWorkouts {
        name
        _id
      }
    }
  }
`;

// query all users
export const QUERY_USERS = gql`
  query users {
    users {
      _id
      username
      email
      savedWorkouts{
        name
        _id
      }
    }
  }
`;

// query all workouts for user
export const QUERY_WORKOUT = gql`
  query workout($_id: ID) {
    workout(_id: $_id) {
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
  }
`;
export const QUERY_WORKOUTS = gql`
  query workouts($username: String!) {
    workouts(username: $username) {
      savedWorkouts{
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
    }
    }
`;

// query all exercises
export const QUERY_EXERCISE= gql `
query exercises {
  exercises {
    _id
    bodyPart
    equipment
    gifUrl
    name
    target 
  }
}
`;

// search for exercise by name
export const QUERY_EXERCISE_NAME = gql`
  query exercise($Name: String!) {
    exerciseByName(name: $name) {
      _id
      bodyPart
      equipment
      gifUrl
      name
      target
    }
  }
`;

// search for exercise by equipment
export const QUERY_EQUIPMENT = gql`
  query exercise($Name: String!) {
    exerciseByOther(equipment: $ID) {
      _id
      bodyPart
      equipment
      gifUrl
      name
      target
    }
  }
`;

// search for exercise by bodypart
export const QUERY_BODYPART = gql`
  query exercise($Name: String!) {
    exerciseByOther(bodyPart: $ID) {
      _id
      bodyPart
      equipment
      gifUrl
      name
      target
    }
  }
`;

// query exercise by target
export const QUERY_TARGET = gql`
  query exercise($Name: String!) {
    exerciseByOther(target: $ID) {
      _id
      bodyPart
      equipment
      gifUrl
      name
      target    
  }
}`


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

