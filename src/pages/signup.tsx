import React, { useState } from "react";
import Link from "next/link";
import useAPI from "@/hooks/api/use-api/use-api";

const SignUp = () => {
  const { getMe } = useAPI();
  const [name, setName] = useState("");
  const [document, setDocument] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
      getMe.getUserClient().create({
        name,
        document,
        phone,
        email,
        password,
        passwordConfirm: confirmPassword,
        image: "",
      });
      setName("");
      setDocument("");
      setPhone("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    }
  };

  return (
    <div className="min-h-screen flex bg-gray-800">
      <div className="absolute top-0 right-0 p-20 text-2xl">
        <Link
          href="/"
          className="text-white hover:text-gray-500 hover:bg-gray-100 font-bold px-12 rounded"
        >
          Inicio
        </Link>
      </div>

      <div className="flex-grow flex mb-5 mt-20">
        <div className="flex-1 flex items-center justify-end p-8 text-gray-100">
          <div className="mr-14">
            <h2 className="text-6xl font-bold mb-2">Ajude alguém!</h2>
            <p className="text-3xl mb-4">
              Ao criar uma conta você poderá reportar um desaparecimento
            </p>
            <p className="text-3xl">Faça sua parte!</p>
          </div>
        </div>

        <div className="flex-1 flex justify-center items-center">
          <div
            className="bg-white text-gray-700 p-4 rounded-lg shadow-lg"
            style={{ width: "600px" }}
          >
            <h2 className="text-center text-2xl font-semibold mb-5">
              Criar Conta
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  placeholder="Nome completo"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>

              <div className="flex justify-between mb-4">
                <div className="w-1/2 pr-2">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Documento
                  </label>
                  <input
                    type="text"
                    placeholder="CPF"
                    value={document}
                    onChange={(e) => setDocument(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <div className="w-1/2 pl-2">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    placeholder="Telefone com DDD"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>

              <div className="flex justify-between mb-4">
                <div className="w-1/2 pr-2">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Senha
                  </label>
                  <input
                    type="password"
                    placeholder="Senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                  />
                </div>
                <div className="w-1/2 pl-2">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Confirmar Senha
                  </label>
                  <input
                    type="password"
                    placeholder="Confirmar senha"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                  />
                </div>
              </div>

              {passwordError && (
                <p className="text-red-500 text-xs italic mb-4">
                  As senhas não correspondem
                </p>
              )}

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Imagem de Perfil
                </label>
                <input
                  type="file"
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
              >
                Registrar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
