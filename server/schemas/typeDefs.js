const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Category {
    _id: ID
    name: String
  }

  type Exercise {
 bodyPart: String
 equipment: String 
 gifUrl: String
 id: String 
 name: String  
 target: String 
 _id: ID
  }

  type Workout {
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
    workouts(category: ID, name: String): [Workout]
    workouts(_id: ID!): Workout
    user: User
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    saveWorkout(workouts: [ID]!): Workout
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
