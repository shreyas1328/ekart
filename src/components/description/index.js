import Typography from "@material-ui/core/Typography";
import React from "react";
import Button from "@material-ui/core/Button";
import '../../styles/description.scss'

export default function Description() {
  return (
    <div className="description-container">
      <div className="description-left-container">
        <img className="description-item-image" src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg" alt="asd" />
      </div>
      <div className="description-right-container">
        <Typography className="description-item-title" component="h1" variant="h4" >Mens Cotton Jacket</Typography>
        <Typography className="description-item-description">Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.</Typography>
        <Typography className="description-item-price">$55.99</Typography>
        <Typography className="description-item-add-card">Add to cart</Typography>
        <div className="description-item-count-container">
          <Button className="description-item-count-button">+</Button>
          <Typography className="description-item-count">0</Typography>
          <Button className="description-item-count-button" >-</Button>
        </div>
        <div className="description-item-checkout-wrapper" >
        <Button className="description-item-checkout">Checkout</Button>
        </div>
      </div>
    </div>
  );
}
