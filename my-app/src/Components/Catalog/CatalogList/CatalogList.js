// import { Row, Col, Card } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import s from "./CatalogList.module.css";
// import "../../../index.css";
// import CardsItems from "./CardsItems/CardsItems";
// import img from "../../images/"

// const catalogList = [
//   {
//     id: 1,
//     name: "Лосины",
//     img: "https://picua.org/images/2021/12/07/cfbc1e3f70cf1498cdccc27e88e3ad50.jpg",
//     linkTo: "leggins",
//   },

//   {
//     id: 2,
//     name: "Топы",
//     img: "https://picua.org/images/2021/12/07/68b5e4e70112a9e6479912383f7b1861.png",
//     linkTo: "tops",
//   },

//   {
//     id: 3,
//     name: "Комплекты",
//     img: "https://picua.org/images/2021/12/07/51c11b5e871190e9350e545ab137de67.jpg",
//     linkTo: "complects",
//   },

//   {
//     id: 4,
//     name: "Кэжуал",
//     img: "https://picua.org/images/2021/12/07/451c0a281b0554054666fcf41ac01468.png",
//     linkTo: "casual",
//   },
// ];

// function CatalogList() {

//   return (
//     <>
//       <Row xs={1} md={4} className="g-4">
//         <Leggins/>
//         <Tops/>
//         <Complects/>
//         <Casual/>
//       </Row>

      
//     </>
//   );
// }

// export default CatalogList;









// import { Row, Col, Card } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import s from "./CatalogList.module.css";
// import "../../../index.css";
// import { NavLink} from "react-router-dom";
// // import CardsItems from "./CardsItems/CardsItems";
// import Button from "@restart/ui/esm/Button";
// // import img from "../../images/"

// const catalogList = [
//   {
//     id: 1,
//     name: "Лосины",
//     img: "https://picua.org/images/2021/12/07/cfbc1e3f70cf1498cdccc27e88e3ad50.jpg",
//     linkTo: "leggins",
//   },

//   {
//     id: 2,
//     name: "Топы",
//     img: "https://picua.org/images/2021/12/07/68b5e4e70112a9e6479912383f7b1861.png",
//     linkTo: "tops",
//   },

//   {
//     id: 3,
//     name: "Комплекты",
//     img: "https://picua.org/images/2021/12/07/51c11b5e871190e9350e545ab137de67.jpg",
//     linkTo: "complects",
//   },

//   {
//     id: 4,
//     name: "Кэжуал",
//     img: "https://picua.org/images/2021/12/07/451c0a281b0554054666fcf41ac01468.png",
//     linkTo: "casual",
//   },
// ];

// function CatalogList() {

//   function category () {

//   }
  
//   return (
//     <>
//       <Row xs={1} md={4} className="g-4">
//         {catalogList.map(({ img, name, linkTo }) => (
//           <Col>
//             <Card className={s.card}>
//               <Card.Img
//                 variant="top"
//                 src={img}
//                 height="300"
//                 className={s.img}
//               />
//               <Card.Body>
//                 <Card.Title>{name}</Card.Title>
//                 {/* <Card.Text>
//                 This is a longer card with supporting text below as a natural
//                 lead-in to additional content. This content is a little bit
//                 longer.
//               </Card.Text> */}
//                 {/* <Button className={s.button}>Перейти в каталог</Button> */}
//                 <NavLink to={linkTo}>
//                 <Button className={s.button}>Перейти в каталог</Button>
//                 </NavLink>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>

      
//     </>
//   );
// }

// export default CatalogList;