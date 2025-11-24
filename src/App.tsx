import "./App.css";
import { Counter } from "./features/counter/Counter";
import { Sandwich } from "./features/sandwich/Sandwich";
import { UsersList } from "./features/users/UsersList";
import { ProductsList } from "./features/products/ProductsList";
import NotFound from "./features/notFound/NotFound";
import Home from "./features/home/Home";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import LayOut from "./components/LayOut/LayOut";

function App() {
  return (
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route index element={<Home />} />
          <Route path="counter" element={<Counter />} />
          <Route path="sandwich" element={<Sandwich />} />
          <Route path="users" element={<UsersList />} />
          <Route path="products" element={<ProductsList />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
  );
}

export default App;