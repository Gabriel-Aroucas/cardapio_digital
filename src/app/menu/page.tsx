"use client";
import json from "../../../api/info.json";
import Header from "@/components/header/Header";
import "./style.css";
import "../globalcss/globals.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import { createContext, useState } from "react";
//export const metadata = {
//  title: "Menu",
//};

export const ProductContext = createContext([{}]);

const Menu = () => {
  const [productState, setProductState] = useState([{}]);
  return (
    <>
      <ProductContext.Provider value={productState}>
        <Header title="Menu" />
      </ProductContext.Provider>

      <main>
        {json.items.map((item, index) => {
          return (
            <div key={index}>
              <h2>{item.product}</h2>
              <img src="https://placehold.co/250x150" alt="placehold image" />
              <p>{item.content}</p>
              <p>
                R$ {item.price}
                <span
                  onClick={() => {
                    setProductState([{"t":"t"}]);
                  }}
                >
                  <FontAwesomeIcon icon={faSquarePlus} />
                </span>{" "}
              </p>
            </div>
          );
        })}
      </main>
    </>
  );
};

export default Menu;
