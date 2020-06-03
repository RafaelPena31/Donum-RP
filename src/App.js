import React from "react";
import { HomePage } from "./screens/homepage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles/standart.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
