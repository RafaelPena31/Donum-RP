import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomePage } from "./screens/homepage";
import { Register } from "./screens/registerpage";
import { Login } from "./screens/loginpage";
import { Profile } from "./screens/profile";
import { Campaign } from "./screens/campaign";
import "./styles/standart.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/Register">
          <Register />
        </Route>
        <Route exact path="/Login">
          <Login />
        </Route>
        <Route exact path="/Profile">
          <Profile />
        </Route>
        <Route exact path="/Campaign">
          <Campaign />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
