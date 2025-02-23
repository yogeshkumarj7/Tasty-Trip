import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import authReducer from "./authSlice";
import loaderReducer from "./loaderSlice";
import themeReducer from "./themeSlice";

const Store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
    loader: loaderReducer,
    theme: themeReducer,
  },
});

export default Store;
