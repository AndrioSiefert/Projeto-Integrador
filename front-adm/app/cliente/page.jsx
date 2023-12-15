'use client';
import { useEffect, useState } from 'react';
// import { useRouter } from 'next/navegation';
import ItemCliente from '@/components/ItemCliente';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { HiOutlinePlus } from 'react-icons/hi';

export default function Cliente() {
  const [clientes, setClientes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function loadClientes() {
      const response = await fetch('http://localhost:3004/cliente');
      const data = await response.json();
      setClientes(data);
      setIsLoading(false);
    }
    loadClientes();
  }, []);

  async function excluiCliente(id) {
    const response = await fetch('http://localhost:3004/cliente/' + id, {
      method: 'DELETE',
    });
    const novosDados = clientes.filter((cliente) => cliente.id != id);
    setClientes(novosDados);
  }

  const listaClientes = clientes.map((cliente) => (
    <ItemCliente
      key={cliente.id}
      cliente={cliente}
      exclui={() => excluiCliente(cliente.id)}
      altera={() => router.push('alteracliente/' + cliente.id)}
    />
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
    <div className="max-w-[1246px] w-full mx-auto">
      <div className="flex">
        <button class="bg-transparent hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-blue-700 font-semibold hover:text-white py-2 px-4 mt-2 mb-2 border border-blue-500 hover:border-transparent rounded">
          <Link className="nav-link" href="/cadastracliente">
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
              {/* <th scope="col" className="px-6 py-3">
                Idade
              </th> */}
              {/* <th scope="col" className="px-6 py-3">
              Sexo
            </th> */}
              {/* <th scope="col" className="px-6 py-3">
                Data de Nascimento
              </th> */}
              {/* <th scope="col" className="px-6 py-3">
              Profissão
            </th> */}
              {/* <th scope="col" className="px-6 py-3">
              Estado Civil
            </th> */}
              <th scope="col" className="px-6 py-3">
                Cpf
              </th>
              {/* <th scope="col" className="px-6 py-3">
              Cep
            </th> */}
              {/* <th scope="col" className="px-6 py-3">
              Endereço
            </th> */}
              {/* <th scope="col" className="px-6 py-3">
              Bairro
            </th> */}
              <th scope="col" className="px-6 py-3">
                Cidade
              </th>
              {/* <th scope="col" className="px-6 py-3">
              Estado
            </th> */}
              <th scope="col" className="px-6 py-3">
                Telefone
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Ações
              </th>
            </tr>
          </thead>
          <tbody>{listaClientes}</tbody>
        </table>
      </div>
    </div>
  );
}
