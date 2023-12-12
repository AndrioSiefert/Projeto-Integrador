'use client';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { ClienteContext } from '@/contexts/cliente';
import { useRouter } from 'next/navigation';

export default function Login() {
  const { mudaId, mudaNome } = useContext(ClienteContext);
  const { register, handleSubmit } = useForm();

  const router = useRouter();

  async function verificaLogin(data) {
    const filtro = `?email=${data.email}&senha=${data.senha}`;
    const response = await fetch('http://localhost:3004/usuarios' + filtro);
    const dados = await response.json();
    if (dados.length == 0) {
      alert('Usuário ou senha inválidos');
    } else {
      //alert('Login efetuado com sucesso');
      mudaId(dados[0].id);
      mudaNome(dados[0].nome);
      router.push('/');
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-xl w-96">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <form onSubmit={handleSubmit(verificaLogin)}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600">
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              className="w-full p-2 border rounded mt-1"
              required
              {...register('email')}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600">
              Senha
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full p-2 border rounded mt-1"
              required
              {...register('senha')}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white p-2 rounded hover:font-semibold"
          >
            Entrar
          </button>
        </form>
        <div className="flex justify-between mt-4 text-sm items-center">
          <div>
            <Link href="/cadastrousuario">
              <h1 className="text-blue-500 hover:underline">Criar uma conta</h1>
            </Link>
          </div>
          <div>
            <Link href="#">
              <h1 className="text-blue-500 hover:underline">Recuperar senha</h1>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
