import React, { useState } from "react";
import Link from "next/link";
import CarouselDesaparecidos from "../components/card/CarouselDesaparecidos";
import "tailwindcss/tailwind.css";
import Menu from "@/components/menu/Menu";
import useSession from "@/hooks/session/use-session/use-session";
import InformativeModal from "@/components/modal/modalinformative";
import router from "next/router";
import MenuLoged from "@/components/menu/MenuLoged";

export default function Home() {
  const session = useSession();
  const [isInfoModalOpen, setInfoModalOpen] = useState(false);

  const openInfoModal = () => setInfoModalOpen(true);
  const closeInfoModal = () => setInfoModalOpen(false);

  const handleButtonClick = () => {
    if (session.user !== null) {
      router.push("/report");
    } else {
      openInfoModal();
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-800">
      <div className="relative h-24 bg-cover bg-center flex justify-center items-center">
        {session.user !== null ? <MenuLoged /> : <Menu />}
      </div>

      <div className="bg-gray-50 px-4 sm:px-0">
        <div className="py-2 flex-grow text-center w-full">
          <h1 className="text-3xl sm:text-5xl font-bold text-gray-500 mb-4">
            Ajude a encontrar uma pessoa!
          </h1>
          <p className="py-2 text-sm sm:text-xl text-black mb-4">
            Nos últimos anos, uma média de 1800 pessoas somem anualmente no
            Brasil, cada um deixando um vazio nos corações de amigos e
            familiares.
            <br />
            Se você tem qualquer pista, por menor que seja, Não hesite! Uma
            simples informação pode ser a chave para unir uma família.
          </p>
        </div>

        <div className="py-2 flex flex-col items-center">
          <button
            onClick={handleButtonClick}
            className="flex justify-center items-center flex-grow text-center w-full sm:w-96 bg-red-500 hover:bg-red-700 rounded-lg py-2 text-lg font-bold text-black"
          >
            Conhece alguém que desapareceu?
            <br />
            CADASTRE!
          </button>
        </div>

        <div className="py-4 flex items-center justify-center">
          <CarouselDesaparecidos />
        </div>
      </div>

      <footer className="flex justify-center items-center text-center mt-auto h-12 bg-gray-800">
        <p>Email: getmedesaparecidos@gmail.com</p>
      </footer>

      <InformativeModal
        isOpen={isInfoModalOpen}
        onClose={closeInfoModal}
        message="Você precisa estar logado para acessar este recurso."
      />
    </div>
  );
}
