const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const path = require("path");
<<<<<<< HEAD

const { typeDefs, resolvers } = require("./schemas");
const { authMiddleware } = require("./utils/auth");
const db = require("./config/connection");

const PORT = process.env.PORT || 3001;
=======
const { typeDefs, resolvers } = require("./schemas");
const db = require("./config/connection");
const { authMiddleware } = require("./utils/auth");
>>>>>>> d9c376c1afe6ae0e49ae5e60e79b2b4c379cadf6
const app = express();

const startServer = async () => {
<<<<<<< HEAD
  // create a new Apollo server and pass in our schema data
=======
>>>>>>> d9c376c1afe6ae0e49ae5e60e79b2b4c379cadf6
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware,
  });

  // Start the Apollo server
  await server.start();

  // integrate our Apollo server with the Express application as middleware
  server.applyMiddleware({ app });

  // log where we can go to test our GQL API
  console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
};

// Initialize the Apollo server
startServer();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

<<<<<<< HEAD
// // Serve up static assets
app.use("/images", express.static(path.join(__dirname, "../client/images")));

// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, '../client/build')));
=======
// // if we're in production, serve client/build as static assets
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "../client/build")));
>>>>>>> d9c376c1afe6ae0e49ae5e60e79b2b4c379cadf6
// }

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../client/build/index.html'));
// });

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
