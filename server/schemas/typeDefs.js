const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Category {
    _id: ID
    name: String
  }

  type Workout {
 bodyPart: String
 equipment: String 
 gifUrl: String
 id: String 
 name: String  
 target: String 
  }

  type workouts {
    _id: ID
    workouts: [Workout]
  }

  type User {
    _id: ID
   username: String  
   email: String
   password: String
   savedworkouts: []
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
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveWorkout(workoutWorkout: InputWorkout!): User
    removeWorkout(workoutId: ID!): User
  }
  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addOrder(products: [ID]!): Order
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    updateProduct(_id: ID!, quantity: Int!): Product
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
