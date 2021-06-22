import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/es/integration/react";
import { store, persistor } from "./datastore/store";
import RootComponent from './components/root';

function App() {
  // const { styleType, fontsize } = store.getState().muiStyles;


  return (
    <Provider {...{ store }}>
      <PersistGate {...{ persistor }} loading={null}>
          <RootComponent />
      </PersistGate>
    </Provider>
  );
}

export default App;
