import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Home from "./pages/Home";

import SavedWorkouts from "./pages/SavedWorkouts";
import AppNavbar from "./components/Navbar/Navbar";
import WorkoutPlan from "./components/WorkPlans/WorkoutPlan";
import Footer from "./components/Footer/Footer";
import ProgressBar from "./components/Progress/ProgressBar";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <>
          <AppNavbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/saved" component={SavedWorkouts} />
            <Route exact path="/plans" component={WorkoutPlan} />
            <Route exact path="/progress" component={ProgressBar} />
            <Route
              render={() => <h1 className="display-2">Oops, wrong page!</h1>}
            />
          </Switch>
          <Footer />
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;
