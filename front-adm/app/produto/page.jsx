'use client';
import { useEffect, useState } from 'react';
import ItemProduto from '@/components/ItemProduto';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Produtos() {
  const [produtos, setProdutos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function loadProdutos() {
      const response = await fetch('http://localhost:3004/produtos');
      const data = await response.json();
      setProdutos(data);
      setIsLoading(false);
    }
    loadProdutos();
  }, []);

  async function excluiProduto(id) {
    const response = await fetch('http://localhost:3004/produtos/' + id, {
      method: 'DELETE',
    });
    const novosDados = produtos.filter((produto) => produto.id != id);
    setProdutos(novosDados);
  }
  const listaProdutos = produtos.map((produto) => (
    <ItemProduto
      key={produto.id}
      produto={produto}
      exclui={() => excluiProduto(produto.id)}
      altera={() => router.push('alteraproduto/' + produto.id)}
    />
  ));

  return (
    <div className="max-w-[1246px] w-full mx-auto">
      <div className="flex">
        <button class="bg-transparent hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-blue-700 font-semibold hover:text-white py-2 px-4 mt-2 mb-2 border border-blue-500 hover:border-transparent rounded">
          <Link className="nav-link" href="/cadastraproduto">
            Cadastrar
          </Link>
        </button>
      </div>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg ">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Nome
              </th>
              <th scope="col" className="px-6 py-3">
                Descrição
              </th>
              <th scope="col" className="px-6 py-3">
                Preço
              </th>
              <th scope="col" className="px-6 py-3">
                Imagem
              </th>
              <th scope="col" className="px-6 py-3">
                Ações
              </th>
            </tr>
          </thead>
          <tbody>{listaProdutos}</tbody>
        </table>
      </div>
    </div>
  );
}
