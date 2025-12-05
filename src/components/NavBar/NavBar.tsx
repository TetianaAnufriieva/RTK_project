import { useState, type JSX } from "react";
import style from "./NavBar.module.css";
import { NavLink } from "react-router-dom";
import CartIcon from "../../features/CartIcon/CartIcon";
import LoginIcon from "@mui/icons-material/Login";
import { useAppSelector } from "../../app/hooks";
import { selectUser } from "../../features/auth/selectors";

export default function NavBar(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const user = useAppSelector(selectUser);
  return (
    <nav className={style.navigation}>
      {/* Лого слева */}
      <div className={style.logo}>RTK-App</div>
      {user?.username ? (
        <>
          {/* Меню по центру */}
          <ul
            className={`${style.menu} ${isOpen ? style.menuActive : ""}`}
            onClick={() => setIsOpen(false)}
          >
            <li>
              <NavLink to="home">Home</NavLink>
            </li>
            <li>
              <NavLink to="products">Products</NavLink>
            </li>
            <li>
              <NavLink to="users">Users</NavLink>
            </li>
            <li>
              <NavLink to="sandwich">Sandwich</NavLink>
            </li>
            <li>
              <NavLink to="counter">Counter</NavLink>
            </li>
            <li>
              <NavLink to="weather">Weather</NavLink>
            </li>
            <li>
              <NavLink to="apod">Apod</NavLink>
            </li>
            <li>
              <NavLink to="dictionary">Dictionary</NavLink>
            </li>
          </ul>

          {/* Иконки справа */}
          <div className={style.icons}>
            <CartIcon />
          </div>
        </>
      ) : (
        // Если не авторизован, показываем только Login
        <div className={style.icons}>
          <NavLink to="login" className={style.login} title="Login">
            <LoginIcon />
          </NavLink>
        </div>
      )}

      {/* Бургер-меню */}
      <div className={style.burgerIcon} onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>
    </nav>
  );
}
