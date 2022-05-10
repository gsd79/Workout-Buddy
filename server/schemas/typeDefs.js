const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Category {
    _id: ID
    name: String
  }

  type Exercise {
    _id: ID
    bodyPart: String
    equipment: String 
    gifUrl: String
    name: String  
    target: String 
  }

  type Workout {
    _id: ID
    name: String
    workouts: [Exercise]
  }

  type User {
    _id: ID
    username: String  
    email: String
    password: String
    savedworkouts: [Workout]
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    categories: [Category]
    exercise( 
      name: String, 
      equipment: String,
      bodyPart: String,
      target: String
      ): Exercise
    exercises: [Exercise]
    workouts: [Workout]
    user: User
    users: [User]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    addWorkout(workouts: [ID]!): Workout
    removeWorkout: Workout
    addExercise: Exercise
    removeExercise: Exercise
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
