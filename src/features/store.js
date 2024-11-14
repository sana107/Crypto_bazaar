import { configureStore } from "@reduxjs/toolkit";
import coinReducer from "./coin/coinSlice";
import cartReducer from "./cart/cartSlice";
import authReducer from "./auth/authSlice";

const store = configureStore({
  reducer: {
    coin: coinReducer,
    cart: cartReducer,
    auth:authReducer,
  },
});

export default store;
