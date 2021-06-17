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
  const cart = useSelector((state) => state.cart);
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

  const onLogoClick = () => {
    history.push("/")
  }

  return (
    <div className="header-container">
      <div className="header-left-container">
        <Logo color="#000000" size="25px" onClick={onLogoClick} isPointer />
      </div>
      <div className="header-right-container">
        <div className="cart-container" onClick={onCartClick}>
          {cart.cartAllData.length > 0 ? <p className="cart-count">{cart.cartAllData.length}</p> : <></>}

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
