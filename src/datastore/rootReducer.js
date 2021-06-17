import storage from 'redux-persist/lib/storage'
import {combineReducers} from 'redux';
import persistReducer from 'redux-persist/es/persistReducer';

import login from './slice/login';
import modal from './slice/modal';
import home from './slice/home';
import description from './slice/description';
import cart from './slice/cart';

const reducer = combineReducers({
  login,
  modal,
  home,
  description,
  cart,
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