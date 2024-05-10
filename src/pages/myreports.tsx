import React, { useState, useEffect } from "react";
import Image from "next/image";

interface LastSeenLocation {
  country: string;
  state: string;
  city: string;
  neighborhood: string;
  number: string;
  postalCode: string;
}

interface PersonDetails {
  id: number;
  name: string;
  age: number;
  height: number;
  hairColor: string;
  eyeColor: string;
  image: string;
}

interface MyReport {
  person: PersonDetails;
  lastSeenLocation: LastSeenLocation;
}

// Dados mockdos até construir a integração com o back. Ajustando antes a tela.
const mockReports: MyReport[] = [
  {
    person: {
      id: 1,
      name: "João da Silva",
      age: 36,
      height: 175,
      eyeColor: "Castanho",
      hairColor: "Preto",
      image: "/images/perfil2.jpg",
    },
    lastSeenLocation: {
      country: "Brasil",
      city: "São Paulo",
      state: "SP",
      neighborhood: "Bela Vista",
      number: "100",
      postalCode: "12345-678",
    },
  },
  {
    person: {
      id: 2,
      name: "Maria Oliveira",
      age: 28,
      height: 165,
      eyeColor: "Verde",
      hairColor: "Loiro",
      image: "/images/perfil2.jpg",
    },
    lastSeenLocation: {
      country: "Brasil",
      city: "Rio de Janeiro",
      state: "RJ",
      neighborhood: "Copacabana",
      number: "200",
      postalCode: "87654-321",
    },
  },
  {
    person: {
      id: 3,
      name: "Carlos Mendes",
      age: 40,
      height: 180,
      eyeColor: "Azul",
      hairColor: "Castanho",
      image: "/images/perfil2.jpg",
    },
    lastSeenLocation: {
      country: "Brasil",
      city: "Belo Horizonte",
      state: "MG",
      neighborhood: "Savassi",
      number: "300",
      postalCode: "11111-222",
    },
  },
  {
    person: {
      id: 4,
      name: "Ana Santos",
      age: 22,
      height: 160,
      eyeColor: "Preto",
      hairColor: "Preto",
      image: "/images/perfil2.jpg",
    },
    lastSeenLocation: {
      country: "Brasil",
      city: "Curitiba",
      state: "PR",
      neighborhood: "Batel",
      number: "400",
      postalCode: "22222-333",
    },
  },
  {
    person: {
      id: 5,
      name: "Paulo Ferreira",
      age: 50,
      height: 170,
      eyeColor: "Castanho",
      hairColor: "Branco",
      image: "/images/perfil2.jpg",
    },
    lastSeenLocation: {
      country: "Brasil",
      city: "Salvador",
      state: "BA",
      neighborhood: "Barra",
      number: "500",
      postalCode: "33333-444",
    },
  },
];

const MyReports = () => {
  const [reports, setReports] = useState<MyReport[]>([]);

  // AQUI VOU ADICIONAR A CHAMADA AO BACK
  useEffect(() => {
    setReports(mockReports);
  }, []);

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-4xl font-bold mb-8">
        Meus Cadastros de Desaparecidos
      </h1>
      {reports.length > 0 ? (
        reports.map((reports) => (
          <div
            key={reports.person.id}
            className="bg-gray-200 flex m-4 h-[25rem] rounded-lg"
            style={{ width: "60rem" }}
          >
            <div className="relative w-2/5 mr-1 bg-gray-400 rounded-lg">
              <Image
                src={reports.person.image || "/images/perfil2.jpg"}
                alt={`Foto do Desaparecido ${reports.person.name}`}
                layout="fill"
                objectFit="cover"
                className="rounded-l-lg"
              />
            </div>

            <div
              className="flex flex-col justify-center items-start text-black p-4"
              style={{ width: "35rem" }}
            >
              <h1 className="text-3xl">{reports.person.name}</h1>
              <p className="text-xl">Idade: {reports.person.age} anos</p>
              <p className="text-xl">Altura: {reports.person.height} cm</p>
              <p className="text-xl">
                Cor dos Olhos: {reports.person.eyeColor}
              </p>
              <p className="text-xl">
                Cor do Cabelo: {reports.person.hairColor}
              </p>
              <p className="text-xl">
                Último Local Visto: {reports.lastSeenLocation?.city},{" "}
                {reports.lastSeenLocation?.state},{" "}
                {reports.lastSeenLocation?.neighborhood}, Nº{" "}
                {reports.lastSeenLocation?.number}, CEP{" "}
                {reports.lastSeenLocation?.postalCode}
              </p>
            </div>
          </div>
        ))
      ) : (
        <p className="text-xl text-red-500">
          Você não tem nenhum cadastro de desaparecidos.
        </p>
      )}
    </div>
  );
};

export default MyReports;
