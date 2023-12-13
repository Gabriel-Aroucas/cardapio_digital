"use client";
import "./Page/page.css";
import Header from "@/components/header/Header";
import "./Global _style/globals.css";
import Loader from "@/components/Loader/Loader";
import { useEffect, useRef, useState } from "react";
export default function Home() {
 const [loading, setLoading] = useState(true)

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
    </section>
  );
}
