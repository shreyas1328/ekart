import Typography from "@material-ui/core/Typography";
import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import "../../styles/description.scss";
import { useDispatch, useSelector } from "react-redux";
import { getOneItem } from "../../datastore/slice/description";
import { getCartOneItem, addToCart, removeItem } from "../../datastore/slice/cart";
import { useParams } from "react-router-dom";

export default function Description() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.description);
  const { cartOneItem, cartAllData } = useSelector((state) => state.cart);
  const params = useParams();

  const [state, setState] = useState(0);

  useEffect(() => {
    dispatch(getOneItem(params.id));
    dispatch(getCartOneItem(params.id));
    setState(cartOneItem?.quantity ? cartOneItem.quantity : 0);
    console.log("qwerty ", cartOneItem);
  }, [params.id, data,cartOneItem]);

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
    if(state > 0) {
      dispatch(
        addToCart({
          ...data,
          quantity: state,
        })
      );
    dispatch(getCartOneItem(params.id));

    }else {
      //if item quantity was more than 0 but user made it 0 after edit
      console.log("qwertykljhgfdsdf", cartOneItem?.quantity > 0);
      if(cartOneItem?.quantity > 0){
        dispatch(removeItem(params.id))
      }
    }
  };

  return (
    <div className="description-container">
      <div className="description-left-container">
        <img
          className="description-item-image"
          src={data?.image}
          alt={data?.title ? data?.title : "ekart"}
        />
      </div>
      <div className="description-right-container">
        <Typography
          className="description-item-title"
          component="h1"
          variant="h4"
        >
          {data?.title}
        </Typography>
        <Typography className="description-item-description">
          {data?.description}
        </Typography>
        <Typography className="description-item-price">
          ${data?.price}
        </Typography>
        <Typography className="description-item-add-card">
          Add to cart
        </Typography>
        <div className="description-item-count-container">
          <Button
            className="description-item-count-button"
            onClick={() => onQuantityChange(true)}
          >
            +
          </Button>
          <Typography className="description-item-count">{state}</Typography>
          <Button
            className="description-item-count-button"
            onClick={() => onQuantityChange(false)}
          >
            -
          </Button>
        </div>
        <div className="description-item-checkout-wrapper">
          <Button className="description-item-checkout" onClick={onAddToCart}>
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
}
