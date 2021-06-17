import storage from 'redux-persist/lib/storage'
import {combineReducers} from 'redux';
import persistReducer from 'redux-persist/es/persistReducer';

import login from './slice/login';
import modal from './slice/modal';

const reducer = combineReducers({
  login,
  modal,
});

const rootReducer = persistReducer(
  {
    key: 'root',
    storage: storage,
    whitelist: ["login"],
  },
  reducer,
);

// export type RootState = ReturnType<typeof reducers>;
export default rootReducer;