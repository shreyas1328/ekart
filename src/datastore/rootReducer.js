import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import persistReducer from "redux-persist/es/persistReducer";

import login from "./slice/login";
import modal from "./slice/modal";
import home from "./slice/home";
import description from "./slice/description";
import cart from "./slice/cart";
import profile from "./slice/profile";
import toast from "./slice/toast";
import muiStyles from "./slice/muiStyles";

const reducer = combineReducers({
  login,
  modal,
  home,
  description,
  cart,
  profile,
  toast,
  muiStyles,
});

const rootReducer = persistReducer(
  {
    key: "root",
    storage: storage,
    whitelist: ["login", "profile", "muiStyles"],
  },
  reducer
);

// export type RootState = ReturnType<typeof reducers>;
export default rootReducer;
