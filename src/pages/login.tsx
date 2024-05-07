import React, { useState } from 'react';
import Link from 'next/link';
import InputField from '../components/pages/InputField';
import imgHome from "../../public/images/gray.jpg";
import useSession from '@/hooks/session/use-session/use-session';
import { useRouter } from 'next/router';

const Login = () => {
  const router = useRouter()
  const session = useSession()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onLogin = (e) => {
    e.preventDefault()
    session.login({
      username: email,
      password: password
    })
    if (session.user) {
      router.push('/')
    }
  }

  return (
    <div className="min-h-screen flex bg-gray-800">

      <div className="absolute top-0 right-0 p-20 text-2xl">
        <Link href="/" className="text-white hover:text-gray-500 hover:bg-gray-100 font-bold px-12 rounded">
          Inicio
        </Link>
      </div>


      {/* Reduzido o padding para p-8 para diminuir o espaço */}
      <div className="flex-1 flex items-center justify-end p-8 text-gray-50">
        <div className="mr-14">
          <h2 className="text-6xl font-bold mb-2">Encontre-me!</h2>
          <p className="text-3xl mb-4">
            Você pode fazer a diferença na vida de uma pessoa.
          </p>
          <p className="text-3xl">
            Faça sua parte!
          </p>
        </div>
      </div>

      {/* Área de Login à Direita */}
      <div className="flex-1 flex items-center justify-start">
        <div className="w-full max-w-md ml-14">
          <div className="bg-white p-8 border border-gray-300 rounded-lg shadow-lg">
            <form>
              <InputField label="Email" type="email" placeholder="Digite seu email" onChange={(value) => setEmail(value.currentTarget.value)} />
              <InputField label="Senha" type="password" placeholder="Digite sua senha" onChange={(value) => setPassword(value.currentTarget.value)} />
              <button onClick={onLogin} type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                Entrar
              </button>
            </form>
            <div className="text-center mt-10 p-2 hover:bg-blue-500 bg-gray-800 rounded-md max-w-xs mx-auto">
              <Link href="signup" className="text-white">
                CRIAR CONTA
              </Link>
            </div>
          </div>
          {/* Ajustado o tamanho e adicionado max-w-xs para diminuir o tamanho do contorno */}

        </div>
      </div>
    </div>
  );
};

export default Login;
