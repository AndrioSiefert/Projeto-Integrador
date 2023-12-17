'use client';

import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function CadastraServico() {
  const { register, handleSubmit, reset } = useForm();
  const router = useRouter();

  async function enviaDados(data) {
    const servicos = await fetch('http://localhost:3004/servicos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    },
    router.push('/servico'));
  }

  return (
    <div className="max-w-[1246px] w-full mx-auto mt-4">
      <h2 className="font-bold text-lg">CADASTRO DE SERVIÇO</h2>
      <form onSubmit={handleSubmit(enviaDados)} className="w-full">
        <div className="flex flex-wrap -mx-3 mb-6 mt-4">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="nome"
            >
              Nome
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="nome"
              type="text"
              placeholder="Nome"
              {...register('nome')}
              required
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="descricao"
            >
              Descrição
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white "
              id="descricao"
              type="text"
              placeholder="Descrição"
              {...register('descricao')}
              required
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6 mt-4">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="nome"
            >
              Preço
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="preco"
              type="number"
              {...register('preco')}
              required
            />
          </div>
        </div>
        <div className='flex gap-4'>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
        >
          Cadastrar
        </button>
        <Link href="/servico">
        <button
          // onClick={router.push('/cliente')}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
        >
          Voltar
         
        </button>
        </Link>
        </div>
      </form>
    </div>
  );
}
