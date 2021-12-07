import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "@restart/ui/esm/Button";
import s from "./ButtonGroup.module.css";
import { NavLink } from "react-router-dom";
import Conteiner from "../../Conteiner/Conteiner";

function ButtonGroup() {
  return (
    <Conteiner>
      <NavLink to="leggins">
        <Button className={s.button}>Лосины</Button>
      </NavLink>
      <NavLink to="tops">
        <Button className={s.button}>Топы</Button>
      </NavLink>
      <NavLink to="complects">
        <Button className={s.button}>Комплекты</Button>
      </NavLink>
      <NavLink to="casual">
        <Button className={s.button}>Кэжуал</Button>
      </NavLink>
    </Conteiner>
  );
}

export default ButtonGroup;
