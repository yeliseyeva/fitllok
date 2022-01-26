import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "@restart/ui/esm/Button";
import s from "./Items.module.css";

const tops = [
  {
    id: 1,
    name: "Топ",
    img: "https://picua.org/images/2022/01/26/0f6645f5d57922e9fc074079d1ff5bf4.jpg",
    description: "Описание",
    price: "399 грн",
  },
  {
    id: 2,
    name: "Топ",
    img: "https://picua.org/images/2022/01/26/1da5fdca5a218751fb785787c2e0cf1a.jpg",
    description: "Описание",
    price: "399 грн",
  },
  {
    id: 3,
    name: "Топ",
    img: "https://picua.org/images/2022/01/26/825c9bf6d9f6cc5f27d3df431a75fb70.jpg",
    description: "Описание",
    price: "399 грн",
  },
  {
    id: 4,
    name: "Топ",
    img: "https://picua.org/images/2022/01/26/703af2809cebe47b93850372c2ceb276.jpg",
    description: "Описание",
    price: "399 грн",
  },
];

function TopsItem() {
  return (
    <Row xs={1} md={4} className="g-4">
      {tops.map(({ id, img, name, description, price }) => (
        <Col key={id}>
          <Card className={s.card}>
            <Card.Img variant="top" src={img} height="300" className={s.img} />
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

export default TopsItem;
