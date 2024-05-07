import React from "react";
import Link from "next/link";
import CarouselDesaparecidos from "../components/card/CarouselDesaparecidos";
import "tailwindcss/tailwind.css";
import imgHome from "../../public/images/gray.jpg";
import Menu from "@/components/menu/Menu";

export default function Home() {
  return (
    <div
      className="flex flex-col min-h-screen"
      style={{ backgroundImage: `url(${imgHome.src})` }}
    >
      <div className="relative h-32 bg-cover bg-center flex justify-center items-center">
        <Menu />
      </div>

      <div className="bg-gray-50 py-2 flex-grow text-center w-full">
        <h1 className="text-5xl font-bold text-gray-500 mb-4">
          Ajude a encontrar uma pessoa!
        </h1>
        <p className="text-xl text-black mb-4">
          Nos últimos anos, uma média de 1800 pessoas somem anualmente no
          Brasil, cada um deixando um vazio nos corações de amigos e familiares.{" "}
          <br />
          Se você tem qualquer pista, por menor que seja, Não hesite! Uma
          simples informação pode ser a chave para unir uma família.
        </p>
      </div>

      <div className="flex flex-col items-center py-2 bg-gray-50">
        <div className="flex justify-center items-center py-2 flex-grow text-center  w-96 bg-red-500 hover:bg-red-700 rounded-lg">
          <Link href="report">
            <p className="text-lg font-bold  text-black">
              Conhece alguém que desapareceu?
              <br /> CADASTRE!
            </p>
          </Link>
        </div>
      </div>
      <div className="bg-gray-50 py-2 flex items-center">
        <CarouselDesaparecidos />
      </div>

      <footer className="bg-gray-50 p-4 text-center mt-auto">
        <p className="text-gray-700">Contato: exemplo@exemplo.com</p>
        <p className="text-gray-700">Telefone: (99) 99999-9999</p>
      </footer>
    </div>
  );
}
