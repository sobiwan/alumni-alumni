import React from "react";
import { Route, Switch } from "react-router-dom";
import Entrance from "../components/screens/Entrance";
import TrophyRoom from "../components/screens/TrophyRoom";

export default () => (
  <Switch>
    <Route exact path="/" component={Entrance} />
    <Route exact path="/trophy-room" component={TrophyRoom} />
  </Switch>
);
