import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./landingpage";
import AboutMe from "./aboutme";
import Contact from "./contact";
import Payment from "./payment";
import SignIn from "./signin";
//import Login from "./googleLogin";

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/aboutme" component={AboutMe} />
    <Route path="/payment" component={Payment} />
    <Route path="/contact" component={Contact} />
    <Route path="/signin" component={SignIn} />
    <Route path="/auth/google/callback" component={SignIn} />
  </Switch>
);

export default Main;
