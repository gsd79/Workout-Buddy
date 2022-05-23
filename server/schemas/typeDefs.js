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
<<<<<<< HEAD
    name: String  
    target: String 
=======
    name: String
    target: String
>>>>>>> d9c376c1afe6ae0e49ae5e60e79b2b4c379cadf6
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
      target: String,
      _id: ID
      ): [Exercise]
    exercises: [Exercise]
    workout(_id:ID): Workout
    workouts(username: String): User
    user(_id: ID!): User
    users: [User]
  }
  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    addWorkout(name: String!): Workout
    removeWorkout(user_id: ID!, workout_id:ID!): Workout
    addExercise(_id: ID!, exerciseid: ID!): Workout
    removeExercise(_id: ID!, exerciseid: ID!): Workout
    login(email: String!, password: String!): Auth
  }
`;
module.exports = typeDefs;