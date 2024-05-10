// ViewPerson.tsx
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import useReport from "@/hooks/reports/use-report/use-report";
import ModalForm from "@/components/modal/modalform";
import useSession from "@/hooks/session/use-session/use-session";
import InformativeModal from "@/components/modal/modalinformative";

const ViewPerson = () => {
  const router = useRouter();
  const session = useSession();
  const [isModalOpen, setModalOpen] = useState(false);

  const { id } = router.query;
  const { report, isLoading } = useReport(id as string);
  const [loading, setLoading] = useState(true);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  useEffect(() => {
    setLoading(isLoading);
  }, [isLoading]);

  if (loading) {
    return <div className="text-white">Carregando...</div>;
  }

  if (!report) {
    return <div className="text-white">Nenhum dado encontrado.</div>;
  }

  const person = report.person();
  const lastSeenLocation = report.lastSeenLocation();

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-800 px-4">
      <div className="text-center mt-8">
        <h1 className="text-white text-4xl font-bold">
          Bem-vindo à nossa missão
        </h1>
      </div>

      <p className="text-2xl text-center mt-4 text-white max-w-lg">
        Se você tem alguma informação que possa levar até essa pessoa, por
        favor, não hesite em ajudar.
        <br />
        Sua ação pode fazer a diferença.
      </p>

      <div className="bg-gray-200 flex flex-col lg:flex-row m-4 rounded-lg w-full max-w-4xl">
        <div className="relative w-full lg:w-2/5 h-64 lg:h-auto bg-gray-400 rounded-lg">
          <Image
            src={person.image() || "/images/perfil2.jpg"}
            alt="Foto do Desaparecido"
            layout="fill"
            objectFit="cover"
            className="rounded-lg lg:rounded-l-lg lg:rounded-r-none"
          />
        </div>

        <div className="flex flex-col justify-center items-start text-black p-4 w-full lg:w-3/5">
          <h1 className="text-3xl">{person.name()}</h1>
          <p className="text-xl">Idade: {person.age()} anos</p>
          <p className="text-xl">Altura: {person.height()} cm</p>
          <p className="text-xl">Cor dos Olhos: {person.eyeColor()}</p>
          <p className="text-xl">Cor do Cabelo: {person.hairColor()}</p>
          <p className="text-xl">
            Último Local Visto: {lastSeenLocation?.city},{" "}
            {lastSeenLocation?.state}, {lastSeenLocation?.neighborhood}, Nº{" "}
            {lastSeenLocation?.number}, CEP {lastSeenLocation?.postalCode}
          </p>
        </div>
      </div>

      <button
        onClick={openModal}
        className="p-3 m-4 bg-blue-500 hover:bg-blue-700 text-white text-xl rounded"
      >
        Adicionar Informação
      </button>

      <ModalForm
        isOpen={isModalOpen && session.user !== null}
        onClose={closeModal}
        reportId={Number(id)}
      />

      <InformativeModal
        isOpen={isModalOpen && session.user === null}
        onClose={closeModal}
        message="Você precisa estar logado para adicionar uma informação."
      />
    </div>
  );
};

export default ViewPerson;
