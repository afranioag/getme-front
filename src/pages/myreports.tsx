import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import MenuLoged from "@/components/menu/MenuLoged";

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

interface Information {
  id: number;
  responsibleName: string;
  email: string;
  phone: string;
  message: string;
}

interface MyReport {
  person: PersonDetails;
  lastSeenLocation: LastSeenLocation;
  informations: Information[];
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
    informations: [
      {
        id: 1,
        responsibleName: "Ana Paula",
        email: "anapaula@example.com",
        phone: "+5511987654321",
        message: "Vi esta pessoa pela última vez no centro da cidade.",
      },
      {
        id: 2,
        responsibleName: "Marcos Silva",
        email: "marcosilva@example.com",
        phone: "+5511976543210",
        message: "Acredito ter visto esta pessoa em um café na semana passada.",
      },

      {
        id: 3,
        responsibleName: "Marcos Silva",
        email: "marcosilva@example.com",
        phone: "+5511976543210",
        message: "Acredito ter visto esta pessoa em um café na semana passada.",
      },
    ],
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
    informations: [],
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
    informations: [],
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
    informations: [],
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
    informations: [],
  },
];

const MyReports = () => {
  const [reports, setReports] = useState<MyReport[]>(mockReports);
  const [selectedReportId, setSelectedReportId] = useState<number | null>(null);

  useEffect(() => {
    setReports(mockReports);
  }, []);

  const handleToggleDetails = (id: number) => {
    setSelectedReportId(selectedReportId === id ? null : id);
  };

  return (
    <div className="flex flex-col w-full min-h-screen  bg-gray-800">
      <div className="relative h-24 bg-cover bg-center flex justify-center items-center">
        <MenuLoged />
      </div>

      <div className="flex justify-between bg-gray-700">
        <div className="justify-center items-center w-2/4">
          <h1 className="text-4xl text-center text-black font-bold m-8">
            Meus Cadastros de Desaparecidos
          </h1>
          {reports.length > 0 ? (
            reports.map((report) => (
              <div
                key={report.person.id}
                className="bg-gray-300 m-4 rounded-lg"
              >
                <div className="flex flex-col sm:flex-row">
                  <div className="relative w-full sm:w-2/5 h-64 sm:h-auto bg-gray-400 rounded-lg">
                    <Image
                      src={report.person.image || "/images/perfil2.jpg"}
                      alt={`Foto do Desaparecido ${report.person.name}`}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-l-lg"
                    />
                  </div>
                  <div className="flex-grow flex flex-col justify-center items-start text-black p-4">
                    <h1 className="text-3xl">{report.person.name}</h1>
                    <p className="text-xl">Idade: {report.person.age} anos</p>
                    <p className="text-xl">Altura: {report.person.height} cm</p>
                    <p className="text-xl">
                      Cor dos Olhos: {report.person.eyeColor}
                    </p>
                    <p className="text-xl">
                      Cor do Cabelo: {report.person.hairColor}
                    </p>
                    <p className="text-xl">
                      Último Local Visto: {report.lastSeenLocation.city},{" "}
                      {report.lastSeenLocation.state},{" "}
                      {report.lastSeenLocation.neighborhood}, Nº{" "}
                      {report.lastSeenLocation.number}, CEP{" "}
                      {report.lastSeenLocation.postalCode}
                    </p>
                    <button
                      onClick={() => handleToggleDetails(report.person.id)}
                      className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300"
                    >
                      Exibir Informações
                    </button>
                  </div>
                </div>
                {selectedReportId === report.person.id && (
                  <div
                    className="p-4 bg-gray-100 text-black"
                    style={{ maxHeight: "18rem", overflowY: "auto" }}
                  >
                    <h2 className="text-2xl font-bold mb-4">
                      Informações Detalhadas
                    </h2>
                    {report.informations.map((info, index) => (
                      <div
                        key={index}
                        className="mb-6 p-4 bg-white rounded shadow"
                      >
                        <p className="text-lg font-bold">
                          Nome Responsável: {info.responsibleName}
                        </p>
                        <p className="text-md">Email: {info.email}</p>
                        <p className="text-md">Telefone: {info.phone}</p>
                        <p className="text-md">Mensagem: {info.message}</p>
                      </div>
                    ))}
                    {!report.informations.length && (
                      <p className="text-lg text-gray-500">
                        Não há informações adicionais para este desaparecido.
                      </p>
                    )}
                  </div>
                )}
              </div>
            ))
          ) : (
            <p className="text-xl text-red-500">
              Você não tem nenhum cadastro de desaparecidos.
            </p>
          )}
        </div>
        <div className="flex flex-col items-center justify-center w-2/4 h-screen text-gray-200 p-5">
          <h1 className="text-4xl font-bold mb-8 text-center">
            Você está vendo seus cadastros ou cadastros que você forneceu alguma
            informação
          </h1>
          <p className="text-xl text-center">
            Esta tela é dedicada a ajudar a encontrar pessoas desaparecidas.
            Desejamos profundamente que todos os esforços aqui resultem em
            finais felizes e reencontros.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyReports;
