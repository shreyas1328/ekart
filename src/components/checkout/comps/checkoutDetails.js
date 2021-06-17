import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { useSelector, useDispatch } from "react-redux";
import { profileModal, orderPlacedModal } from "../../../datastore/slice/modal";
import { showToast } from "../../../datastore/slice/toast";
import { useHistory } from "react-router-dom";

export default function CheckoutDetails() {
  const dispatch = useDispatch();
  const history = useHistory();
  const profileData = useSelector((state) => state.profile);
  const {cartAllData} = useSelector((state) => state.cart);

  const onEditDetails = () => {
    dispatch(profileModal(true));
  };

  const onPlaceOrder = () => {
  
    if(profileData.name && cartAllData.length > 0){
      dispatch(orderPlacedModal(true));
    }else if(cartAllData.length <= 0) {
      dispatch(showToast({
        message: `Please add an item into cart.`,
        severity: "warning",
      }))
      history.push("/");
    }else if(!profileData.name) {
      onEditDetails();
    }else {

    }
  };

  return (
    <div className="checkout-details-container">
      <Typography
        className="checkout-details-title"
        variant="h4"
        component="h4"
      >
        User Details
      </Typography>
      <div className="checkout-details-wrapper">
        <Typography className="checkout-details-title-text1">Name </Typography>
        <Typography className="checkout-details-title-text1">:</Typography>
        <Typography className="checkout-details-title-text2">
          {profileData.name}
        </Typography>
      </div>
      <div className="checkout-details-wrapper">
        <Typography className="checkout-details-title-text1">Email</Typography>
        <Typography className="checkout-details-title-text1">:</Typography>
        <Typography className="checkout-details-title-text2">
          {profileData.email}
        </Typography>
      </div>
      <div className="checkout-details-wrapper">
        <Typography className="checkout-details-title-text1">
          Address
        </Typography>
        <Typography className="checkout-details-title-text1">:</Typography>
        <div className="checkout-details-address">
          <Typography className="checkout-details-title-text2">
            {profileData.address1}
          </Typography>
          <Typography className="checkout-details-title-text2">
            {profileData.address2}
          </Typography>
        </div>
      </div>
      <div className="checkout-details-button-wrapper">
        <Button
          className="checkout-details-button checkout-details-button-edit"
          onClick={onEditDetails}
        >
          Edit Details
        </Button>
        <Button
          className="checkout-details-button checkout-details-button-place"
          onClick={onPlaceOrder}
        >
          Place Order
        </Button>
      </div>
    </div>
  );
}
