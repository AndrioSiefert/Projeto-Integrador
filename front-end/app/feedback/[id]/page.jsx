'use client';

import { useRouter } from 'next/navigation';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
// import { ToastContainer, toast } from 'react-toastify';
import Link from 'next/link';
import { useContext } from 'react';
import { ClienteContext } from '@/contexts/cliente';

export default function CadastraFeedback() {
  const { clienteId } = useContext(ClienteContext);

  const params = useParams();
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      status: false,
    },
  });
  const router = useRouter();

  const [servico, setServico] = useState([]);

  useEffect(() => {
    async function loadServico() {
      const response = await fetch(
        'http://localhost:3004/servicos/' + params.id,
      );
      const data = await response.json();
      setServico(data);
    }
    loadServico();
  }, []);

  async function enviaDados(data) {
    const feedback = { ...data, cliente_id: clienteId, servico_id: servico.id };
    const response = await fetch(
      'http://localhost:3004/feedback',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(feedback),
      },
      router.push('/'),
    );
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        className="bg-white shadow-xl rounded px-8 pt-6 pb-8 mb-4 w-96"
        onSubmit={handleSubmit(enviaDados)}
      >
        <div className="border-b-2 border-fuchsia-400">
          <h2 className="font-bold text-lg text-center">
            CADASTRO DE FEEDBACK
          </h2>
        </div>
        <div className="font-bold pt-6 pb-6 text-purple-700 text-lg">
          {servico.nome}
        </div>
        <div className=" pb-2"> {servico.descricao} </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2"></label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="mesnagem"
            placeholder="Deixe seu FeedBack AQUI!"
            required
            {...register('mensagem')}
          />
        </div>
        <div className="flex items-center justify-between gap-3">
          <button
            className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white p-2 rounded hover:font-semibold"
            type="submit"
          >
            Cadastrar
          </button>
          <button className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white p-2 rounded hover:font-semibold">
            <Link href="/">Voltar</Link>
          </button>
        </div>
      </form>
    </div>
  );
}
