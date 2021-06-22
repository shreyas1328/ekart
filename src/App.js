import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./dashboard";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/es/integration/react";
import { store, persistor } from "./datastore/store";
import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import {Default, Flame} from './styles/muiStyles'

const theme = createMuiTheme(Flame);

function App() {
  return (
    <Provider {...{ store }}>
      <PersistGate {...{ persistor }} loading={null}>
        <ThemeProvider theme={theme}>
          <Paper className="App">
            <Dashboard />
          </Paper>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
