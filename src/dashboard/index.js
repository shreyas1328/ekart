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
import { useSelector, useDispatch } from "react-redux";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import {showToast, closeToast} from '../datastore/slice/toast';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function Dashboard() {
  const dispatch = useDispatch();
  const login = useSelector((state) => state.login);
  const myToast = useSelector((state) => state.toast);
  useEffect(() => {
    // if (window.matchMedia("(display-mode: standalone)").matches) {
    //   console.log("qwer");
    // } else {
    //   console.log("zxcv");
    // }

    console.log(login);
  }, [login.username]);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(closeToast());
  };

  return (
    <Router>
      <LogoutModel/>
      <OrderPlacedModal/>
      <AddressModal/>
      <Profile />
      <Snackbar open={myToast.show} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={myToast.severity} >
          {myToast.message}
        </Alert>
      </Snackbar>
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
