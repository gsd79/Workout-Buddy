import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
<<<<<<< HEAD
// import CreateWorkouts from "./pages/CreateWorkouts";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CreateWorkouts from "./pages/CreateWorkouts"
=======
// import SearchWorkouts from "./pages/SearchWorkouts";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
>>>>>>> d9c376c1afe6ae0e49ae5e60e79b2b4c379cadf6
// import WorkoutPlan from "./components/WorkPlans/WorkoutPlan";
// import ProgressBar from "./components/Progress/ProgressBar";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      //TODO are the `Bearer ${token}` the API key hidden in the .env??
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
        <Header/>
          
          <Switch>
            <Route exact path="/" component={Home} />
<<<<<<< HEAD
            <Route exact path="/plans" component={CreateWorkouts} />
=======
            {/* <Route exact path="/plans" component={SearchWorkouts} /> */}
>>>>>>> d9c376c1afe6ae0e49ae5e60e79b2b4c379cadf6
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/profile" component={Profile} />
            {/* <Route exact path="/progress" component={ProgressBar} /> */}
            <Route
              render={() => <h1 className="display-2">Oops, wrong page!</h1>}
            />
          </Switch>
          <Footer/>
        
      </Router>
    </ApolloProvider>
  );
}

export default App;