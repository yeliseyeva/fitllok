import React from "react";
import { Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import search from "../../images/search.svg";
import bag from "../../images/bag.svg";
import s from "./Header.module.css";

function Header () {
    return (
        <header className={s.header}>
        <div className={s.headerConteiner}>
            {/* <a href="./index.html" className={s.logoHeader}><span class="accent">Web</span>Studio</a> */}


            {/* <button type="button" className={s.menuButton} aria-controls="menu-conteiner" aria-expanded="false" data-menu-button>
                <svg class="menu-svg" width="40px" height="40px" aria-label="Переключатель мобильного меню">
                    <use class="icon-menu" href="./images/symbol-defs.svg#icon-menu"></use>
                    <use class="icon-cross" href="./images/symbol-defs.svg#icon-close"></use>
                </svg>
            </button> */}


            <div className={s.menuConteiner} id="menu-conteiner" data-menu>
                <nav class="main-nav">  
                    <ul className={s.nav}>
                        <li className={s.navItem}><a class="current" href="./index.html">Главная</a></li>
                        <li className={s.navItem}><a href="./portfolio.html">Каталог</a></li>
                        <li className={s.navItem}><a href="./">Доставка</a></li>
                        <li className={s.navItem}><a href="./">Контакты</a></li>
                    </ul>  
                </nav>
    
                <ul className={s.address}>
                    <li className={s.addressItem}>
                        <a href="mailto:info@devstudio.com" className={s.addressLink}>
                                {/* <svg class="icon-contacts icon-milo">
                                    <use href="./images/symbol-defs.svg#milo" ></use>
                                </svg> */}
                            info@devstudio.com
                        </a>
                    </li>
                    <li className={s.addressItem}>
                        <a href="tel:380961111111" class="tel" className={s.addressLink}>
                                <svg class="icon-contacts icon-phone">
                                    <use href="../../images/search.css" ></use>
                                </svg>
                            +38 096 111 11 11
                        </a>
                    </li>
                </ul>

                {/* <ul class="social-menu">
                    <li><a href="">Instagram</a></li>
                    <li><a href="">Twitter</a></li>
                    <li><a href="">Facebook</a></li>
                    <li><a href="">LinkedIn</a></li>
                </ul> */}
            </div>
            

        </div>
    </header>
    )
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