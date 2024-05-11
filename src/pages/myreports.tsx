import React, { useState, useEffect } from "react";
import Image from "next/image";
import MenuLoged from "@/components/menu/MenuLoged";
import useAPI from "@/hooks/api/use-api/use-api";
import ReportGet from "@/models/report/report";

const MyReports = () => {
  const api = useAPI();
  const [reports, setReports] = useState<ReportGet[]>([]);
  const [selectedReportId, setSelectedReportId] = useState<number | null>(null);

  useEffect(() => {
    const fetchReports = async () => {
      const fetchedReports = await api.getMe
        .getReportClient()
        .getAuthenticated();
      setReports(fetchedReports);
    };

    fetchReports();
  }, [api]);

  const handleToggleDetails = (id: number) => {
    setSelectedReportId(selectedReportId === id ? null : id);
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-gray-800">
      <MenuLoged />
      <div className="flex justify-between bg-gray-700 p-4">
        <div className="flex-grow">
          <h1 className="text-4xl text-black font-bold m-8">
            Meus Cadastros de Desaparecidos
          </h1>
          {reports.length > 0 ? (
            reports.map((report) => (
              <div
                key={report.person() ? report.person().id() : 1}
                className="bg-gray-300 m-4 rounded-lg"
              >
                <div className="flex flex-col sm:flex-row">
                  <div className="relative w-full sm:w-2/5 h-64 sm:h-auto bg-gray-400 rounded-lg">
                    <Image
                      src={report?.person()?.image() || "/images/perfil2.jpg"}
                      alt={`Foto do Desaparecido ${report.person.name}`}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-l-lg"
                    />
                  </div>
                  <div className="flex-grow flex flex-col justify-center items-start text-black p-4">
                    <h1 className="text-3xl">{report.person()?.name()}</h1>
                    <p className="text-xl">
                      Idade: {report.person()?.age()} anos
                    </p>
                    <p className="text-xl">
                      Altura: {report.person()?.height()} cm
                    </p>
                    <p className="text-xl">
                      Cor dos Olhos: {report.person()?.eyeColor()}
                    </p>
                    <p className="text-xl">
                      Cor do Cabelo: {report.person()?.hairColor()}
                    </p>
                    <p className="text-xl">
                      Último Local Visto: {report.lastSeenLocation().city},{" "}
                      {report.lastSeenLocation().state},
                      {report.lastSeenLocation().neighborhood}, Nº{" "}
                      {report.lastSeenLocation().number}, CEP{" "}
                      {report.lastSeenLocation().postalCode}
                    </p>
                    <button
                      onClick={() => handleToggleDetails(report.person().id())}
                      className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300"
                    >
                      Exibir Informações
                    </button>
                  </div>
                </div>
                {selectedReportId === report.person().id() && (
                  <div
                    className="p-4 bg-gray-100 text-black"
                    style={{ maxHeight: "18rem", overflowY: "auto" }}
                  >
                    <h2 className="text-2xl font-bold mb-4">
                      Informações Detalhadas
                    </h2>
                    {report.informations()?.map((info, index) => (
                      <div
                        key={index}
                        className="mb-6 p-4 bg-white rounded shadow"
                      >
                        <p className="text-lg font-bold">
                          Nome Responsável: {info.name()}
                        </p>
                        <p className="text-md">Email: {info.email()}</p>
                        <p className="text-md">Telefone: {info.phone()}</p>
                        <p className="text-md">Mensagem: {info.message()}</p>
                      </div>
                    ))}
                    {!report.informations?.length && (
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
        <div className="w-2/4 h-screen text-gray-200 p-5">
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
