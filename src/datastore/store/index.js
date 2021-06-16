import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { persistStore } from 'redux-persist';
import RootReducers from '../reducer';


export const store = configureStore({
    reducer: RootReducers,
    middleware: getDefaultMiddleware({
        serializableCheck: false,
    })
});



export const persistor = persistStore(store);