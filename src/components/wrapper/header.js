import React from "react";
import { Logo } from "../utiles/utiles";
import "../../styles/wrapper.scss";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutModal, profileModal } from "../../datastore/slice/modal";

export default function Header() {
  const history = useHistory();
  const dispatch = useDispatch();

  const onCartClick = () => {
    history.push("/checkout");
  };

  const onLogout = () => {
    dispatch(logoutModal(true));
  };

  const onProfile = () => {
    dispatch(profileModal(true));
  };

  return (
    <div className="header-container">
      <div className="header-left-container">
        <Logo color="#000000" size="25px" />
      </div>
      <div className="header-right-container">
        <div className="cart-container" onClick={onCartClick}>
          <p className="cart-count">1</p>

          <ShoppingCartIcon style={{ fontSize: "28px" }} color="#000000" />
        </div>
        <div className="profile-container" onClick={onProfile}>
          <AccountCircleIcon color="#000000" style={{ fontSize: "28px" }} />
        </div>
        <div className="profile-container" onClick={onLogout}>
          <ExitToAppIcon color="#000000" style={{ fontSize: "28px" }} />
        </div>
      </div>
    </div>
  );
}
