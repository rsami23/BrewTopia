import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import About from "./pages/About";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/signup" component={ Signup } />
        <Route exact path="/login" component={ Login } />
        <Route exact path="/about" component={ About } />
      </Switch>
      <Footer />
    </div>
  </Router>
)

export default App;
