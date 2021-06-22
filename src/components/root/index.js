import React from "react";
import "../../App.css";
import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { defaultTheme, flameTheme } from "../../styles/muiStyles";
import { useSelector } from "react-redux";
import Dashboard from "../../dashboard";

export default function RootComponent() {
  const { styleType, fontsize } = useSelector((state) => state.muiStyles);

  console.log("muiStyles ", styleType, fontsize);

  const theme = createMuiTheme(
    styleType === "flame"
      ? flameTheme("light", fontsize)
      : defaultTheme("light", fontsize)
  );

  return (
    <ThemeProvider theme={theme}>
      <Paper className="App">
        <Dashboard />
      </Paper>
    </ThemeProvider>
  );
}
