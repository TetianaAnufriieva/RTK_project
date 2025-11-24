import { useState, type JSX } from "react";
import style from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

export default function NavBar(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className={style.navigation}>
      <ul className={`${style.list} ${isOpen ? style.listActive : ""}`}>
        <li className={style.listElement}>
          <NavLink to="home" className={style.link}>
            Home
          </NavLink>
        </li>
        <li className={style.listElement}>
          <NavLink to="counter" className={style.link}>
            Counter
          </NavLink>
        </li>
        <li className={style.listElement}>
          <NavLink to="sandwich" className={style.link}>
            Sandwich
          </NavLink>
        </li>
        
        <li className={style.listElement}>
          <NavLink to="users" className={style.link}>
            Users
          </NavLink>
        </li>
        <li className={style.listElement}>
          <NavLink to="products" className={style.link}>
            Products
          </NavLink>
        </li>   

      </ul>
      <div className={style.burgerIcon} onClick={() => setIsOpen(!isOpen)}>
        {" "}
        ☰{" "}
      </div>
    </nav>
  );
}
