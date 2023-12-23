import json from "../../../api/info.json";
import Header from "@/components/header/Header";
import "./style.css";
import "../globalcss/globals.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";

export const metadata = {
  title: "Menu",
};

const menu = () => {
  return (
    <>
      <Header title="Menu" />
      <main>

        {json.items.map((item, index) => {
          return (
            <div key={index}>
              <h2>{item.product}</h2>
              <img src="https://placehold.co/250x150" alt="" />
              <p>{item.content}</p>
              <p>R$ {item.price} <span><FontAwesomeIcon icon={faSquarePlus}/></span>  </p>
            </div>
          );
        })}
      </main>
    </>
  );
};

export default menu;
