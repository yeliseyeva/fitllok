import React from "react";
import { Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "@restart/ui/esm/Button";
import s from "./Casual.module.css";
import { NavLink} from "react-router-dom";

function Casual () {
  return (
    <Col>
      <Card className="{s.card}">
        <Card.Img variant="top" src="https://picua.org/images/2021/12/07/451c0a281b0554054666fcf41ac01468.png" height="300" className={s.img} />
        <Card.Body>
          <Card.Title>Кэжуал</Card.Title>
          <NavLink to="casual">
            <Button >Перейти в каталог</Button>
          </NavLink>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Casual;