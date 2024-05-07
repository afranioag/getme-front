import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PersonFields } from "../../models/person/types";
import Report from "@/models/report/report";

interface CardDesaparecidoProps {
  desaparecido: Report;
}

const CardDesaparecido: React.FC<CardDesaparecidoProps> = ({
  desaparecido,
}) => {
  if (!desaparecido) {
    return <div>Carregando...</div>;
  }
  const imagePath = "/images/perfil1.png";

  return (
    <div className="shadow-md rounded-lg max-w-sm mx-auto h-auto bg-blue-300 p-2 text-center border border-gray-950">
      <div className="text-start">
        <div className="mb-2 flex justify-center">
          <Image
            src={imagePath}
            alt="Foto do Desaparecido"
            width={260}
            height={260}
            className="rounded-lg"
          />
        </div>
        <div>
          <h2 className="text-black text-xl font-bold">
            {desaparecido.person().name()}
          </h2>
          <p className="text-black text-lg">
            Idade: {desaparecido.person().age()}, Altura:{" "}
            {desaparecido.person().height()} cm
          </p>
          <p className="text-black text-lg">
            Último local visto: {desaparecido.lastSeenLocation().city},{" "}
            {desaparecido.lastSeenLocation().state}
          </p>
        </div>
        <div className="flex bg-gray-600 hover:bg-gray-800 items-center justify-center rounded-lg">
          <Link href={`personview`}>
            <p className=" text-white font-bold py-2">Visualizar</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardDesaparecido;
