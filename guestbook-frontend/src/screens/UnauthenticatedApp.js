import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";

import Login from "./Login";
import Signup from "./Signup";

function UnauthenticatedApp() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/signup" exact component={Signup} />
        <Route component={Login} />
      </Switch>
    </BrowserRouter>
  );
}

export default UnauthenticatedApp;
