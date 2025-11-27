import "./App.css";
import { Counter } from "./features/counter/Counter";
import { Sandwich } from "./features/sandwich/Sandwich";
import { UsersList } from "./features/users/UsersList";
import { ProductsList } from "./features/products/ProductsList";
import NotFound from "./features/notFound/NotFound";
import Home from "./features/home/Home";
import { Route, Routes } from "react-router-dom";
import LayOut from "./components/LayOut/LayOut";
import Cart from "./features/cart/Cart";
import Login from "./features/auth/Login";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import { Weather } from "./features/weather/weather";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LayOut />}>
        <Route index element={<Home />} />
        <Route path="home" element={<ProtectedRoute outlet={<Home />} />} />
        <Route path="counter" element={<ProtectedRoute outlet={<Counter />}  />}/>
        <Route path="sandwich" element={<ProtectedRoute outlet={<Sandwich />} />} />
        <Route path="users" element={<ProtectedRoute outlet={<UsersList />}/>} />
        <Route path="products" element={<ProtectedRoute outlet={<ProductsList />} />}/>
        <Route path="weather" element={<ProtectedRoute outlet={<Weather />} />}/>
        <Route path="/cart" element={<ProtectedRoute outlet={<Cart />}  />}/>
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
