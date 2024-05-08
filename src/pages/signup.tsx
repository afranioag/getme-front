import React, { useState } from "react";
import InputField from "../components/input/InputField";
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
      setDocument("");
      setName("");
      setPassword("");
      setConfirmPassword("");
      setEmail("");
      setPhone("");
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
              <InputField
                label="Nome"
                type="text"
                placeholder="Nome completo"
                onChange={(target) => setName(target.currentTarget.value)}
              />

              <div className="flex justify-between  text-sm font-bold mb-2">
                <InputField
                  label="Documento"
                  type="text"
                  placeholder="CPF"
                  onChange={(target) => setDocument(target.currentTarget.value)}
                />
                <InputField
                  label="Telefone"
                  type="tel"
                  placeholder="Telefone com DDD"
                  onChange={(target) => setPhone(target.currentTarget.value)}
                />
              </div>

              <InputField
                label="Email"
                type="email"
                placeholder="Email"
                required
                onChange={(target) => setEmail(target.currentTarget.value)}
              />

              <div className="flex justify-between">
                <InputField
                  label="Senha"
                  type="password"
                  placeholder="Senha"
                  required
                  onChange={(target) => setPassword(target.currentTarget.value)}
                />
                <InputField
                  label="Confirmar Senha"
                  type="password"
                  placeholder="Confirmar senha"
                  required
                  onChange={(target) =>
                    setConfirmPassword(target.currentTarget.value)
                  }
                />
              </div>

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
