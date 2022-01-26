import React from "react";
import s from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

function NavBar(onClick) {
  return (
    <ul className={s.navBarConteiner} onClick={onClick}>
      <NavLink to="/" className={s.navLink}>
        <li>Главная</li>
      </NavLink>
      <NavLink to="/catalog" className={s.navLink}>
        <li>Каталог</li>
      </NavLink>
      <NavLink to="/delivery" className={s.navLink}>
        <li>Доставка</li>
      </NavLink>
      <NavLink to="/contacts" className={s.navLink}>
        <li>Контакты</li>
      </NavLink>
    </ul>
  );
}

export default NavBar;
