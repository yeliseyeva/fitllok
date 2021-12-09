import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "@restart/ui/esm/Button";
import s from "./Items.module.css";
import { NavLink } from "react-router-dom";

const leggins = [
  {
    id: 1,
    name: "Лосины с широким поясом",
    img: "https://picua.org/images/2021/12/08/9a74f86c5c9fa47ebfeb68531771d6f4.jpg",
    description: "Описание",
    price: "599 грн",
  },
  {
    id: 2,
    name: "Лосины с высоким поясом",
    img: "https://picua.org/images/2021/12/08/928a2e06011e9056ed556ab9823c37dc.jpg",
    description: "Описание",
    price: "599 грн",
  },
  {
    id: 3,
    name: "Лосины с высоким поясом",
    img: "https://picua.org/images/2021/12/08/b898d701ba12a3fda7b08963453ec8f5.jpg",
    description: "Описание",
    price: "599 грн",
  },
  {
    id: 4,
    name: "Лосины с широким поясом",
    img: "https://picua.org/images/2021/12/08/e88bd4a54bdcef8e22a9b958828d0f05.jpg",
    description: "Описание",
    price: "599 грн",
  },
  {
    id: 5,
    name: "Лосины с широким поясом",
    img: "https://picua.org/images/2021/12/08/a113255eacb72abeca88bab574f94f63.jpg",
    description: "Описание",
    price: "599 грн",
  },
  {
    id: 6,
    name: "Лосины с широким поясом",
    img: "https://picua.org/images/2021/12/08/b54dbb25cf3b00685c8f514c1c97abbe.jpg",
    description: "Описание",
    price: "599 грн",
  },
  {
    id: 7,
    name: "Лосины с широким поясом",
    img: "https://picua.org/images/2021/12/08/4f057cb70dcdb106678a5111268889c4.jpg",
    description: "Описание",
    price: "599 грн",
  },
  {
    id: 8,
    name: "Лосины с широким поясом",
    img: "https://picua.org/images/2021/12/08/5afea17c2e9cbc18bc16b1e33cc26300.jpg",
    description: "Описание",
    price: "599 грн",
  },
  {
    id: 9,
    name: "Лосины с широким поясом",
    img: "https://picua.org/images/2021/12/08/5e18127348756b7c26bb3c78cf133d0e.jpg",
    description: "Описание",
    price: "599 грн",
  },
  {
    id: 10,
    name: "Лосины с широким поясом",
    img: "https://picua.org/images/2021/12/08/2cf863d8a1c7a912f0b036e3d425d714.jpg",
    description: "Описание",
    price: "599 грн",
  },
  {
    id: 11,
    name: "Лосины с широким поясом",
    img: "https://picua.org/images/2021/12/08/2700a64e70db0f8da8a5cc08e9ac448b.jpg",
    description: "Описание",
    price: "599 грн",
  },
  {
    id: 12,
    name: "Лосины с широким поясом",
    img: "https://picua.org/images/2021/12/08/eb8bfa59472ed545098f8d838001b9fb.jpg",
    description: "Описание",
    price: "599 грн",
  },
  {
    id: 13,
    name: "Лосины с широким поясом",
    img: "https://picua.org/images/2021/12/08/c339d95c63138f17fe35617cda1078c0.jpg",
    description: "Описание",
    price: "599 грн",
  },
  {
    id: 14,
    name: "Лосины с широким поясом",
    img: "https://picua.org/images/2021/12/08/6840a16fb117c28bf9e40bf6bb0ed642.jpg",
    description: "Описание",
    price: "599 грн",
  },
  {
    id: 15,
    name: "Лосины с широким поясом",
    img: "https://picua.org/images/2021/12/08/d5e6aec0bbd1b64f0ebb83f089695bf7.jpg",
    description: "Описание",
    price: "599 грн",
  },
  {
    id: 16,
    name: "Лосины со штрипками",
    img: "https://picua.org/images/2021/12/08/585df6730546c24798ecde9a42a6983e.jpg",
    description: "Описание",
    price: "599 грн",
  },
  {
    id: 17,
    name: "Лосины с широким поясом",
    img: "https://picua.org/images/2021/12/08/21ce4e1772cfb40fafddf7f55d46530d.jpg",
    description: "Описание",
    price: "599 грн",
  },
  {
    id: 18,
    name: "Лосины с широким поясом",
    img: "https://picua.org/images/2021/12/08/0a22bbc6da05ccb4dfd6256a45d2bf71.jpg",
    description: "Описание",
    price: "599 грн",
  },
  {
    id: 19,
    name: "Лосины с широким поясом",
    img: "https://picua.org/images/2021/12/08/cfe92f53cddd97a7220364c99f50ee1f.jpgсв",
    description: "Описание",
    price: "599 грн",
  },
];

function LegginsItem() {
  return (
    <Row xs={1} md={4} className="g-4">
      {leggins.map(({ id, img, name, description, price }) => (
        <Col key={id}>
          <Card className={s.card}>
            <Card.Img variant="top" src={img} height="300" className={s.img} />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>{price}</Card.Text>
              {/* <Button className={s.button}>Добавить в корзину</Button> */}
              <NavLink to="/card"><Button className={s.button}>Добавить в корзину</Button></NavLink>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default LegginsItem;
