import React, { useState } from "react";
import Link from "next/link";

const ReportPage = () => {
  const [person, setPerson] = useState({
    name: "",
    age: "",
    height: "",
    hairColor: "",
    eyeColor: "",
    gender: "",
    bodyMark: "",
    physicalDescription: "",
    psychologicalDescription: "",
    document: "",
    status: "MISSING",
    image: "",
  });
  const [location, setLocation] = useState({
    country: "",
    state: "",
    city: "",
    neighborhood: "",
    number: "",
    postalCode: "",
  });

  // Função para converter arquivo para base64
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleInputChange = (event, section) => {
    const { name, value } = event.target;
    if (section === "person") {
      setPerson((prevState) => ({ ...prevState, [name]: value }));
    } else {
      setLocation((prevState) => ({ ...prevState, [name]: value }));
    }
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const base64 = await convertToBase64(file);
      setPerson((prevState) => ({ ...prevState, image: base64 }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const reportData = { person, lastSeenLocation: location };
    console.log(reportData); // Para verificação dos dados antes do envio

    fetch("http://localhost:8081/api/reports/users", {
      method: "POST",
      body: JSON.stringify(reportData),
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJraWQiOiI2NDIxNzYyNy1mZWU2LTQ2MWUtYmIyMS0zZmU1MTQxNzIxYmYiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJnZXRtZSIsImF1ZCI6ImdldG1lIiwibmJmIjoxNzE0NjIzODIzLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwODEiLCJleHAiOjE3MTQ3MTAyMjMsImlhdCI6MTcxNDYyMzgyMywiYXV0aG9yaXRpZXMiOlsiUk9MRV9BRE1JTiJdLCJ1c2VybmFtZSI6ImFmcmFuaW8uY2V0QGdtYWlsLmNvbSJ9.zBpN_JlpyxzXV4gO9xNfGLR2n25iYeoNesCqq-nnfbNmBdirRgswZsN6lg_38mcjqv2cmQp2NJsVpDdrKkpb6yW_Ea9x1-221cRyOx88tL4jxqPbUd4Z_jj2FNarMa0kaffnnlddYM1ihmaJMG9kq80xb15Yt2WDGuuLW5copUTumyjMFayafHOC-BG5cxLlmmB4bVhGXB_pxv2Veem7IX2gsQV_SWzgJOA1lzHPj4-Gxa1fHN67kMCigugjTPeshQFO1hmf0pD2hnzG6v_k_Ymxcdeq3EKiJG-VTwGvva6UmCJtuRe_ltICp0otW1KIpAZunkAJJS-PzM7gFJRvrg", // Substitua pelo seu token JWT real
      },
    })
      .then((response) => response.json())
      .then((data) => console.log("Success:", data))
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-800">
      <div className="relative h-24 bg-cover bg-center flex justify-center items-center">
        <Link
          href="/"
          className="text-white hover:text-gray-500 hover:bg-gray-100 font-bold px-12 rounded"
        >
          Inicio
        </Link>
      </div>

      <div className="text-black max-w-5xl mx-auto bg-white p-4 rounded shadow border-b border border-gray-400 mb-4">
        <h1 className="text-2xl font-bold mb-5">Reportar Desaparecimento</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <h2 className="font-semibold text-lg">Informações Pessoais</h2>
            <div className="flex flex-wrap -mx-2">
              <div className="w-full md:w-2/3 px-2">
                <label className="block">Nome</label>
                <input
                  type="text"
                  name="name"
                  value={person.name}
                  onChange={(e) => handleInputChange(e, "person")}
                  className="w-full p-2 border rounded border-gray-400"
                  placeholder="Nome completo"
                />
              </div>

              <div className="w-full md:w-1/3 px-2 mb-3">
                <label className="block">CPF</label>
                <input
                  type="text"
                  name="document"
                  value={person.document}
                  onChange={(e) => handleInputChange(e, "person")}
                  className="w-full p-2 border rounded border-gray-400"
                />
              </div>

              <div className="w-1/4 px-2 mb-3">
                <label className="block">Sexo</label>
                <select
                  name="gender"
                  value={person.gender}
                  onChange={(e) => handleInputChange(e, "person")}
                  className="w-full p-2 border rounded border-gray-400"
                >
                  <option value="MALE">Masculino</option>
                  <option value="FEMALE">Feminino</option>
                </select>
              </div>

              <div className="w-full md:w-1/4 px-2 mb-3">
                <label className="block">Status</label>
                <select
                  name="status"
                  value={person.status}
                  onChange={(e) => handleInputChange(e, "person")}
                  className="w-full p-2 border rounded border-gray-400"
                >
                  <option value="MISSING">Desaparecido</option>
                  <option value="ABDUCTED">Sequestrado</option>
                  <option value="FOUND">Encontrado</option>
                  <option value="FAMILY_SEPARATED">Família Separada</option>
                  <option value="DECEASED">Falecido</option>
                </select>
              </div>

              <div className="w-1/4 px-2 mb-3">
                <label className="block">Idade</label>
                <input
                  type="number"
                  name="age"
                  value={person.age}
                  onChange={(e) => handleInputChange(e, "person")}
                  className="w-full p-2 border rounded border-gray-400"
                />
              </div>
              <div className="w-1/4 px-2 mb-3">
                <label className="block">Altura (cm)</label>
                <input
                  type="number"
                  name="height"
                  value={person.height}
                  onChange={(e) => handleInputChange(e, "person")}
                  className="w-full p-2 border rounded border-gray-400"
                />
              </div>

              <div className="w-2/4 px-2 mb-3">
                <label className="block">Foto</label>
                <input
                  type="file"
                  name="image"
                  onChange={handleFileChange}
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                />
              </div>

              <div className="w-1/4 px-2 mb-3">
                <label className="block">Cor dos Olhos</label>
                <input
                  type="text"
                  name="eyeColor"
                  value={person.eyeColor}
                  onChange={(e) => handleInputChange(e, "person")}
                  className="w-full p-2 border rounded border-gray-400"
                />
              </div>
              <div className="w-1/4 px-2 mb-3">
                <label className="block">Cor do Cabelo</label>
                <input
                  type="text"
                  name="hairColor"
                  value={person.hairColor}
                  onChange={(e) => handleInputChange(e, "person")}
                  className="w-full p-2 border rounded border-gray-400"
                />
              </div>

              <div className="w-full px-2 mb-3">
                <label className="block ">Marca Corporal</label>
                <input
                  type="text"
                  name="bodyMark"
                  value={person.bodyMark}
                  onChange={(e) => handleInputChange(e, "person")}
                  className="w-full p-2 border rounded border-gray-400"
                  placeholder="Pode ser marca de nascença, tatuagem, sinais pelo corpo"
                />
              </div>
              <div className="w-full px-2 mb-3">
                <label className="block">Descrição Física</label>
                <input
                  type="text"
                  name="physicalDescription"
                  value={person.physicalDescription}
                  onChange={(e) => handleInputChange(e, "person")}
                  className="w-full p-2 border rounded border-gray-400"
                  placeholder="Descreva as condições físicas. Tem alguma deficiência, descreva!"
                />
              </div>
              <div className="w-full px-2 mb-3">
                <label className="block">Descrição Psicológica</label>
                <input
                  type="text"
                  name="psychologicalDescription"
                  value={person.psychologicalDescription}
                  onChange={(e) => handleInputChange(e, "person")}
                  className="w-full p-2 border rounded border-gray-400"
                  placeholder="Descreva como está o estado mental"
                />
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-semibold text-lg">
              Localização Última Vez Visto
            </h2>
            <div className="flex flex-wrap -mx-2">
              <div className="w-full md:w-1/3 px-2 mb-3">
                <label className="block">País</label>
                <input
                  type="text"
                  name="country"
                  value={location.country}
                  onChange={(e) => handleInputChange(e, "location")}
                  className="w-full p-2 border rounded border-gray-400"
                />
              </div>
              <div className="w-1/3 px-2 mb-3">
                <label className="block">Estado</label>
                <input
                  type="text"
                  name="state"
                  value={location.state}
                  onChange={(e) => handleInputChange(e, "location")}
                  className="w-full p-2 border rounded border-gray-400"
                />
              </div>
              <div className="w-1/3 px-2 mb-3">
                <label className="block">Cidade</label>
                <input
                  type="text"
                  name="city"
                  value={location.city}
                  onChange={(e) => handleInputChange(e, "location")}
                  className="w-full p-2 border rounded border-gray-400"
                />
              </div>
              <div className="w-1/3 px-2 mb-3">
                <label className="block">Bairro</label>
                <input
                  type="text"
                  name="neighborhood"
                  value={location.neighborhood}
                  onChange={(e) => handleInputChange(e, "location")}
                  className="w-full p-2 border rounded border-gray-400"
                />
              </div>
              <div className="w-1/3 px-2 mb-3">
                <label className="block">Número</label>
                <input
                  type="text"
                  name="number"
                  value={location.number}
                  onChange={(e) => handleInputChange(e, "location")}
                  className="w-full p-2 border rounded border-gray-400"
                />
              </div>
              <div className="w-1/3 px-2 mb-3">
                <label className="block">CEP</label>
                <input
                  type="text"
                  name="postalCode"
                  value={location.postalCode}
                  onChange={(e) => handleInputChange(e, "location")}
                  className="w-full p-2 border rounded border-gray-400"
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReportPage;
