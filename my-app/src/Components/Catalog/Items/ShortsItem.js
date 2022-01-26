import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "@restart/ui/esm/Button";
import s from "./Items.module.css";

const shorts = [
  {
    id: 1,
    name: "Велосипедки",
    img: "https://picua.org/images/2022/01/26/90dd2722395b7a8785edae1556d01b82.jpg",
    description: "Описание",
    price: "399 грн",
  },
  {
    id: 2,
    name: "Велосипедки с высоким поясом",
    img: "https://picua.org/images/2022/01/26/215d1ab9038098fff6fae6d235bede96.jpg",
    description: "Описание",
    price: "399 грн",
  },
  {
    id: 3,
    name: "Велосипедки",
    img: "https://picua.org/images/2022/01/26/0b3c066e98eefdbdeeabda6202a590e6.jpg",
    description: "Описание",
    price: "399 грн",
  },
  {
    id: 4,
    name: "Велосипедки с пуш-ап эффектом",
    img: "https://picua.org/images/2022/01/26/63f4e3b6e4d2dfb29bafc7c2ec87f943.jpg",
    description: "Описание",
    price: "499 грн",
  },
  {
    id: 5,
    name: "Велосипедки",
    img: "https://picua.org/images/2022/01/26/636e356eee97fe5ce6d9c8d6da07c161.jpg",
    description: "Описание",
    price: "399 грн",
  },
  {
    id: 6,
    name: "Велосипедки с высоким поясом",
    img: "https://picua.org/images/2022/01/26/6650891404193cbe51480f00214e7032.jpg",
    description: "Описание",
    price: "399 грн",
  },
  {
    id: 7,
    name: "Велосипедки с пуш-ап эффектом",
    img: "https://picua.org/images/2022/01/26/71cb155c2ca171126a6ebb85258eadc1.jpg",
    description: "Описание",
    price: "499 грн",
  },
  {
    id: 8,
    name: "Велосипедки",
    img: "https://picua.org/images/2022/01/26/12b91d9df70b75c20eb1dccdc0172b0a.jpg",
    description: "Описание",
    price: "399 грн",
  },
  {
    id: 9,
    name: "Велосипедки с высоким поясом",
    img: "https://picua.org/images/2022/01/26/d3297dec6d90f7229b0832c6478eb616.jpg",
    description: "Описание",
    price: "399 грн",
  },
  {
    id: 10,
    name: "Велосипедки",
    img: "https://picua.org/images/2022/01/26/e9a304c91963cb1649d95a8e7163b998.jpg",
    description: "Описание",
    price: "399 грн",
  },
  {
    id: 11,
    name: "Велосипедки",
    img: "https://picua.org/images/2022/01/26/53bbe269539b04681705ede421b16e73.jpg",
    description: "Описание",
    price: "399 грн",
  },
  {
    id: 12,
    name: "Велосипедки",
    img: "https://picua.org/images/2022/01/26/4f2a222b890b9bfc532a07a261fa2506.jpg",
    description: "Описание",
    price: "399 грн",
  },
  {
    id: 13,
    name: "Велосипедки с пуш-ап эффектом",
    img: "https://picua.org/images/2022/01/26/62be7ff43cafa4bb0ff43dd16a488745.jpg",
    description: "Описание",
    price: "499 грн",
  },
  {
    id: 14,
    name: "Велосипедки",
    img: "https://picua.org/images/2022/01/26/d77bb3da4f46add4fe29733304e7617c.jpg",
    description: "Описание",
    price: "399 грн",
  },
  {
    id: 15,
    name: "Велосипедки",
    img: "https://picua.org/images/2022/01/26/c63b0e0f0f838b84e955c4bcd6507a83.jpg",
    description: "Описание",
    price: "399 грн",
  },
  {
    id: 16,
    name: "Велосипедки",
    img: "https://picua.org/images/2022/01/26/a195104072c320fbbcf7fbe637e70533.jpg",
    description: "Описание",
    price: "399 грн",
  },
  {
    id: 17,
    name: "Велосипедки",
    img: "https://picua.org/images/2022/01/26/2e78994085d28bf0fe94c95533064898.jpg",
    description: "Описание",
    price: "399 грн",
  },
  {
    id: 18,
    name: "Велосипедки с пуш-ап эффектом",
    img: "https://picua.org/images/2022/01/26/8a5033d8a2d199576153ebb0a40a26cc.jpg",
    description: "Описание",
    price: "499 грн",
  },
  {
    id: 19,
    name: "Велосипедки с пуш-ап эффектом",
    img: "https://picua.org/images/2022/01/26/8359f470648556428e696c7bc1ab7848.jpg",
    description: "Описание",
    price: "499 грн",
  },
  {
    id: 20,
    name: "Велосипедки с пуш-ап эффектом",
    img: "https://picua.org/images/2022/01/26/907cc560d41c8470b2a6dc7f5a066156.jpg",
    description: "Описание",
    price: "499 грн",
  },
  {
    id: 21,
    name: "Велосипедки",
    img: "https://picua.org/images/2022/01/26/c89b30140f289e407d7c8f2b1237d274.jpg",
    description: "Описание",
    price: "399 грн",
  },
  {
    id: 22,
    name: "Велосипедки с высоким поясом",
    img: "https://picua.org/images/2022/01/26/e82d456b07bf4914b6eba6765e9c8bc3.jpg",
    description: "Описание",
    price: "399 грн",
  },
  {
    id: 23,
    name: "Велосипедки",
    img: "https://picua.org/images/2022/01/26/20d9cd265fcb1ae1b58163e5a6c2d590.jpg",
    description: "Описание",
    price: "399 грн",
  },
];

function ShortsItem() {
  return (
    <Row xs={1} md={4} className="g-4">
      {shorts.map(({ id, img, name, description, price }) => (
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

export default ShortsItem;
