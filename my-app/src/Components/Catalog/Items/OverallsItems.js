import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "@restart/ui/esm/Button";
import s from "./Items.module.css";

const overalls = [
  {
    id: 1,
    name: "Комбинезон",
    img: "https://picua.org/images/2022/01/26/432b4a4a53f1d6d09402340961c2a4e5.jpg",
    description: "Описание",
    price: "849 грн",
  },
  {
    id: 2,
    name: "Комбинезон",
    img: "https://picua.org/images/2022/01/26/5f4069a42ebc5863fd6d60dd25e49a7c.jpg",
    description: "Описание",
    price: "849 грн",
  },
  {
    id: 3,
    name: "Комбинезон",
    img: "https://picua.org/images/2022/01/26/242caeb17a0feabe2325b77e06c0642c.jpg",
    description: "Описание",
    price: "849 грн",
  },
  {
    id: 4,
    name: "Комбинезон",
    img: "https://picua.org/images/2022/01/26/5af8323394f38f9300d87c333dca35a8.jpg",
    description: "Описание",
    price: "999 грн",
  },
  {
    id: 5,
    name: "Комбинезон",
    img: "https://picua.org/images/2022/01/26/ee05620424ee78d97140d31cb3c40b80.jpg",
    description: "Описание",
    price: "849 грн",
  },
  {
    id: 6,
    name: "Комбинезон",
    img: "https://picua.org/images/2022/01/26/1efba31d1eaba7d0587ab1aa445f366e.jpg",
    description: "Описание",
    price: "849 грн",
  },
  {
    id: 7,
    name: "Комбинезон",
    img: "https://picua.org/images/2022/01/26/90e6822d707bd416297671c8957afdab.jpg",
    description: "Описание",
    price: "849 грн",
  },
];

function OverallsItem() {
  return (
    <Row xs={1} md={4} className="g-4">
      {overalls.map(({ id, img, name, description, price }) => (
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

export default OverallsItem;
