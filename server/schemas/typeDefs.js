const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    me: User
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveWorkout(workoutWorkout: InputWorkout!): User
    removeWorkout(workoutId: ID!): User
  }
  type User {
    _id: ID!
    username: String!
    email: String!
    workoutCount: Int
    savedWorkouts: [Workout]
  }
  type Workout {
    bodyPart: String!
    equipment: String!
    gifUrl: String!
    id: String!
    name: String!
    target: String!
  }
  input InputWorkout {
    bodyPart: String!
    equipment: String!
    gifUrl: String!
    id: String!
    name: String!
    target: String!
  }
  type Auth {
    token: ID!
    user: User
  }
`;

module.exports = typeDefs;
