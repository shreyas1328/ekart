import React from "react";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";

export default function CheckoutTile({ data }) {
  return (
    <Card className="checkout-tile-card">
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
          <Typography className="checkout-tile-price" component="p">
            ${data.price}
          </Typography>
            <div className="checkout-item-count-container">
              <Button className="checkout-item-count-button">+</Button>
              <Typography className="checkout-item-count">0</Typography>
              <Button className="checkout-item-count-button">-</Button>
            </div>
        </CardContent>
      </div>
    </Card>
  );
}
