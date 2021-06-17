import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import '../styles/modal.scss'
import Login from "../components/login";
import Home from "../components/home";
import Description from "../components/description";
import Wrapper from "../components/wrapper";
import Checkout from "../components/checkout";
import Profile from "../components/profile";
import LogoutModel from '../components/modals/logout';
import OrderPlacedModal from '../components/modals/orderPlaced';
import AddressModal from '../components/modals/addressModal';
import { useSelector } from "react-redux";

export default function Dashboard() {
  const login = useSelector((state) => state.login);
  useEffect(() => {
    // if (window.matchMedia("(display-mode: standalone)").matches) {
    //   console.log("qwer");
    // } else {
    //   console.log("zxcv");
    // }

    console.log(login);
  }, [login.username]);

  return (
    <Router>
      <LogoutModel/>
      <OrderPlacedModal/>
      <AddressModal/>
      <Profile />
      {!login?.username ? (
        <Switch>
          <Route path="/login" component={Login} />
          <Redirect path="*" to="/login" />
        </Switch>
      ) : (
        <Wrapper>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/description/:id" component={Description} />
            <Route path="/checkout" component={Checkout} />
            <Redirect path="*" to="/" />
          </Switch>
        </Wrapper>
      )}
    </Router>
  );
}
