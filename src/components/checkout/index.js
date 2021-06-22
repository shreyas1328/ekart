import React from "react";
import Typography from "@material-ui/core/Typography";
import CheckoutTile from "./comps/tile";
import "../../styles/checkout.scss";
import CheckoutDetails from "./comps/checkoutDetails";
import { useSelector } from "react-redux";
import InfoIcon from "@material-ui/icons/Info";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  errorText: {
    color: theme.palette.error.main,
  },
}));

export default function Checkout() {
  const classes = useStyles();
  const { cartAllData } = useSelector((state) => state.cart);

  return (
    <Paper className="checkout-container">
      <Typography className="checkout-title" variant="h4" color="secondary">
        Checkout
      </Typography>
      <Paper className="checkout-main">
        <Paper className="checkout-left-container">
          {cartAllData.length > 0 ? (
            <>
              {cartAllData.map((val, index) => (
                <CheckoutTile data={val} />
              ))}
            </>
          ) : (
            <Box className="checkout-no-item-container">
              <InfoIcon
                className={`checkout-no-item-icon ${classes.errorText}`}
              />
              <Typography
                className={`checkout-no-item ${classes.errorText}`}
                variant="subtitle1"
                color="secondary"
              >
                No item in your cart.
              </Typography>
            </Box>
          )}
        </Paper>
        <Box className="checkout-right-container">
          <CheckoutDetails />
        </Box>
      </Paper>
    </Paper>
  );
}
