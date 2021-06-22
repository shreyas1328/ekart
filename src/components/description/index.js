import Typography from "@material-ui/core/Typography";
import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import "../../styles/description.scss";
import { useDispatch, useSelector } from "react-redux";
import { getOneItem } from "../../datastore/slice/description";
import {
  getCartOneItem,
  addToCart,
  removeItem,
} from "../../datastore/slice/cart";
import { showToast } from "../../datastore/slice/toast";
import { useParams } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  backgroundPrimary: {
    backgroundColor: theme.palette.primary.main,
  },
}));

export default function Description() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { data } = useSelector((state) => state.description);
  const { cartOneItem, cartAllData } = useSelector((state) => state.cart);
  const params = useParams();

  const [state, setState] = useState(0);

  useEffect(() => {
    dispatch(getOneItem(params.id));
    dispatch(getCartOneItem(params.id));
    setState(cartOneItem?.quantity ? cartOneItem.quantity : 0);
    console.log("qwerty ", cartOneItem);
  }, [params.id, data, cartOneItem]);

  console.log("my data ", cartOneItem);

  const onQuantityChange = (isPositive) => {
    if (isPositive) {
      setState(state + 1);
    } else {
      if (state > 0) {
        setState(state - 1);
      }
    }
  };

  const onAddToCart = () => {
    console.log("my asd ", cartOneItem);
    if (state > 0) {
      dispatch(
        addToCart({
          ...data,
          quantity: state,
        })
      );
      // dispatch(getCartOneItem(params.id));
      dispatch(
        showToast({
          message: `Item added into cart`,
          severity: "info",
        })
      );
    } else {
      //if item quantity was more than 0 but user made it 0 after edit
      if (cartOneItem?.quantity > 0) {
        dispatch(removeItem(params.id));
        dispatch(
          showToast({
            message: `Item removed from cart`,
            severity: "warning",
          })
        );
      }
    }
    dispatch(getCartOneItem(params.id));
  };

  return (
    <Paper className="description-container">
      <Paper className="description-left-container">
        <img
          className="description-item-image"
          src={data?.image}
          alt={data?.title ? data?.title : "ekart"}
        />
      </Paper>
      <Paper className="description-right-container">
        <Typography className="description-item-title" variant="h3">
          {data?.title}
        </Typography>
        <Typography className="description-item-description" variant="body1">
          {data?.description}
        </Typography>
        <Typography className="description-item-price" variant="h5">
          ${data?.price}
        </Typography>
        <Typography className="description-item-add-card" variant="body1">
          Add to cart
        </Typography>
        <Box className="description-item-count-container">
          <Button
            className={`description-item-count-button`}
            onClick={() => onQuantityChange(true)}
          >
            +
          </Button>
          <Typography className="description-item-count" variant="body1">
            {state}
          </Typography>
          <Button
            className={`description-item-count-button`}
            onClick={() => onQuantityChange(false)}
          >
            -
          </Button>
        </Box>
        <Box className="description-item-checkout-wrapper">
          <Button className="description-item-checkout" onClick={onAddToCart}>
            Add to cart
          </Button>
        </Box>
      </Paper>
    </Paper>
  );
}
