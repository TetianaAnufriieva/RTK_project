import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import sandwichReducer from "../features/sandwich/sandwichSlice";
import usersReducer from "../features/users/userSlice";
import productsReducer from "../features/products/productSlice";
import cartReducer from "../features/cart/cartSlice";
import authReducer from "../features/auth/authSlice";
import weatherReducer from "../features/weather/weatherSlice";
import apodReducer from "../features/apod/apodSlice";

//→ Импортируем configureStore — простой способ создать store.
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    sandwich: sandwichReducer,
    users: usersReducer,
    products: productsReducer,
    cart: cartReducer,
    auth: authReducer,
    weather: weatherReducer,
    apod: apodReducer,
  },
});

// Типы для useSelector и useDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// → Создаём типы для селектора и диспатчера, чтобы использовать в TS-компонентах.
