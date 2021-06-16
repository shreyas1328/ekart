import React from "react";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";

export default function Tile({ data }) {
  return (
    <Card className="home-tile-card">
      <CardActionArea className="home-tile-card-action">
        <img className="home-tile-image" src={data.image} alt={data.title} />
        <CardContent className="home-tile-card-content">
          <Typography className="home-tile-title" variant="h5" component="h3">
            {data.title}
          </Typography>
          <Typography className="home-tile-price" component="p">
            ${data.price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
