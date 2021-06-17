import React from "react";
import { Logo } from "../utiles/utiles";
import "../../styles/wrapper.scss";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutModal, profileModal } from "../../datastore/slice/modal";
import Tooltip from "@material-ui/core/Tooltip";

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
    history.push("/");
  };

  return (
    <div className="header-container">
      <div className="header-left-container">
        <Logo color="#000000" size="25px" onClick={onLogoClick} isPointer />
      </div>
      <div className="header-right-container">
        <div className="cart-container" onClick={onCartClick}>
          {cart.cartAllData.length > 0 ? (
            <p className="cart-count">{cart.cartAllData.length}</p>
          ) : (
            <></>
          )}
          <Tooltip title="Cart">
            <ShoppingCartIcon style={{ fontSize: "28px", color: "#000000" }} />
          </Tooltip>
        </div>
        <div className="profile-container" onClick={onProfile}>
          <Tooltip title="Profile">
            <AccountCircleIcon style={{ fontSize: "28px", color: "#000000" }} />
          </Tooltip>
        </div>
        <div className="profile-container" onClick={onLogout}>
          <Tooltip title="Logout">
            <ExitToAppIcon style={{ fontSize: "28px", color: "#000000" }} />
          </Tooltip>
        </div>
      </div>
    </div>
  );
}
