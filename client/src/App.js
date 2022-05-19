import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Detail from "./pages/Detail";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import WorkoutPlan from "./components/WorkPlans/WorkoutPlan";
// import ProgressBar from "./components/Progress/ProgressBar";
// redux hook and store
import { Provider } from "react-redux";
import store from "./redux/store";
import WorkoutPlan from "./components/WorkPlans/WorkoutPlan";
import SavedWorkouts from "./pages/SavedWorkouts";
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
        <Header />
        <div>
          {/*<StoreProvider>*/}
          <Provider store={store}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/plans" component={WorkoutPlan} />
              <Route exact path="/saved" component={SavedWorkouts} />
              <Route exact path="/exercises/:id" component={Detail} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/profile" component={Profile} />
              {/* <Route exact path="/progress" component={ProgressBar} /> */}
              <Route
                render={() => <h1 className="display-2">Oops, wrong page!</h1>}
              />
            </Switch>
          </Provider>
          {/*</StoreProvider>*/}
        </div>
        <Footer />
      </Router>
    </ApolloProvider>
  );
}
export default App;
