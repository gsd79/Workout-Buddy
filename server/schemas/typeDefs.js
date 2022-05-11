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
    exercises: [Exercise]
  }

  type User {
    _id: ID
    username: String  
    email: String
    password: String
    savedWorkouts: [Workout]
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    categories: [Category]
    exerciseByName(name: String!): Exercise
    exerciseByOther(
      equipment: String,
      bodyPart: String,
      target: String
      ): [Exercise]
    exercises: [Exercise]
    workout(_id:ID): Workout
    workouts(username: String): User
    user: User
    users: [User]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    addWorkout(name: String!): Workout
    removeWorkout: User
    addExercise(_id: ID!, exerciseid: ID!): Workout
    removeExercise: Exercise
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
