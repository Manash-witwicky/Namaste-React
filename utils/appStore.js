import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default appStore;

/**
 * we can give the imported reducer
 * any name it does not matter
 * we are just giving it a local name
 */
