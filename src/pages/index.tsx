import React from "react";
import Link from "next/link";
import CarouselDesaparecidos from "../components/card/CarouselDesaparecidos";
import "tailwindcss/tailwind.css";
import Menu from "@/components/menu/Menu";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-800">
      <div className="relative h-24 bg-cover bg-center flex justify-center items-center">
        <Menu />
      </div>

      <div className="bg-gray-50 ">
        <div className="py-2 flex-grow text-center w-full">
          <h1 className="text-5xl font-bold text-gray-500 mb-4">
            Ajude a encontrar uma pessoa!
          </h1>
          <p className="py-2 text-xl text-black mb-4">
            Nos últimos anos, uma média de 1800 pessoas somem anualmente no
            Brasil, cada um deixando um vazio nos corações de amigos e
            familiares. <br />
            Se você tem qualquer pista, por menor que seja, Não hesite! Uma
            simples informação pode ser a chave para unir uma família.
          </p>
        </div>

        <div className="py-2 flex flex-col items-center">
          <div className="flex justify-center items-center flex-grow text-center w-96 bg-red-500 hover:bg-red-700 rounded-lg">
            <Link href="report">
              <p className="py-2 text-lg font-bold  text-black">
                Conhece alguém que desapareceu?
                <br /> CADASTRE!
              </p>
            </Link>
          </div>
        </div>

        <div className="py-4 flex items-center justify-center">
          <CarouselDesaparecidos />
        </div>
      </div>

      <footer className="flex  justify-center items-center text-center mt-auto h-12 bg-gray-800">
        <p>Email: getmedesaparecidos@gmail.com</p>
      </footer>
    </div>
  );
}
