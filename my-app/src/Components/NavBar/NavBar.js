import React from "react";
import s from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <>
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
    </>
  );
}

export default NavBar;
