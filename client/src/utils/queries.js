import { gql } from "@apollo/client";

export const QUERY_USER = gql`
<<<<<<< Updated upstream
  query user {
    user {
=======
<<<<<<< HEAD
  query user($_id: ID!) {
    user (_id: $_id) {
=======
  query user {
    user {
>>>>>>> ea10be63558a190f8a7210da8b8657c8884b1d8d
>>>>>>> Stashed changes
      _id
      username
      email
      password
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
    }
  }
`;

// for query current user, not using for MVP
// export const QUERY_USER_BRIEF = gql`
// query user($username: String!) {
//   user(username: $username) {
//     _id
//     username
//   }
// }`

// query all workouts for user
export const QUERY_WORKOUT = gql`
  query workouts($username: String!) {
    workouts(username: $username) {
      savedWorkouts {
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

export const QUERY_USER_BRIEF = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
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
<<<<<<< HEAD
    exerciseByName(name: $name) {
=======
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
>>>>>>> d9c376c1afe6ae0e49ae5e60e79b2b4c379cadf6
      _id
      bodyPart
      equipment
      gifUrl
      name
      target
    }
  }
`;

<<<<<<< HEAD
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

<<<<<<< Updated upstream
=======
<<<<<<< HEAD
=======
>>>>>>> Stashed changes
// search for exercise by bodypart
export const QUERY_BODYPART = gql`
  query exercise($Name: String!) {
    exerciseByOther(bodyPart: $ID) {
<<<<<<< Updated upstream
=======
      _id
      bodyPart
      equipment
      gifUrl
      name
      target
=======
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
      
>>>>>>> d9c376c1afe6ae0e49ae5e60e79b2b4c379cadf6
    }
  }
}`

<<<<<<< HEAD
// query exercise by target
export const QUERY_TARGET = gql`
  query exercise($Name: String!) {
    exerciseByOther(target: $ID) {
>>>>>>> Stashed changes
      _id
      bodyPart
      equipment
      gifUrl
      name
      target
<<<<<<< Updated upstream
=======
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
      
>>>>>>> d9c376c1afe6ae0e49ae5e60e79b2b4c379cadf6
    }
  }
}`

<<<<<<< HEAD
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
=======
>>>>>>> Stashed changes
    }
  }
`;
=======


// export const QUERY_WORKOUT = gql`
//   query getWorkout($exercises: [ID]!) {
//     checkout(exercises: $exercises) {
//       session
//     }
//   }
// `;
>>>>>>> d9c376c1afe6ae0e49ae5e60e79b2b4c379cadf6
<<<<<<< Updated upstream
=======
>>>>>>> ea10be63558a190f8a7210da8b8657c8884b1d8d
>>>>>>> Stashed changes
