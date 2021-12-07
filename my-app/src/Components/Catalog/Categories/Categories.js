import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "@restart/ui/esm/Button";
import s from "./Categories.module.css";
import { NavLink } from "react-router-dom";
import Conteiner from "../../Conteiner/Conteiner";

function Categories() {
  return (

      <div className={s.buttonGroup}>
        <NavLink
          to="/catalog/leggins"
          className={({ isActive }) => (isActive ? s.activeNavLink : s.navLink)}
        >
          Лосины
          {/* <Button className={s.button}>Лосины</Button> */}
        </NavLink>
        <NavLink to="/catalog/tops" className={({ isActive }) => (isActive ? s.activeNavLink : s.navLink)}>
          Топы
          {/* <Button className={s.button}>Топы</Button> */}
        </NavLink>
        <NavLink to="/catalog/complects" className={({ isActive }) => (isActive ? s.activeNavLink : s.navLink)}>
          Комплекты
          {/* <Button className={s.button}>Комплекты</Button> */}
        </NavLink>
        <NavLink to="/catalog/casual" className={({ isActive }) => (isActive ? s.activeNavLink : s.navLink)}>
          Кэжуал
          {/* <Button className={s.button}>Кэжуал</Button> */}
        </NavLink>
      </div>

  );
}

export default Categories;
