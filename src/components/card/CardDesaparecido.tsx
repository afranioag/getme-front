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
    <div className="shadow-md rounded-lg w-72 mx-auto bg-gray-200 p-1 text-center border border-gray-500">
      <div className="text-center">
        <div className="flex justify-center">
          <Image
            src={imagePath}
            alt="Foto do Desaparecido"
            width={220}
            height={220}
            className="rounded-lg"
          />
        </div>
        <div className="text-black text-lg">
          <h2 className="text-black text-xl font-bold">
            {desaparecido.person().name()}
          </h2>
          <p>
            Idade: {desaparecido.person().age()}, Altura:{" "}
            {desaparecido.person().height()} cm
          </p>
          <p>
            Último local visto: {desaparecido.lastSeenLocation().city},{" "}
            {desaparecido.lastSeenLocation().state}
          </p>
        </div>
        <div className="flex bg-slate-500 hover:bg-slate-800 items-center justify-center rounded-lg">
          <Link href={`personview`}>
            <p className=" text-white font-bold py-2">Visualizar</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardDesaparecido;
