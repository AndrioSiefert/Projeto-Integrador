'use client';
import { useContext } from 'react';
import { ClienteContext } from '@/contexts/cliente';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import { IoAddCircle } from 'react-icons/io5';

export default function ItemServico(props) {
  const { clienteId } = useContext(ClienteContext);
  return (
    <div className="rounded-md w-[395px] bg-white p-4 hover:shadow-lg">
      <p className="font-bold text-indigo-800 text-xl">{props.servico.nome}</p>
      {props.servico.descricao}
      <div className="flex justify-end mt-3 items-center gap-2">
        {clienteId && (
          <div className="text-xl text-purple-600">
            <IoAddCircle />
          </div>
        )}
        <Link href="/">
          <div className="bg-slate-200 hover:bg-slate-300 font-bold text-purple-600 border border-4 pl-2 pr-2 rounded-md">
            Opinião dos Clientes
          </div>
        </Link>
      </div>
    </div>
  );
}
