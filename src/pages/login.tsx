import React, { useEffect, useState } from "react";
import Link from "next/link";
import InputField from "../components/input/InputField";
import useSession from "@/hooks/session/use-session/use-session";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();
  const { user, login, isLoading } = useSession();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const onLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoginError("");
    try {
      await login({ username: email, password: password });
    } catch (error) {
      setLoginError("Falha no login, usuário ou senha inválidos");
    }
  };

  useEffect(() => {
    if (user) {
      router.push("/");
    }
  }, [user, router]);

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-800">
      <div className="flex-1 flex items-center justify-center md:justify-end p-4 md:p-8">
        <div className="text-center md:text-right">
          <h2 className="text-4xl md:text-6xl font-bold mb-2">Encontre-me!</h2>
          <p className="text-xl md:text-3xl mb-4">
            Você pode fazer a diferença na vida de uma pessoa.
          </p>
          <p className="text-xl md:text-3xl">Faça sua parte!</p>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center md:justify-start p-4">
        <div className="w-full max-w-md">
          <div className="bg-white p-8 border border-gray-300 rounded-lg shadow-lg">
            <form onSubmit={onLogin}>
              <InputField
                label="Email"
                type="email"
                placeholder="Digite seu email"
                onChange={(e) => setEmail(e.currentTarget.value)}
              />
              <InputField
                label="Senha"
                type="password"
                placeholder="Digite sua senha"
                onChange={(e) => setPassword(e.currentTarget.value)}
              />
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
              >
                Entrar
              </button>
              {loginError && (
                <p className="text-red-500 text-center mt-2">{loginError}</p>
              )}
            </form>
            <div className="text-center mt-4">
              <Link href="/signup" className="text-blue-500 hover:underline">
                CRIAR CONTA
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
