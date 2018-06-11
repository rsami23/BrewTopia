import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import reducers from "./reducers";
import Home from "./pages/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Signout from "./components/Signout";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const store = createStore(
  reducers, {
    auth: { authenticated: localStorage.getItem("token") }
  },
  applyMiddleware(reduxThunk)
);

const App = () => (
  <Provider store={ store }>
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/signup" component={ Signup } />
        <Route exact path="/signin" component={ Login } />
        <Route exact path="/about" component={ About } />
        <Route exact path="/dashboard" component={ Dashboard } />
        <Route exact path="/signout" component={ Signout } />
      </Switch>
      <Footer />
    </div>
  </Router>
  </Provider>
)

export default App;
