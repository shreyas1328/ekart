import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { useSelector, useDispatch } from "react-redux";
import { profileModal, orderPlacedModal } from "../../../datastore/slice/modal";
import { showToast } from "../../../datastore/slice/toast";
import { useHistory } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  editButton: {
    backgroundColor: "#0000ff",
    color: "#ffffff",
    border: "1px solid #0000ff",
    "&:hover": {
      backgroundColor: "#ffffff",
      color: "#0000ff",
    },
  },
});

export default function CheckoutDetails() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const profileData = useSelector((state) => state.profile);
  const { cartAllData } = useSelector((state) => state.cart);

  const onEditDetails = () => {
    dispatch(profileModal(true));
  };

  const onPlaceOrder = () => {
    if (profileData.name && cartAllData.length > 0) {
      dispatch(orderPlacedModal(true));
    } else if (cartAllData.length <= 0) {
      dispatch(
        showToast({
          message: `Please add an item into cart.`,
          severity: "warning",
        })
      );
      history.push("/");
    } else if (!profileData.name) {
      onEditDetails();
    } else {
    }
  };

  return (
    <Paper className="checkout-details-container">
      <Typography
        className="checkout-details-title"
        variant="h4"
        color="secondary"
      >
        User Details
      </Typography>
      <Paper className="checkout-details-wrapper">
        <Typography
          className="checkout-details-title-text1"
          variant="subtitle1"
          color="secondary"
        >
          Name{" "}
        </Typography>
        <Typography
          className="checkout-details-title-text1"
          variant="subtitle1"
          color="secondary"
        >
          :
        </Typography>
        <Typography
          className="checkout-details-title-text2"
          variant="subtitle1"
          color="secondary"
        >
          {profileData.name}
        </Typography>
      </Paper>
      <Paper className="checkout-details-wrapper">
        <Typography
          className="checkout-details-title-text1"
          variant="subtitle1"
          color="secondary"
        >
          Email
        </Typography>
        <Typography
          className="checkout-details-title-text1"
          variant="subtitle1"
          color="secondary"
        >
          :
        </Typography>
        <Typography
          className="checkout-details-title-text2"
          variant="subtitle1"
          color="secondary"
        >
          {profileData.email}
        </Typography>
      </Paper>
      <Paper className="checkout-details-wrapper">
        <Typography
          className="checkout-details-title-text1"
          variant="subtitle1"
          color="secondary"
        >
          Address
        </Typography>
        <Typography
          className="checkout-details-title-text1"
          variant="subtitle1"
          color="secondary"
        >
          :
        </Typography>
        <Paper className="checkout-details-address">
          <Typography
            className="checkout-details-title-text2"
            variant="subtitle1"
            color="secondary"
          >
            {profileData.address1}
          </Typography>
          <Typography
            className="checkout-details-title-text2"
            variant="subtitle1"
            color="secondary"
          >
            {profileData.address2}
          </Typography>
        </Paper>
      </Paper>
      <Paper className="checkout-details-button-wrapper">
        <Button
          className={`checkout-details-button checkout-details-button-edit ${classes.editButton}`}
          onClick={onEditDetails}
        >
          Edit Details
        </Button>
        <Button
          className={`checkout-details-button checkout-details-button-place`}
          onClick={onPlaceOrder}
        >
          Place Order
        </Button>
      </Paper>
    </Paper>
  );
}
