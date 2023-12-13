"use client";
import "./Page/page.css";
import Header from "@/components/header/Header";
import "./Global _style/globals.css";
import Loader from "@/components/Loader/Loader";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [status, set_Status] = useState(false);
  const [data_atual, set_data_atual] = useState("data");

  const data = new Date();
  const dia = data.getDay();
  const hora = data.getHours();
  const minutos = data.getMinutes();
  const converter_dias_da_semana: any = {
    0: "Domingo",
    1: "Segunda",
    2: "Terça",
    3: "Quarta",
    4: "Quinta",
    5: "Sexta",
    6: "Sábado",
  };

  const full_load_page_check = async () => {
    await fetch("/").then(() => {
      setLoading(false);
      
    });
  };
  useEffect(() => {
    full_load_page_check();
  }, []);

  setInterval(() => {
    funcionamento();
  }, 100);

  const mudar_cor_span_funcionamento = (cor:string)=>{
    const span = document.querySelector(".status") as HTMLSpanElement;
    span.style.backgroundColor=cor;
    span.style.color="white";
    span.style.padding='0.1rem';
    span.style.borderRadius='2px'
    
  }
  const funcionamento = () => {
    if (converter_dias_da_semana[dia] == "Segunda") {
      set_Status(false);
      mudar_cor_span_funcionamento("red")
    } else if ((hora <= 6 && minutos <= 59) || (hora >= 23 && minutos >= 0)) {
      set_Status(false);
      mudar_cor_span_funcionamento("red")

    } else {
      set_Status(true);
      mudar_cor_span_funcionamento("green")

    }
  };
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
            Status de funcionamento: <span className="status">{status == true ? "Aberto" : "Fechado"}</span>
          </p>
        </div>
        <div className="buttons">
          <button type="button"> Cardápio</button>
          <button type="button" disabled>
            {" "}
            Reservar uma mesa
          </button>
          <button type="button" disabled>
            Reservar o espaço
          </button>
        </div>
      </div>
    </section>
  );
}
