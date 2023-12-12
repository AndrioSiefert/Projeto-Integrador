'use client';

import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

export default function CadastraUsuario() {
  const { register, handleSubmit, reset } = useForm();

  const router = useRouter();

  async function enviaDados(data) {
    const response = await fetch(
      'http://localhost:3004/usuarios',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...data }),
      },
      router.push('/login'),
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96"
        onSubmit={handleSubmit(enviaDados)}
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Nome
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="nome"
            required
            {...register('nome')}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            CPF
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="cpf"
            required
            {...register('cpf')}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            id="email"
            required
            {...register('email')}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Senha
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            id="senha"
            required
            {...register('senha')}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Telefone
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="tel"
            id="telefone"
            required
            {...register('telefone')}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white p-2 rounded hover:font-semibold"
            type="submit"
          >
            Cadastrar
          </button>
        </div>
      </form>
    </div>
  );
}
