import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "../components/login";
import Home from "../components/home";
import Description from "../components/description";
import Wrapper from "../components/wrapper";
import Checkout from "../components/checkout";
import Profile from "../components/profile";

export default function Dashboard() {
  const [state, setState] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(display-mode: standalone)").matches) {
      console.log("qwer");
    } else {
      console.log("zxcv");
    }
  }, []);

  const onProfileShow = (isOpen) => {
    setState(isOpen);
  };

  return (
    <Router>
      <Profile isOpen={state} onOpenChange={onProfileShow} />
      <Switch>
        <Route path="/login" component={Login} />
      </Switch>
      <Wrapper onOpenChange={onProfileShow} >
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/description/:id" component={Description} />
          <Route path="/checkout" component={Checkout} />
        </Switch>
      </Wrapper>
    </Router>
  );
}
