import React from "react";
import { useState } from "react";
// import { Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import search from "../../images/search.svg";
import bag from "../../images/bag.svg";
import s from "./Header.module.css";
import "../../index.css";
import NavBar from "../NavBar/NavBar";
import burger from "../../images/burger.svg";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const onClickMenu = () => {
    toggleMenu();
  };
  return (
    <header className={s.header}>
      <div className={s.headerConteiner}>
        <div className={s.burger} onClick={onClickMenu}>
          <img src={burger} alt="menu" />
        </div>
        <div className={s.logoHeader}>FITLOOK</div>
        <div className={s.menuConteiner} id="menu-conteiner" data-menu>
          <nav>
            <ul className={s.nav}>
              <NavBar />
            </ul>
          </nav>

          <ul className={s.address}>
            <li className={s.addressItem}>
              <a href="mailto:info@devstudio.com" className={s.addressLink}>
                <img src={bag} alt="search" width="26" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {showMenu && <NavBar />}
    </header>
  );
}

export default Header;

// function Navigation() {
//     return (
//       <header className={s.header}>
//         <div>
//           <Nav activeKey="/home">
//             <Nav.Item>
//               <Nav.Link href="/home">Главная</Nav.Link>
//             </Nav.Item>
//             <Nav.Item>
//               <Nav.Link href="/home">Каталог</Nav.Link>
//             </Nav.Item>
//             <Nav.Item>
//               <Nav.Link eventKey="link-1">Доставка</Nav.Link>
//             </Nav.Item>
//             <Nav.Item>
//               <Nav.Link eventKey="link-2">Контакты</Nav.Link>
//             </Nav.Item>

//               <ul className={s.bagList}>
//                 <li>
//                   <Nav.Item>
//                     <Nav.Link eventKey="link-2">
//                       <img src={search} alt="search" width="14" />
//                     </Nav.Link>
//                   </Nav.Item>
//                 </li>
//                 <li>
//                   <Nav.Item>
//                     <Nav.Link eventKey="link-2">
//                       <img src={bag} alt="search" width="18" />
//                     </Nav.Link>
//                   </Nav.Item>
//                 </li>
//               </ul>
//           </Nav>
//         </div>
//       </header>
//     );
//   }
