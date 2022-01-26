import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "@restart/ui/esm/Button";
import s from "./Items.module.css";

const t_shorts = [
  {
    id: 1,
    name: "Футболка",
    img: "https://picua.org/images/2022/01/26/a01cf8ad41e2641a67df2a5936498097.jpg",
    description: "Описание",
    price: "399 грн",
  },
  {
    id: 2,
    name: "Футболка",
    img: "https://picua.org/images/2022/01/26/9ca1f692d16443780f3221db8f321351.jpg",
    description: "Описание",
    price: "399 грн",
  },
  {
    id: 3,
    name: "Футболка",
    img: "https://picua.org/images/2022/01/26/0d1df015f56a0af12fdb2c72b5c5d36e.jpg",
    description: "Описание",
    price: "399 грн",
  },
];

function TshortsItem() {
  return (
    <Row xs={1} md={4} className="g-4">
      {t_shorts.map(({ id, img, name, description, price }) => (
        <Col key={id}>
          <Card className={s.card}>
            <Card.Img variant="top" src={img} height="400" className={s.img} />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>{price}</Card.Text>
              <Button className={s.button}>Добавить в корзину</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default TshortsItem;
