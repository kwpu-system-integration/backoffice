import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./landingpage";
import Payment from "./payment";
import SignIn from "./signin";
import AdditionalUserForm from "./addtionUserForm";

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/payment" component={Payment} />
    <Route path="/signin" component={SignIn} />
    <Route path="/additional" component={AdditionalUserForm} />
    <Route path="/auth/google/callback" component={SignIn} />
  </Switch>
);

export default Main;
