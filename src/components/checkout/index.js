import React from "react";
import Typography from "@material-ui/core/Typography";
import CheckoutTile from "./comps/tile";
import "../../styles/checkout.scss";
import CheckoutDetails from "./comps/checkoutDetails";
import { useSelector } from "react-redux";
import InfoIcon from "@material-ui/icons/Info";

const data = {
  id: 1,
  title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  price: 109.95,
  description:
    "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  category: "men's clothing",
  image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
};

export default function Checkout() {
  const { cartAllData } = useSelector((state) => state.cart);

  return (
    <div className="checkout-container">
      <Typography className="checkout-title" component="h4" variant="h4">
        Checkout
      </Typography>
      <div className="checkout-main">
        <div className="checkout-left-container">
          {cartAllData.length > 0 ? (
            <>
              {cartAllData.map((val, index) => (
                <CheckoutTile data={val} />
              ))}
            </>
          ) : (
            <div className='checkout-no-item-container' >
              <InfoIcon className='checkout-no-item-icon' />
              <Typography
                className="checkout-no-item"
                component="p"
                variant="p"
              >
                No item in your cart.
              </Typography>
            </div>
          )}
        </div>
        <div className="checkout-right-container">
          <CheckoutDetails />
        </div>
      </div>
    </div>
  );
}
