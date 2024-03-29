"use client";
import Header from "@/components/header/Header"
import "./globalcss/page.css";
import "./globalcss/globals.css";
import Loader from "@/components/Loader/Loader";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import json from "../../api/info.json"

export default function Home() {
  console.log(json)
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
      funcionamento()
    });
  };
  useEffect(() => {
    full_load_page_check();
  });


  const mudar_cor_span_funcionamento = (cor:string)=>{
    const span_syle = document.querySelector(".status") as HTMLSpanElement;
    span_syle.style.backgroundColor=cor;
    span_syle.style.color="white";
    span_syle.style.padding='0.1rem';
    span_syle.style.borderRadius='2px'
    
  }
  const funcionamento = () => {
    if (converter_dias_da_semana[dia] == "Segunda") {
      set_Status(false);
      mudar_cor_span_funcionamento("red")
    } else if ((hora <= 17 && minutos <= 59) || (hora >= 22 && minutos >= 59)) {
      set_Status(false);
      mudar_cor_span_funcionamento("red")

    } else {
      set_Status(true);
      mudar_cor_span_funcionamento("green")

    }
  };

  const main_title = "Início";
  return (
    <>
    {document.title= main_title}
    <Header title={main_title} />
    <section>
      {loading == true && <Loader />}
      <div className="container">
        <img src="https://placehold.co/150x150" alt="business logo" />
        <div className="info">
          <h1>{json.business_info.name}</h1>
          <i>{json.business_info.slogan}</i>
          <p>{json.business_info.address}</p>
          <p>{json.business_info.tel}</p>
          <p>
            Status de funcionamento: <span className="status">{status == true ? "Aberto" : "Fechado"}</span>
          </p>
        </div>
        <div className="buttons">
          <Link href={"/menu"}> <button type="button"> Cardápio</button></Link>
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
    </>

  );
}
