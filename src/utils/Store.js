import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import cartReducer from "./cartSlice";
import authReducer from "./authSlice";
import loaderReducer from "./loaderSlice";
import themeReducer from "./themeSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "theme", "cart"],
  blacklist: ["loader"],
};

const rootReducer = combineReducers({
  cart: cartReducer,
  auth: authReducer,
  loader: loaderReducer,
  theme: themeReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});
export const persistor = persistStore(store);
export default store;
