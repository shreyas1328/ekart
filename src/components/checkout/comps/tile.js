import React from "react";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core";

export default function CheckoutTile({ data }) {
  const history = useHistory();
  const calculateTotal = () => {
    const { price, quantity } = data;
    return (price * quantity).toFixed(2);
  };

  const onCardClick = () => {
    history.push(`/description/${data.id}`)
  }

  return (
    <Card className="checkout-tile-card" onClick={onCardClick}>
      <Paper className="checkout-tile-card-action">
        <img
          className="checkout-tile-image"
          src={data.image}
          alt={data.title}
        />
        <CardContent className="checkout-tile-card-content">
          <Typography
            className="checkout-tile-title"
            variant="h5"
            color='secondary'
          >
            {data.title}
          </Typography>

          <Box className="checkout-item-count-container">
            <Typography className="checkout-tile-price" variant="subtitle1" color='secondary' >
              ${`${data.price} x ${data.quantity}`}
            </Typography>
          </Box>
          <Typography className="checkout-tile-price" variant="subtitle1" color='secondary'>
            ${calculateTotal()}
          </Typography>
        </CardContent>
      </Paper>
    </Card>
  );
}
