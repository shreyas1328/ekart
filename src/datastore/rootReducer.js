import storage from 'redux-persist/lib/storage'
import {combineReducers} from 'redux';
import {persistCombineReducers} from 'redux-persist';
import persistReducer from 'redux-persist/es/persistReducer';

import screenDimension from './slice/login';

const reducer = combineReducers({
  screenDimension,
});

const rootReducer = persistReducer(
  {
    key: 'root',
    storage: storage,
    whitelist: [],
  },
  reducer,
);

// export type RootState = ReturnType<typeof reducers>;
export default rootReducer;