import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "@restart/ui/esm/Button";
import s from "./Categories.module.css";
import { NavLink } from "react-router-dom";
import Conteiner from "../../Conteiner/Conteiner";

function Categories() {
  return (
    <Conteiner>
      <div className={s.buttonGroup}>
        <NavLink to="/catalog/leggins" className={({ isActive }) =>
          isActive ? s.activeNavLink : s.navLink
        }>
          <Button className={s.button}>Лосины</Button>
        </NavLink>
        <NavLink to="/catalog/tops" className={s.navLink}>
          <Button className={s.button}>Топы</Button>
        </NavLink>
        <NavLink to="/catalog/complects" className={s.navLink}>
          <Button className={s.button}>Комплекты</Button>
        </NavLink>
        <NavLink to="/catalog/casual" className={s.navLink}>
          <Button className={s.button}>Кэжуал</Button>
        </NavLink>
      </div>
    </Conteiner>
  );
}

export default Categories;
