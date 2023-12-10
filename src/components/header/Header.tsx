"use client";
import React, { useState } from "react";
import "./header.css";
import Shopping_cart from "../shopping_cart/Shopping_cart";
interface pagina_type {
  pagina: string;
}
const Header = ({ pagina }: pagina_type) => {
  const [handle_state, set_handle_state] = useState(0);
  const [handle_menu_state, set_handle_menu_state] = useState(0);

  const effect_bars = () => {
    const bars_one = document.querySelector("#bars_one") as HTMLSpanElement;
    const bars_two = document.querySelector("#bars_two") as HTMLSpanElement;
    const bars_tree = document.querySelector("#bars_tree") as HTMLSpanElement;

    set_handle_state(handle_state + 1);
    if (handle_state % 2 != 0) {
      bars_one.style.transform = "rotate(0deg)";

      bars_tree.style.transform = "rotate(0deg)";
      bars_tree.style.marginLeft = "10px";

      setTimeout(() => {
        bars_two.style.opacity = "1";
        bars_two.style.transform = "rotate(0deg)";
        bars_two.style.marginLeft = "5px";
      }, 200);
    } else {
      bars_two.style.opacity = "0";
      setTimeout(() => {
        bars_one.style.transform = "rotate(45deg)";
        bars_one.style.marginLeft = "0";

        bars_tree.style.transform = "rotate(-45deg)";
        bars_tree.style.marginLeft = "0";
      }, 200);
    }
  };

  const handle_menu_open = () => {
    effect_bars();
    set_handle_menu_state(handle_menu_state + 1);
    const menu_opened = document.querySelector(".menu_opened") as HTMLElement;
    const hamburguer_menu = document.querySelector(".hamburguer_menu") as HTMLDivElement;

    if (handle_menu_state % 2 == 0) {
      menu_opened.style.transform = "scale(100%)";
      hamburguer_menu.style.left='85%';
    } else {
      menu_opened.style.transform = "scale(0%)";
      hamburguer_menu.style.left='0';

    }
  };
  return (
    <header>
      <div
        className="hamburguer_menu"
        onClick={() => {
          handle_menu_open();
        }}
      >
        <span id="bars_one"></span>
        <span id="bars_two"></span>
        <span id="bars_tree"></span>
      </div>
      <span className="pagina">{pagina}</span>
      <span className="Shopping_cart_icon">
        <Shopping_cart />
      </span>
      <section className="menu_opened">
        <h1>Bem vindo !</h1>
        <div className="logo">
          <img src="https://placehold.co/80x80" alt="ilustrative image" />
        </div>
        <div className="menu_content">
          <ul>
            <li>Início</li>
            <li>Cardápio</li>
            <li>Sobre</li>
            <li>Contato</li>
            <li onClick={() => {
          handle_menu_open();
        }}>Voltar</li>
          </ul>
        </div>
      </section>
    </header>
  );
};

export default Header;
