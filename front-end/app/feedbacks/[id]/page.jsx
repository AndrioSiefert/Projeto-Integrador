'use client';
import { useEffect, useState } from 'react';
import ItemFeedback from '@/components/ItemFeedback';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useParams } from 'next/navigation';

export default function ListaFeedbacks() {
  const params = useParams();
  const [feedbacks, setFeedbacks] = useState([]);
  const [servico, setServico] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadFeedbacks() {
      const response = await fetch(
        'http://localhost:3004/feedback/' + params.id,
      );
      const data = await response.json();
      setFeedbacks(data);
    }
    async function loadServico() {
      const response = await fetch(
        'http://localhost:3004/servicos/' + params.id,
      );
      const data = await response.json();
      setServico(data);
    }

    loadFeedbacks();
    loadServico();
    setIsLoading(false);
  }, []);

  const listaFeedbacks = feedbacks.map((feedback) => (
    <ItemFeedback key={feedback.id} feedback={feedback} />
  ));

  if (isLoading) {
    return (
      <div className="container">
        <h2>Listagem de clientes</h2>
        <h5>Aguarde... Carregando os dados</h5>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-xl rounded px-8 pt-6 pb-8 mb-4 w-1/2">
        <div className="border-b-2 border-fuchsia-400">
          <h2 className="font-bold text-lg text-center">FEEDBACKS</h2>
        </div>
        <div className="font-bold pt-6 pb-6 text-purple-700 text-lg">
          {servico.nome}
        </div>
        <div className=" items-center"> {servico.descricao} </div>

        <div className="text-center">{listaFeedbacks}</div>
      </div>
    </div>
  );
}
