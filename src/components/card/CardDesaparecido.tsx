import React from "react";
import Image from "next/image";
import Link from "next/link";
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

  const imagePath = desaparecido.person().image() || "/images/perfil1.png";
  const reportId = desaparecido.id();

  return (
    <div className="shadow-md rounded-lg w-72 max-h-96 mx-auto  p-1 text-center border border-gray-500">
      <div className="text-center">
        <div className=" w-56 h-48 mx-auto mb-4">
          <Image
            src={imagePath}
            alt="Foto do Desaparecido"
            width={220}
            height={220}
            className="rounded-lg object-cover w-full h-full"
          />
        </div>

        <div className="text-black text-lg max-h-20 overflow-y-auto ">
          <h2 className="text-black text-xl font-bold">
            {desaparecido.person().name()}
          </h2>
          <p>
            Idade: {desaparecido.person().age()}, Altura:{" "}
            {desaparecido.person().height()} cm
          </p>
          <p>
            Local visto: {desaparecido.lastSeenLocation().city},{" "}
            {desaparecido.lastSeenLocation().state}
          </p>
        </div>

        <Link href={`/personview/${reportId}`}>
          <button className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-lg mt-4 w-full">
            Visualizar
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CardDesaparecido;
