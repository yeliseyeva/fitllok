import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "@restart/ui/esm/Button";
import s from "./Items.module.css";


const leggins = [
    {
        id: 1,
        name: "Лосины с широким поясом",
        img: "https://picua.org/images/2021/12/08/9a74f86c5c9fa47ebfeb68531771d6f4.jpg",
        description: "Описание",
        price: "599 грн"
    },
    {
        id: 2,
        name: "Лосины с высоким поясом",
        img: "https://picua.org/images/2021/12/08/928a2e06011e9056ed556ab9823c37dc.jpg",
        description: "Описание",
        price: "599 грн"
    },
    {
        id: 3,
        name: "Лосины с высоким поясом",
        img: "https://picua.org/images/2021/12/08/b898d701ba12a3fda7b08963453ec8f5.jpg",
        description: "Описание",
        price: "599 грн"
    },
    {
        id: 4,
        name: "Лосины с широким поясом",
        img: "https://picua.org/images/2021/12/08/e88bd4a54bdcef8e22a9b958828d0f05.jpg",
        description: "Описание",
        price: "599 грн"
    }
]

function LegginsItem() {
  return (

    <Row xs={1} md={4} className="g-4">
         {leggins.map(({ id, img, name, description, price }) => (
           <Col key={id}>
             <Card className={s.card}>
               <Card.Img
                 variant="top"
                 src={img}
                 height="300"
                 className={s.img}
               />
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

export default LegginsItem;