import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './dashboard';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';
import {store, persistor} from './datastore/store';

function App() {
  return (
    
    <Provider {...{store}}>
    <PersistGate {...{persistor}} loading={null}>
    <div className="App">
      <Dashboard />
    </div>
    </PersistGate>
  </Provider>
  );
}

export default App;
