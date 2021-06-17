import React from "react";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

export default function CheckoutTile({ data }) {
  const history = useHistory();
  const calculateTotal = () => {
    const { price, quantity } = data;
    return price * quantity;
  };

  const onCardClick = () => {
    history.push(`/description/${data.id}`)
  }

  return (
    <Card className="checkout-tile-card" onClick={onCardClick}>
      <div className="checkout-tile-card-action">
        <img
          className="checkout-tile-image"
          src={data.image}
          alt={data.title}
        />
        <CardContent className="checkout-tile-card-content">
          <Typography
            className="checkout-tile-title"
            variant="h5"
            component="h3"
          >
            {data.title}
          </Typography>

          <div className="checkout-item-count-container">
            <Typography className="checkout-tile-price" component="p">
              ${`${data.price} x ${data.quantity}`}
            </Typography>
          </div>
          <Typography className="checkout-tile-price" component="p">
            ${calculateTotal()}
          </Typography>
        </CardContent>
      </div>
    </Card>
  );
}
