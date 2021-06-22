import React from "react";
import { Logo } from "../utiles/utiles";
import "../../styles/wrapper.scss";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutModal, profileModal } from "../../datastore/slice/modal";
import Tooltip from "@material-ui/core/Tooltip";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import DropDown from "./comps/dropdown";
import {setStyleType, setFontSize} from '../../datastore/slice/muiStyles';

const useStyles = makeStyles((theme) => ({
  backgroundPrimary: {
    backgroundColor: theme.palette.primary.main,
  },
  iconColor: {
    color: theme.palette.secondary.main,
  },
  cartCount: {
    backgroundColor: theme.palette.primary.main,
    border: `1px solid ${theme.palette.secondary.main}`,
  },
}));

const muiThemes = [
  {value:"default", name:"Default"},
  {value:"flame", name:"Flame"},
]

const muiFontsize = [
  {value:1, name:"1"},
  {value:1.25, name:"1.25"},
  {value:1.5, name:"1.5"},
  {value:1.75, name:"1.75"},
  {value:2, name:"2"},
]

export default function Header() {
  const classes = useStyles();
  const history = useHistory();
  const cart = useSelector((state) => state.cart);
  const muiStyles = useSelector((state) => state.muiStyles);
  const dispatch = useDispatch();

  const onCartClick = () => {
    history.push("/checkout");
  };

  const onLogout = () => {
    dispatch(logoutModal(true));
  };

  const onProfile = () => {
    dispatch(profileModal(true));
  };

  const onLogoClick = () => {
    history.push("/");
  };

  const onMuiTheme = (event) => {
    const {name, value} = event.target;
    dispatch(setStyleType(value))
  } 

  const onMuiFontsize = (event) => {
    const {name, value} = event.target;
    dispatch(setFontSize(value))
  } 


  return (
    <Paper
      color="primary"
      className={`header-container ${classes.backgroundPrimary}`}
    >
      <Box className="header-left-container">
        <Logo color="#000000" size="25px" onClick={onLogoClick} isPointer />
      </Box>
      <Paper className={`header-right-container ${classes.backgroundPrimary}`}>
        <Box className="cart-container">
          <DropDown  item={muiStyles.styleType} handleChange={onMuiTheme} options={muiThemes} />
        </Box>
        <Box className="cart-container">
          <DropDown  item={muiStyles.fontsize} handleChange={onMuiFontsize} options={muiFontsize} />
        </Box>
        <Box className="cart-container" onClick={onCartClick}>
          {cart.cartAllData.length > 0 ? (
            <Typography
              className={`cart-count ${classes.cartCount}`}
              color="secondary"
            >
              {cart.cartAllData.length}
            </Typography>
          ) : (
            <></>
          )}
          <Tooltip title="Cart">
            <ShoppingCartIcon
              style={{ fontSize: "28px" }}
              className={classes.iconColor}
            />
          </Tooltip>
        </Box>
        <Box color="primary" className="profile-container" onClick={onProfile}>
          <Tooltip title="Profile">
            <AccountCircleIcon
              style={{ fontSize: "28px" }}
              className={classes.iconColor}
            />
          </Tooltip>
        </Box>
        <Box className={`profile-container`} onClick={onLogout}>
          <Tooltip title="Logout">
            <ExitToAppIcon
              style={{ fontSize: "28px" }}
              className={classes.iconColor}
            />
          </Tooltip>
        </Box>
      </Paper>
    </Paper>
  );
}
