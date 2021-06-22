import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import "../../styles/login.scss";
import { Logo } from "../../components/utiles/utiles";
import Button from "@material-ui/core/Button";
import { loginValidation } from "../../components/utiles/validation";
import { getLoginData } from "../../datastore/slice/login";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core";

const useTheme = makeStyles({
  loginContainer: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "row",
    padding: 0,
  },
  loginLeftContainer: {
    width: "50%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  loginWelcomeWrapper: {
    marginBottom: "50px",
  },
  loginWelcomeText: {
    fontSize: "40px",
    textAlign:'center'
  },
  loginFormContainer: {},
  loginInputWrapper: {
    marginBottom: "20px",
    width: "25vw",
  },
  loginFormInput: {
    width: "100%",
  },
  loginButton: {
    marginTop: "10px",
    width: "100%",
    backgroundColor: "gray",
    // color: "black",
    fontWeight: "550",
  },
  loginRightContainer: {
    width: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign:'center',
    elevation:0,
    backgroundColor: "red",
  },
});

const useHelperTextStyles = makeStyles(() => ({
    root: {
        color: 'red'
    }
}));

export default function Login() {
  const dispatch = useDispatch();
  const classes = useTheme();
  const [state, setState] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState({});
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    console.log("err", error);
    if (Object.keys(error).length === 0 && clicked) {
      onLoggedIn();
    }
  }, [error, clicked]);

  const onChange = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(state);
    setClicked(true);
    setError(loginValidation(state));
  };

  const onLoggedIn = () => {
    dispatch(getLoginData(state));
  };

  const helperTextStyles = useHelperTextStyles();

  return (
    <Paper className={classes.loginContainer} >
      <Paper className={classes.loginLeftContainer}>
        <Paper variant='div' className={classes.loginWelcomeWrapper}>
          <Typography variant="h1" className={classes.loginWelcomeText}>
            Welcome
          </Typography>
        </Paper>
        <form className={classes.loginFormContainer} onSubmit={onSubmit}>
          <Box className={classes.loginInputWrapper}>
            <TextField
              helperText={error?.username}
              className={classes.loginFormInput}
              required
              id="standard-required"
              label="Email/Username"
              value={state.username}
              onChange={onChange}
              name="username"
              FormHelperTextProps={{
                classes:{
                    root:helperTextStyles.root
                }
        }}
            />
          </Box>
          <Box className={classes.loginInputWrapper}>
            <TextField
              helperText={error?.password}
              className={classes.loginFormInput}
              required
              id="standard-required"
              label="Password"
              type="password"
              value={state.password}
              onChange={onChange}
              name="password"
              FormHelperTextProps={{
                classes:{
                    root:helperTextStyles.root
                }
        }}
            />
          </Box>
          <Button
            className={classes.loginButton}
            variant="contained"
            color="primary"
            type="submit"
          >
            Login
          </Button>
        </form>
      </Paper>
      <Box className={classes.loginRightContainer} color='secondary' >
        <Logo color="#000000" size="70px" onClick={() => {}} />
      </Box>
    </Paper>
  );
}
