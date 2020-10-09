import React from "react";
import { Route, Switch } from "react-router-dom";
import Init from "../components/init";

export default () => (
  <Switch>
    <Route exact path="/" component={Init} />
  </Switch>
);
