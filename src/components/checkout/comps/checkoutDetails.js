import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

export default function CheckoutDetails() {
  return (
    <div className="checkout-details-container">
      <Typography className="checkout-details-title" variant="h4" component="h4" >User Details</Typography>
      <div className="checkout-details-wrapper">
        <Typography className="checkout-details-title-text1">Name </Typography>
        <Typography className="checkout-details-title-text1">
          :
        </Typography>
        <Typography className="checkout-details-title-text2">
          User Details
        </Typography>
      </div>
      <div className="checkout-details-wrapper">
        <Typography className="checkout-details-title-text1">
          Email
        </Typography>
        <Typography className="checkout-details-title-text1">
          :
        </Typography>
        <Typography className="checkout-details-title-text2">
          User Details
        </Typography>
      </div>
      <div className="checkout-details-wrapper">
        <Typography className="checkout-details-title-text1">
          Address
        </Typography>
        <Typography className="checkout-details-title-text1">
          :
        </Typography>
        <div className="checkout-details-address" >
          <Typography className="checkout-details-title-text2">
            User Details
          </Typography>
          <Typography className="checkout-details-title-text2">
            User Details
          </Typography>
        </div>
      </div>
      <div className="checkout-details-button-wrapper">
        <Button className="checkout-details-button checkout-details-button-edit">Edit Details</Button>
        <Button className="checkout-details-button checkout-details-button-place">Place Order</Button>
      </div>
    </div>
  );
}
