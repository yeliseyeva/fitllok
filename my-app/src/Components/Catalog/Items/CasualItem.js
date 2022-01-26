import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "@restart/ui/esm/Button";
import s from "./Items.module.css";

const casual = [
  {
    id: 1,
    name: "Лосины эко-кожа утепленные",
    img: "https://picua.org/images/2022/01/26/fb35ca37368fc5a0b6a079574edddd48.jpg",
    description: "Описание",
    price: "499 грн",
  },
  {
    id: 2,
    name: "Лосины эко-кожа утепленные",
    img: "https://picua.org/images/2022/01/26/38beefa0adb7029d427cbe82c68a370c.jpg",
    description: "Описание",
    price: "499 грн",
  },
  {
    id: 3,
    name: "Лосины эко-кожа утепленные",
    img: "https://picua.org/images/2022/01/26/d57ef1beac08d8a6dc71e912dfc9d914.jpg",
    description: "Описание",
    price: "499 грн",
  },
  {
    id: 4,
    name: "Лосины эко-кожа утепленные",
    img: "https://picua.org/images/2022/01/26/9795ef63ddbb802fd14228e67d05292a.jpg",
    description: "Описание",
    price: "499 грн",
  },
  {
    id: 5,
    name: "Лосины эко-кожа без утепления",
    img: "https://picua.org/images/2022/01/26/2248fb25946d3299264487d25d0e7171.jpg",
    description: "Описание",
    price: "499 грн",
  },
  {
    id: 6,
    name: "Лосины замша",
    img: "https://picua.org/images/2022/01/26/3ca8c96802d8b53b572207fdb94931df.jpg",
    description: "Описание",
    price: "499 грн",
  },
  {
    id: 7,
    name: "Лосины замша",
    img: "https://picua.org/images/2022/01/26/4376c89e13671dc5a120eaca2363858a.jpg",
    description: "Описание",
    price: "499 грн",
  },
  {
    id: 8,
    name: "Лосины замша",
    img: "https://picua.org/images/2022/01/26/d3cad8e9b0b21ce983a90d5e71e1947a.jpg",
    description: "Описание",
    price: "499 грн",
  },
  {
    id: 9,
    name: "Лосины замша",
    img: "https://picua.org/images/2022/01/26/7bb6fead4cc8ffd6eba4281d747ef1f4.jpg",
    description: "Описание",
    price: "499 грн",
  },
  {
    id: 10,
    name: "Лосины замша",
    img: "https://picua.org/images/2022/01/26/68240f793ccbe84fd49e5359d9f12836.jpg",
    description: "Описание",
    price: "499 грн",
  },
  {
    id: 11,
    name: "Гольф с горлом",
    img: "https://picua.org/images/2022/01/26/c8d3c96851340aa304b24d2f33f7c105.jpg",
    description: "Описание",
    price: "399 грн",
  },
  {
    id: 12,
    name: "Гольф с горлом",
    img: "https://picua.org/images/2022/01/26/4f16be42c4e9792b100aa525a0f7c398.jpg",
    description: "Описание",
    price: "399 грн",
  },
  {
    id: 13,
    name: "Гольф с горлом",
    img: "https://picua.org/images/2022/01/26/9b25cf5ac9d5591ab5eaf88286a47ae7.jpg",
    description: "Описание",
    price: "399 грн",
  },
  {
    id: 14,
    name: "Гольф с горлом",
    img: "https://picua.org/images/2022/01/26/950b1aa28da2942bce0a54261bd4abda.jpg",
    description: "Описание",
    price: "399 грн",
  },
  {
    id: 15,
    name: "Гольф с горлом",
    img: "https://picua.org/images/2022/01/26/da95d467bb1df5f0d32ee1f6e619fa72.jpg",
    description: "Описание",
    price: "399 грн",
  },
  {
    id: 16,
    name: "Гольф с горлом",
    img: "https://picua.org/images/2022/01/26/fb420b6dbc2278eda22140974dbbb4d9.jpg",
    description: "Описание",
    price: "399 грн",
  },
  {
    id: 17,
    name: "Гольф",
    img: "https://picua.org/images/2022/01/26/99771bff3141d6f7eb0f8b331c05d775.jpg",
    description: "Описание",
    price: "399 грн",
  },
  {
    id: 18,
    name: "Гольф",
    img: "https://picua.org/images/2022/01/26/f34ccd67f0532693498ace409b7f0adc.jpg",
    description: "Описание",
    price: "399 грн",
  },
  {
    id: 19,
    name: "Гольф",
    img: "https://picua.org/images/2022/01/26/177ed81043db5171b70f93afe95e3f64.jpg",
    description: "Описание",
    price: "399 грн",
  },
  {
    id: 20,
    name: "Гольф",
    img: "https://picua.org/images/2022/01/26/6cf3b6d9bc423ea516647b7ad0500917.jpg",
    description: "Описание",
    price: "399 грн",
  },
  {
    id: 21,
    name: "Гольф",
    img: "https://picua.org/images/2022/01/26/c351dd7db196225b8edc641e74a4b468.jpg",
    description: "Описание",
    price: "399 грн",
  },
  {
    id: 22,
    name: "Гольф",
    img: "https://picua.org/images/2022/01/26/e1e1b4e292a419d9368be9dff9e2fdeb.jpg",
    description: "Описание",
    price: "399 грн",
  },
];

function CasualItem() {
  return (
    <Row xs={1} md={4} className="g-4">
      {casual.map(({ id, img, name, description, price }) => (
        <Col key={id}>
          <Card className={s.card}>
            <Card.Img variant="top" src={img} height="400" className={s.img} />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>{description}</Card.Text>
              <Button className={s.button}>Добавить в корзину</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default CasualItem;
