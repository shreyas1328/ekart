import React from "react";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import {useHistory} from 'react-router-dom';
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme=>({
  homeTilePrice:{
    fontSize: '1rem',
  }
}));

export default function Tile({ data }) {
  const history = useHistory();
  const classes = useStyles();

  const onCardClick = () => {
    history.push(`/description/${data.id}`)
  }

  return (
    <Card className="home-tile-card" onClick={onCardClick} >
      <CardActionArea className="home-tile-card-action">
        <img className="home-tile-image" src={data.image} alt={data.title} />
        <CardContent className="home-tile-card-content">
          <Typography color='secondary' className="home-tile-title" variant="h5">
            {data.title}
          </Typography>
          <Typography color='secondary' className={`home-tile-price ${classes.homeTilePrice}`} variant="subtitle1">
            ${data.price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
