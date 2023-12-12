'use client';

import { useForm } from 'react-hook-form';

export default function CadastraProduto() {
  const { register, handleSubmit, reset } = useForm();

  async function enviaDados(data) {
    const produtos = await fetch('http://localhost:3004/produtos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  }
  return (
    <div className="max-w-[1246px] w-full mx-auto mt-4">
      <h2 className="font-bold text-lg">CADASTRO DE pRODUTOS</h2>
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
              for="preco"
            >
              Preço
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="preco"
              type="text"
              placeholder="Preço"
              {...register('preco')}
              required
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="imagem"
            >
              Imagem
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white "
              id="imagem"
              type="text"
              placeholder="Imagem"
              {...register('imagem')}
            />
          </div>
        </div>
        <button
          type="submit"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
        >
          Button
        </button>
      </form>
    </div>
  );
}
