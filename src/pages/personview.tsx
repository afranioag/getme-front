import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import Menu from "@/components/menu/Menu";

interface LastSeenLocation {
  city: string;
  state: string;
  neighborhood: string;
  number: string;
  postalCode: string;
}

interface Person {
  name: string;
  age: number;
  height: number;
  eyeColor: string;
  hairColor: string;
  image: string;
}

interface Report {
  person: Person;
  lastSeenLocation?: LastSeenLocation;
}

const ViewPerson = () => {
  const router = useRouter();
  const [id, setId] = useState<number>(1);
  const [report, setReport] = useState<Report | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      console.log("Chamando API com ID:", id);
      fetch(`http://app-getme-7e927ed7a7c0.herokuapp.com/api/reports/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setReport(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Erro ao buscar dados: ", error);
          setLoading(false);
        });
    }
  }, [id]);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (!report) {
    return <div>Nenhum dado encontrado.</div>;
  }

  const { person, lastSeenLocation } = report;

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-800">
      <div className="text-center mt-8">
        <h1 className="text-white text-5xl font-bold">
          Bem-vindo à nossa missão
        </h1>
      </div>

      <p className="text-3xl text-center mt-4">
        Se você tem alguma informação que possa levar até essa pessoa, por
        favor, não hesite em ajudar.
        <br />
        Sua ação pode fazer a diferença.
      </p>

      <div
        className="flex m-8 p-1 border h-[38rem] rounded-lg"
        style={{ width: "90rem" }}
      >
        <div className="relative w-2/5 mr-1">
          <Image
            src={person.image || "/images/perfil2.jpg"}
            alt="Foto do Desaparecido"
            layout="fill"
            objectFit="cover"
            className="rounded-l-lg"
          />
        </div>

        <div
          className="flex flex-col justify-center items-center bg-blue-300 text-black p-4"
          style={{ width: "55rem" }}
        >
          <h1 className="text-4xl">{person.name}</h1>
          <p className="text-2xl">Idade: {person.age}</p>
          <p className="text-2xl">Altura: {person.height} cm</p>
          <p className="text-2xl">Cor dos Olhos: {person.eyeColor}</p>
          <p className="text-2xl">Cor do Cabelo: {person.hairColor}</p>
          <p className="text-2xl">
            Último Local Visto: {lastSeenLocation?.city},{" "}
            {lastSeenLocation?.state}, {lastSeenLocation?.neighborhood}, Nº{" "}
            {lastSeenLocation?.number}, CEP {lastSeenLocation?.postalCode}
          </p>
        </div>
      </div>

      <div className="text-center text-gray-200">
        <p className="text-3xl">
          É Preciso ter uma conta para adicionar informações!
        </p>
      </div>
    </div>
  );
};

export default ViewPerson;
