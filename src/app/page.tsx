"use client";
import "./Page/page.css";
import Header from "@/components/header/Header";
import "./Global _style/globals.css";
import Loader from "@/components/Loader/Loader";
import { useEffect, useRef, useState } from "react";
export default function Home() {
  const [loading, setLoading] = useState(true);

  const full_load_page_check = async () => {
    await fetch("/").then(() => {
      setLoading(false);
    });
  };
  useEffect(() => {
    full_load_page_check();
  }, []);

  return (
    <section>
      {loading == true && <Loader />}
      <Header pagina="Início" />
      <div className="container">
        <img src="https://placehold.co/150x150" alt="business logo" />
        <div className="info">
          <h1>Lanchocho</h1>
          <i>prazer em te servir</i>
          <p>Endereço: rua f ficticio Nº 502</p>
          <p>Tel: 9999999999</p>
          <p>
            Status de funcionamento: <span>x</span>
          </p>
        </div>
        <div className="buttons">
          <button type="button"> Cardápio</button>
          <button type="button" disabled> Reservar uma mesa</button>
          <button type="button" disabled>Reservar o espaço</button>
        </div>
      </div>
    </section>
  );
}
