import React from "react";
import { Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import search from "../../images/search.svg";
import bag from "../../images/bag.svg";
import s from "./Navigation.module.css";

function Navigation() {
  return (
    <header className={s.header}>
      <div>
        <Nav activeKey="/home">
          <Nav.Item>
            <Nav.Link href="/home">Главная</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/home">Каталог</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">Доставка</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">Контакты</Nav.Link>
          </Nav.Item>

            <ul className={s.bagList}>
              <li>
                <Nav.Item>
                  <Nav.Link eventKey="link-2">
                    <img src={search} alt="search" width="14" />
                  </Nav.Link>
                </Nav.Item>
              </li>
              <li>
                <Nav.Item>
                  <Nav.Link eventKey="link-2">
                    <img src={bag} alt="search" width="18" />
                  </Nav.Link>
                </Nav.Item>
              </li>
            </ul>
        </Nav>
      </div>
    </header>
  );
}

export default Navigation;
