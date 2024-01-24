"use client";
import json from "../../../api/info.json";
import Header from "@/components/header/Header";
import "./style.css";
import "../globalcss/globals.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import { createContext, useEffect, useState } from "react";
//export const metadata = {
//  title: "Menu",
//};

export const ProductContext = createContext([{}]);

const main_title = "Menu";
const Menu = () => {
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const [productState, setProductState] = useState([{}]);

  useEffect(() => {
    // rename browser
    {
      document.title = main_title;
    }
  }, []);
  return (
    <>
      <ProductContext.Provider value={productState}>
        <Header title={main_title} />
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
                    setProductState([
                      ...productState,
                      {
                        product: item.product,
                        content: item.content,
                        price: item.price,
                        id:item.id
                      },

                    ]);
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
