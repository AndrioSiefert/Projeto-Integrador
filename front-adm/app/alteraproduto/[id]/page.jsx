'use client';
import { useRouter } from 'next/navigation';
import { useParams } from 'next/navigation';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import Link from 'next/link';

import 'react-toastify/dist/ReactToastify.css';

export default function AlteraProduto() {
  const params = useParams();
  const { register, handleSubmit, reset } = useForm();
  const router = useRouter();

  useEffect(() => {
    async function loadProduto() {
      const response = await fetch(
        'http://localhost:3004/produtos/' + params.id,
      );
      const data = await response.json();
      reset({
        nome: data.nome,
        descricao: data.descricao,
        preco: data.preco,
        imagem: data.imagem,
      });
    }
    loadProduto();
  }, []);

  async function alteraDados(data) {
    const response = await fetch(
      'http://localhost:3004/produtos/' + params.id,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      },
    );
    if (response.status == 200) {
      toast.success('Produto alterado com sucesso!');
      router.push('/produto');
    } else {
      toast.error('Erro ao alterar produto!');
    }
  }

  return (
    <div className="max-w-[1246px] w-full mx-auto mt-4">
      <h2 className="font-bold text-lg">CADASTRO DE PRODUTOS</h2>
      <form onSubmit={handleSubmit(alteraDados)} className="w-full">
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
              {...register('imagem')}
            />
          </div>
        </div>
        <div className="flex gap-4">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
          >
            Alterar
          </button>
          <Link href="/produto">
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
