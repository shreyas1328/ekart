import React from "react";
import { Logo } from "../utiles/utiles";
import "../../styles/wrapper.scss";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { useHistory } from "react-router-dom";

export default function Header({ onOpenChange }) {
  const history = useHistory();

  const onCartClick = () => {
    history.push("/checkout");
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
        <div className="profile-container" onClick={() => onOpenChange(true)}>
          <AccountCircleIcon color="#000000" style={{ fontSize: "28px" }} />
        </div>
      </div>
    </div>
  );
}
