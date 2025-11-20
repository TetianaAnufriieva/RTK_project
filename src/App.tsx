import type { JSX } from "react";
import "./App.css";
import { Counter } from "./features/counter/Counter";
import { Sandwich } from "./features/sandwich/Sandwich";
import { UsersList } from "./features/users/UsersList";
import { ProductsList } from "./features/products/ProductsList";

function App(): JSX.Element {
  return (
    <>
      <Counter />
      <Sandwich />
      <UsersList />
      <ProductsList />
    </>
  );
}

export default App;
