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
    category: Category
  }

  type Workout {
    _id: ID
    workoutDate: String
    exercises: [Exercise]
  }

  type User {
    _id: ID
    username: String
    email: String
    workouts: [Workout]
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    categories: [Category]
    exercises(category: ID, name: String): [Exercise]
    exercise(_id: ID!): Exercise
    user: User
    workout(_id: ID!): Workout
    checkout(exercises: [ID]!): Checkout
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    addWorkout(exercises: [ID]!): Workout
    updateUser(username: String, email: String, password: String): User
    updateExercise(_id: ID!, target: String!): Exercise
    login(email: String!, password: String!): Auth
  }

  type Checkout {
    session: ID
  }
`;

module.exports = typeDefs;
