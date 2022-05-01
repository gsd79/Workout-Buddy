const { gql } = require('apollo-server-express');


// TODO: Category: different difficulty, part of body, length??
//TODO: Query/Mutations how to set up?
const typeDefs = gql`
  type Category {
    _id: ID
    name: String
     
  }

  type Workout {
    _id: ID
    name: String
    description: String
    image: String
    difficulty: Int
    Reps: Int
    category: Category
  }

  type excercise {
    _id: ID
    name: String
    description: String
    image: String
    difficulty: Int
    Reps: Int
    category: Category
  }
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    orders: [Order]
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    categories: [Category]
    products(category: ID, name: String): [Product]
    product(_id: ID!): Product
    user: User
    order(_id: ID!): Order
    checkout(products: [ID]!): Checkout
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