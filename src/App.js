import React from "react";
import signin from "./pages/Signin";
import signup from "./pages/SignUp";
import Home from "./pages/Home";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/signin' component={signin} />
        <Route exact path='/signup' component={signup} />
      </Switch>
    </Router>
  );
}

export default App;
