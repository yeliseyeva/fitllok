import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "@restart/ui/esm/Button";
import s from "./Items.module.css";

const tops = [
  {
    id: 1,
    name: "Рашгард",
    img: "https://picua.org/images/2022/01/26/0f6645f5d57922e9fc074079d1ff5bf4.jpg",
    description: "Описание",
    price: "399 грн",
  },
  {
    id: 2,
    name: "Рашгард",
    img: "https://picua.org/images/2022/01/26/1da5fdca5a218751fb785787c2e0cf1a.jpg",
    description: "Описание",
    price: "399 грн",
  },
  {
    id: 3,
    name: "Рашгард",
    img: "https://picua.org/images/2022/01/26/825c9bf6d9f6cc5f27d3df431a75fb70.jpg",
    description: "Описание",
    price: "399 грн",
  },
  {
    id: 4,
    name: "Рашгард",
    img: "https://picua.org/images/2022/01/26/703af2809cebe47b93850372c2ceb276.jpg",
    description: "Описание",
    price: "399 грн",
  },
  {
    id: 5,
    name: "Топ",
    img: "https://picua.org/images/2022/01/26/275e8616fda4e6caf7f378ff874895c7.jpg",
    description: "Описание",
    price: "399 грн",
  },
  {
    id: 6,
    name: "Топ",
    img: "https://picua.org/images/2022/01/26/c52cff9b15fb7ec54c027fd5a36049d2.jpg",
    description: "Описание",
    price: "399 грн",
  },
  {
    id: 7,
    name: "Топ",
    img: "https://picua.org/images/2022/01/26/f0bd7441656e1bb19f02690aaf5c0352.jpg",
    description: "Описание",
    price: "399 грн",
  },
  {
    id: 8,
    name: "Топ",
    img: "https://picua.org/images/2022/01/26/a715b9a3a747ce3ade2ee7d713d5b637.jpg",
    description: "Описание",
    price: "399 грн",
  },
  {
    id: 9,
    name: "Рашгард укороченный",
    img: "https://picua.org/images/2022/01/26/e57dc673bf8ff1b07402ffe783addee1.jpg",
    description: "Описание",
    price: "399 грн",
  },
  {
    id: 10,
    name: "Рашгард укороченный на молнии",
    img: "https://picua.org/images/2022/01/26/151f01fef6a8a52b2ed502776620d577.jpg",
    description: "Описание",
    price: "399 грн",
  },
  {
    id: 11,
    name: "Топ",
    img: "https://picua.org/images/2022/01/26/06405091e1323b875cf780561fc29c24.jpg",
    description: "Описание",
    price: "399 грн",
  },
  {
    id: 12,
    name: "Топ",
    img: "https://picua.org/images/2022/01/26/887b411948d636eee6300827877e8bff.jpg",
    description: "Описание",
    price: "399 грн",
  },
  {
    id: 13,
    name: "Топ",
    img: "https://picua.org/images/2022/01/26/cd0a059f92f83f8f4bfe82d126bdf6eb.jpg",
    description: "Описание",
    price: "399 грн",
  },
  {
    id: 14,
    name: "Топ",
    img: "https://picua.org/images/2022/01/26/beecbbb78614cca674824ba5d296d25d.jpg",
    description: "Описание",
    price: "399 грн",
  },
  {
    id: 15,
    name: "Топ",
    img: "https://picua.org/images/2022/01/26/014ac60169f52e20a949599fa2d35804.jpg",
    description: "Описание",
    price: "399 грн",
  },
  {
    id: 16,
    name: "Топ",
    img: "https://picua.org/images/2022/01/26/fce465c492e04d5d188398990bf998e6.jpg",
    description: "Описание",
    price: "399 грн",
  },
  {
    id: 17,
    name: "Топ",
    img: "https://picua.org/images/2022/01/26/97dc2ab6927f21ac066fc438d6161af8.jpg",
    description: "Описание",
    price: "399 грн",
  },
  {
    id: 18,
    name: "Топ",
    img: "https://picua.org/images/2022/01/26/91f7ed1df7250247c59a6f1b0be262fe.jpg",
    description: "Описание",
    price: "399 грн",
  },
  {
    id: 19,
    name: "Топ",
    img: "https://picua.org/images/2022/01/26/8bda5f2841bad6c843012d49d90a5bf5.png",
    description: "Описание",
    price: "399 грн",
  },
  {
    id: 20,
    name: "Топ",
    img: "https://picua.org/images/2022/01/26/68d52def799ba216c5055ff2393f932b.jpg",
    description: "Описание",
    price: "399 грн",
  },
  {
    id: 21,
    name: "Топ",
    img: "https://picua.org/images/2022/01/26/3f643915ce018fcfb499f408a1bd87ad.jpg",
    description: "Описание",
    price: "399 грн",
  },
  {
    id: 22,
    name: "Топ",
    img: "https://picua.org/images/2022/01/26/a62c1429ab1db41e7e0e4d820654e1ea.jpg",
    description: "Описание",
    price: "399 грн",
  },
  {
    id: 23,
    name: "Топ",
    img: "https://picua.org/images/2022/01/26/29618ee12bf10320b1beefdc9282328b.jpg",
    description: "Описание",
    price: "399 грн",
  },
  {
    id: 24,
    name: "Топ",
    img: "https://picua.org/images/2022/01/26/fb63f6fa93c3a77faec4bc71a11f3215.jpg",
    description: "Описание",
    price: "399 грн",
  },
  {
    id: 25,
    name: "Топ",
    img: "https://picua.org/images/2022/01/26/dfe8bfce1a9b400825791d2bc341c8ba.jpg",
    description: "Описание",
    price: "399 грн",
  },
  {
    id: 26,
    name: "Топ",
    img: "https://picua.org/images/2022/01/26/0ffa38896d23833d12dd1ced797104b9.jpg",
    description: "Описание",
    price: "399 грн",
  },
  {
    id: 27,
    name: "Топ",
    img: "https://picua.org/images/2022/01/26/f0ab9fc3aa001d9a989a01f26fca2a8d.jpg",
    description: "Описание",
    price: "399 грн",
  },
  {
    id: 28,
    name: "Рашгард",
    img: "https://picua.org/images/2022/01/26/bc391655fea456f9c992e34ab3edf03f.jpg",
    description: "Описание",
    price: "399 грн",
  },
  {
    id: 29,
    name: "Рашгард на молнии",
    img: "https://picua.org/images/2022/01/26/ca4cf265e8a193f26977ad9c603a999a.jpg",
    description: "Описание",
    price: "399 грн",
  },
  {
    id: 30,
    name: "Рашгард укороченный",
    img: "https://picua.org/images/2022/01/26/7b80dda8e9e11a6c2c1852a694ca4340.jpg",
    description: "Описание",
    price: "399 грн",
  },
  {
    id: 31,
    name: "Рашгард укороченный",
    img: "https://picua.org/images/2022/01/26/a1a3e7bf738a02c0a8428242f9698d7e.jpg",
    description: "Описание",
    price: "399 грн",
  },
  {
    id: 32,
    name: "Рашгард укороченный",
    img: "https://picua.org/images/2022/01/26/191869590299645f8b744c05a391bc23.jpg",
    description: "Описание",
    price: "399 грн",
  },
  {
    id: 33,
    name: "Кроп-Топ",
    img: "https://picua.org/images/2022/01/26/1241f07be080a36e14d8aaaca71d3c12.jpg",
    description: "Описание",
    price: "399 грн",
  },
  {
    id: 34,
    name: "Рашгард",
    img: "https://picua.org/images/2022/01/26/4de3adab98d51959cf496b4cafb6a70d.jpg",
    description: "Описание",
    price: "399 грн",
  },
  {
    id: 35,
    name: "Топ",
    img: "",
    description: "Описание",
    price: "399 грн",
  },
  {
    id: 36,
    name: "Топ",
    img: "",
    description: "Описание",
    price: "399 грн",
  },
  {
    id: 37,
    name: "Топ",
    img: "",
    description: "Описание",
    price: "399 грн",
  },
  {
    id: 38,
    name: "Топ",
    img: "",
    description: "Описание",
    price: "399 грн",
  },
  {
    id: 39,
    name: "Топ",
    img: "",
    description: "Описание",
    price: "399 грн",
  },
  {
    id: 40,
    name: "Топ",
    img: "",
    description: "Описание",
    price: "399 грн",
  },
  {
    id: 41,
    name: "Топ",
    img: "",
    description: "Описание",
    price: "399 грн",
  },
  {
    id: 42,
    name: "Топ",
    img: "",
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

export default TopsItem;
