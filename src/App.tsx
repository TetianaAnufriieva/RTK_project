import { useState, type JSX } from "react";
import "./App.css";
import { Counter } from "./features/counter/Counter";
import { Sandwich } from "./features/sandwich/Sandwich";
import { UsersList } from "./features/users/UsersList";
import { ProductsList } from "./features/products/ProductsList";
import CartIcon from "./features/CartIcon/CartIcon";
import Cart from "./features/cart/Cart";

function App(): JSX.Element {
  const [showCart, setShowCart] = useState (false); 
  return (
    <>
      <Counter />
      <Sandwich />
      <UsersList />
      <ProductsList />
      <CartIcon onClick={() => setShowCart((prev) => !prev)} />
      {showCart && <Cart />}
    </>
  );
}

export default App;
