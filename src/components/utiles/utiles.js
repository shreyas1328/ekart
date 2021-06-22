import React from "react";
import '../../styles/logo.scss';
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
  logoRoot:{
    display: 'flex',
    flexDirection:'row',
    backgroundColor:'#00000000'
  },
  logoText:{

  }
})

const Logo = ({color, size, onClick, isPointer}) => {
  const classes = useStyles();
  return (
    <Paper className={classes.logoRoot} onClick={onClick} >
      <Typography className={classes.logoText} variant='h1' color='secondary' style={{ fontSize: size}} >E</Typography>
      <Typography className={classes.logoText} variant='h1' color='secondary' style={{fontSize: size}}>-</Typography>
      <Typography className={classes.logoText} variant='h1' color='secondary' style={{ fontSize: size}}>
        KART
      </Typography>
    </Paper>
  );
};

export { Logo };
