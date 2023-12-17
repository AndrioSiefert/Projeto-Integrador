'use client';
import { useEffect, useState } from 'react';
import ItemFeedback from '@/components/ItemFeedback';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';

export default function Feedbacks() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    async function loadFeedbacks() {
      const response = await fetch('http://localhost:3004/feedbacks');
      const data = await response.json();
      setFeedbacks(data);
      setIsLoading(false);
    }
    loadFeedbacks();
  }, []);

  async function excluiFeedback(id) {
    const response = await fetch('http://localhost:3004/feedbacks/' + id, {
      method: 'DELETE',
    });
    const novosDados = feedbacks.filter((feedback) => feedback.id != id);
    setFeedbacks(novosDados);
  }

  const listaFeedbacks = feedbacks.map((feedback) => (
    <ItemFeedback
      key={feedback.id}
      feedback={feedback}
      exclui={() => excluiFeedback(feedback.id)}
      // altera={() => router.push('alterafeedback/' + feedback.id)}
    />
  ));

  return (
    <div className="max-w-[1246px] w-full mx-auto">
      <div className="flex"></div>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg ">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Cliente
              </th>
              <th scope="col" className="px-6 py-3">
                Serviço
              </th>
              <th scope="col" className="px-6 py-3">
                FeedBack
              </th>
              <th scope="col" className="px-6 py-3">
                Ações
              </th>
            </tr>
          </thead>
          <tbody>{listaFeedbacks}</tbody>
        </table>
      </div>
    </div>
  );
}
