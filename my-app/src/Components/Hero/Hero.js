import React from "react";
import s from "./Hero.module.css"

function Hero () {
    return (
        <section className={s.hero}>
                <div class="hero-conteiner">
                    {/* <h1 class="hero-title">ЭФФЕКТИВНЫЕ РЕШЕНИЯ ДЛЯ ВАШЕГО БИЗНЕСА</h1> */}
                    <button className={s.button} data-modal-open>Каталог</button>
                </div>
        </section>
    )
};

export default Hero;