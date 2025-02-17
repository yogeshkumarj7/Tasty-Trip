import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import authReducer from "./authSlice";
import loaderReducer from "./loaderSlice";

const Store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
    loader: loaderReducer,
  },
});

export default Store;
