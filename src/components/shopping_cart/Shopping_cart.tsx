"use client";
import React, { useState } from "react";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Shopping_cart.css";

const Shopping_cart = () => {
  const handle_open_shopping_cart =()=>{
    const content = document.querySelector(".content") as HTMLElement;
    content.style.transform="scale(100%)"
  }
  const handle_close_shopping_cart = ()=>{
    const content = document.querySelector(".content") as HTMLElement;
    content.style.transform="scale(0%)"
  }
  return (
    <section className="shopping_cart">
      <span onClick={()=>{handle_open_shopping_cart()}}>
        <FontAwesomeIcon icon={faShoppingCart} />
      </span>
      <div className="content">
        <span className="close_shopping_cart" onClick={()=>{handle_close_shopping_cart()}}>x</span>
        <h1>Carrinho de compras</h1>
        <div className="items">
          <ul>
            <li>
              <strong>sorvete</strong> - <span>R$ 9,90</span> <span>2</span>{" "}
              <span className="remove_button">x</span>
            </li>
          </ul>
          <div className="price">
            <p>
              Total: <span>R$ 19,80</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shopping_cart;
