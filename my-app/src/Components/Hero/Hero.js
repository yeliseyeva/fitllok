import React from "react";
import s from "./Hero.module.css";
import "../../index.css";
import { NavLink } from "react-router-dom";

function Hero() {
  return (
    <section className={s.hero}>
      <div>
        {/* <h1 class="hero-title">ЭФФЕКТИВНЫЕ РЕШЕНИЯ ДЛЯ ВАШЕГО БИЗНЕСА</h1> */}
        {/* <button type="button" className={s.button}>Каталог</button> */}
        <NavLink to="/catalog/leggins" className={s.navLink}>
          <button type="button" className={s.button}>
            Каталог
          </button>
        </NavLink>
      </div>
    </section>
  );
}

export default Hero;
